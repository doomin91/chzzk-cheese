import { Injectable } from '@nestjs/common';
import { ChzzkModule as Chzzk } from 'chzzk-z';

@Injectable()
export class ChzzkRepository extends Chzzk {
  async getChannelsByKeyword(keyword: string) {
    const channels = await this.channel.findByKeyword(keyword);
    console.log(channels);
    return channels['data'];
  }

  async getChannelById(channelId: string) {
    const channel = await this.channel.findById(channelId);
    return channel;
  }

  async getChannelStatus(channelId: string) {
    return this.live.findStatusByChannelId(channelId);
  }

  async getChannelDetails(channelId: string) {
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