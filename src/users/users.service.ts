import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { User, UserDocument, Role} from '../schemas/user.schema';

@Injectable()
export class UsersService {
 
  constructor(@InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findOne(username: string): Promise<UserDocument | null> {
    return this.userModel
      .findOne({ username: username.toLowerCase() })
      .select('+password')
      .exec();
  }
}
