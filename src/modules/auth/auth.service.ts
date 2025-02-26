import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login-user-dto";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { TokenService } from "src/core/services/token.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaAssinaturas: PrismaAssinaturas,
    private readonly tokenService: TokenService
  ) {}

  async validateUser() {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!user) {
      throw new HttpException(
        "Usuário não possui cadastro",
        HttpStatus.CONFLICT
      );
    }

    if (
      await this.tokenService.verificaSenha(
        loginUserDto.senha,
        user?.senha as string
      )
    ) {
      // Gerando token JWT
      const payload = { sub: user?.id, email: user?.email, nome: user?.nome };
      const token = this.jwtService.sign(payload);

      return {
        message: "Login realizado com sucesso!",
        usuario: { id: user?.id, nome: user?.nome, email: user?.email },
        token, // Retornando o token JWT
      };
    } else {
      throw new HttpException(
        "E-mail ou senha incorretos",
        HttpStatus.UNAUTHORIZED
      );
    }
  }
}
