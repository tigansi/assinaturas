import { IsString, MinLength } from 'class-validator';

export class CreateOrganizacaoDto {
  @IsString()
  @MinLength(3)
  nomeOrganizacao: string;

  @IsString()
  @MinLength(3)
  usuarioCriacao: string;
}
