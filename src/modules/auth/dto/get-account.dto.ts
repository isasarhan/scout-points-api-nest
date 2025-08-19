import { IsMongoId } from 'class-validator';

export class GetAccountDto {
  @IsMongoId()
  id: string;
}
