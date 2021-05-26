import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PrintersDocument = Printers & Document;

@Schema({ timestamps: true })
export class Printers {
  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true, enum: ['FDM', 'SLA'] })
  type: string;
}

export const PrintersSchema = SchemaFactory.createForClass(Printers);
