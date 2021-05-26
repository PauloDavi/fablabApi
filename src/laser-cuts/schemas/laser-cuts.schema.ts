import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type laserCutsDocument = laserCuts & Document;

@Schema({ timestamps: true })
export class laserCuts {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, default: 0 })
  time: number;

  @Prop({ required: true, enum: ['academic', 'personal', 'external'] })
  clientType: string;

  @Prop({ required: true, default: 0 })
  coastSetup: number;

  @Prop({ required: true, default: 0 })
  coastTime: number;

  @Prop({ required: true, default: 1 })
  quantity: number;

  @Prop({ required: true })
  material: string;
}

export const laserCutsSchema = SchemaFactory.createForClass(laserCuts);
