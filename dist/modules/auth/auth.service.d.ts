import { JwtService } from "@nestjs/jwt";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
export declare class AuthService {
    private readonly jwtService;
    private readonly prismaAssinaturas;
    constructor(jwtService: JwtService, prismaAssinaturas: PrismaAssinaturas);
}
