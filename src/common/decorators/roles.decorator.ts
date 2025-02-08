import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/modules/users/interface/user.interface';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
