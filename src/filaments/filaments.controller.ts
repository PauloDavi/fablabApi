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
import { FilamentsService } from './filaments.service';
import { CreateFilamentDto } from './dtos/create-filament.dto';
import { UpdateFilamentDto } from './dtos/update-filament.dto';
import { FilamentDto } from './dtos/filament.dto';

@ApiBearerAuth()
@ApiTags('filaments')
@Controller('filaments')
export class FilamentsController {
  constructor(private readonly filamentsService: FilamentsService) {}

  @Get(':id')
  @ApiOkResponse({ description: 'Get one filament', type: FilamentDto })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.filamentsService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all filaments', type: [FilamentDto] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll() {
    return this.filamentsService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateFilamentDto })
  @ApiCreatedResponse({
    description: 'The filament has been successfully created.',
    type: FilamentDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(201)
  create(@Body() createFilamentDto: CreateFilamentDto) {
    return this.filamentsService.create(createFilamentDto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The filament has been successfully updated.',
    type: FilamentDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: UpdateFilamentDto })
  update(
    @Param('id') id: string,
    @Body() updateFilamentDto: UpdateFilamentDto,
  ) {
    return this.filamentsService.update(id, updateFilamentDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'The filament has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.filamentsService.remove(id);
  }
}
