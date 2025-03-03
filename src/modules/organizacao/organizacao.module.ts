import { Module } from "@nestjs/common";
import { OrganizacaoService } from "./organizacao.service";
import { OrganizacaoController } from "./organizacao.controller";
import { CoreModule } from "src/core/core.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [CoreModule, PrismaModule],
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService],
})
export class OrganizacaoModule {}
