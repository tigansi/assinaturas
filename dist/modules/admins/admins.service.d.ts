import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateAdminDto } from "./dto/create-admin-dto";
export declare class AdminsService {
    private prismaAssinaturas;
    constructor(prismaAssinaturas: PrismaAssinaturas);
    createAdmin(createAdminDto: CreateAdminDto): Promise<{
        id: number;
        is_ativo: boolean;
        nome_admin: string;
        usuario_admin: string;
    }>;
    deleteAdmin(id: number): Promise<import("prisma/generated/assinaturas").Prisma.BatchPayload>;
}
