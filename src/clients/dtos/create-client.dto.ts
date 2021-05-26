import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsEmail,
  IsDate,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { Addresses } from '../../addresses/schemas/address.schema';

export enum ClientTypes {
  academic = 'academic',
  personal = 'personal',
  external = 'external',
}

export enum DocumentTypes {
  cpf = 'cpf',
  cnpj = 'cnpj',
}

export class CreateClientDto {
  @ApiProperty({ enum: ['academic', 'personal', 'external'] })
  @IsNotEmpty()
  @IsEnum(ClientTypes)
  type: ClientTypes;

  @ApiProperty()
  @IsString()
  password?: string;

  @ApiProperty({ enum: ['cpf', 'cnpj'] })
  @IsNotEmpty()
  @IsEnum(DocumentTypes)
  documentType: DocumentTypes;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  document: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  address: Addresses;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  phoneWpp: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stateRegistration: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  municipalRegistration: string;
}
