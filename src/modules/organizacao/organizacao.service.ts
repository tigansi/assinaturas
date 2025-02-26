import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";
import { TokenService } from "src/core/services/token.service";

@Injectable()
export class OrganizacaoService {
  constructor(
    private prismaAssinaturas: PrismaAssinaturas,
    private tokenService: TokenService
  ) {}

  async createOrganizacao(createOrganizacaoDto: CreateOrganizacaoDto) {
    const org = await this.prismaAssinaturas.organizacao.findFirst({
      where: {
        nome_organizacao: {
          equals: createOrganizacaoDto.nomeOrganizacao,
        },
      },
    });

    if (org) {
      throw new HttpException("Organização já cadastrada", HttpStatus.CONFLICT);
    }

    const cad = await this.prismaAssinaturas.organizacao.create({
      data: {
        nome_organizacao: createOrganizacaoDto.nomeOrganizacao,
        usuario_criacao: createOrganizacaoDto.usuarioCriacao,
      },
    });

    return cad;
  }

  async createTokenOrg(id: number) {
    const org = await this.prismaAssinaturas.organizacao.findUnique({
      where: {
        id: id,
      },
    });

    if (!org) {
      throw new HttpException(
        "Organização não encontrada",
        HttpStatus.NOT_FOUND
      );
    }

    if (!org.is_ativo) {
      throw new HttpException(
        "A organização está desativada",
        HttpStatus.LOCKED
      );
    }

    const tokenOrg = await this.prismaAssinaturas.chavesApi.create({
      data: {
        chave_api: await this.tokenService.generateToken(
          "chavesApi",
          "chave_api"
        ),
        organizacaoId: id,
      },
    });

    return tokenOrg;
  }

  async deletaOrg(id: number) {
    const org = await this.prismaAssinaturas.organizacao.findUnique({
      where: {
        id: id,
      },
    });

    if (!org) {
      throw new HttpException(
        "Organização não encontrada",
        HttpStatus.NOT_FOUND
      );
    }

    if (!org.is_ativo) {
      throw new HttpException("Organização já desativada", HttpStatus.CONFLICT);
    }

    const delOrg = await this.prismaAssinaturas.organizacao.updateMany({
      data: {
        is_ativo: false,
      },
      where: {
        id: id,
        ChavesApi: {
          every: {
            organizacaoId: id,
          },
        },
      },
    });

    return delOrg;
  }

  async vinculaUsuarios(idOrg: number, idUser: number) {
    const org = await this.prismaAssinaturas.organizacao.findUnique({
      where: {
        id: idOrg,
      },
    });

    if (!org) {
      throw new HttpException(
        "Organização não encontrada",
        HttpStatus.NOT_FOUND
      );
    }

    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        id: idUser,
        UsuariosOrganizacao: {
          every: {
            id: idOrg,
            usuariosId: idUser,
          },
        },
      },
    });

    if (user) {
      throw new HttpException(
        "Usuário já cadastrado para essa organização",
        HttpStatus.CONFLICT
      );
    }

    const vinculo = await this.prismaAssinaturas.usuariosOrganizacao.create({
      data: {
        organizacaoId: idOrg,
        usuariosId: idOrg,
      },
    });

    return vinculo;
  }
}
