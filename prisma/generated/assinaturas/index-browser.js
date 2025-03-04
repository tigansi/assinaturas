
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminsScalarFieldEnum = {
  id: 'id',
  nome_admin: 'nome_admin',
  usuario_admin: 'usuario_admin',
  is_ativo: 'is_ativo'
};

exports.Prisma.OrganizacaoScalarFieldEnum = {
  id: 'id',
  nome_organizacao: 'nome_organizacao',
  usuario_criacao: 'usuario_criacao',
  is_ativo: 'is_ativo'
};

exports.Prisma.Usuarios_organizacaoScalarFieldEnum = {
  id: 'id',
  organizacao_id: 'organizacao_id',
  usuarios_id: 'usuarios_id'
};

exports.Prisma.Chaves_apiScalarFieldEnum = {
  id: 'id',
  chave_api: 'chave_api',
  is_ativo: 'is_ativo',
  organizacao_id: 'organizacao_id'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  nascimento: 'nascimento',
  senha: 'senha',
  token: 'token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  tipo_acesso: 'tipo_acesso',
  is_ativo: 'is_ativo'
};

exports.Prisma.Jwt_tokenScalarFieldEnum = {
  id: 'id',
  jwt_token: 'jwt_token',
  usuarios_id: 'usuarios_id'
};

exports.Prisma.TemplatesScalarFieldEnum = {
  id: 'id',
  nome_template: 'nome_template',
  diretorio_arquivo: 'diretorio_arquivo',
  token_template: 'token_template',
  created_at: 'created_at',
  is_ativo: 'is_ativo',
  usuarios_id: 'usuarios_id'
};

exports.Prisma.Variaveis_templateScalarFieldEnum = {
  id: 'id',
  nome_variavel: 'nome_variavel',
  templates_id: 'templates_id'
};

exports.Prisma.Status_documentosScalarFieldEnum = {
  id: 'id',
  status_documento: 'status_documento'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.adminsOrderByRelevanceFieldEnum = {
  nome_admin: 'nome_admin',
  usuario_admin: 'usuario_admin'
};

exports.Prisma.organizacaoOrderByRelevanceFieldEnum = {
  nome_organizacao: 'nome_organizacao',
  usuario_criacao: 'usuario_criacao'
};

exports.Prisma.chaves_apiOrderByRelevanceFieldEnum = {
  chave_api: 'chave_api'
};

exports.Prisma.usuariosOrderByRelevanceFieldEnum = {
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  token: 'token',
  tipo_acesso: 'tipo_acesso'
};

exports.Prisma.jwt_tokenOrderByRelevanceFieldEnum = {
  jwt_token: 'jwt_token'
};

exports.Prisma.templatesOrderByRelevanceFieldEnum = {
  nome_template: 'nome_template',
  diretorio_arquivo: 'diretorio_arquivo',
  token_template: 'token_template'
};

exports.Prisma.variaveis_templateOrderByRelevanceFieldEnum = {
  nome_variavel: 'nome_variavel'
};


exports.Prisma.ModelName = {
  admins: 'admins',
  organizacao: 'organizacao',
  usuarios_organizacao: 'usuarios_organizacao',
  chaves_api: 'chaves_api',
  usuarios: 'usuarios',
  jwt_token: 'jwt_token',
  templates: 'templates',
  variaveis_template: 'variaveis_template',
  status_documentos: 'status_documentos'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
