import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { TokenService } from "src/core/services/token.service";

@Injectable()
export class UsuariosService {
  constructor(
    private prismaAssinaturas: PrismaAssinaturas,
    private tokenService: TokenService
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (user) {
      throw new HttpException(
        "O usuário já está cadastrado com esse e-mail",
        HttpStatus.CONFLICT
      );
    }

    const senhaCript = await this.tokenService.criptografarSenha(
      createUserDto.senha
    );

    if (!senhaCript) {
      throw new HttpException(
        "Houve um erro para fazer o login",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    const cad = await this.prismaAssinaturas.usuarios.create({
      data: {
        nome: createUserDto.nome,
        email: createUserDto.nascimento,
        nascimento: new Date(createUserDto.nascimento),
        token: await this.tokenService.generateToken("token", "usuarios"),
        senha: senhaCript,
        tipo_acesso: "ADM",
      },
    });

    return {
      nome: cad.nome,
      email: cad.email,
      nascimento: cad.nascimento,
      token: cad.token,
      tipo_acesso: cad.tipo_acesso,
    };
  }

  async deleteUser(id: number) {
    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new HttpException("Usuário não encontrado", HttpStatus.CONFLICT);
    }

    const del = await this.prismaAssinaturas.usuarios.updateMany({
      where: {
        id: id,
      },
      data: {
        is_ativo: false,
      },
    });

    return del;
  }
}
