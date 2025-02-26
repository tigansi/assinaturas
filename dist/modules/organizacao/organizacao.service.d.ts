import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";
export declare class OrganizacaoService {
    private prismaAssinaturas;
    constructor(prismaAssinaturas: PrismaAssinaturas);
    createOrganizacao(createOrganizacaoDto: CreateOrganizacaoDto): Promise<{
        id: number;
        nome_organizacao: string;
        usuario_criacao: string;
        is_ativo: boolean;
        usuariosId: number;
    }>;
    createTokenOrg(id: number): Promise<{
        id: number;
        is_ativo: boolean;
        usuariosId: number | null;
        chave_api: string;
        organizacaoId: number;
    }>;
    deletaOrg(id: number): Promise<import("prisma/generated/assinaturas").Prisma.BatchPayload>;
    _generateToken(): Promise<string>;
}
