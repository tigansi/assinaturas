import { IsString, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MinLength(3)
  nomeAdmin: string;

  @IsString()
  @MinLength(5)
  usuarioAdmin: string;
}
