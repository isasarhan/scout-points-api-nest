import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import * as jwt from 'jsonwebtoken'
import { IToken, RequestWithUser } from "../types/request-with-user";
import { AuthService } from "src/modules/auth/auth.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private configService: ConfigService, private accountService: AuthService) { }

    async use(req: RequestWithUser, res: Response, next: (error?: any) => void) {
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer'))
            throw new UnauthorizedException('No token provided');
        
        const token = req.headers.authorization?.split(" ")[1]
        const jwtSecret = this.configService.get<string>('jwtSecret')
        
        
        if (!jwtSecret)
            throw new Error('JWT_SECRET is not set in the environment variables');

        const decoded = jwt.verify(token, jwtSecret) as IToken
        
        const user = await this.accountService.findById(decoded?.userId)
        req.user = user        
        next()
        try{
            
        }catch{
            
        }
    }

}