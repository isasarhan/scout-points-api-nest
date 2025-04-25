import { Module } from '@nestjs/common';
import { AchievementRequestController } from './achievements-requests.controller';
import { AchievementRequestService } from './achievements-requests.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AchievementRequest, AchievementRequestSchema } from './schema/achievements-requests.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AchievementRequest.name, schema: AchievementRequestSchema }])],
  controllers: [AchievementRequestController],
  providers: [AchievementRequestService]
})
export class AchievementRequestModule { }
