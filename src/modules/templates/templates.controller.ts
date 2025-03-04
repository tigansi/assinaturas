import {
  Body,
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("templates")
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post("/upload_docx")
  @UseInterceptors(FileInterceptor("file"))
  async uploadDocx(
    @Body("idUser", ParseIntPipe) idUser: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    try {
      const ret = await this.templatesService.tradaDocx(file, idUser);
      return {
        message: "Template carregado com sucesso",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }
}
