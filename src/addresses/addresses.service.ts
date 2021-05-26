import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAddressDto } from './dtos/create-address.dto';
import { UpdateAddressDto } from './dtos/update-address.dto';
import { Addresses, AddressesDocument } from './schemas/address.schema';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Addresses.name)
    private readonly addressesModel: Model<AddressesDocument>,
  ) {}

  async findOne(id: string) {
    const address = await this.addressesModel.findById(id);

    if (!address) {
      throw new HttpException('Address not exist', 400);
    }

    return address;
  }

  async findAll() {
    const addresses = await this.addressesModel.find();
    return addresses;
  }

  async create(createAddressDto: CreateAddressDto) {
    const address = await this.addressesModel.create(createAddressDto);

    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const address = await this.addressesModel.findById(id);

    if (!address) {
      throw new HttpException('Address not exist', 400);
    }

    const editedAddress = await this.addressesModel.findByIdAndUpdate(
      id,
      updateAddressDto,
      {
        new: true,
      },
    );

    return editedAddress;
  }

  async remove(id: string) {
    const address = await this.addressesModel.findById(id);

    if (!address) {
      throw new HttpException('Address not exist', 400);
    }

    await this.addressesModel.findByIdAndRemove(id);
  }
}
