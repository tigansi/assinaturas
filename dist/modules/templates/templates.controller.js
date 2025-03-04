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
exports.TemplatesController = void 0;
const common_1 = require("@nestjs/common");
const templates_service_1 = require("./templates.service");
const platform_express_1 = require("@nestjs/platform-express");
let TemplatesController = class TemplatesController {
    templatesService;
    constructor(templatesService) {
        this.templatesService = templatesService;
    }
    async uploadDocx(idUser, file) {
        try {
            const ret = await this.templatesService.tradaDocx(file, idUser);
            return {
                message: "Template carregado com sucesso",
                data: ret,
            };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.TemplatesController = TemplatesController;
__decorate([
    (0, common_1.Post)("/upload_docx"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.Body)("idUser", common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({
                fileType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TemplatesController.prototype, "uploadDocx", null);
exports.TemplatesController = TemplatesController = __decorate([
    (0, common_1.Controller)("templates"),
    __metadata("design:paramtypes", [templates_service_1.TemplatesService])
], TemplatesController);
//# sourceMappingURL=templates.controller.js.map