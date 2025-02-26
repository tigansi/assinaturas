import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { OrganizacaoService } from "./organizacao.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";

@Controller("organizacao")
export class OrganizacaoController {
  constructor(private readonly organizacaoService: OrganizacaoService) {}

  @Post("/create")
  async create(@Body() body: CreateOrganizacaoDto) {
    try {
      const ret = await this.organizacaoService.createOrganizacao(body);
      return {
        message: "Organizacao criada com sucesso",
        dados: ret,
      };
    } catch (err) {
      throw err;
    }
  }

  @Put("/create_token_org/:idOrg")
  async createTokenOrg(@Param() idOrg: number) {
    try {
      const ret = await this.organizacaoService.createTokenOrg(idOrg);
      return {
        message: "Chave de api criada",
        dados: ret,
      };
    } catch (err) {
      throw err;
    }
  }

  @Put("/delete/:id")
  async deleteOrg(@Param() idOrg: number) {
    try {
      const ret = await this.organizacaoService.deletaOrg(idOrg);
      return {
        message: "Organização desativada",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }

  @Put("/vincula_usuario/:idUser/:idOrg")
  async vinculaUsuario(@Param() idUser: number, idOrg: number) {
    try {
      const ret = await this.organizacaoService.vinculaUsuarios(idOrg, idUser);
      return {
        message: "Vinculação realizada",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }
}
