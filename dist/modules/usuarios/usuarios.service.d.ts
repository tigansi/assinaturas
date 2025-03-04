import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { TokenService } from "src/core/services/token.service";
export declare class UsuariosService {
    private prismaAssinaturas;
    private tokenService;
    constructor(prismaAssinaturas: PrismaAssinaturas, tokenService: TokenService);
    createUser(createUserDto: CreateUserDto): Promise<{
        nome: string;
        email: string;
        nascimento: Date;
        token: string;
        tipo_acesso: string;
    }>;
    deleteUser(id: number): Promise<import("prisma/generated/assinaturas").Prisma.BatchPayload>;
    checkUser(id: number): Promise<{
        nome: string;
        email: string;
        nascimento: Date;
        senha: string;
        tipo_acesso: string;
        id: number;
        token: string;
        created_at: Date;
        updated_at: Date;
        is_ativo: boolean;
    } | null>;
}
