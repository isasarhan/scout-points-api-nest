import { IsEnum, IsOptional } from "class-validator";
import { Rank } from "src/modules/users/interface/user.interface";
import { Level } from "../interface/achievements.interface";

export class GetAchievementsFilter {
      @IsEnum(Level)
      @IsOptional()
      level?: Level;
  
      @IsEnum(Rank)
      @IsOptional()
      rank?: Rank;
}