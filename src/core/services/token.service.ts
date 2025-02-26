import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaAssinaturas } from "src/prisma/prisma.service";

import * as bcrypt from "bcrypt";

@Injectable()
export class TokenService {
  constructor(private prismaAssinaturas: PrismaAssinaturas) {}

  async generateToken(table: string, column: string): Promise<string> {
    let token: string;
    let exists: boolean;

    do {
      token = `${randomUUID()}${randomUUID().slice(0, 2)}`; // Gera um UUID v4 + sufixo extra
      exists =
        (await this.prismaAssinaturas[table].findUnique({
          where: { [column]: token },
        })) !== null;
    } while (exists);

    return token;
  }

  async criptografarSenha(senha: string): Promise<string> {
    return await bcrypt.hash(senha, 10);
  }
}
