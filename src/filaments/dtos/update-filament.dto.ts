import { PartialType } from '@nestjs/swagger';
import { CreateFilamentDto } from './create-filament.dto';

export class UpdateFilamentDto extends PartialType(CreateFilamentDto) {}
