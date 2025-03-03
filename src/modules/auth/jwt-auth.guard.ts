import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(err, user, info, context: ExecutionContext) {
    if (err || !user) {
      let message = "Token de autenticação inválido ou ausente.";

      // Verifica o tipo do erro e personaliza a mensagem
      if (info?.name === "TokenExpiredError") {
        message = "Seu token expirou. Faça login novamente.";
      } else if (info?.name === "JsonWebTokenError") {
        message = "Token inválido. Por favor, forneça um token válido.";
      } else if (info?.name === "NotBeforeError") {
        message = "O token ainda não é válido. Verifique a hora de emissão.";
      }

      throw new UnauthorizedException(message);
    }
    return user;
  }
}
