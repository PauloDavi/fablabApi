import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtOptionsFactory } from '@nestjs/jwt';

@Injectable()
export class JwtConfig implements JwtOptionsFactory {
  constructor(private configService: ConfigService) {}

  createJwtOptions() {
    return {
      secret: this.configService.get('jwtSecretKey'),
      signOptions: {
        expiresIn: this.configService.get('jwtExpirationTime'),
      },
    };
  }
}
