import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLaserCutDto } from './dtos/create-laser-cut.dto';
import { UpdateLaserCutDto } from './dtos/update-laser-cut.dto';
import { LaserCuts, LaserCutsDocument } from './schemas/laser-cuts.schema';

const setupsTable = {
  firstSetup: 6,
  nextSetups: 3,
};

const costTable = {
  academic: 0.3,
  personal: 0.6,
  external: 1.2,
};

@Injectable()
export class LaserCutsService {
  constructor(
    @InjectModel(LaserCuts.name)
    private readonly LaserCutsModel: Model<LaserCutsDocument>,
  ) {}

  async findOne(id: string) {
    const laserCut = await this.LaserCutsModel.findById(id);

    if (!laserCut) {
      throw new HttpException('LaserCut not exist', 400);
    }

    return laserCut;
  }

  async findAll() {
    const LaserCuts = await this.LaserCutsModel.find();
    return LaserCuts;
  }

  async create({
    time,
    title,
    material,
    quantity,
    clientType,
  }: CreateLaserCutDto) {
    const costPerMinute = costTable[clientType];

    const coastTime = costPerMinute * time;

    const coastSetup =
      quantity > 1 ? setupsTable.firstSetup : setupsTable.nextSetups;

    const laserCut = await this.LaserCutsModel.create({
      material,
      coastSetup,
      clientType,
      coastTime,
      quantity,
      time,
      title,
    });

    return laserCut;
  }

  async update(
    id: string,
    { clientType, material, quantity, time, title }: UpdateLaserCutDto,
  ) {
    const laserCut = await this.LaserCutsModel.findById(id);

    if (!laserCut) {
      throw new HttpException('LaserCut not exist', 400);
    }

    const costPerMinute = costTable[clientType || laserCut.clientType];

    const coastTime = costPerMinute * (time || laserCut.time);

    const setupCost =
      (quantity || laserCut.quantity) > 1
        ? setupsTable.firstSetup
        : setupsTable.nextSetups;

    const editedLaserCut = await this.LaserCutsModel.findByIdAndUpdate(
      id,
      {
        time,
        title,
        material,
        quantity,
        coastTime,
        setupCost,
      },
      {
        new: true,
      },
    );

    return editedLaserCut;
  }

  async remove(id: string) {
    const laserCut = await this.LaserCutsModel.findById(id);

    if (!laserCut) {
      throw new HttpException('LaserCut not exist', 400);
    }

    await this.LaserCutsModel.findByIdAndRemove(id);
  }
}
