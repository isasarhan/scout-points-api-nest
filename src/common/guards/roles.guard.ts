import { Injectable, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IAccount, Role } from 'src/modules/auth/interface/auth.interface';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler());

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        
        const user: IAccount = request.user;
        if (!user)
            throw new NotFoundException('a valid token is needed')
        if (user.role === Role.ADMIN) return true
        return requiredRoles.includes(user.role)
    }
}
