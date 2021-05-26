import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Filaments, FilamentsDocument } from './schemas/filaments.schema';
import { CreateFilamentDto } from './dtos/create-filament.dto';
import { UpdateFilamentDto } from './dtos/update-filament.dto';

@Injectable()
@Injectable()
export class FilamentsService {
  constructor(
    @InjectModel(Filaments.name)
    private readonly filamentsModel: Model<FilamentsDocument>,
  ) {}

  async findOne(id: string) {
    const filament = await this.filamentsModel.findById(id);

    if (!filament) {
      throw new HttpException('Filament not exist', 400);
    }

    return filament;
  }

  async findAll() {
    const Filaments = await this.filamentsModel.find();

    return Filaments;
  }

  async create(createFilamentDto: CreateFilamentDto) {
    const filament = await this.filamentsModel.create(createFilamentDto);

    return filament;
  }

  async update(id: string, updateFilamentDto: UpdateFilamentDto) {
    const filament = await this.filamentsModel.findById(id);

    if (!filament) {
      throw new HttpException('Filament not exist', 400);
    }

    const editedFilament = await this.filamentsModel.findByIdAndUpdate(
      id,
      updateFilamentDto,
      {
        new: true,
      },
    );

    return editedFilament;
  }

  async remove(id: string) {
    const filament = await this.filamentsModel.findById(id);

    if (!filament) {
      throw new HttpException('filament not exist', 400);
    }

    await this.filamentsModel.findByIdAndRemove(id);
  }
}
