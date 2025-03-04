import { Module } from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { TemplatesController } from "./templates.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { CoreModule } from "src/core/core.module";
import { UsuariosModule } from "../usuarios/usuarios.module";

@Module({
  imports: [PrismaModule, CoreModule, UsuariosModule],
  controllers: [TemplatesController],
  providers: [TemplatesService],
  exports: [TemplatesService],
})
export class TemplatesModule {}
