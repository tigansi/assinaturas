import { Module } from '@nestjs/common';
import { OrganizacaoService } from './organizacao.service';
import { OrganizacaoController } from './organizacao.controller';
import { PrismaAssinaturas } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService, PrismaAssinaturas],
})
export class OrganizacaoModule {}
