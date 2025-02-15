import { Module } from '@nestjs/common';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Association, AssociationSchema } from './schema/association.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Association.name, schema: AssociationSchema }])],
  controllers: [AssociationsController],
  providers: [AssociationsService]
})
export class AssociationsModule { }
