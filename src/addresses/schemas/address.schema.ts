import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressesDocument = Addresses & Document;

@Schema({ timestamps: true })
export class Addresses {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  neighborhood: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  state: string;
}

export const AddressesSchema = SchemaFactory.createForClass(Addresses);
