import { JwtService } from "@nestjs/jwt";
import { usuarios } from "prisma/generated/assinaturas";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { LoginUserDto } from "./dto/login-user-dto";
import { TokenService } from "src/core/services/token.service";
export declare class AuthService {
    private readonly jwtService;
    private readonly prismaAssinaturas;
    private readonly tokenService;
    constructor(jwtService: JwtService, prismaAssinaturas: PrismaAssinaturas, tokenService: TokenService);
    createUsuario(): Promise<void>;
    loginUsuario(loginUserDto: LoginUserDto): Promise<object>;
    generateTokenJwt(usuarios: usuarios): Promise<string>;
    checkTokenJwt(token: string): Promise<any>;
}
