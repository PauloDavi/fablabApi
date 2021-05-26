import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Clients, ClientsSchema } from './schemas/client.schema';
import {
  Addresses,
  AddressesSchema,
} from 'src/addresses/schemas/address.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clients.name, schema: ClientsSchema }]),
    MongooseModule.forFeature([
      { name: Addresses.name, schema: AddressesSchema },
    ]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
