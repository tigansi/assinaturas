"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizacaoModule = void 0;
const common_1 = require("@nestjs/common");
const organizacao_service_1 = require("./organizacao.service");
const organizacao_controller_1 = require("./organizacao.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
const token_service_1 = require("../../core/services/token.service");
let OrganizacaoModule = class OrganizacaoModule {
};
exports.OrganizacaoModule = OrganizacaoModule;
exports.OrganizacaoModule = OrganizacaoModule = __decorate([
    (0, common_1.Module)({
        controllers: [organizacao_controller_1.OrganizacaoController],
        providers: [organizacao_service_1.OrganizacaoService, prisma_service_1.PrismaAssinaturas, token_service_1.TokenService],
    })
], OrganizacaoModule);
//# sourceMappingURL=organizacao.module.js.map