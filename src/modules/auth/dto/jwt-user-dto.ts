import { IsJWT } from "class-validator";

export class JwtUserDto {
  @IsJWT()
  token: string;
}
