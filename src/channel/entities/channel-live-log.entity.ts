import { CoreHardEntity } from 'src/common/entities/core-hard.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'channelLiveLog', schema: process.env.DB_SCHEMA_NAME })
export class ChannelLiveLog extends CoreHardEntity {}
