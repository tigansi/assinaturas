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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../../core/services/token.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let AuthService = class AuthService {
    prismaAssinaturas;
    jwtService;
    tokenService;
    constructor(prismaAssinaturas, jwtService, tokenService) {
        this.prismaAssinaturas = prismaAssinaturas;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
    }
    async loginUser(loginDto) {
        const user = await this.prismaAssinaturas.usuarios.findUnique({
            where: {
                email: loginDto.email,
            },
        });
        if (!user) {
            throw new common_1.HttpException("Usuário não encontrado", common_1.HttpStatus.UNAUTHORIZED);
        }
        const senha = await this.tokenService.verificaSenha(loginDto.senha, user.senha);
        if (!senha) {
            throw new common_1.HttpException("Usuário ou senha incorretos", common_1.HttpStatus.UNAUTHORIZED);
        }
        return {
            nome: user.nome,
            email: user.email,
            token: this.generateToken(user),
        };
    }
    generateToken(usuarios) {
        return this.jwtService.sign({
            sub: usuarios.id,
            nome: usuarios.nome,
            email: usuarios.email,
        }, {
            audience: "usuarios",
            issuer: "login",
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas,
        jwt_1.JwtService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map