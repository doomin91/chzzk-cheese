import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelController } from './controllers/channel.controller';
import { ChannelService } from './services/channel.service';
import { Channel } from './entities/channel.entity';
import { ChannelChatLog } from './entities/channel-chat-log.entity';
import { ChannelLiveLog } from './entities/channel-live-log.entity';
import { ChzzkModule } from 'chzzk-z';
import { ChannelLiveCategory } from './entities/channel-live-category.entity';
import { ChannelLive } from './entities/channel-live.entity';
import { ChannelRepository } from './repositories/channel.repository';
import { ChannelLiveService } from './services/channel-live.service';
import { ChannelLiveLogService } from './services/channel-live-log.service';
import { ChannelLiveCategoryService } from './services/channel-live-category.service';
import { ChannelLiveLogRepository } from './repositories/channel-live-log.repository';
import { ChannelLiveRepository } from './repositories/channel-live.repository';
import { ChannelLiveCategoryRepository } from './repositories/channel-live-category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Channel,
      ChannelLive,
      ChannelChatLog,
      ChannelLiveLog,
      ChannelLiveCategory,
    ]),
    ChzzkModule,
  ],
  controllers: [ChannelController],
  providers: [
    ChannelService,
    ChannelRepository,
    ChannelLiveService,
    ChannelLiveLogService,
    ChannelLiveCategoryService,
    ChannelLiveLogRepository,
    ChannelLiveRepository,
    ChannelLiveCategoryRepository,
  ],
  exports: [
    ChannelService,
    ChannelLiveService,
    ChannelLiveLogService,
    ChannelLiveCategoryService,
  ],
})
export class ChannelModule {}
