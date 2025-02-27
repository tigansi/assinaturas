import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientAssinaturas } from 'prisma/generated/assinaturas';
export declare class PrismaAssinaturas extends PrismaClientAssinaturas implements OnModuleInit, OnModuleDestroy {
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
