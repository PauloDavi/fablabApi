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
import { PrintersService } from './printers.service';
import { CreatePrinterDto } from './dtos/create-printer.dto';
import { UpdatePrinterDto } from './dtos/update-printer.dto';
import { PrinterDto } from './dtos/printer.dto';

@ApiBearerAuth()
@ApiTags('printers')
@Controller('printers')
export class PrintersController {
  constructor(private readonly printersService: PrintersService) {}

  @Get(':id')
  @ApiOkResponse({ description: 'Get one printer', type: PrinterDto })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.printersService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all printers', type: [PrinterDto] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll() {
    return this.printersService.findAll();
  }

  @Post()
  @ApiBody({ type: CreatePrinterDto })
  @ApiCreatedResponse({
    description: 'The printer has been successfully created.',
    type: PrinterDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(201)
  create(@Body() createPrinterDto: CreatePrinterDto) {
    return this.printersService.create(createPrinterDto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The printer has been successfully updated.',
    type: PrinterDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: UpdatePrinterDto })
  update(@Param('id') id: string, @Body() updatePrinterDto: UpdatePrinterDto) {
    return this.printersService.update(id, updatePrinterDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'The printer has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.printersService.remove(id);
  }
}
