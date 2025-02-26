import { Module } from "@nestjs/common";
import { OrganizacaoService } from "./organizacao.service";
import { OrganizacaoController } from "./organizacao.controller";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { TokenService } from "src/core/services/token.service";

@Module({
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService, PrismaAssinaturas, TokenService],
})
export class OrganizacaoModule {}
