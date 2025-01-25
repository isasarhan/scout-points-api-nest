import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AssociationsModule } from './modules/associations/associations.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { AchievementsModule } from './modules/achievements/achievements.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}.local`,
      load: [configuration],
    }
  ), UsersModule, AssociationsModule, DepartmentsModule, AchievementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
