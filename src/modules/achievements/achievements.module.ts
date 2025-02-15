import { Module } from '@nestjs/common';
import { AchievementsController } from './achievements.controller';
import { AchievementsService } from './achievements.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Achievement, AchievementSchema } from './schema/achievements.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Achievement.name, schema: AchievementSchema }])],
  controllers: [AchievementsController],
  providers: [AchievementsService]
})
export class AchievementsModule { }
