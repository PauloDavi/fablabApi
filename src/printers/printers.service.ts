import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrinterDto } from './dtos/create-printer.dto';
import { UpdatePrinterDto } from './dtos/update-printer.dto';
import { Printers, PrintersDocument } from './schemas/printer.schema';

@Injectable()
export class PrintersService {
  constructor(
    @InjectModel(Printers.name)
    private readonly printersModel: Model<PrintersDocument>,
  ) {}

  async findOne(id: string) {
    const printer = await this.printersModel.findById(id);

    if (!printer) {
      throw new HttpException('Printer not exist', 400);
    }

    return printer;
  }

  async findAll() {
    const printers = await this.printersModel.find();
    return printers;
  }

  async create(createPrinterDto: CreatePrinterDto) {
    const printer = await this.printersModel.create(createPrinterDto);

    return printer;
  }

  async update(id: string, updatePrinterDto: UpdatePrinterDto) {
    const printer = await this.printersModel.findById(id);

    if (!printer) {
      throw new HttpException('Printer not exist', 400);
    }

    const editedPrinter = await this.printersModel.findByIdAndUpdate(
      id,
      updatePrinterDto,
      {
        new: true,
      },
    );

    return editedPrinter;
  }

  async remove(id: string) {
    const printer = await this.printersModel.findById(id);

    if (!printer) {
      throw new HttpException('Printer not exist', 400);
    }

    await this.printersModel.findByIdAndRemove(id);
  }
}
