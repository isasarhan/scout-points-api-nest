import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/modules/auth/interface/auth.interface';
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
