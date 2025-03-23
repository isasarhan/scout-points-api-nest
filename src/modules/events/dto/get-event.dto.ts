import { IsMongoId } from 'class-validator';

export class GetEventDto {
  @IsMongoId()
  id: string;
}
