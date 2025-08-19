import { Module } from "@nestjs/common";
import { AuthControlller } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "./schema/account.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]), UsersModule],
    controllers: [AuthControlller],
    providers: [AuthService],
    exports: [AuthService],

})

export class AuthModule { }
