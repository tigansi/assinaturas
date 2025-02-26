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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let TokenService = class TokenService {
    prismaAssinaturas;
    constructor(prismaAssinaturas) {
        this.prismaAssinaturas = prismaAssinaturas;
    }
    async generateToken(table, column) {
        let token;
        let exists;
        do {
            token = `${(0, crypto_1.randomUUID)()}${(0, crypto_1.randomUUID)().slice(0, 2)}`;
            exists =
                (await this.prismaAssinaturas[table].findUnique({
                    where: { [column]: token },
                })) !== null;
        } while (exists);
        return token;
    }
    async criptografarSenha(senha) {
        return await bcrypt.hash(senha, 10);
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas])
], TokenService);
//# sourceMappingURL=token.service.js.map