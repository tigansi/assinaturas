import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { usuarios } from "prisma/generated/assinaturas";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { LoginUserDto } from "./dto/login-user-dto";
import { TokenService } from "src/core/services/token.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaAssinaturas: PrismaAssinaturas,
    private readonly tokenService: TokenService
  ) {}

  async createUsuario() {}

  async loginUsuario(loginUserDto: LoginUserDto): Promise<object> {
    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!user) {
      throw new HttpException(
        "Usuário não encontrado",
        HttpStatus.UNAUTHORIZED
      );
    }

    const senha = await this.tokenService.verificaSenha(
      loginUserDto.senha,
      user.senha
    );

    if (!senha) {
      throw new HttpException(
        "Usuário ou senha estão incorretos",
        HttpStatus.UNAUTHORIZED
      );
    }

    const tokenUser = await this.generateTokenJwt(user);

    return {
      token: tokenUser,
      email: user.email,
      nome: user.nome,
    };
  }

  async generateTokenJwt(usuarios: usuarios): Promise<string> {
    try {
      return await this.jwtService.signAsync(
        {
          sub: usuarios.id,
          email: usuarios.email,
          nome: usuarios.nome,
        },
        {
          expiresIn: "1h",
          audience: "usuarios",
          issuer: "login",
        }
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async checkTokenJwt(token: string) {
    try {
      return await this.jwtService.verifyAsync(token, {});
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
