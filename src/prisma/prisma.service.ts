import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientAssinaturas } from 'prisma/generated/assinaturas';

@Injectable()
export class PrismaAssinaturas
  extends PrismaClientAssinaturas
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }
  
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
