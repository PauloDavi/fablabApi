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
import { AddressesService } from './addresses.service';

import { CreateAddressDto } from './dtos/create-address.dto';
import { UpdateAddressDto } from './dtos/update-address.dto';
import { AddressDto } from './dtos/address.dto';

@ApiBearerAuth()
@ApiTags('addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Get(':id')
  @ApiOkResponse({ description: 'Get one address', type: AddressDto })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all addresses', type: [AddressDto] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll() {
    return this.addressesService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateAddressDto })
  @ApiCreatedResponse({
    description: 'The address has been successfully created.',
    type: AddressDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(201)
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The address has been successfully updated.',
    type: AddressDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: UpdateAddressDto })
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(id, updateAddressDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'The address has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }
}
