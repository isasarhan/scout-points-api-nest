import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Account } from 'src/modules/auth/schema/account.schema';

export interface RequestWithUser extends Request {
    user?: Account | null;
}

export interface IToken extends JwtPayload{
    userId: string
}