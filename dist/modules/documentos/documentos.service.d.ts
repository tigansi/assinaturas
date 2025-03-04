import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { MontaDocDto } from "./dto/monta-doc-dto";
export declare class DocumentosService {
    private readonly prismaAssinaturas;
    constructor(prismaAssinaturas: PrismaAssinaturas);
    montaDocAssinante(montaDocDto: MontaDocDto): Promise<void>;
}
