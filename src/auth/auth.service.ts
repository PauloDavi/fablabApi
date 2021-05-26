import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersDocument } from '../users/schemas/users.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user && (await compare(password, user.password))) {
      return user;
    }

    return null;
  }

  async login(user: UsersDocument) {
    const payload = { name: user.name, email: user.email, sub: user._id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
