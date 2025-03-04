import { Body, Controller, Post } from "@nestjs/common";
import { DocumentosService } from "./documentos.service";
import { MontaDocDto } from "./dto/monta-doc-dto";

@Controller("documentos")
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post("/monta_doc")
  async montaDoc(@Body() body: MontaDocDto) {
    try {
      const ret = await this.documentosService.montaDocAssinante(body);
      return {
        message: "Montagem concluida",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }
}
