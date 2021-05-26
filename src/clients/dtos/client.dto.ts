import { ApiProperty } from '@nestjs/swagger';
import { ClientTypes, DocumentTypes } from './create-client.dto';
import { AddressDto } from '../../addresses/dtos/address.dto';

export class ClientDto {
  @ApiProperty({ enum: ['academic', 'personal', 'external'] })
  type: ClientTypes;

  @ApiProperty()
  password?: string;

  @ApiProperty({ enum: ['cpf', 'cnpj'] })
  documentType: DocumentTypes;

  @ApiProperty()
  document: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  address: AddressDto;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  phoneWpp: boolean;

  @ApiProperty()
  stateRegistration: string;

  @ApiProperty()
  municipalRegistration: string;
}
