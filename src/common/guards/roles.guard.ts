import { Injectable, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IAccount, Role } from 'src/modules/auth/interface/auth.interface';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler());
        console.log('requiredRoles', requiredRoles);

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        console.log('request', request.user);
        
        const user: IAccount = request.user;
        if (!user)
            throw new NotFoundException('user not found')
        if (user.role === Role.ADMIN) return true
        return requiredRoles.includes(user.role)
    }
}
