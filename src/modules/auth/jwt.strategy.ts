import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const secretKey = configService.get<string>("JWT_KEY");

    if (!secretKey) {
      throw new Error("JWT_KEY não definida no ambiente");
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey, // Agora sabemos que secretKey nunca será undefined
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
