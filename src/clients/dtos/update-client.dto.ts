import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(
  OmitType(CreateClientDto, ['password'] as const),
) {}
