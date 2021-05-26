import { ApiProperty } from '@nestjs/swagger';
import { PrinterTypes } from './create-printer.dto';

export class PrinterDto {
  @ApiProperty()
  _id: string;

  @ApiProperty({ enum: ['FDM', 'SLA'] })
  type: PrinterTypes;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
