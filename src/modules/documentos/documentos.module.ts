import { Module } from "@nestjs/common";
import { DocumentosService } from "./documentos.service";
import { DocumentosController } from "./documentos.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { TemplatesModule } from "../templates/templates.module";

@Module({
  imports: [PrismaModule, TemplatesModule],
  controllers: [DocumentosController],
  providers: [DocumentosService],
})
export class DocumentosModule {}
