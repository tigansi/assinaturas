import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user-dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginUserDto): Promise<{
        message: string;
        data: object;
    }>;
    authMe(): Promise<{
        message: string;
    }>;
    create(): Promise<void>;
}
