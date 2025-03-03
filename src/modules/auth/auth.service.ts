import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenService } from "src/core/services/token.service";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { LoginDto } from "./dto/login-dto";
import { usuarios } from "prisma/generated/assinaturas";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaAssinaturas: PrismaAssinaturas,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService
  ) {}

  async loginUser(loginDto: LoginDto) {
    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new HttpException(
        "Usuário não encontrado",
        HttpStatus.UNAUTHORIZED
      );
    }

    const senha = await this.tokenService.verificaSenha(
      loginDto.senha,
      user.senha
    );

    if (!senha) {
      throw new HttpException(
        "Usuário ou senha incorretos",
        HttpStatus.UNAUTHORIZED
      );
    }

    return {
      nome: user.nome,
      email: user.email,
      token: this.generateToken(user),
    };
  }

  generateToken(usuarios: usuarios): string {
    return this.jwtService.sign(
      {
        sub: usuarios.id,
        nome: usuarios.nome,
        email: usuarios.email,
      },
      {
        audience: "usuarios",
        issuer: "login",
      }
    );
  }
}
