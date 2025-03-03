import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        message: string;
        data: {
            nome: string;
            email: string;
            token: string;
        };
    }>;
}
