import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";

@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post("/create")
  async create(@Body() body: CreateUserDto) {
    try {
      const ret = await this.usuariosService.createUser(body);
      return {
        message: "Usuário cadastrado com sucesso",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }

  @Put("/update")
  async update(@Body() body: UpdateUserDto) {
    try {
    } catch (err) {
      throw err;
    }
  }

  @Put("/delete")
  async delete(@Param() id: number) {
    try {
      const ret = await this.usuariosService.deleteUser(id);
      return {
        message: "Usuário desativado",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }
}
