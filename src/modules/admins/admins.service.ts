import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaAssinaturas } from 'src/prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin-dto';

@Injectable()
export class AdminsService {
  constructor(private prismaAssinaturas: PrismaAssinaturas) {}

  async createAdmin(createAdminDto: CreateAdminDto) {
    const admin = await this.prismaAssinaturas.admins.findFirst({
      where: {
        usuario_admin: createAdminDto.usuarioAdmin,
      },
    });

    if (admin) {
      throw new HttpException('Admin já cadastrado', HttpStatus.CONFLICT);
    }

    const cad = await this.prismaAssinaturas.admins.create({
      data: {
        nome_admin: createAdminDto.nomeAdmin,
        usuario_admin: createAdminDto.usuarioAdmin,
      },
    });

    return cad;
  }
}
