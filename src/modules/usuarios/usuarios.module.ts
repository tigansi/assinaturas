import { Module } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { UsuariosController } from "./usuarios.controller";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { TokenService } from "src/core/services/token.service";
import { CoreModule } from "src/core/core.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [CoreModule, PrismaModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaAssinaturas, TokenService],
})
export class UsuariosModule {}
