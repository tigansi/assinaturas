import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin-dto';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    create(body: CreateAdminDto): Promise<{
        message: string;
        data: {
            id: number;
            is_ativo: boolean;
            nome_admin: string;
            usuario_admin: string;
        };
    }>;
}
