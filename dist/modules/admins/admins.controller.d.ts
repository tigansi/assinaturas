import { AdminsService } from "./admins.service";
import { CreateAdminDto } from "./dto/create-admin-dto";
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    create(body: CreateAdminDto): Promise<{
        message: string;
        data: {
            id: number;
            nome_admin: string;
            usuario_admin: string;
            is_ativo: boolean;
        };
    }>;
    delete(idAdm: number): Promise<{
        message: string;
        data: import("prisma/generated/assinaturas").Prisma.BatchPayload;
    }>;
}
