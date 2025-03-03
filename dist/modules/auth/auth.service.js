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
const prisma_service_1 = require("../../prisma/prisma.service");
const token_service_1 = require("../../core/services/token.service");
let AuthService = class AuthService {
    jwtService;
    prismaAssinaturas;
    tokenService;
    constructor(jwtService, prismaAssinaturas, tokenService) {
        this.jwtService = jwtService;
        this.prismaAssinaturas = prismaAssinaturas;
        this.tokenService = tokenService;
    }
    async createUsuario() { }
    async loginUsuario(loginUserDto) {
        const user = await this.prismaAssinaturas.usuarios.findUnique({
            where: {
                email: loginUserDto.email,
            },
        });
        if (!user) {
            throw new common_1.HttpException("Usuário não encontrado", common_1.HttpStatus.UNAUTHORIZED);
        }
        const senha = await this.tokenService.verificaSenha(loginUserDto.senha, user.senha);
        if (!senha) {
            throw new common_1.HttpException("Usuário ou senha estão incorretos", common_1.HttpStatus.UNAUTHORIZED);
        }
        const tokenUser = await this.generateTokenJwt(user);
        return {
            token: tokenUser,
            email: user.email,
            nome: user.nome,
        };
    }
    async generateTokenJwt(usuarios) {
        try {
            return await this.jwtService.signAsync({
                sub: usuarios.id,
                email: usuarios.email,
                nome: usuarios.nome,
            }, {
                expiresIn: "1h",
                audience: "usuarios",
                issuer: "login",
            });
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
    async checkTokenJwt(token) {
        try {
            return await this.jwtService.verifyAsync(token, {});
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaAssinaturas,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map