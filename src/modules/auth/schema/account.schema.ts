import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';
import { Role } from "../interface/auth.interface";

@Schema()
export class Account {

  @Prop({ required: true, unique: true })
  user: string;
  
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  isSuperAdmin: boolean;

  @Prop({ type: String, enum: Role, default: Role.USER })
  role: Role;

  @Prop({ type: Boolean, default: false })
  isApproved: boolean;
  
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

export const AccountSchema = SchemaFactory.createForClass(Account);

AccountSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

AccountSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});