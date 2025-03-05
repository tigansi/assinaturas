import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { mkdir, unlink, writeFile } from "fs/promises";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { TokenService } from "src/core/services/token.service";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { UsuariosService } from "../usuarios/usuarios.service";
import { promisify } from "util";
import { exec } from "child_process";

import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import * as docx from "docx-parser";

const execPromise = promisify(exec);

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

  async criaDocDocx(diretorio: string, valores: Record<string, string>) {
    const tempDir = join(__dirname, "..", "..", "..", "storage", "docs");
    await mkdir(tempDir, { recursive: true });

    const tokenDoc = await this.tokenService.generateToken(
      "documentos",
      "token_doc"
    );

    // Criar um novo nome para o arquivo processado
    const processedDocxPath = join(tempDir, `${tokenDoc}.docx`);
    //const pdfPath = processedDocxPath.replace(".docx", ".pdf");
    const docxPath = `${tokenDoc}.docx`;

    const content = readFileSync(diretorio, "binary");

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
      delimiters: { start: "{{", end: "}}" },
    });

    doc.render(valores);

    const buffer = doc.getZip().generate({ type: "nodebuffer" });
    const storagePath = join(
      __dirname,
      "..",
      "..",
      "..",
      "storage",
      "docs",
      docxPath
    );
    await writeFileSync(storagePath, buffer);
    await this.convertePDF(docxPath);

    await unlink(processedDocxPath).catch(() => {
      console.warn(`Não foi possível remover o arquivo: ${processedDocxPath}`);
    });

    const docRegistro = await this.prismaAssinaturas.documentos.create({
      data: {
        token_doc: tokenDoc,
        usuariosId: 0,
        templatesId: 0,
      },
    });

    const statusDoc = await this.prismaAssinaturas.status_documentos.createMany({
      data:{
        documentosId:docRegistro.id,
        status_documento:0
      }
    })
  }

  async convertePDF(docxPath: string) {
    const storagePath = join(__dirname, "..", "..", "..", "storage", "docs");

    // Garante que a pasta "storage/docs" existe
    if (!existsSync(storagePath)) {
      mkdirSync(storagePath, { recursive: true });
    }

    // Caminho absoluto do arquivo .docx
    const fullDocxPath = join(storagePath, docxPath);

    // Define o caminho de saída para "storage/docs"
    const pdfFileName = docxPath.replace(".docx", ".pdf");
    const pdfPath = join(storagePath, pdfFileName);

    const libreOfficeCmd =
      process.platform === "win32"
        ? `"C:\\Program Files\\LibreOffice\\program\\soffice.exe"`
        : "libreoffice";

    try {
      await execPromise(
        `${libreOfficeCmd} --headless --convert-to pdf --outdir ${storagePath} ${fullDocxPath}`
      );
      return pdfPath;
    } catch (error) {
      throw new Error("Erro na conversão para PDF: " + error.message);
    }
  }

  private async extractTextFromDocx(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      docx.parseDocx(filePath, (data) => {
        if (!data) reject("Erro ao extrair texto do DOCX");
        resolve(data);
      });
    });
  }
}
