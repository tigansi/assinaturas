import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { UsuariosModule } from "./modules/usuarios/usuarios.module";
import { OrganizacaoModule } from "./modules/organizacao/organizacao.module";
import { AdminsModule } from "./modules/admins/admins.module";
import { CoreModule } from "./core/core.module";
import { TemplatesModule } from "./modules/templates/templates.module";
import { AuthModule } from "./modules/auth/auth.module";
import { DocumentosModule } from "./modules/documentos/documentos.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsuariosModule,
    OrganizacaoModule,
    AdminsModule,
    CoreModule,
    TemplatesModule,
    AuthModule,
    DocumentosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
