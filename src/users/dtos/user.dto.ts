import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
