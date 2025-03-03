import { JwtService } from "@nestjs/jwt";
import { TokenService } from "src/core/services/token.service";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { LoginDto } from "./dto/login-dto";
import { usuarios } from "prisma/generated/assinaturas";
export declare class AuthService {
    private readonly prismaAssinaturas;
    private readonly jwtService;
    private readonly tokenService;
    constructor(prismaAssinaturas: PrismaAssinaturas, jwtService: JwtService, tokenService: TokenService);
    loginUser(loginDto: LoginDto): Promise<{
        nome: string;
        email: string;
        token: string;
    }>;
    generateToken(usuarios: usuarios): string;
}
