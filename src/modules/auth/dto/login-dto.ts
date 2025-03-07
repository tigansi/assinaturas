import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class LoginDto {
  @IsEmail({}, { message: "E-mail inválido" })
  @IsString()
  email: string;

  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: "Senha inválida" }
  )
  senha: string;
}
