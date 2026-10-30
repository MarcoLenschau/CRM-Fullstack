import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export enum Role {
  USER = 0,
  ADMIN = 1,
}

@Schema({timestamps: true, versionKey: false,
  toJSON: { transform: (_doc, ret: any) => { 
      delete ret._id;
      delete ret.password;
      return ret;
    },
  },
})
export class User {
  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  id: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  username: string;

  @Prop({
    required: true,
    select: false,
  })
  password: string;

  @Prop({
    required: true,
    enum: Role,
    default: Role.USER,
  })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
