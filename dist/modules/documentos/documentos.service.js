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
exports.DocumentosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DocumentosService = class DocumentosService {
    prismaAssinaturas;
    constructor(prismaAssinaturas) {
        this.prismaAssinaturas = prismaAssinaturas;
    }
    async montaDocAssinante(montaDocDto) {
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
            throw new common_1.HttpException("Dados do documento não encontrados", common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
exports.DocumentosService = DocumentosService;
exports.DocumentosService = DocumentosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas])
], DocumentosService);
//# sourceMappingURL=documentos.service.js.map