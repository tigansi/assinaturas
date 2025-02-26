import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login-user-dto";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { TokenService } from "src/core/services/token.service";
export declare class AuthService {
    private readonly jwtService;
    private readonly prismaAssinaturas;
    private readonly tokenService;
    constructor(jwtService: JwtService, prismaAssinaturas: PrismaAssinaturas, tokenService: TokenService);
    validateUser(): Promise<void>;
    login(loginUserDto: LoginUserDto): Promise<{
        message: string;
        usuario: {
            id: number;
            nome: string;
            email: string;
        };
        token: string;
    }>;
}
