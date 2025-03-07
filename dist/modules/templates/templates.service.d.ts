import { TokenService } from "src/core/services/token.service";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { UsuariosService } from "../usuarios/usuarios.service";
export declare class TemplatesService {
    private readonly prismaAssinaturas;
    private readonly tokenService;
    private readonly usuariosService;
    constructor(prismaAssinaturas: PrismaAssinaturas, tokenService: TokenService, usuariosService: UsuariosService);
    tradaDocx(file: Express.Multer.File, idUser: number): Promise<{
        id: number;
        created_at: Date;
        is_ativo: boolean;
        usuarios_id: number;
        token_template: string;
        nome_template: string;
        diretorio_arquivo: string;
    }>;
    criaDocDocx(diretorio: string, valores: Record<string, string>): Promise<void>;
    convertePDF(docxPath: string): Promise<string>;
    private extractTextFromDocx;
}
