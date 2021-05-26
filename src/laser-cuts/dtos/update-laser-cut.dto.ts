import { PartialType } from '@nestjs/swagger';
import { CreateLaserCutDto } from './create-laser-cut.dto';

export class UpdateLaserCutDto extends PartialType(CreateLaserCutDto) {}
