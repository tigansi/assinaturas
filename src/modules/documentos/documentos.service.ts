import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { MontaDocDto } from "./dto/monta-doc-dto";

@Injectable()
export class DocumentosService {
  constructor(private readonly prismaAssinaturas: PrismaAssinaturas) {}

  async montaDocAssinante(montaDocDto: MontaDocDto) {
    const user = await this.prismaAssinaturas.usuarios.findUnique({
      where: {
        token: montaDocDto.tokenUsuarioCriacao,
      },
    });

    const template = await this.prismaAssinaturas.templates.findUnique({
      where: {
        token_template: montaDocDto.tokenTemplate,
      },
    });

    if (!user || !template) {
      throw new HttpException(
        "Dados do documento não encontrados",
        HttpStatus.UNAUTHORIZED
      );
    }

    
  }
}
