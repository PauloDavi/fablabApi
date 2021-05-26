import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsPositive,
} from 'class-validator';

export enum ClientTypes {
  academic = 'academic',
  personal = 'personal',
  external = 'external',
}

export class CreateLaserCutDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 0 })
  time: number;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 1 })
  quantity: number;

  @ApiProperty({ enum: ['academic', 'personal', 'external'] })
  @IsNotEmpty()
  @IsEnum(ClientTypes)
  clientType: ClientTypes;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  material: string;
}
