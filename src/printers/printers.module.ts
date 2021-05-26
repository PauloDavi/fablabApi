import { Module } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { PrintersController } from './printers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Printers, PrintersSchema } from './schemas/printer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Printers.name, schema: PrintersSchema },
    ]),
  ],
  controllers: [PrintersController],
  providers: [PrintersService],
})
export class PrintersModule {}
