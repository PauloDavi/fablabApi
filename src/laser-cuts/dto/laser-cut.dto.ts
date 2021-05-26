import { ApiProperty } from '@nestjs/swagger';
import { ClientTypes } from './create-laser-cut.dto';

export class LaserCutDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  coastSetup: number;

  @ApiProperty({ enum: ['academic', 'personal', 'external'] })
  clientType: ClientTypes;

  @ApiProperty()
  coastTime: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  time: number;

  @ApiProperty()
  material: string;
}
