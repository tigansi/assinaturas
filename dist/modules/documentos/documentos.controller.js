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
exports.DocumentosController = void 0;
const common_1 = require("@nestjs/common");
const documentos_service_1 = require("./documentos.service");
const monta_doc_dto_1 = require("./dto/monta-doc-dto");
let DocumentosController = class DocumentosController {
    documentosService;
    constructor(documentosService) {
        this.documentosService = documentosService;
    }
    async montaDoc(body) {
        try {
            const ret = await this.documentosService.montaDocAssinante(body);
            return {
                message: "Documento criado e enviado com sucesso",
                data: ret,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async verificaDoc(tokenDoc) { }
};
exports.DocumentosController = DocumentosController;
__decorate([
    (0, common_1.Post)("/monta_doc"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [monta_doc_dto_1.MontaDocDto]),
    __metadata("design:returntype", Promise)
], DocumentosController.prototype, "montaDoc", null);
__decorate([
    (0, common_1.Get)("/verifica-doc/:tokenDoc"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentosController.prototype, "verificaDoc", null);
exports.DocumentosController = DocumentosController = __decorate([
    (0, common_1.Controller)("documentos"),
    __metadata("design:paramtypes", [documentos_service_1.DocumentosService])
], DocumentosController);
//# sourceMappingURL=documentos.controller.js.map