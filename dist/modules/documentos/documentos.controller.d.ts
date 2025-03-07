import { DocumentosService } from "./documentos.service";
import { MontaDocDto } from "./dto/monta-doc-dto";
export declare class DocumentosController {
    private readonly documentosService;
    constructor(documentosService: DocumentosService);
    montaDoc(body: MontaDocDto): Promise<{
        message: string;
        data: void;
    }>;
    verificaDoc(tokenDoc: string): Promise<void>;
}
