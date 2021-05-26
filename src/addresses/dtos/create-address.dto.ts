import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  street: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  number: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @IsString()
  @Matches(/^\d{5}-\d{3}$/)
  @ApiProperty()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  state: string;
}
