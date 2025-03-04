import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { join } from "path";
import { TokenService } from "src/core/services/token.service";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { UsuariosService } from "../usuarios/usuarios.service";

import * as docx from "docx-parser";
import * as libre from "libreoffice-convert";

@Injectable()
export class TemplatesService {
  constructor(
    private readonly prismaAssinaturas: PrismaAssinaturas,
    private readonly tokenService: TokenService,
    private readonly usuariosService: UsuariosService
  ) {}

  async tradaDocx(file: Express.Multer.File, idUser: number) {
    const user = await this.usuariosService.checkUser(idUser);
    if (!user) {
      throw new HttpException(
        "Usuário não encontrado",
        HttpStatus.UNAUTHORIZED
      );
    }

    const dirPath = join(__dirname, "..", "..", "..", "storage", "templates");

    // Criar a pasta se não existir
    await mkdir(dirPath, { recursive: true });

    // Lendo o conteúdo do arquivo DOCX
    const tempFilePath = join(dirPath, "temp.docx");
    await writeFile(tempFilePath, file.buffer);
    const text = await this.extractTextFromDocx(tempFilePath);

    // Encontrando variáveis no formato {{variavel}}
    const regex = /\{\{(.*?)\}\}/g;
    const variaveisEncontradas = new Set<string>();
    let match;
    while ((match = regex.exec(text)) !== null) {
      variaveisEncontradas.add(match[1]);
    }

    // Gerar token único
    const tokenTemplate = await this.tokenService.generateToken(
      "templates",
      "token_template"
    );

    // Novo caminho do arquivo renomeado
    const newFilePath = join(dirPath, `${tokenTemplate}.docx`);

    // Salvar o arquivo com o novo nome
    await writeFile(newFilePath, file.buffer);

    // Criar template no banco
    const template = await this.prismaAssinaturas.templates.create({
      data: {
        nome_template: file.originalname,
        diretorio_arquivo: newFilePath,
        token_template: tokenTemplate,
        usuarios_id: idUser,
      },
    });

    // Salvar variáveis no banco
    await this.prismaAssinaturas.variaveis_template.createMany({
      data: [...variaveisEncontradas].map((variavel) => ({
        templates_id: template.id,
        nome_variavel: variavel, // Agora conseguimos armazenar a variável encontrada
      })),
    });

    await unlink(tempFilePath).catch(() => {
      console.warn(
        `Não foi possível remover o arquivo temporário: ${tempFilePath}`
      );
    });

    return template;
  }

  async carregaVariaveisDocx(
    tokenTemplate: string,
    valores: Record<string, string>,
    diretorio: string
  ) {
    const docxPath = diretorio;
    const tempDir = join(__dirname, "..", "..", "..", "storage", "docs");
    await mkdir(tempDir, { recursive: true });

    const tokenDoc = await this.tokenService.generateToken(
      "documentos",
      "token_doc"
    );

    // Criar um novo nome para o arquivo processado
    const processedDocxPath = join(tempDir, `${tokenDoc}.docx`);
    const pdfPath = processedDocxPath.replace(".docx", ".pdf");

    // Ler o conteúdo do arquivo original
    let text = await this.extractTextFromDocx(docxPath);

    // Substituir as variáveis no texto
    for (const [key, value] of Object.entries(valores)) {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, "g");
      text = text.replace(regex, value);
    }

    // Salvar um novo DOCX com as variáveis substituídas
    await writeFile(processedDocxPath, text);

    // Converter DOCX para PDF
    await this.convertToPDF(processedDocxPath, pdfPath);

    // Remover o DOCX processado após a conversão
    await unlink(processedDocxPath).catch(() => {
      console.warn(`Não foi possível remover o arquivo: ${processedDocxPath}`);
    });

    return { pdfPath };
  }

  private async extractTextFromDocx(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      docx.parseDocx(filePath, (data) => {
        if (!data) reject("Erro ao extrair texto do DOCX");
        resolve(data);
      });
    });
  }

  private async convertToPDF(docxPath: string, pdfPath: string): Promise<void> {
    const docxBuffer = await readFile(docxPath);

    return new Promise((resolve, reject) => {
      libre.convert(docxBuffer, ".pdf", undefined, (err, done) => {
        if (err) {
          return reject("Erro na conversão para PDF");
        }
        writeFile(pdfPath, done).then(resolve).catch(reject);
      });
    });
  }
}
