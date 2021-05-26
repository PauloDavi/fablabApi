import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum PrinterTypes {
  fdm = 'FDM',
  sla = 'SLA',
}

export class CreatePrinterDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  model: string;

  @ApiProperty({ enum: ['FDM', 'SLA'] })
  @IsNotEmpty()
  @IsEnum(PrinterTypes)
  type: PrinterTypes;
}
