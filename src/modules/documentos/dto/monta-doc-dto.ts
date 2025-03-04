import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  Length,
  MinLength,
} from "class-validator";

export class MontaDocDto {
  @IsString()
  @IsNotEmpty()
  tokenTemplate: string;

  @IsString()
  @IsNotEmpty()
  tokenUsuarioCriacao: string;

  @IsObject()
  @IsNotEmpty()
  variaveis: object;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nomeAssinante: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  emailAssinante: string;
}
