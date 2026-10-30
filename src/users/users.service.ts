import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { randomUUID } from 'crypto';
import { User, UserDocument, Role } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findOne(username: string): Promise<UserDocument | null> {
    return this.userModel
      .findOne({ username })
      .select('+password')
      .exec();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async create(username: string, password: string) {
    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2id,
    });

    return this.userModel.create({
      id: randomUUID(),
      username,
      password: hashedPassword,
      role: Role.USER,
    });
  }
}