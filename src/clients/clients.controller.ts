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
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';
import { ClientDto } from './dtos/client.dto';

@ApiBearerAuth()
@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get(':id')
  @ApiOkResponse({ description: 'Get one client', type: ClientDto })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all clients', type: [ClientDto] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateClientDto })
  @ApiCreatedResponse({
    description: 'The client has been successfully created.',
    type: ClientDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(201)
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The client has been successfully updated.',
    type: ClientDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: UpdateClientDto })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'The client has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}
