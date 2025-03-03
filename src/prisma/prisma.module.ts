import { Module } from "@nestjs/common";
import { PrismaAssinaturas } from "./prisma.service";

@Module({
  providers: [PrismaAssinaturas],
  exports: [PrismaAssinaturas],
})
export class PrismaModule {}
