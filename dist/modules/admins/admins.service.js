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
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdminsService = class AdminsService {
    prismaAssinaturas;
    constructor(prismaAssinaturas) {
        this.prismaAssinaturas = prismaAssinaturas;
    }
    async createAdmin(createAdminDto) {
        const admin = await this.prismaAssinaturas.admins.findFirst({
            where: {
                usuario_admin: createAdminDto.usuarioAdmin,
            },
        });
        if (admin) {
            throw new common_1.HttpException('Admin já cadastrado', common_1.HttpStatus.CONFLICT);
        }
        const cad = await this.prismaAssinaturas.admins.create({
            data: {
                nome_admin: createAdminDto.nomeAdmin,
                usuario_admin: createAdminDto.usuarioAdmin,
            },
        });
        return cad;
    }
};
exports.AdminsService = AdminsService;
exports.AdminsService = AdminsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaAssinaturas])
], AdminsService);
//# sourceMappingURL=admins.service.js.map