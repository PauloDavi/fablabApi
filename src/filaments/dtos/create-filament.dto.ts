import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsPositive,
} from 'class-validator';

export enum FilamentTypes {
  pla = 'PLA',
  abs = 'ABS',
  petgXt = 'PETG XT',
}

export class CreateFilamentDto {
  @ApiProperty({ type: Number })
  @ApiProperty({ enum: ['PLA', 'ABS', 'PETG XT'] })
  @IsNotEmpty()
  @IsEnum(FilamentTypes)
  type: FilamentTypes;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  diameter: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
