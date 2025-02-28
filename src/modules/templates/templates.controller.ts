import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

@Controller("templates")
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post("/upload_docx")
  @UseInterceptors(FileInterceptor("file"))
  async uploadDocx(
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
      const dirPath = join(__dirname, "..", "..", "..", "storage", "templates");
      const filePath = join(dirPath, "arquivo.docx");

      // Criar a pasta se não existir
      await mkdir(dirPath, { recursive: true });

      // Escrever o arquivo
      await writeFile(filePath, file.buffer);

      return {
        message: "Template carregado com sucesso",
        filePath,
      };
    } catch (err) {
      throw err;
    }
  }
}
