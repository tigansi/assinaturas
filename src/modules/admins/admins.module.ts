import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { PrismaAssinaturas } from 'src/prisma/prisma.service';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, PrismaAssinaturas],
})
export class AdminsModule {}
