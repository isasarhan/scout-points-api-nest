import { IsMongoId } from 'class-validator';

export class GetDepartmentDto {
  @IsMongoId()
  id: string;
}
