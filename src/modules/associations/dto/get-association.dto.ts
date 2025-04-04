import { IsMongoId } from 'class-validator';

export class GetAsssociationDto {
  @IsMongoId()
  id: string;
}
