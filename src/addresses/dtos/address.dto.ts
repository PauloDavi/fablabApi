import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  neighborhood: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  cep: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
