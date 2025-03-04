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
        nome_template: string;
        diretorio_arquivo: string;
        token_template: string;
        created_at: Date;
        is_ativo: boolean;
        usuarios_id: number;
    }>;
    carregaVariaveisDocx(): Promise<void>;
    private extractTextFromDocx;
}
