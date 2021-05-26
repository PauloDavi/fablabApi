import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Addresses } from '../../addresses/schemas/address.schema';

export type ClientsDocument = Clients & mongoose.Document;

@Schema({ timestamps: true })
export class Clients {
  @Prop({ required: true, enum: ['cpf', 'cnpj'] })
  documentType: string;

  @Prop({ required: true })
  document: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Date, required: true })
  dateOfBirth: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Addresses.name,
    required: true,
  })
  address: Addresses;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ type: Boolean, required: true, default: false })
  phoneWpp: boolean;

  @Prop({ required: true })
  stateRegistration: string;

  @Prop({ required: true })
  municipalRegistration: string;

  @Prop({ required: true, enum: ['academic', 'personal', 'external'] })
  type: string;

  @Prop({ required: false })
  password: string;
}

export const ClientsSchema = SchemaFactory.createForClass(Clients);
