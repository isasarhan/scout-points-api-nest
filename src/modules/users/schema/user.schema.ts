import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Rank } from '../interface/user.interface';
import { ObjectId, Types } from 'mongoose';

@Schema({ _id: false })
class Address {
  @Prop()
  street: string;

  @Prop()
  building: string;

  @Prop()
  floor: string;

  @Prop()
  country: string;

  @Prop()
  city: string;
}

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  fatherName: string;

  @Prop()
  motherName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: string;

  @Prop({ type: Address })
  @Type(() => Address)
  address: Address

  @Prop()
  nationality: string;

  @Prop({ default: 0 })
  points: number;

  @Prop({ type: Types.ObjectId, ref: "Department" })
  department: ObjectId

  @Prop()
  profileUrl: string;

  @Prop({ type: Types.ObjectId, ref: 'Achievement', required: false })
  achievements: ObjectId[]

  @Prop({ type: String, enum: Rank, default: Rank.SCOUT })
  rank: Rank;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
