import { OrganizacaoService } from "./organizacao.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";
export declare class OrganizacaoController {
    private readonly organizacaoService;
    constructor(organizacaoService: OrganizacaoService);
    create(body: CreateOrganizacaoDto): Promise<{
        message: string;
        dados: {
            id: number;
            is_ativo: boolean;
            nome_organizacao: string;
            usuario_criacao: string;
        };
    }>;
    createTokenOrg(idOrg: number): Promise<{
        message: string;
        dados: {
            id: number;
            is_ativo: boolean;
            chave_api: string;
            organizacaoId: number;
            usuariosId: number | null;
        };
    }>;
    deleteOrg(idOrg: number): Promise<{
        message: string;
        data: import("prisma/generated/assinaturas").Prisma.BatchPayload;
    }>;
    vinculaUsuario(idUser: number, idOrg: number): Promise<{
        message: string;
        data: {
            id: number;
            organizacaoId: number;
            usuariosId: number;
        };
    }>;
}
