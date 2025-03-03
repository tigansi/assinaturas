import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(@Body() body: LoginDto) {
    try {
      const ret = await this.authService.loginUser(body);
      return {
        message: "Login realizado",
        data: ret,
      };
    } catch (err) {
      throw err;
    }
  }
}
