import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { TokenService } from "src/core/services/token.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_KEY as string,
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaAssinaturas, TokenService, JwtStrategy],
})
export class AuthModule {}
