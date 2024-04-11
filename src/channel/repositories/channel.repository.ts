import { Repository, UpdateResult } from 'typeorm';
import { Channel } from '../entities/channel.entity';
import { Injectable } from '@nestjs/common';
import { GenerateChannelDto } from '../dtos/generate-channel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelLive } from '../entities/channel-live.entity';
import { ChannelLiveLog } from '../entities/channel-live-log.entity';

@Injectable()
export class ChannelRepository {
  constructor(
    @InjectRepository(Channel)
    private repository: Repository<Channel>,
  ) {}

  async findChannels(): Promise<Channel[]> {
    return await this.repository
      .createQueryBuilder('c')
      .leftJoinAndMapOne(
        'c.channelLive',
        ChannelLive,
        'cl',
        'cl.channelId = c.id',
      )
      .leftJoinAndMapOne(
        'cl.liveLog',
        ChannelLiveLog,
        'cll',
        'cll.channelLiveId = cl.id',
      )
      .leftJoinAndSelect('cl.liveCategory', 'clc')
      .orderBy('c.openLive', 'DESC')
      .addOrderBy('cl.updatedAt', 'DESC')
      .addOrderBy('cll.createdAt', 'DESC')
      .getMany();
  }

  async findChannelById(id: number): Promise<Channel> {
    return await this.repository
      .createQueryBuilder('channel')
      .where('channel.id = :id', { id })
      .getOne();
  }

  async findChannelByChannelId(channelId: string): Promise<Channel> {
    return await this.repository
      .createQueryBuilder('channel')
      .where('channel.channelId = :channelId', { channelId })
      .getOne();
  }

  async generateChannel(
    generateChannelDto: GenerateChannelDto,
  ): Promise<Channel> {
    const instance = this.repository.create({
      ...generateChannelDto,
    });

    return await this.repository.save(instance);
  }

  async modifyChannel(
    id: number,
    modifyChannelDto: GenerateChannelDto,
  ): Promise<UpdateResult> {
    return await this.repository.update(id, modifyChannelDto);
  }

  async getRecentActivityById(channelId: number, openLive: boolean) {
    const query = `
    SELECT DISTINCT cll."liveTitle", c."channelName", clc."liveCategoryValue", round(avg(cll."concurrentUserCount"), 0) "averageViewers", min(cll."createdAt") "start", max(cll."createdAt") "end" FROM "channelLiveLog" cll 
    LEFT JOIN "channelLive" cl ON cl.id = cll."channelLiveId" 
    LEFT JOIN "channel" c ON c.id = cl."channelId"
    LEFT JOIN "channelLiveCategory" clc ON clc.id = cll."liveCategoryId"
    WHERE c.id = ${channelId} AND ${
      openLive
        ? "to_char(now(), 'YYYYMMDD')"
        : "to_char(now() - '1 day'::INTERVAL, 'YYYYMMDD')"
    } = to_char(cll."createdAt", 'YYYYMMDD')
    GROUP BY cll."liveTitle", c."channelName", clc."liveCategoryValue"
    ORDER BY "start" ASC`;

    return await this.repository.query(query);
  }

  async getCalendarValueById(channelId: number) {
    const query = `
    SELECT to_char(cll."createdAt", 'YYYY-MM-DD') "day", round(EXTRACT(epoch FROM max(cll."createdAt")) - EXTRACT(epoch FROM min(cll."createdAt")),0) "value" FROM channel c
    JOIN "channelLive" cl ON cl."channelId" = c.id
    JOIN "channelLiveLog" cll ON cll."channelLiveId" = cl.id
    WHERE c.id = ${channelId}
    GROUP BY to_char(cll."createdAt", 'YYYY-MM-DD');
    `;

    return await this.repository.query(query);
  }
}
