import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AssociationsModule } from './modules/associations/associations.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { AchievementsModule } from './modules/achievements/achievements.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { AchievementsCategoriesModule } from './modules/achievements/category/achievementsCategory.module';
import { EventsModule } from './modules/events/events.module';
import { AchievementRequestModule } from './modules/achievementsRequests/achievements-requests.module';
import { UploadModule } from './modules/upload/upload.module';
import { BlogModule } from './modules/blog/blog.module';
import { BlogCategoriesModule } from './modules/blog/category/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}.local`,
      load: [configuration],
    }),
    MongooseModule.forRoot(`${process.env.DATABASE_HOST}`),
    UsersModule,
    AssociationsModule,
    DepartmentsModule,
    AchievementsModule,
    AuthModule,
    AchievementsCategoriesModule,
    EventsModule,
    AchievementRequestModule,
    UploadModule,
    BlogModule,
    BlogCategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes('users')
  // }
}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(AuthMiddleware).forRoutes('users')
//   }
// }
