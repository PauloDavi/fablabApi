import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilamentsDocument = Filaments & Document;

@Schema({ timestamps: true })
export class Filaments {
  @Prop({ required: true, enum: ['PLA', 'ABS', 'PETG XT'] })
  type: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  diameter: string;

  @Prop({ required: true })
  price: number;
}

export const FilamentsSchema = SchemaFactory.createForClass(Filaments);
