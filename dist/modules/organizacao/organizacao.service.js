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
exports.OrganizacaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const token_service_1 = require("../../core/services/token.service");
let OrganizacaoService = class OrganizacaoService {
    prismaAssinaturas;
    tokenService;
    constructor(prismaAssinaturas, tokenService) {
        this.prismaAssinaturas = prismaAssinaturas;
        this.tokenService = tokenService;
    }
    async createOrganizacao(createOrganizacaoDto) {
        const org = await this.prismaAssinaturas.organizacao.findFirst({
            where: {
                nome_organizacao: {
                    equals: createOrganizacaoDto.nomeOrganizacao,
                },
            },
        });
        if (org) {
            throw new common_1.HttpException("Organização já cadastrada", common_1.HttpStatus.CONFLICT);
        }
        const cad = await this.prismaAssinaturas.organizacao.create({
            data: {
                nome_organizacao: createOrganizacaoDto.nomeOrganizacao,
                usuario_criacao: createOrganizacaoDto.usuarioCriacao,
            },
        });
        return cad;
    }
    async createTokenOrg(id) {
        const org = await this.prismaAssinaturas.organizacao.findUnique({
            where: {
                id: id,
            },
        });
        if (!org) {
            throw new common_1.HttpException("Organização não encontrada", common_1.HttpStatus.NOT_FOUND);
        }
        if (!org.is_ativo) {
            throw new common_1.HttpException("A organização está desativada", common_1.HttpStatus.LOCKED);
        }
        const tokenOrg = await this.prismaAssinaturas.chavesApi.create({
            data: {
                chave_api: await this.tokenService.generateToken("chavesApi", "chave_api"),
                organizacaoId: id,
            },
        });
        return tokenOrg;
    }
    async deletaOrg(id) {
        const org = await this.prismaAssinaturas.organizacao.findUnique({
            where: {
                id: id,
            },
        });
        if (!org) {
            throw new common_1.HttpException("Organização não encontrada", common_1.HttpStatus.NOT_FOUND);
        }
        if (!org.is_ativo) {
            throw new common_1.HttpException("Organização já desativada", common_1.HttpStatus.CONFLICT);
        }
        const delOrg = await this.prismaAssinaturas.organizacao.updateMany({
            data: {
                is_ativo: false,
            },
            where: {
                id: id,
                ChavesApi: {
                    every: {
                        organizacaoId: id,
                    },
                },
            },
        });
        return delOrg;
    }
    async vinculaUsuarios(idOrg, idUser) {
        const org = await this.prismaAssinaturas.organizacao.findUnique({
            where: {
                id: idOrg,
            },
        });
        if (!org) {
            throw new common_1.HttpException("Organização não encontrada", common_1.HttpStatus.NOT_FOUND);
        }
        const user = await this.prismaAssinaturas.usuarios.findUnique({
            where: {
                id: idUser,
                UsuariosOrganizacao: {
                    every: {
                        id: idOrg,
                        usuariosId: idUser,
                    },
                },
            },
        });
        if (user) {
            throw new common_1.HttpException("Usuário já cadastrado para essa organização", common_1.HttpStatus.CONFLICT);
        }
        const vinculo = await this.prismaAssinaturas.usuariosOrganizacao.create({
            data: {
                organizacaoId: idOrg,
                usuariosId: idOrg,
            },
        });
        return vinculo;
    }
};
exports.OrganizacaoService = OrganizacaoService;
exports.OrganizacaoService = OrganizacaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas,
        token_service_1.TokenService])
], OrganizacaoService);
//# sourceMappingURL=organizacao.service.js.map