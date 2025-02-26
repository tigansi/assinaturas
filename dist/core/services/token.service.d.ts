import { PrismaAssinaturas } from "src/prisma/prisma.service";
export declare class TokenService {
    private prismaAssinaturas;
    constructor(prismaAssinaturas: PrismaAssinaturas);
    generateToken(table: string, column: string): Promise<string>;
    criptografarSenha(senha: string): Promise<string>;
}
