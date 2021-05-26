import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';
import { Clients, ClientsDocument } from './schemas/client.schema';
import {
  Addresses,
  AddressesDocument,
} from '../addresses/schemas/address.schema';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Clients.name)
    private readonly clientsModel: Model<ClientsDocument>,
    @InjectModel(Addresses.name)
    private readonly addressesModel: Model<AddressesDocument>,
  ) {}

  async findOne(id: string) {
    const client = await this.clientsModel.findById(id).populate('address');

    if (!client) {
      throw new HttpException('Client not exist', 400);
    }

    return client;
  }

  async findAll() {
    const Clients = await this.clientsModel.find().populate('address');
    return Clients;
  }

  async create({ address, ...createClientDto }: CreateClientDto) {
    const newAddress = await this.addressesModel.create(address);

    const newClient = await this.clientsModel.create({
      address: newAddress._id,
      createClientDto,
    });

    const client = await this.clientsModel
      .findById(newClient._id)
      .populate('address');

    return client;
  }

  async update(id: string, { address, ...updateClientDto }: UpdateClientDto) {
    const client = await this.clientsModel.findById(id);

    if (!client) {
      throw new HttpException('Client not exist', 400);
    }

    if (!!address) {
      await this.addressesModel.findByIdAndUpdate(client.address, address);
    }

    const editedClient = await this.clientsModel
      .findByIdAndUpdate(
        id,
        { updateClientDto },
        {
          new: true,
        },
      )
      .populate('address');

    return editedClient;
  }

  async remove(id: string) {
    const client = await this.clientsModel.findById(id);

    if (!client) {
      throw new HttpException('Client not exist', 400);
    }

    await this.clientsModel.findByIdAndRemove(id);
  }
}
