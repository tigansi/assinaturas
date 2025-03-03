import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user-dto";
import { JwtAuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(@Body() body: LoginUserDto) {
    try {
      const ret = await this.authService.loginUsuario(body);
      return {
        message: "Login realizado",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post("/auth_me")
  async authMe() {
    return {
      message: "ok",
    };
    //return await this.authService.checkTokenJwt(body.token);
  }

  @Post("/create")
  async create() {}
}
