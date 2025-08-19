import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { EnumDepartmentStatus, EnumDepartmentType } from "../interface/department.interface";
import { ObjectId, Types } from "mongoose";


@Schema({ _id: false })
class Location {
    @Prop()
    city: string;

    @Prop()
    country: string;

    @Prop()
    postalCode: string;

    @Prop()
    street: string;
}

@Schema()
export class Department {
    @Prop({ required: true })
    name: string;

    @Prop({ type: Location })
    @Type(() => Location)
    location: Location;

    @Prop({ type: String, enum: EnumDepartmentType, default: EnumDepartmentType.SCOUT })
    type: EnumDepartmentType;

    @Prop({ type: String, enum: EnumDepartmentStatus, default: 'active' })
    status: EnumDepartmentStatus;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date })
    updatedAt: Date;

    @Prop({ type: String })
    description: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: false })
    manager: ObjectId;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department)
