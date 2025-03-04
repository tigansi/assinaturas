"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const token_service_1 = require("../../core/services/token.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const docx = require("docx-parser");
let TemplatesService = class TemplatesService {
    prismaAssinaturas;
    tokenService;
    usuariosService;
    constructor(prismaAssinaturas, tokenService, usuariosService) {
        this.prismaAssinaturas = prismaAssinaturas;
        this.tokenService = tokenService;
        this.usuariosService = usuariosService;
    }
    async tradaDocx(file, idUser) {
        const user = await this.usuariosService.checkUser(idUser);
        if (!user) {
            throw new common_1.HttpException("Usuário não encontrado", common_1.HttpStatus.UNAUTHORIZED);
        }
        const dirPath = (0, path_1.join)(__dirname, "..", "..", "..", "storage", "templates");
        await (0, promises_1.mkdir)(dirPath, { recursive: true });
        const tempFilePath = (0, path_1.join)(dirPath, "temp.docx");
        await (0, promises_1.writeFile)(tempFilePath, file.buffer);
        const text = await this.extractTextFromDocx(tempFilePath);
        const regex = /\{\{(.*?)\}\}/g;
        const variaveisEncontradas = new Set();
        let match;
        while ((match = regex.exec(text)) !== null) {
            variaveisEncontradas.add(match[1]);
        }
        const tokenTemplate = await this.tokenService.generateToken("templates", "token_template");
        const newFilePath = (0, path_1.join)(dirPath, `${tokenTemplate}.docx`);
        await (0, promises_1.writeFile)(newFilePath, file.buffer);
        const template = await this.prismaAssinaturas.templates.create({
            data: {
                nome_template: file.originalname,
                diretorio_arquivo: newFilePath,
                token_template: tokenTemplate,
                usuarios_id: idUser,
            },
        });
        await this.prismaAssinaturas.variaveis_template.createMany({
            data: [...variaveisEncontradas].map((variavel) => ({
                templates_id: template.id,
                nome_variavel: variavel,
            })),
        });
        await (0, promises_1.unlink)(tempFilePath).catch(() => {
            console.warn(`Não foi possível remover o arquivo temporário: ${tempFilePath}`);
        });
        return template;
    }
    async carregaVariaveisDocx() { }
    async extractTextFromDocx(filePath) {
        return new Promise((resolve, reject) => {
            docx.parseDocx(filePath, (data) => {
                if (!data)
                    reject("Erro ao extrair texto do DOCX");
                resolve(data);
            });
        });
    }
};
exports.TemplatesService = TemplatesService;
exports.TemplatesService = TemplatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas,
        token_service_1.TokenService,
        usuarios_service_1.UsuariosService])
], TemplatesService);
//# sourceMappingURL=templates.service.js.map