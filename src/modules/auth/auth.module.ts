import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../users/schema/user.schema";
import { AuthControlller } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [AuthControlller],
    providers: [AuthService, UsersService]
})

export class AuthModule {}
