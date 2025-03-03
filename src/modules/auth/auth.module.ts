import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { CoreModule } from "src/core/core.module";
import { TokenService } from "src/core/services/token.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaAssinaturas } from "src/prisma/prisma.service";

@Module({
  imports: [
    PrismaModule,
    CoreModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: "1h",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService, PrismaAssinaturas],
})
export class AuthModule {}
