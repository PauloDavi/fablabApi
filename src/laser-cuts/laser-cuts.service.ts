import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLaserCutDto } from './dto/create-laser-cut.dto';
import { UpdateLaserCutDto } from './dto/update-laser-cut.dto';
import { laserCuts, laserCutsDocument } from './schemas/laser-cuts.schema';

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
    @InjectModel(laserCuts.name)
    private readonly laserCutsModel: Model<laserCutsDocument>,
  ) {}

  async findOne(id: string) {
    const laserCut = await this.laserCutsModel.findById(id);

    if (!laserCut) {
      throw new HttpException('LaserCut not exist', 400);
    }

    return laserCut;
  }

  async findAll() {
    const laserCuts = await this.laserCutsModel.find();
    return laserCuts;
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

    const laserCut = await this.laserCutsModel.create({
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
    const laserCut = await this.laserCutsModel.findById(id);

    if (!laserCut) {
      throw new HttpException('LaserCut not exist', 400);
    }

    const costPerMinute = costTable[clientType || laserCut.clientType];

    const coastTime = costPerMinute * (time || laserCut.time);

    const setupCost =
      (quantity || laserCut.quantity) > 1
        ? setupsTable.firstSetup
        : setupsTable.nextSetups;

    const editedLaserCut = await this.laserCutsModel.findByIdAndUpdate(
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
    const laserCut = await this.laserCutsModel.findById(id);

    if (!laserCut) {
      throw new HttpException('LaserCut not exist', 400);
    }

    await this.laserCutsModel.findByIdAndRemove(id);
  }
}
