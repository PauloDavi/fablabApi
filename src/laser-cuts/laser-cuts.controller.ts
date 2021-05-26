import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import {
  ApiBody,
  ApiTags,
  ApiOkResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { LaserCutsService } from './laser-cuts.service';
import { CreateLaserCutDto } from './dto/create-laser-cut.dto';
import { UpdateLaserCutDto } from './dto/update-laser-cut.dto';
import { LaserCutDto } from './dto/laser-cut.dto';

@ApiBearerAuth()
@ApiTags('laser-cuts')
@Controller('laser-cuts')
export class LaserCutsController {
  constructor(private readonly laserCutsService: LaserCutsService) {}

  @Get(':id')
  @ApiOkResponse({ description: 'Get one laser cut', type: LaserCutDto })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.laserCutsService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all laser cuts', type: [LaserCutDto] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll() {
    return this.laserCutsService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateLaserCutDto })
  @ApiCreatedResponse({
    description: 'The laser cut has been successfully created.',
    type: LaserCutDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(201)
  create(@Body() createLaserCutDto: CreateLaserCutDto) {
    return this.laserCutsService.create(createLaserCutDto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The laser cur has been successfully updated.',
    type: LaserCutDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: UpdateLaserCutDto })
  update(
    @Param('id') id: string,
    @Body() updateLaserCutDto: UpdateLaserCutDto,
  ) {
    return this.laserCutsService.update(id, updateLaserCutDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'The laser cut has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.laserCutsService.remove(id);
  }
}
