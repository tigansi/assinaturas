import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { MontaDocDto } from "./dto/monta-doc-dto";
import { TemplatesService } from "../templates/templates.service";
export declare class DocumentosService {
    private readonly prismaAssinaturas;
    private readonly templatesService;
    constructor(prismaAssinaturas: PrismaAssinaturas, templatesService: TemplatesService);
    montaDocAssinante(montaDocDto: MontaDocDto): Promise<void>;
}
