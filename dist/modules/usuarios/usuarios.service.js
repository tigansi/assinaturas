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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const token_service_1 = require("../../core/services/token.service");
let UsuariosService = class UsuariosService {
    prismaAssinaturas;
    tokenService;
    constructor(prismaAssinaturas, tokenService) {
        this.prismaAssinaturas = prismaAssinaturas;
        this.tokenService = tokenService;
    }
    async createUser(createUserDto) {
        const user = await this.prismaAssinaturas.usuarios.findUnique({
            where: {
                email: createUserDto.email,
            },
        });
        if (user) {
            throw new common_1.HttpException("O usuário já está cadastrado com esse e-mail", common_1.HttpStatus.CONFLICT);
        }
        const senhaCript = await this.tokenService.criptografarSenha(createUserDto.senha);
        if (!senhaCript) {
            throw new common_1.HttpException("Houve um erro para fazer o login", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const cad = await this.prismaAssinaturas.usuarios.create({
            data: {
                nome: createUserDto.nome,
                email: createUserDto.email,
                nascimento: new Date(createUserDto.nascimento),
                token: await this.tokenService.generateToken("usuarios", "token"),
                senha: senhaCript,
                tipo_acesso: "ADM",
            },
        });
        return {
            nome: cad.nome,
            email: cad.email,
            nascimento: cad.nascimento,
            token: cad.token,
            tipo_acesso: cad.tipo_acesso,
        };
    }
    async deleteUser(id) {
        const user = await this.prismaAssinaturas.usuarios.findUnique({
            where: {
                id: id,
            },
        });
        if (!user) {
            throw new common_1.HttpException("Usuário não encontrado", common_1.HttpStatus.CONFLICT);
        }
        const del = await this.prismaAssinaturas.usuarios.updateMany({
            where: {
                id: id,
            },
            data: {
                is_ativo: false,
            },
        });
        return del;
    }
    async checkUser(id) {
        return await this.prismaAssinaturas.usuarios.findUnique({
            where: {
                id: id,
            },
        });
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas,
        token_service_1.TokenService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map