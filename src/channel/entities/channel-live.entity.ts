import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { CoreHardEntity } from 'src/common/entities/core-hard.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Channel } from './channel.entity';

@Entity({ name: 'channelLive', schema: process.env.DB_SCHEMA_NAME })
export class ChannelLive extends CoreHardEntity {
  @Column({ type: 'int4', nullable: false })
  @IsNumber()
  liveId: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  @IsString()
  liveTitle: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  @IsString()
  chatChannelId: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  @IsBoolean()
  chatActive: boolean;

  @Column({ type: 'varchar', length: 100, nullable: false })
  @IsString()
  chatAvailableGroup: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  @IsString()
  chatAvailableCondition: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  @IsBoolean()
  status: boolean;

  @ManyToOne(() => Channel, (channel) => channel.channelLive)
  channel: Channel;
}
