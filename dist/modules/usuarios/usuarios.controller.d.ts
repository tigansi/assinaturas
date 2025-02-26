import { UsuariosService } from "./usuarios.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(body: CreateUserDto): Promise<{
        message: string;
        data: {
            nome: string;
            email: string;
            nascimento: Date;
            token: string;
            tipo_acesso: string;
        };
    }>;
    update(body: UpdateUserDto): Promise<void>;
    delete(id: number): Promise<{
        message: string;
        data: import("prisma/generated/assinaturas").Prisma.BatchPayload;
    }>;
}
