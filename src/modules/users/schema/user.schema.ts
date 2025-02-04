import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Type } from 'class-transformer';
import * as bcrypt from 'bcrypt';


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
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone: string;

  @Prop({ type: Address })
  @Type(() => Address)
  address: Address;

  @Prop()
  nationality: string;

  @Prop({ default: 0 })
  points: number;

  @Prop()
  department: string;

  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
