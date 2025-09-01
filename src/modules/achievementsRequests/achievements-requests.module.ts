import { Module } from '@nestjs/common';
import { AchievementRequestController } from './achievements-requests.controller';
import { AchievementRequestService } from './achievements-requests.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AchievementRequest, AchievementRequestSchema } from './schema/achievements-requests.schema';
import { UsersModule } from '../users/users.module';
import { AchievementsModule } from '../achievements/achievements.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule,AchievementsModule, MongooseModule.forFeature([{ name: AchievementRequest.name, schema: AchievementRequestSchema }])],
  controllers: [AchievementRequestController],
  providers: [AchievementRequestService]
})
export class AchievementRequestModule { }
