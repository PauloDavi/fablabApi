import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
  ) {}

  async findOne(id: string) {
    const user = await this.usersModel.findById(id);

    if (!!user) {
      throw new HttpException('User not exist', 400);
    }

    return user;
  }

  async findAll() {
    const users = await this.usersModel.find();

    return users;
  }

  async findByEmail(email: string) {
    const user = await this.usersModel.findOne({ email });

    if (!!user) {
      throw new HttpException('User not exist', 400);
    }

    return user;
  }

  async create({ password, email, name }: CreateUserDto) {
    const userExist = !!(await this.usersModel.findOne({
      email,
    }));

    if (userExist) {
      throw new HttpException('User already exist', 400);
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.usersModel.create({
      password: hashedPassword,
      email,
      name,
    });

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });

    if (!!user) {
      throw new HttpException('User not exist', 400);
    }

    return user;
  }

  async remove(id: string) {
    const user = await this.usersModel.findById(id);

    if (!!user) {
      throw new HttpException('User not exist', 400);
    }

    await this.usersModel.findByIdAndRemove(id);
  }
}
