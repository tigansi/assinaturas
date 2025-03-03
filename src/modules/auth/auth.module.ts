import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { PrismaAssinaturas } from "src/prisma/prisma.service";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaAssinaturas],
})
export class AuthModule {}
