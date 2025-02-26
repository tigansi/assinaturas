import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaAssinaturas } from "src/prisma/prisma.service";
import { CreateAdminDto } from "./dto/create-admin-dto";

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
      throw new HttpException("Admin já cadastrado", HttpStatus.CONFLICT);
    }

    const cad = await this.prismaAssinaturas.admins.create({
      data: {
        nome_admin: createAdminDto.nomeAdmin,
        usuario_admin: createAdminDto.usuarioAdmin,
      },
    });

    return cad;
  }

  async deleteAdmin(id: number) {
    const adm = await this.prismaAssinaturas.admins.findUnique({
      where: {
        id: id,
      },
    });

    if (!adm) {
      throw new HttpException("Admin não encontrado", HttpStatus.NOT_FOUND);
    }

    if (!adm.is_ativo) {
      throw new HttpException("Admin já desativado", HttpStatus.CONFLICT);
    }

    const delAdmin = await this.prismaAssinaturas.admins.updateMany({
      where: {
        id: id,
      },
      data: {
        is_ativo: false,
      },
    });

    return delAdmin;
  }
}
