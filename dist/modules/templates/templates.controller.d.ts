import { TemplatesService } from "./templates.service";
export declare class TemplatesController {
    private readonly templatesService;
    constructor(templatesService: TemplatesService);
    uploadDocx(file: Express.Multer.File): Promise<{
        message: string;
        filePath: string;
    }>;
}
