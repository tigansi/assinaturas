import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";
import { TokenService } from "src/core/services/token.service";
export declare class OrganizacaoService {
    private prismaAssinaturas;
    private tokenService;
    constructor(prismaAssinaturas: PrismaAssinaturas, tokenService: TokenService);
    createOrganizacao(createOrganizacaoDto: CreateOrganizacaoDto): Promise<{
        id: number;
        is_ativo: boolean;
        nome_organizacao: string;
        usuario_criacao: string;
    }>;
    createTokenOrg(id: number): Promise<{
        id: number;
        is_ativo: boolean;
        chave_api: string;
        organizacaoId: number;
        usuariosId: number | null;
    }>;
    deletaOrg(id: number): Promise<import("prisma/generated/assinaturas").Prisma.BatchPayload>;
    vinculaUsuarios(idOrg: number, idUser: number): Promise<{
        id: number;
        organizacaoId: number;
        usuariosId: number;
    }>;
}
