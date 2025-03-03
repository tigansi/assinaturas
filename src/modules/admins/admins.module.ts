import { Module } from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { AdminsController } from "./admins.controller";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [AdminsController],
  providers: [AdminsService, PrismaAssinaturas],
})
export class AdminsModule {}
