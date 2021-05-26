import { ApiProperty } from '@nestjs/swagger';

export enum FilamentTypes {
  pla = 'PLA',
  abs = 'ABS',
  petgXt = 'PETG XT',
}

export class FilamentDto {
  @ApiProperty()
  _id: string;

  @ApiProperty({ enum: ['PLA', 'ABS', 'PETG XT'] })
  type: FilamentTypes;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  diameter: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
