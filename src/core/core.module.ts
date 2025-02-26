import { Module } from "@nestjs/common";
import { PrismaAssinaturas } from "src/prisma/prisma.service";

@Module({
  providers: [PrismaAssinaturas],
})
export class CoreModule {}
