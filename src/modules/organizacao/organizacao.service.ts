import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaAssinaturas } from 'src/prisma/prisma.service';
import { CreateOrganizacaoDto } from './dto/create-organizacao-dto';
import { randomUUID } from 'crypto';

@Injectable()
export class OrganizacaoService {
  constructor(private prismaAssinaturas: PrismaAssinaturas) {}

  async createOrganizacao(createOrganizacaoDto: CreateOrganizacaoDto) {
    const org = await this.prismaAssinaturas.organizacao.findFirst({
      where: {
        nome_organizacao: {
          equals: createOrganizacaoDto.nomeOrganizacao,
        },
      },
    });

    if (org) {
      throw new HttpException('Organização já cadastrada', HttpStatus.CONFLICT);
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
        'Organização não encontrada',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!org.is_ativo) {
      throw new HttpException(
        'A organização está desativada',
        HttpStatus.LOCKED,
      );
    }

    const tokenOrg = await this.prismaAssinaturas.chavesApi.create({
      data: {
        chave_api: await this._generateToken(),
        organizacaoId: id,
      },
    });

    return tokenOrg;
  }

  async _generateToken() {
    let token: string;
    let exists: boolean;

    do {
      token = `${randomUUID()}${randomUUID().slice(0, 2)}`; // Gera um UUID v4 + sufixo extra
      exists =
        (await this.prismaAssinaturas.chavesApi.findUnique({
          where: { chave_api: token },
        })) !== null;
    } while (exists);

    return 'token';
  }
}
