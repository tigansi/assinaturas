import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { OrganizacaoModule } from './modules/organizacao/organizacao.module';
import { AdminsModule } from './modules/admins/admins.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [PrismaModule, AuthModule, UsuariosModule, OrganizacaoModule, AdminsModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
