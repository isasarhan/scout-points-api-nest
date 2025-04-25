import { PartialType } from '@nestjs/mapped-types';
import { CreateAchievementRequestDto } from './create-achievements-requests.dto';

export class UpdateAchievementRequestDto extends PartialType(CreateAchievementRequestDto){}
 