import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signin.dto";
import { CreateAccountDto, CreateUserAccountDto } from "./dto/create-account.dto";
import { GetAccountDto } from "./dto/get-account.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";

@Controller('auth')
export class AuthControlller {
    constructor(private service: AuthService) { }

    @Post('add')
    async add(@Body() createUserDto: CreateAccountDto) {
        return await this.service.add(createUserDto);
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserAccountDto) {
        return await this.service.register(createUserDto);
    }

    @Post('login')
    async signIn(@Body() signInDto: SignInDto) {
        return this.service.signIn(signInDto.username, signInDto.password)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {        
        return await this.service.update(id, updateAccountDto)
    }
}