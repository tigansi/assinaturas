import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin-dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/create')
  async create(@Body() body: CreateAdminDto) {
    try {
      const ret = await this.adminsService.createAdmin(body);
      return {
        message: 'Admin cadastrado com sucesso',
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }
}
