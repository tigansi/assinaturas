import { Module } from "@nestjs/common";
import { OrganizacaoService } from "./organizacao.service";
import { OrganizacaoController } from "./organizacao.controller";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { TokenService } from "src/core/services/token.service";
import { CoreModule } from "src/core/core.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [CoreModule, PrismaModule],
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService, PrismaAssinaturas, TokenService],
})
export class OrganizacaoModule {}
