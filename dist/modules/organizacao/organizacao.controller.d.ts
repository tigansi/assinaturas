import { OrganizacaoService } from "./organizacao.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";
export declare class OrganizacaoController {
    private readonly organizacaoService;
    constructor(organizacaoService: OrganizacaoService);
    create(body: CreateOrganizacaoDto): Promise<{
        message: string;
        dados: {
            id: number;
            nome_organizacao: string;
            usuario_criacao: string;
            is_ativo: boolean;
            usuariosId: number;
        };
    }>;
    createTokenOrg(idOrg: number): Promise<{
        message: string;
        dados: {
            id: number;
            is_ativo: boolean;
            usuariosId: number | null;
            chave_api: string;
            organizacaoId: number;
        };
    }>;
    deleteOrg(idOrg: number): Promise<{
        message: string;
        data: import("prisma/generated/assinaturas").Prisma.BatchPayload;
    }>;
}
