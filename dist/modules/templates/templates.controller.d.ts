import { TemplatesService } from "./templates.service";
export declare class TemplatesController {
    private readonly templatesService;
    constructor(templatesService: TemplatesService);
    uploadDocx(idUser: number, file: Express.Multer.File): Promise<{
        message: string;
        data: {
            id: number;
            nome_template: string;
            diretorio_arquivo: string;
            token_template: string;
            created_at: Date;
            is_ativo: boolean;
            usuarios_id: number;
        };
    }>;
}
