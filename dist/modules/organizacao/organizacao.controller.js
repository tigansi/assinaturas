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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizacaoController = void 0;
const common_1 = require("@nestjs/common");
const organizacao_service_1 = require("./organizacao.service");
const create_organizacao_dto_1 = require("./dto/create-organizacao-dto");
const auth_guard_1 = require("../auth/auth.guard");
let OrganizacaoController = class OrganizacaoController {
    organizacaoService;
    constructor(organizacaoService) {
        this.organizacaoService = organizacaoService;
    }
    async create(body) {
        try {
            const ret = await this.organizacaoService.createOrganizacao(body);
            return {
                message: "Organizacao criada com sucesso",
                dados: ret,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async createTokenOrg(idOrg) {
        try {
            const ret = await this.organizacaoService.createTokenOrg(idOrg);
            return {
                message: "Chave de api criada",
                dados: ret,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOrg(idOrg) {
        try {
            const ret = await this.organizacaoService.deletaOrg(idOrg);
            return {
                message: "Organização desativada",
                data: ret,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async vinculaUsuario(idUser, idOrg) {
        try {
            const ret = await this.organizacaoService.vinculaUsuarios(idOrg, idUser);
            return {
                message: "Vinculação realizada",
                data: ret,
            };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.OrganizacaoController = OrganizacaoController;
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organizacao_dto_1.CreateOrganizacaoDto]),
    __metadata("design:returntype", Promise)
], OrganizacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/create_token_org/:idOrg"),
    __param(0, (0, common_1.Param)("idOrg", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganizacaoController.prototype, "createTokenOrg", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)("/delete/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganizacaoController.prototype, "deleteOrg", null);
__decorate([
    (0, common_1.Put)("/vincula_usuario/:idUser/:idOrg"),
    __param(0, (0, common_1.Param)("idUser", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("idOrg", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], OrganizacaoController.prototype, "vinculaUsuario", null);
exports.OrganizacaoController = OrganizacaoController = __decorate([
    (0, common_1.Controller)("organizacao"),
    __metadata("design:paramtypes", [organizacao_service_1.OrganizacaoService])
], OrganizacaoController);
//# sourceMappingURL=organizacao.controller.js.map