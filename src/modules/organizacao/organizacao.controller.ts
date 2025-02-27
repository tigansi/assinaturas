import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { OrganizacaoService } from "./organizacao.service";
import { CreateOrganizacaoDto } from "./dto/create-organizacao-dto";
import { JwtAuthGuard } from "../auth/auth.guard";

@Controller("organizacao")
export class OrganizacaoController {
  constructor(private readonly organizacaoService: OrganizacaoService) {}

  @UseGuards(JwtAuthGuard)
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

  //@UseGuards(JwtAuthGuard)
  @Put("/create_token_org/:idOrg")
  async createTokenOrg(@Param("idOrg", ParseIntPipe) idOrg: number) {
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

  @UseGuards(JwtAuthGuard)
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

  //@UseGuards(JwtAuthGuard)
  @Put("/vincula_usuario/:idUser/:idOrg")
  async vinculaUsuario(
    @Param("idUser", ParseIntPipe) idUser: number,
    @Param("idOrg", ParseIntPipe) idOrg: number
  ) {
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
