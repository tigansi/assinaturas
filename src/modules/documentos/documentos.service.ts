import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { MontaDocDto } from "./dto/monta-doc-dto";
import { TemplatesService } from "../templates/templates.service";

@Injectable()
export class DocumentosService {
  constructor(
    private readonly prismaAssinaturas: PrismaAssinaturas,
    private readonly templatesService: TemplatesService
  ) {}

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

    await this.templatesService.criaDocDocx(
      template.diretorio_arquivo,
      montaDocDto.variaveis
    );
  }
}
