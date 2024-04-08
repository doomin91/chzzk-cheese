import { Injectable } from '@nestjs/common';
import { ChzzkModule as Chzzk } from 'chzzk-z';
import { ChzzkChannelDto } from './dtos/chzzk-channel.dto';
import { plainToInstance } from 'class-transformer';
import { ChzzkLiveStatusDto } from './dtos/chzzk-channel-live-status.dto';

@Injectable()
export class ChzzkRepository extends Chzzk {
  async getChannelsByKeyword(keyword: string) {
    const channels = await this.channel.findByKeyword(keyword);
    return channels['data'];
  }

  async getChannelById(channelId: string): Promise<ChzzkChannelDto> {
    const channel = await this.channel.findById(channelId);

    return plainToInstance(ChzzkChannelDto, channel);
  }

  async getChannelLiveStatus(channelId: string): Promise<ChzzkLiveStatusDto> {
    const liveStatus = await this.live.findStatusByChannelId(channelId);

    return plainToInstance(ChzzkLiveStatusDto, liveStatus);
  }

  async getChannelLiveDetail(channelId: string) {
    return this.live.findDetailByChannelId(channelId);
  }

  async joinChannel(channelId: string) {
    try {
      await this.chat.join(channelId);
      await this.chat.connect();
    } catch (error) {
      throw error;
    }
  }

  async leaveChannel(channelId: string) {
    return await this.chat.disconnect();
  }
}
