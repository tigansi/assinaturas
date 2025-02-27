
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model organizacao
 * 
 */
export type organizacao = $Result.DefaultSelection<Prisma.$organizacaoPayload>
/**
 * Model usuarios_organizacao
 * 
 */
export type usuarios_organizacao = $Result.DefaultSelection<Prisma.$usuarios_organizacaoPayload>
/**
 * Model chaves_api
 * 
 */
export type chaves_api = $Result.DefaultSelection<Prisma.$chaves_apiPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model jwt_token
 * 
 */
export type jwt_token = $Result.DefaultSelection<Prisma.$jwt_tokenPayload>
/**
 * Model templates
 * 
 */
export type templates = $Result.DefaultSelection<Prisma.$templatesPayload>
/**
 * Model variaveis_template
 * 
 */
export type variaveis_template = $Result.DefaultSelection<Prisma.$variaveis_templatePayload>
/**
 * Model status_documentos
 * 
 */
export type status_documentos = $Result.DefaultSelection<Prisma.$status_documentosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admins.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizacao`: Exposes CRUD operations for the **organizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizacaos
    * const organizacaos = await prisma.organizacao.findMany()
    * ```
    */
  get organizacao(): Prisma.organizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios_organizacao`: Exposes CRUD operations for the **usuarios_organizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios_organizacaos
    * const usuarios_organizacaos = await prisma.usuarios_organizacao.findMany()
    * ```
    */
  get usuarios_organizacao(): Prisma.usuarios_organizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chaves_api`: Exposes CRUD operations for the **chaves_api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chaves_apis
    * const chaves_apis = await prisma.chaves_api.findMany()
    * ```
    */
  get chaves_api(): Prisma.chaves_apiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwt_token`: Exposes CRUD operations for the **jwt_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jwt_tokens
    * const jwt_tokens = await prisma.jwt_token.findMany()
    * ```
    */
  get jwt_token(): Prisma.jwt_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templates`: Exposes CRUD operations for the **templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.templates.findMany()
    * ```
    */
  get templates(): Prisma.templatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variaveis_template`: Exposes CRUD operations for the **variaveis_template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variaveis_templates
    * const variaveis_templates = await prisma.variaveis_template.findMany()
    * ```
    */
  get variaveis_template(): Prisma.variaveis_templateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status_documentos`: Exposes CRUD operations for the **status_documentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Status_documentos
    * const status_documentos = await prisma.status_documentos.findMany()
    * ```
    */
  get status_documentos(): Prisma.status_documentosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admins" | "organizacao" | "usuarios_organizacao" | "chaves_api" | "usuarios" | "jwt_token" | "templates" | "variaveis_template" | "status_documentos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      organizacao: {
        payload: Prisma.$organizacaoPayload<ExtArgs>
        fields: Prisma.organizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          findFirst: {
            args: Prisma.organizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          findMany: {
            args: Prisma.organizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>[]
          }
          create: {
            args: Prisma.organizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          createMany: {
            args: Prisma.organizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.organizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          update: {
            args: Prisma.organizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          deleteMany: {
            args: Prisma.organizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          aggregate: {
            args: Prisma.OrganizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizacao>
          }
          groupBy: {
            args: Prisma.organizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizacaoCountAggregateOutputType> | number
          }
        }
      }
      usuarios_organizacao: {
        payload: Prisma.$usuarios_organizacaoPayload<ExtArgs>
        fields: Prisma.usuarios_organizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarios_organizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarios_organizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>
          }
          findFirst: {
            args: Prisma.usuarios_organizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarios_organizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>
          }
          findMany: {
            args: Prisma.usuarios_organizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>[]
          }
          create: {
            args: Prisma.usuarios_organizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>
          }
          createMany: {
            args: Prisma.usuarios_organizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarios_organizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>
          }
          update: {
            args: Prisma.usuarios_organizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>
          }
          deleteMany: {
            args: Prisma.usuarios_organizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarios_organizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarios_organizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_organizacaoPayload>
          }
          aggregate: {
            args: Prisma.Usuarios_organizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios_organizacao>
          }
          groupBy: {
            args: Prisma.usuarios_organizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuarios_organizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarios_organizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Usuarios_organizacaoCountAggregateOutputType> | number
          }
        }
      }
      chaves_api: {
        payload: Prisma.$chaves_apiPayload<ExtArgs>
        fields: Prisma.chaves_apiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chaves_apiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chaves_apiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>
          }
          findFirst: {
            args: Prisma.chaves_apiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chaves_apiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>
          }
          findMany: {
            args: Prisma.chaves_apiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>[]
          }
          create: {
            args: Prisma.chaves_apiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>
          }
          createMany: {
            args: Prisma.chaves_apiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chaves_apiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>
          }
          update: {
            args: Prisma.chaves_apiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>
          }
          deleteMany: {
            args: Prisma.chaves_apiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chaves_apiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chaves_apiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chaves_apiPayload>
          }
          aggregate: {
            args: Prisma.Chaves_apiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChaves_api>
          }
          groupBy: {
            args: Prisma.chaves_apiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chaves_apiGroupByOutputType>[]
          }
          count: {
            args: Prisma.chaves_apiCountArgs<ExtArgs>
            result: $Utils.Optional<Chaves_apiCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      jwt_token: {
        payload: Prisma.$jwt_tokenPayload<ExtArgs>
        fields: Prisma.jwt_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jwt_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jwt_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>
          }
          findFirst: {
            args: Prisma.jwt_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jwt_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>
          }
          findMany: {
            args: Prisma.jwt_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>[]
          }
          create: {
            args: Prisma.jwt_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>
          }
          createMany: {
            args: Prisma.jwt_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jwt_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>
          }
          update: {
            args: Prisma.jwt_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>
          }
          deleteMany: {
            args: Prisma.jwt_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jwt_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jwt_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jwt_tokenPayload>
          }
          aggregate: {
            args: Prisma.Jwt_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwt_token>
          }
          groupBy: {
            args: Prisma.jwt_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jwt_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.jwt_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Jwt_tokenCountAggregateOutputType> | number
          }
        }
      }
      templates: {
        payload: Prisma.$templatesPayload<ExtArgs>
        fields: Prisma.templatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.templatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.templatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          findFirst: {
            args: Prisma.templatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.templatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          findMany: {
            args: Prisma.templatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>[]
          }
          create: {
            args: Prisma.templatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          createMany: {
            args: Prisma.templatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.templatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          update: {
            args: Prisma.templatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          deleteMany: {
            args: Prisma.templatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.templatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.templatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          aggregate: {
            args: Prisma.TemplatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplates>
          }
          groupBy: {
            args: Prisma.templatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.templatesCountArgs<ExtArgs>
            result: $Utils.Optional<TemplatesCountAggregateOutputType> | number
          }
        }
      }
      variaveis_template: {
        payload: Prisma.$variaveis_templatePayload<ExtArgs>
        fields: Prisma.variaveis_templateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variaveis_templateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variaveis_templateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>
          }
          findFirst: {
            args: Prisma.variaveis_templateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variaveis_templateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>
          }
          findMany: {
            args: Prisma.variaveis_templateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>[]
          }
          create: {
            args: Prisma.variaveis_templateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>
          }
          createMany: {
            args: Prisma.variaveis_templateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.variaveis_templateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>
          }
          update: {
            args: Prisma.variaveis_templateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>
          }
          deleteMany: {
            args: Prisma.variaveis_templateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variaveis_templateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.variaveis_templateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variaveis_templatePayload>
          }
          aggregate: {
            args: Prisma.Variaveis_templateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariaveis_template>
          }
          groupBy: {
            args: Prisma.variaveis_templateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Variaveis_templateGroupByOutputType>[]
          }
          count: {
            args: Prisma.variaveis_templateCountArgs<ExtArgs>
            result: $Utils.Optional<Variaveis_templateCountAggregateOutputType> | number
          }
        }
      }
      status_documentos: {
        payload: Prisma.$status_documentosPayload<ExtArgs>
        fields: Prisma.status_documentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.status_documentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.status_documentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>
          }
          findFirst: {
            args: Prisma.status_documentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.status_documentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>
          }
          findMany: {
            args: Prisma.status_documentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>[]
          }
          create: {
            args: Prisma.status_documentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>
          }
          createMany: {
            args: Prisma.status_documentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.status_documentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>
          }
          update: {
            args: Prisma.status_documentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>
          }
          deleteMany: {
            args: Prisma.status_documentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.status_documentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.status_documentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$status_documentosPayload>
          }
          aggregate: {
            args: Prisma.Status_documentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus_documentos>
          }
          groupBy: {
            args: Prisma.status_documentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Status_documentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.status_documentosCountArgs<ExtArgs>
            result: $Utils.Optional<Status_documentosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admins?: adminsOmit
    organizacao?: organizacaoOmit
    usuarios_organizacao?: usuarios_organizacaoOmit
    chaves_api?: chaves_apiOmit
    usuarios?: usuariosOmit
    jwt_token?: jwt_tokenOmit
    templates?: templatesOmit
    variaveis_template?: variaveis_templateOmit
    status_documentos?: status_documentosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizacaoCountOutputType
   */

  export type OrganizacaoCountOutputType = {
    chaves_api: number
    usuarios_organizacao: number
  }

  export type OrganizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chaves_api?: boolean | OrganizacaoCountOutputTypeCountChaves_apiArgs
    usuarios_organizacao?: boolean | OrganizacaoCountOutputTypeCountUsuarios_organizacaoArgs
  }

  // Custom InputTypes
  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizacaoCountOutputType
     */
    select?: OrganizacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountChaves_apiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chaves_apiWhereInput
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountUsuarios_organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_organizacaoWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    jwt_token: number
    templates: number
    usuarios_organizacao: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jwt_token?: boolean | UsuariosCountOutputTypeCountJwt_tokenArgs
    templates?: boolean | UsuariosCountOutputTypeCountTemplatesArgs
    usuarios_organizacao?: boolean | UsuariosCountOutputTypeCountUsuarios_organizacaoArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountJwt_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jwt_tokenWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templatesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarios_organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_organizacaoWhereInput
  }


  /**
   * Count Type TemplatesCountOutputType
   */

  export type TemplatesCountOutputType = {
    variaveis_template: number
  }

  export type TemplatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variaveis_template?: boolean | TemplatesCountOutputTypeCountVariaveis_templateArgs
  }

  // Custom InputTypes
  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatesCountOutputType
     */
    select?: TemplatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeCountVariaveis_templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variaveis_templateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    id: number | null
    nome_admin: string | null
    usuario_admin: string | null
    is_ativo: boolean | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: number | null
    nome_admin: string | null
    usuario_admin: string | null
    is_ativo: boolean | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    nome_admin: number
    usuario_admin: number
    is_ativo: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    id?: true
  }

  export type AdminsSumAggregateInputType = {
    id?: true
  }

  export type AdminsMinAggregateInputType = {
    id?: true
    nome_admin?: true
    usuario_admin?: true
    is_ativo?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    nome_admin?: true
    usuario_admin?: true
    is_ativo?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    nome_admin?: true
    usuario_admin?: true
    is_ativo?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: number
    nome_admin: string
    usuario_admin: string
    is_ativo: boolean
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_admin?: boolean
    usuario_admin?: boolean
    is_ativo?: boolean
  }, ExtArgs["result"]["admins"]>



  export type adminsSelectScalar = {
    id?: boolean
    nome_admin?: boolean
    usuario_admin?: boolean
    is_ativo?: boolean
  }

  export type adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_admin" | "usuario_admin" | "is_ativo", ExtArgs["result"]["admins"]>

  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_admin: string
      usuario_admin: string
      is_ativo: boolean
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminsFindManyArgs>(args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends adminsCreateArgs>(args: SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminsCreateManyArgs>(args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends adminsDeleteArgs>(args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminsUpdateArgs>(args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminsDeleteManyArgs>(args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminsUpdateManyArgs>(args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admins model
   */ 
  interface adminsFieldRefs {
    readonly id: FieldRef<"admins", 'Int'>
    readonly nome_admin: FieldRef<"admins", 'String'>
    readonly usuario_admin: FieldRef<"admins", 'String'>
    readonly is_ativo: FieldRef<"admins", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }

  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
  }


  /**
   * Model organizacao
   */

  export type AggregateOrganizacao = {
    _count: OrganizacaoCountAggregateOutputType | null
    _avg: OrganizacaoAvgAggregateOutputType | null
    _sum: OrganizacaoSumAggregateOutputType | null
    _min: OrganizacaoMinAggregateOutputType | null
    _max: OrganizacaoMaxAggregateOutputType | null
  }

  export type OrganizacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizacaoSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizacaoMinAggregateOutputType = {
    id: number | null
    nome_organizacao: string | null
    usuario_criacao: string | null
    is_ativo: boolean | null
  }

  export type OrganizacaoMaxAggregateOutputType = {
    id: number | null
    nome_organizacao: string | null
    usuario_criacao: string | null
    is_ativo: boolean | null
  }

  export type OrganizacaoCountAggregateOutputType = {
    id: number
    nome_organizacao: number
    usuario_criacao: number
    is_ativo: number
    _all: number
  }


  export type OrganizacaoAvgAggregateInputType = {
    id?: true
  }

  export type OrganizacaoSumAggregateInputType = {
    id?: true
  }

  export type OrganizacaoMinAggregateInputType = {
    id?: true
    nome_organizacao?: true
    usuario_criacao?: true
    is_ativo?: true
  }

  export type OrganizacaoMaxAggregateInputType = {
    id?: true
    nome_organizacao?: true
    usuario_criacao?: true
    is_ativo?: true
  }

  export type OrganizacaoCountAggregateInputType = {
    id?: true
    nome_organizacao?: true
    usuario_criacao?: true
    is_ativo?: true
    _all?: true
  }

  export type OrganizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizacao to aggregate.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizacaos
    **/
    _count?: true | OrganizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizacaoMaxAggregateInputType
  }

  export type GetOrganizacaoAggregateType<T extends OrganizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizacao[P]>
      : GetScalarType<T[P], AggregateOrganizacao[P]>
  }




  export type organizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizacaoWhereInput
    orderBy?: organizacaoOrderByWithAggregationInput | organizacaoOrderByWithAggregationInput[]
    by: OrganizacaoScalarFieldEnum[] | OrganizacaoScalarFieldEnum
    having?: organizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizacaoCountAggregateInputType | true
    _avg?: OrganizacaoAvgAggregateInputType
    _sum?: OrganizacaoSumAggregateInputType
    _min?: OrganizacaoMinAggregateInputType
    _max?: OrganizacaoMaxAggregateInputType
  }

  export type OrganizacaoGroupByOutputType = {
    id: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo: boolean
    _count: OrganizacaoCountAggregateOutputType | null
    _avg: OrganizacaoAvgAggregateOutputType | null
    _sum: OrganizacaoSumAggregateOutputType | null
    _min: OrganizacaoMinAggregateOutputType | null
    _max: OrganizacaoMaxAggregateOutputType | null
  }

  type GetOrganizacaoGroupByPayload<T extends organizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizacaoGroupByOutputType[P]>
        }
      >
    >


  export type organizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_organizacao?: boolean
    usuario_criacao?: boolean
    is_ativo?: boolean
    chaves_api?: boolean | organizacao$chaves_apiArgs<ExtArgs>
    usuarios_organizacao?: boolean | organizacao$usuarios_organizacaoArgs<ExtArgs>
    _count?: boolean | OrganizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizacao"]>



  export type organizacaoSelectScalar = {
    id?: boolean
    nome_organizacao?: boolean
    usuario_criacao?: boolean
    is_ativo?: boolean
  }

  export type organizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_organizacao" | "usuario_criacao" | "is_ativo", ExtArgs["result"]["organizacao"]>
  export type organizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chaves_api?: boolean | organizacao$chaves_apiArgs<ExtArgs>
    usuarios_organizacao?: boolean | organizacao$usuarios_organizacaoArgs<ExtArgs>
    _count?: boolean | OrganizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $organizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizacao"
    objects: {
      chaves_api: Prisma.$chaves_apiPayload<ExtArgs>[]
      usuarios_organizacao: Prisma.$usuarios_organizacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_organizacao: string
      usuario_criacao: string
      is_ativo: boolean
    }, ExtArgs["result"]["organizacao"]>
    composites: {}
  }

  type organizacaoGetPayload<S extends boolean | null | undefined | organizacaoDefaultArgs> = $Result.GetResult<Prisma.$organizacaoPayload, S>

  type organizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizacaoCountAggregateInputType | true
    }

  export interface organizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizacao'], meta: { name: 'organizacao' } }
    /**
     * Find zero or one Organizacao that matches the filter.
     * @param {organizacaoFindUniqueArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizacaoFindUniqueArgs>(args: SelectSubset<T, organizacaoFindUniqueArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Organizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizacaoFindUniqueOrThrowArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, organizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Organizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoFindFirstArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizacaoFindFirstArgs>(args?: SelectSubset<T, organizacaoFindFirstArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Organizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoFindFirstOrThrowArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, organizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Organizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizacaos
     * const organizacaos = await prisma.organizacao.findMany()
     * 
     * // Get first 10 Organizacaos
     * const organizacaos = await prisma.organizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizacaoWithIdOnly = await prisma.organizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizacaoFindManyArgs>(args?: SelectSubset<T, organizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Organizacao.
     * @param {organizacaoCreateArgs} args - Arguments to create a Organizacao.
     * @example
     * // Create one Organizacao
     * const Organizacao = await prisma.organizacao.create({
     *   data: {
     *     // ... data to create a Organizacao
     *   }
     * })
     * 
     */
    create<T extends organizacaoCreateArgs>(args: SelectSubset<T, organizacaoCreateArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Organizacaos.
     * @param {organizacaoCreateManyArgs} args - Arguments to create many Organizacaos.
     * @example
     * // Create many Organizacaos
     * const organizacao = await prisma.organizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizacaoCreateManyArgs>(args?: SelectSubset<T, organizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organizacao.
     * @param {organizacaoDeleteArgs} args - Arguments to delete one Organizacao.
     * @example
     * // Delete one Organizacao
     * const Organizacao = await prisma.organizacao.delete({
     *   where: {
     *     // ... filter to delete one Organizacao
     *   }
     * })
     * 
     */
    delete<T extends organizacaoDeleteArgs>(args: SelectSubset<T, organizacaoDeleteArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Organizacao.
     * @param {organizacaoUpdateArgs} args - Arguments to update one Organizacao.
     * @example
     * // Update one Organizacao
     * const organizacao = await prisma.organizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizacaoUpdateArgs>(args: SelectSubset<T, organizacaoUpdateArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Organizacaos.
     * @param {organizacaoDeleteManyArgs} args - Arguments to filter Organizacaos to delete.
     * @example
     * // Delete a few Organizacaos
     * const { count } = await prisma.organizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizacaoDeleteManyArgs>(args?: SelectSubset<T, organizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizacaos
     * const organizacao = await prisma.organizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizacaoUpdateManyArgs>(args: SelectSubset<T, organizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizacao.
     * @param {organizacaoUpsertArgs} args - Arguments to update or create a Organizacao.
     * @example
     * // Update or create a Organizacao
     * const organizacao = await prisma.organizacao.upsert({
     *   create: {
     *     // ... data to create a Organizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizacao we want to update
     *   }
     * })
     */
    upsert<T extends organizacaoUpsertArgs>(args: SelectSubset<T, organizacaoUpsertArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoCountArgs} args - Arguments to filter Organizacaos to count.
     * @example
     * // Count the number of Organizacaos
     * const count = await prisma.organizacao.count({
     *   where: {
     *     // ... the filter for the Organizacaos we want to count
     *   }
     * })
    **/
    count<T extends organizacaoCountArgs>(
      args?: Subset<T, organizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizacaoAggregateArgs>(args: Subset<T, OrganizacaoAggregateArgs>): Prisma.PrismaPromise<GetOrganizacaoAggregateType<T>>

    /**
     * Group by Organizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizacaoGroupByArgs['orderBy'] }
        : { orderBy?: organizacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizacao model
   */
  readonly fields: organizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chaves_api<T extends organizacao$chaves_apiArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$chaves_apiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    usuarios_organizacao<T extends organizacao$usuarios_organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$usuarios_organizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizacao model
   */ 
  interface organizacaoFieldRefs {
    readonly id: FieldRef<"organizacao", 'Int'>
    readonly nome_organizacao: FieldRef<"organizacao", 'String'>
    readonly usuario_criacao: FieldRef<"organizacao", 'String'>
    readonly is_ativo: FieldRef<"organizacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * organizacao findUnique
   */
  export type organizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao findUniqueOrThrow
   */
  export type organizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao findFirst
   */
  export type organizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizacaos.
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizacaos.
     */
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * organizacao findFirstOrThrow
   */
  export type organizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizacaos.
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizacaos.
     */
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * organizacao findMany
   */
  export type organizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacaos to fetch.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizacaos.
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * organizacao create
   */
  export type organizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a organizacao.
     */
    data: XOR<organizacaoCreateInput, organizacaoUncheckedCreateInput>
  }

  /**
   * organizacao createMany
   */
  export type organizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizacaos.
     */
    data: organizacaoCreateManyInput | organizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizacao update
   */
  export type organizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a organizacao.
     */
    data: XOR<organizacaoUpdateInput, organizacaoUncheckedUpdateInput>
    /**
     * Choose, which organizacao to update.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao updateMany
   */
  export type organizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizacaos.
     */
    data: XOR<organizacaoUpdateManyMutationInput, organizacaoUncheckedUpdateManyInput>
    /**
     * Filter which organizacaos to update
     */
    where?: organizacaoWhereInput
    /**
     * Limit how many organizacaos to update.
     */
    limit?: number
  }

  /**
   * organizacao upsert
   */
  export type organizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the organizacao to update in case it exists.
     */
    where: organizacaoWhereUniqueInput
    /**
     * In case the organizacao found by the `where` argument doesn't exist, create a new organizacao with this data.
     */
    create: XOR<organizacaoCreateInput, organizacaoUncheckedCreateInput>
    /**
     * In case the organizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizacaoUpdateInput, organizacaoUncheckedUpdateInput>
  }

  /**
   * organizacao delete
   */
  export type organizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter which organizacao to delete.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao deleteMany
   */
  export type organizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizacaos to delete
     */
    where?: organizacaoWhereInput
    /**
     * Limit how many organizacaos to delete.
     */
    limit?: number
  }

  /**
   * organizacao.chaves_api
   */
  export type organizacao$chaves_apiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    where?: chaves_apiWhereInput
    orderBy?: chaves_apiOrderByWithRelationInput | chaves_apiOrderByWithRelationInput[]
    cursor?: chaves_apiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chaves_apiScalarFieldEnum | Chaves_apiScalarFieldEnum[]
  }

  /**
   * organizacao.usuarios_organizacao
   */
  export type organizacao$usuarios_organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    where?: usuarios_organizacaoWhereInput
    orderBy?: usuarios_organizacaoOrderByWithRelationInput | usuarios_organizacaoOrderByWithRelationInput[]
    cursor?: usuarios_organizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuarios_organizacaoScalarFieldEnum | Usuarios_organizacaoScalarFieldEnum[]
  }

  /**
   * organizacao without action
   */
  export type organizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
  }


  /**
   * Model usuarios_organizacao
   */

  export type AggregateUsuarios_organizacao = {
    _count: Usuarios_organizacaoCountAggregateOutputType | null
    _avg: Usuarios_organizacaoAvgAggregateOutputType | null
    _sum: Usuarios_organizacaoSumAggregateOutputType | null
    _min: Usuarios_organizacaoMinAggregateOutputType | null
    _max: Usuarios_organizacaoMaxAggregateOutputType | null
  }

  export type Usuarios_organizacaoAvgAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    usuarios_id: number | null
  }

  export type Usuarios_organizacaoSumAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    usuarios_id: number | null
  }

  export type Usuarios_organizacaoMinAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    usuarios_id: number | null
  }

  export type Usuarios_organizacaoMaxAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    usuarios_id: number | null
  }

  export type Usuarios_organizacaoCountAggregateOutputType = {
    id: number
    organizacao_id: number
    usuarios_id: number
    _all: number
  }


  export type Usuarios_organizacaoAvgAggregateInputType = {
    id?: true
    organizacao_id?: true
    usuarios_id?: true
  }

  export type Usuarios_organizacaoSumAggregateInputType = {
    id?: true
    organizacao_id?: true
    usuarios_id?: true
  }

  export type Usuarios_organizacaoMinAggregateInputType = {
    id?: true
    organizacao_id?: true
    usuarios_id?: true
  }

  export type Usuarios_organizacaoMaxAggregateInputType = {
    id?: true
    organizacao_id?: true
    usuarios_id?: true
  }

  export type Usuarios_organizacaoCountAggregateInputType = {
    id?: true
    organizacao_id?: true
    usuarios_id?: true
    _all?: true
  }

  export type Usuarios_organizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_organizacao to aggregate.
     */
    where?: usuarios_organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_organizacaos to fetch.
     */
    orderBy?: usuarios_organizacaoOrderByWithRelationInput | usuarios_organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarios_organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios_organizacaos
    **/
    _count?: true | Usuarios_organizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuarios_organizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuarios_organizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuarios_organizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuarios_organizacaoMaxAggregateInputType
  }

  export type GetUsuarios_organizacaoAggregateType<T extends Usuarios_organizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios_organizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios_organizacao[P]>
      : GetScalarType<T[P], AggregateUsuarios_organizacao[P]>
  }




  export type usuarios_organizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_organizacaoWhereInput
    orderBy?: usuarios_organizacaoOrderByWithAggregationInput | usuarios_organizacaoOrderByWithAggregationInput[]
    by: Usuarios_organizacaoScalarFieldEnum[] | Usuarios_organizacaoScalarFieldEnum
    having?: usuarios_organizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuarios_organizacaoCountAggregateInputType | true
    _avg?: Usuarios_organizacaoAvgAggregateInputType
    _sum?: Usuarios_organizacaoSumAggregateInputType
    _min?: Usuarios_organizacaoMinAggregateInputType
    _max?: Usuarios_organizacaoMaxAggregateInputType
  }

  export type Usuarios_organizacaoGroupByOutputType = {
    id: number
    organizacao_id: number
    usuarios_id: number
    _count: Usuarios_organizacaoCountAggregateOutputType | null
    _avg: Usuarios_organizacaoAvgAggregateOutputType | null
    _sum: Usuarios_organizacaoSumAggregateOutputType | null
    _min: Usuarios_organizacaoMinAggregateOutputType | null
    _max: Usuarios_organizacaoMaxAggregateOutputType | null
  }

  type GetUsuarios_organizacaoGroupByPayload<T extends usuarios_organizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuarios_organizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuarios_organizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuarios_organizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Usuarios_organizacaoGroupByOutputType[P]>
        }
      >
    >


  export type usuarios_organizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    usuarios_id?: boolean
    id_usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    id_organizacao?: boolean | organizacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios_organizacao"]>



  export type usuarios_organizacaoSelectScalar = {
    id?: boolean
    organizacao_id?: boolean
    usuarios_id?: boolean
  }

  export type usuarios_organizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizacao_id" | "usuarios_id", ExtArgs["result"]["usuarios_organizacao"]>
  export type usuarios_organizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    id_organizacao?: boolean | organizacaoDefaultArgs<ExtArgs>
  }

  export type $usuarios_organizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios_organizacao"
    objects: {
      id_usuario: Prisma.$usuariosPayload<ExtArgs>
      id_organizacao: Prisma.$organizacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizacao_id: number
      usuarios_id: number
    }, ExtArgs["result"]["usuarios_organizacao"]>
    composites: {}
  }

  type usuarios_organizacaoGetPayload<S extends boolean | null | undefined | usuarios_organizacaoDefaultArgs> = $Result.GetResult<Prisma.$usuarios_organizacaoPayload, S>

  type usuarios_organizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarios_organizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuarios_organizacaoCountAggregateInputType | true
    }

  export interface usuarios_organizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios_organizacao'], meta: { name: 'usuarios_organizacao' } }
    /**
     * Find zero or one Usuarios_organizacao that matches the filter.
     * @param {usuarios_organizacaoFindUniqueArgs} args - Arguments to find a Usuarios_organizacao
     * @example
     * // Get one Usuarios_organizacao
     * const usuarios_organizacao = await prisma.usuarios_organizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarios_organizacaoFindUniqueArgs>(args: SelectSubset<T, usuarios_organizacaoFindUniqueArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Usuarios_organizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarios_organizacaoFindUniqueOrThrowArgs} args - Arguments to find a Usuarios_organizacao
     * @example
     * // Get one Usuarios_organizacao
     * const usuarios_organizacao = await prisma.usuarios_organizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarios_organizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarios_organizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Usuarios_organizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_organizacaoFindFirstArgs} args - Arguments to find a Usuarios_organizacao
     * @example
     * // Get one Usuarios_organizacao
     * const usuarios_organizacao = await prisma.usuarios_organizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarios_organizacaoFindFirstArgs>(args?: SelectSubset<T, usuarios_organizacaoFindFirstArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Usuarios_organizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_organizacaoFindFirstOrThrowArgs} args - Arguments to find a Usuarios_organizacao
     * @example
     * // Get one Usuarios_organizacao
     * const usuarios_organizacao = await prisma.usuarios_organizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarios_organizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarios_organizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Usuarios_organizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_organizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios_organizacaos
     * const usuarios_organizacaos = await prisma.usuarios_organizacao.findMany()
     * 
     * // Get first 10 Usuarios_organizacaos
     * const usuarios_organizacaos = await prisma.usuarios_organizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarios_organizacaoWithIdOnly = await prisma.usuarios_organizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarios_organizacaoFindManyArgs>(args?: SelectSubset<T, usuarios_organizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Usuarios_organizacao.
     * @param {usuarios_organizacaoCreateArgs} args - Arguments to create a Usuarios_organizacao.
     * @example
     * // Create one Usuarios_organizacao
     * const Usuarios_organizacao = await prisma.usuarios_organizacao.create({
     *   data: {
     *     // ... data to create a Usuarios_organizacao
     *   }
     * })
     * 
     */
    create<T extends usuarios_organizacaoCreateArgs>(args: SelectSubset<T, usuarios_organizacaoCreateArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Usuarios_organizacaos.
     * @param {usuarios_organizacaoCreateManyArgs} args - Arguments to create many Usuarios_organizacaos.
     * @example
     * // Create many Usuarios_organizacaos
     * const usuarios_organizacao = await prisma.usuarios_organizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarios_organizacaoCreateManyArgs>(args?: SelectSubset<T, usuarios_organizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios_organizacao.
     * @param {usuarios_organizacaoDeleteArgs} args - Arguments to delete one Usuarios_organizacao.
     * @example
     * // Delete one Usuarios_organizacao
     * const Usuarios_organizacao = await prisma.usuarios_organizacao.delete({
     *   where: {
     *     // ... filter to delete one Usuarios_organizacao
     *   }
     * })
     * 
     */
    delete<T extends usuarios_organizacaoDeleteArgs>(args: SelectSubset<T, usuarios_organizacaoDeleteArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Usuarios_organizacao.
     * @param {usuarios_organizacaoUpdateArgs} args - Arguments to update one Usuarios_organizacao.
     * @example
     * // Update one Usuarios_organizacao
     * const usuarios_organizacao = await prisma.usuarios_organizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarios_organizacaoUpdateArgs>(args: SelectSubset<T, usuarios_organizacaoUpdateArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Usuarios_organizacaos.
     * @param {usuarios_organizacaoDeleteManyArgs} args - Arguments to filter Usuarios_organizacaos to delete.
     * @example
     * // Delete a few Usuarios_organizacaos
     * const { count } = await prisma.usuarios_organizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarios_organizacaoDeleteManyArgs>(args?: SelectSubset<T, usuarios_organizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios_organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_organizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios_organizacaos
     * const usuarios_organizacao = await prisma.usuarios_organizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarios_organizacaoUpdateManyArgs>(args: SelectSubset<T, usuarios_organizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios_organizacao.
     * @param {usuarios_organizacaoUpsertArgs} args - Arguments to update or create a Usuarios_organizacao.
     * @example
     * // Update or create a Usuarios_organizacao
     * const usuarios_organizacao = await prisma.usuarios_organizacao.upsert({
     *   create: {
     *     // ... data to create a Usuarios_organizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios_organizacao we want to update
     *   }
     * })
     */
    upsert<T extends usuarios_organizacaoUpsertArgs>(args: SelectSubset<T, usuarios_organizacaoUpsertArgs<ExtArgs>>): Prisma__usuarios_organizacaoClient<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Usuarios_organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_organizacaoCountArgs} args - Arguments to filter Usuarios_organizacaos to count.
     * @example
     * // Count the number of Usuarios_organizacaos
     * const count = await prisma.usuarios_organizacao.count({
     *   where: {
     *     // ... the filter for the Usuarios_organizacaos we want to count
     *   }
     * })
    **/
    count<T extends usuarios_organizacaoCountArgs>(
      args?: Subset<T, usuarios_organizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuarios_organizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios_organizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuarios_organizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usuarios_organizacaoAggregateArgs>(args: Subset<T, Usuarios_organizacaoAggregateArgs>): Prisma.PrismaPromise<GetUsuarios_organizacaoAggregateType<T>>

    /**
     * Group by Usuarios_organizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_organizacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarios_organizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarios_organizacaoGroupByArgs['orderBy'] }
        : { orderBy?: usuarios_organizacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarios_organizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarios_organizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios_organizacao model
   */
  readonly fields: usuarios_organizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios_organizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarios_organizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    id_organizacao<T extends organizacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizacaoDefaultArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios_organizacao model
   */ 
  interface usuarios_organizacaoFieldRefs {
    readonly id: FieldRef<"usuarios_organizacao", 'Int'>
    readonly organizacao_id: FieldRef<"usuarios_organizacao", 'Int'>
    readonly usuarios_id: FieldRef<"usuarios_organizacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarios_organizacao findUnique
   */
  export type usuarios_organizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_organizacao to fetch.
     */
    where: usuarios_organizacaoWhereUniqueInput
  }

  /**
   * usuarios_organizacao findUniqueOrThrow
   */
  export type usuarios_organizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_organizacao to fetch.
     */
    where: usuarios_organizacaoWhereUniqueInput
  }

  /**
   * usuarios_organizacao findFirst
   */
  export type usuarios_organizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_organizacao to fetch.
     */
    where?: usuarios_organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_organizacaos to fetch.
     */
    orderBy?: usuarios_organizacaoOrderByWithRelationInput | usuarios_organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_organizacaos.
     */
    cursor?: usuarios_organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_organizacaos.
     */
    distinct?: Usuarios_organizacaoScalarFieldEnum | Usuarios_organizacaoScalarFieldEnum[]
  }

  /**
   * usuarios_organizacao findFirstOrThrow
   */
  export type usuarios_organizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_organizacao to fetch.
     */
    where?: usuarios_organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_organizacaos to fetch.
     */
    orderBy?: usuarios_organizacaoOrderByWithRelationInput | usuarios_organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_organizacaos.
     */
    cursor?: usuarios_organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_organizacaos.
     */
    distinct?: Usuarios_organizacaoScalarFieldEnum | Usuarios_organizacaoScalarFieldEnum[]
  }

  /**
   * usuarios_organizacao findMany
   */
  export type usuarios_organizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_organizacaos to fetch.
     */
    where?: usuarios_organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_organizacaos to fetch.
     */
    orderBy?: usuarios_organizacaoOrderByWithRelationInput | usuarios_organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios_organizacaos.
     */
    cursor?: usuarios_organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_organizacaos.
     */
    skip?: number
    distinct?: Usuarios_organizacaoScalarFieldEnum | Usuarios_organizacaoScalarFieldEnum[]
  }

  /**
   * usuarios_organizacao create
   */
  export type usuarios_organizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios_organizacao.
     */
    data: XOR<usuarios_organizacaoCreateInput, usuarios_organizacaoUncheckedCreateInput>
  }

  /**
   * usuarios_organizacao createMany
   */
  export type usuarios_organizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios_organizacaos.
     */
    data: usuarios_organizacaoCreateManyInput | usuarios_organizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios_organizacao update
   */
  export type usuarios_organizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios_organizacao.
     */
    data: XOR<usuarios_organizacaoUpdateInput, usuarios_organizacaoUncheckedUpdateInput>
    /**
     * Choose, which usuarios_organizacao to update.
     */
    where: usuarios_organizacaoWhereUniqueInput
  }

  /**
   * usuarios_organizacao updateMany
   */
  export type usuarios_organizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios_organizacaos.
     */
    data: XOR<usuarios_organizacaoUpdateManyMutationInput, usuarios_organizacaoUncheckedUpdateManyInput>
    /**
     * Filter which usuarios_organizacaos to update
     */
    where?: usuarios_organizacaoWhereInput
    /**
     * Limit how many usuarios_organizacaos to update.
     */
    limit?: number
  }

  /**
   * usuarios_organizacao upsert
   */
  export type usuarios_organizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios_organizacao to update in case it exists.
     */
    where: usuarios_organizacaoWhereUniqueInput
    /**
     * In case the usuarios_organizacao found by the `where` argument doesn't exist, create a new usuarios_organizacao with this data.
     */
    create: XOR<usuarios_organizacaoCreateInput, usuarios_organizacaoUncheckedCreateInput>
    /**
     * In case the usuarios_organizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarios_organizacaoUpdateInput, usuarios_organizacaoUncheckedUpdateInput>
  }

  /**
   * usuarios_organizacao delete
   */
  export type usuarios_organizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    /**
     * Filter which usuarios_organizacao to delete.
     */
    where: usuarios_organizacaoWhereUniqueInput
  }

  /**
   * usuarios_organizacao deleteMany
   */
  export type usuarios_organizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_organizacaos to delete
     */
    where?: usuarios_organizacaoWhereInput
    /**
     * Limit how many usuarios_organizacaos to delete.
     */
    limit?: number
  }

  /**
   * usuarios_organizacao without action
   */
  export type usuarios_organizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
  }


  /**
   * Model chaves_api
   */

  export type AggregateChaves_api = {
    _count: Chaves_apiCountAggregateOutputType | null
    _avg: Chaves_apiAvgAggregateOutputType | null
    _sum: Chaves_apiSumAggregateOutputType | null
    _min: Chaves_apiMinAggregateOutputType | null
    _max: Chaves_apiMaxAggregateOutputType | null
  }

  export type Chaves_apiAvgAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
  }

  export type Chaves_apiSumAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
  }

  export type Chaves_apiMinAggregateOutputType = {
    id: number | null
    chave_api: string | null
    is_ativo: boolean | null
    organizacao_id: number | null
  }

  export type Chaves_apiMaxAggregateOutputType = {
    id: number | null
    chave_api: string | null
    is_ativo: boolean | null
    organizacao_id: number | null
  }

  export type Chaves_apiCountAggregateOutputType = {
    id: number
    chave_api: number
    is_ativo: number
    organizacao_id: number
    _all: number
  }


  export type Chaves_apiAvgAggregateInputType = {
    id?: true
    organizacao_id?: true
  }

  export type Chaves_apiSumAggregateInputType = {
    id?: true
    organizacao_id?: true
  }

  export type Chaves_apiMinAggregateInputType = {
    id?: true
    chave_api?: true
    is_ativo?: true
    organizacao_id?: true
  }

  export type Chaves_apiMaxAggregateInputType = {
    id?: true
    chave_api?: true
    is_ativo?: true
    organizacao_id?: true
  }

  export type Chaves_apiCountAggregateInputType = {
    id?: true
    chave_api?: true
    is_ativo?: true
    organizacao_id?: true
    _all?: true
  }

  export type Chaves_apiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chaves_api to aggregate.
     */
    where?: chaves_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chaves_apis to fetch.
     */
    orderBy?: chaves_apiOrderByWithRelationInput | chaves_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chaves_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chaves_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chaves_apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chaves_apis
    **/
    _count?: true | Chaves_apiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chaves_apiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chaves_apiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chaves_apiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chaves_apiMaxAggregateInputType
  }

  export type GetChaves_apiAggregateType<T extends Chaves_apiAggregateArgs> = {
        [P in keyof T & keyof AggregateChaves_api]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChaves_api[P]>
      : GetScalarType<T[P], AggregateChaves_api[P]>
  }




  export type chaves_apiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chaves_apiWhereInput
    orderBy?: chaves_apiOrderByWithAggregationInput | chaves_apiOrderByWithAggregationInput[]
    by: Chaves_apiScalarFieldEnum[] | Chaves_apiScalarFieldEnum
    having?: chaves_apiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chaves_apiCountAggregateInputType | true
    _avg?: Chaves_apiAvgAggregateInputType
    _sum?: Chaves_apiSumAggregateInputType
    _min?: Chaves_apiMinAggregateInputType
    _max?: Chaves_apiMaxAggregateInputType
  }

  export type Chaves_apiGroupByOutputType = {
    id: number
    chave_api: string
    is_ativo: boolean
    organizacao_id: number
    _count: Chaves_apiCountAggregateOutputType | null
    _avg: Chaves_apiAvgAggregateOutputType | null
    _sum: Chaves_apiSumAggregateOutputType | null
    _min: Chaves_apiMinAggregateOutputType | null
    _max: Chaves_apiMaxAggregateOutputType | null
  }

  type GetChaves_apiGroupByPayload<T extends chaves_apiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chaves_apiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chaves_apiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chaves_apiGroupByOutputType[P]>
            : GetScalarType<T[P], Chaves_apiGroupByOutputType[P]>
        }
      >
    >


  export type chaves_apiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave_api?: boolean
    is_ativo?: boolean
    organizacao_id?: boolean
    id_organizacao?: boolean | organizacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chaves_api"]>



  export type chaves_apiSelectScalar = {
    id?: boolean
    chave_api?: boolean
    is_ativo?: boolean
    organizacao_id?: boolean
  }

  export type chaves_apiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chave_api" | "is_ativo" | "organizacao_id", ExtArgs["result"]["chaves_api"]>
  export type chaves_apiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_organizacao?: boolean | organizacaoDefaultArgs<ExtArgs>
  }

  export type $chaves_apiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chaves_api"
    objects: {
      id_organizacao: Prisma.$organizacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chave_api: string
      is_ativo: boolean
      organizacao_id: number
    }, ExtArgs["result"]["chaves_api"]>
    composites: {}
  }

  type chaves_apiGetPayload<S extends boolean | null | undefined | chaves_apiDefaultArgs> = $Result.GetResult<Prisma.$chaves_apiPayload, S>

  type chaves_apiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chaves_apiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chaves_apiCountAggregateInputType | true
    }

  export interface chaves_apiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chaves_api'], meta: { name: 'chaves_api' } }
    /**
     * Find zero or one Chaves_api that matches the filter.
     * @param {chaves_apiFindUniqueArgs} args - Arguments to find a Chaves_api
     * @example
     * // Get one Chaves_api
     * const chaves_api = await prisma.chaves_api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chaves_apiFindUniqueArgs>(args: SelectSubset<T, chaves_apiFindUniqueArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Chaves_api that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chaves_apiFindUniqueOrThrowArgs} args - Arguments to find a Chaves_api
     * @example
     * // Get one Chaves_api
     * const chaves_api = await prisma.chaves_api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chaves_apiFindUniqueOrThrowArgs>(args: SelectSubset<T, chaves_apiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Chaves_api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chaves_apiFindFirstArgs} args - Arguments to find a Chaves_api
     * @example
     * // Get one Chaves_api
     * const chaves_api = await prisma.chaves_api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chaves_apiFindFirstArgs>(args?: SelectSubset<T, chaves_apiFindFirstArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Chaves_api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chaves_apiFindFirstOrThrowArgs} args - Arguments to find a Chaves_api
     * @example
     * // Get one Chaves_api
     * const chaves_api = await prisma.chaves_api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chaves_apiFindFirstOrThrowArgs>(args?: SelectSubset<T, chaves_apiFindFirstOrThrowArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Chaves_apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chaves_apiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chaves_apis
     * const chaves_apis = await prisma.chaves_api.findMany()
     * 
     * // Get first 10 Chaves_apis
     * const chaves_apis = await prisma.chaves_api.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chaves_apiWithIdOnly = await prisma.chaves_api.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chaves_apiFindManyArgs>(args?: SelectSubset<T, chaves_apiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Chaves_api.
     * @param {chaves_apiCreateArgs} args - Arguments to create a Chaves_api.
     * @example
     * // Create one Chaves_api
     * const Chaves_api = await prisma.chaves_api.create({
     *   data: {
     *     // ... data to create a Chaves_api
     *   }
     * })
     * 
     */
    create<T extends chaves_apiCreateArgs>(args: SelectSubset<T, chaves_apiCreateArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Chaves_apis.
     * @param {chaves_apiCreateManyArgs} args - Arguments to create many Chaves_apis.
     * @example
     * // Create many Chaves_apis
     * const chaves_api = await prisma.chaves_api.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chaves_apiCreateManyArgs>(args?: SelectSubset<T, chaves_apiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chaves_api.
     * @param {chaves_apiDeleteArgs} args - Arguments to delete one Chaves_api.
     * @example
     * // Delete one Chaves_api
     * const Chaves_api = await prisma.chaves_api.delete({
     *   where: {
     *     // ... filter to delete one Chaves_api
     *   }
     * })
     * 
     */
    delete<T extends chaves_apiDeleteArgs>(args: SelectSubset<T, chaves_apiDeleteArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Chaves_api.
     * @param {chaves_apiUpdateArgs} args - Arguments to update one Chaves_api.
     * @example
     * // Update one Chaves_api
     * const chaves_api = await prisma.chaves_api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chaves_apiUpdateArgs>(args: SelectSubset<T, chaves_apiUpdateArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Chaves_apis.
     * @param {chaves_apiDeleteManyArgs} args - Arguments to filter Chaves_apis to delete.
     * @example
     * // Delete a few Chaves_apis
     * const { count } = await prisma.chaves_api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chaves_apiDeleteManyArgs>(args?: SelectSubset<T, chaves_apiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chaves_apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chaves_apiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chaves_apis
     * const chaves_api = await prisma.chaves_api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chaves_apiUpdateManyArgs>(args: SelectSubset<T, chaves_apiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chaves_api.
     * @param {chaves_apiUpsertArgs} args - Arguments to update or create a Chaves_api.
     * @example
     * // Update or create a Chaves_api
     * const chaves_api = await prisma.chaves_api.upsert({
     *   create: {
     *     // ... data to create a Chaves_api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chaves_api we want to update
     *   }
     * })
     */
    upsert<T extends chaves_apiUpsertArgs>(args: SelectSubset<T, chaves_apiUpsertArgs<ExtArgs>>): Prisma__chaves_apiClient<$Result.GetResult<Prisma.$chaves_apiPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Chaves_apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chaves_apiCountArgs} args - Arguments to filter Chaves_apis to count.
     * @example
     * // Count the number of Chaves_apis
     * const count = await prisma.chaves_api.count({
     *   where: {
     *     // ... the filter for the Chaves_apis we want to count
     *   }
     * })
    **/
    count<T extends chaves_apiCountArgs>(
      args?: Subset<T, chaves_apiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chaves_apiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chaves_api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chaves_apiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chaves_apiAggregateArgs>(args: Subset<T, Chaves_apiAggregateArgs>): Prisma.PrismaPromise<GetChaves_apiAggregateType<T>>

    /**
     * Group by Chaves_api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chaves_apiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chaves_apiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chaves_apiGroupByArgs['orderBy'] }
        : { orderBy?: chaves_apiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chaves_apiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaves_apiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chaves_api model
   */
  readonly fields: chaves_apiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chaves_api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chaves_apiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_organizacao<T extends organizacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizacaoDefaultArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chaves_api model
   */ 
  interface chaves_apiFieldRefs {
    readonly id: FieldRef<"chaves_api", 'Int'>
    readonly chave_api: FieldRef<"chaves_api", 'String'>
    readonly is_ativo: FieldRef<"chaves_api", 'Boolean'>
    readonly organizacao_id: FieldRef<"chaves_api", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chaves_api findUnique
   */
  export type chaves_apiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * Filter, which chaves_api to fetch.
     */
    where: chaves_apiWhereUniqueInput
  }

  /**
   * chaves_api findUniqueOrThrow
   */
  export type chaves_apiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * Filter, which chaves_api to fetch.
     */
    where: chaves_apiWhereUniqueInput
  }

  /**
   * chaves_api findFirst
   */
  export type chaves_apiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * Filter, which chaves_api to fetch.
     */
    where?: chaves_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chaves_apis to fetch.
     */
    orderBy?: chaves_apiOrderByWithRelationInput | chaves_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chaves_apis.
     */
    cursor?: chaves_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chaves_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chaves_apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chaves_apis.
     */
    distinct?: Chaves_apiScalarFieldEnum | Chaves_apiScalarFieldEnum[]
  }

  /**
   * chaves_api findFirstOrThrow
   */
  export type chaves_apiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * Filter, which chaves_api to fetch.
     */
    where?: chaves_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chaves_apis to fetch.
     */
    orderBy?: chaves_apiOrderByWithRelationInput | chaves_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chaves_apis.
     */
    cursor?: chaves_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chaves_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chaves_apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chaves_apis.
     */
    distinct?: Chaves_apiScalarFieldEnum | Chaves_apiScalarFieldEnum[]
  }

  /**
   * chaves_api findMany
   */
  export type chaves_apiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * Filter, which chaves_apis to fetch.
     */
    where?: chaves_apiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chaves_apis to fetch.
     */
    orderBy?: chaves_apiOrderByWithRelationInput | chaves_apiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chaves_apis.
     */
    cursor?: chaves_apiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chaves_apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chaves_apis.
     */
    skip?: number
    distinct?: Chaves_apiScalarFieldEnum | Chaves_apiScalarFieldEnum[]
  }

  /**
   * chaves_api create
   */
  export type chaves_apiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * The data needed to create a chaves_api.
     */
    data: XOR<chaves_apiCreateInput, chaves_apiUncheckedCreateInput>
  }

  /**
   * chaves_api createMany
   */
  export type chaves_apiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chaves_apis.
     */
    data: chaves_apiCreateManyInput | chaves_apiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chaves_api update
   */
  export type chaves_apiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * The data needed to update a chaves_api.
     */
    data: XOR<chaves_apiUpdateInput, chaves_apiUncheckedUpdateInput>
    /**
     * Choose, which chaves_api to update.
     */
    where: chaves_apiWhereUniqueInput
  }

  /**
   * chaves_api updateMany
   */
  export type chaves_apiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chaves_apis.
     */
    data: XOR<chaves_apiUpdateManyMutationInput, chaves_apiUncheckedUpdateManyInput>
    /**
     * Filter which chaves_apis to update
     */
    where?: chaves_apiWhereInput
    /**
     * Limit how many chaves_apis to update.
     */
    limit?: number
  }

  /**
   * chaves_api upsert
   */
  export type chaves_apiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * The filter to search for the chaves_api to update in case it exists.
     */
    where: chaves_apiWhereUniqueInput
    /**
     * In case the chaves_api found by the `where` argument doesn't exist, create a new chaves_api with this data.
     */
    create: XOR<chaves_apiCreateInput, chaves_apiUncheckedCreateInput>
    /**
     * In case the chaves_api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chaves_apiUpdateInput, chaves_apiUncheckedUpdateInput>
  }

  /**
   * chaves_api delete
   */
  export type chaves_apiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
    /**
     * Filter which chaves_api to delete.
     */
    where: chaves_apiWhereUniqueInput
  }

  /**
   * chaves_api deleteMany
   */
  export type chaves_apiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chaves_apis to delete
     */
    where?: chaves_apiWhereInput
    /**
     * Limit how many chaves_apis to delete.
     */
    limit?: number
  }

  /**
   * chaves_api without action
   */
  export type chaves_apiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chaves_api
     */
    select?: chaves_apiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chaves_api
     */
    omit?: chaves_apiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chaves_apiInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    nascimento: Date | null
    senha: string | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
    tipo_acesso: string | null
    is_ativo: boolean | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    nascimento: Date | null
    senha: string | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
    tipo_acesso: string | null
    is_ativo: boolean | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    nascimento: number
    senha: number
    token: number
    created_at: number
    updated_at: number
    tipo_acesso: number
    is_ativo: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    nascimento?: true
    senha?: true
    token?: true
    created_at?: true
    updated_at?: true
    tipo_acesso?: true
    is_ativo?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    nascimento?: true
    senha?: true
    token?: true
    created_at?: true
    updated_at?: true
    tipo_acesso?: true
    is_ativo?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    nascimento?: true
    senha?: true
    token?: true
    created_at?: true
    updated_at?: true
    tipo_acesso?: true
    is_ativo?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string
    email: string
    nascimento: Date
    senha: string
    token: string
    created_at: Date
    updated_at: Date
    tipo_acesso: string
    is_ativo: boolean
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    nascimento?: boolean
    senha?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipo_acesso?: boolean
    is_ativo?: boolean
    jwt_token?: boolean | usuarios$jwt_tokenArgs<ExtArgs>
    templates?: boolean | usuarios$templatesArgs<ExtArgs>
    usuarios_organizacao?: boolean | usuarios$usuarios_organizacaoArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    nascimento?: boolean
    senha?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipo_acesso?: boolean
    is_ativo?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "nascimento" | "senha" | "token" | "created_at" | "updated_at" | "tipo_acesso" | "is_ativo", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jwt_token?: boolean | usuarios$jwt_tokenArgs<ExtArgs>
    templates?: boolean | usuarios$templatesArgs<ExtArgs>
    usuarios_organizacao?: boolean | usuarios$usuarios_organizacaoArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      jwt_token: Prisma.$jwt_tokenPayload<ExtArgs>[]
      templates: Prisma.$templatesPayload<ExtArgs>[]
      usuarios_organizacao: Prisma.$usuarios_organizacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      nascimento: Date
      senha: string
      token: string
      created_at: Date
      updated_at: Date
      tipo_acesso: string
      is_ativo: boolean
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jwt_token<T extends usuarios$jwt_tokenArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$jwt_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    templates<T extends usuarios$templatesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    usuarios_organizacao<T extends usuarios$usuarios_organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$usuarios_organizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_organizacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */ 
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly nascimento: FieldRef<"usuarios", 'DateTime'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly token: FieldRef<"usuarios", 'String'>
    readonly created_at: FieldRef<"usuarios", 'DateTime'>
    readonly updated_at: FieldRef<"usuarios", 'DateTime'>
    readonly tipo_acesso: FieldRef<"usuarios", 'String'>
    readonly is_ativo: FieldRef<"usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.jwt_token
   */
  export type usuarios$jwt_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    where?: jwt_tokenWhereInput
    orderBy?: jwt_tokenOrderByWithRelationInput | jwt_tokenOrderByWithRelationInput[]
    cursor?: jwt_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jwt_tokenScalarFieldEnum | Jwt_tokenScalarFieldEnum[]
  }

  /**
   * usuarios.templates
   */
  export type usuarios$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    where?: templatesWhereInput
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    cursor?: templatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * usuarios.usuarios_organizacao
   */
  export type usuarios$usuarios_organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_organizacao
     */
    select?: usuarios_organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_organizacao
     */
    omit?: usuarios_organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_organizacaoInclude<ExtArgs> | null
    where?: usuarios_organizacaoWhereInput
    orderBy?: usuarios_organizacaoOrderByWithRelationInput | usuarios_organizacaoOrderByWithRelationInput[]
    cursor?: usuarios_organizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuarios_organizacaoScalarFieldEnum | Usuarios_organizacaoScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model jwt_token
   */

  export type AggregateJwt_token = {
    _count: Jwt_tokenCountAggregateOutputType | null
    _avg: Jwt_tokenAvgAggregateOutputType | null
    _sum: Jwt_tokenSumAggregateOutputType | null
    _min: Jwt_tokenMinAggregateOutputType | null
    _max: Jwt_tokenMaxAggregateOutputType | null
  }

  export type Jwt_tokenAvgAggregateOutputType = {
    id: number | null
    usuarios_id: number | null
  }

  export type Jwt_tokenSumAggregateOutputType = {
    id: number | null
    usuarios_id: number | null
  }

  export type Jwt_tokenMinAggregateOutputType = {
    id: number | null
    jwt_token: string | null
    usuarios_id: number | null
  }

  export type Jwt_tokenMaxAggregateOutputType = {
    id: number | null
    jwt_token: string | null
    usuarios_id: number | null
  }

  export type Jwt_tokenCountAggregateOutputType = {
    id: number
    jwt_token: number
    usuarios_id: number
    _all: number
  }


  export type Jwt_tokenAvgAggregateInputType = {
    id?: true
    usuarios_id?: true
  }

  export type Jwt_tokenSumAggregateInputType = {
    id?: true
    usuarios_id?: true
  }

  export type Jwt_tokenMinAggregateInputType = {
    id?: true
    jwt_token?: true
    usuarios_id?: true
  }

  export type Jwt_tokenMaxAggregateInputType = {
    id?: true
    jwt_token?: true
    usuarios_id?: true
  }

  export type Jwt_tokenCountAggregateInputType = {
    id?: true
    jwt_token?: true
    usuarios_id?: true
    _all?: true
  }

  export type Jwt_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jwt_token to aggregate.
     */
    where?: jwt_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jwt_tokens to fetch.
     */
    orderBy?: jwt_tokenOrderByWithRelationInput | jwt_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jwt_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jwt_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jwt_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jwt_tokens
    **/
    _count?: true | Jwt_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jwt_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jwt_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jwt_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jwt_tokenMaxAggregateInputType
  }

  export type GetJwt_tokenAggregateType<T extends Jwt_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateJwt_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwt_token[P]>
      : GetScalarType<T[P], AggregateJwt_token[P]>
  }




  export type jwt_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jwt_tokenWhereInput
    orderBy?: jwt_tokenOrderByWithAggregationInput | jwt_tokenOrderByWithAggregationInput[]
    by: Jwt_tokenScalarFieldEnum[] | Jwt_tokenScalarFieldEnum
    having?: jwt_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jwt_tokenCountAggregateInputType | true
    _avg?: Jwt_tokenAvgAggregateInputType
    _sum?: Jwt_tokenSumAggregateInputType
    _min?: Jwt_tokenMinAggregateInputType
    _max?: Jwt_tokenMaxAggregateInputType
  }

  export type Jwt_tokenGroupByOutputType = {
    id: number
    jwt_token: string
    usuarios_id: number
    _count: Jwt_tokenCountAggregateOutputType | null
    _avg: Jwt_tokenAvgAggregateOutputType | null
    _sum: Jwt_tokenSumAggregateOutputType | null
    _min: Jwt_tokenMinAggregateOutputType | null
    _max: Jwt_tokenMaxAggregateOutputType | null
  }

  type GetJwt_tokenGroupByPayload<T extends jwt_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jwt_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jwt_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jwt_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Jwt_tokenGroupByOutputType[P]>
        }
      >
    >


  export type jwt_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jwt_token?: boolean
    usuarios_id?: boolean
    id_usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwt_token"]>



  export type jwt_tokenSelectScalar = {
    id?: boolean
    jwt_token?: boolean
    usuarios_id?: boolean
  }

  export type jwt_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jwt_token" | "usuarios_id", ExtArgs["result"]["jwt_token"]>
  export type jwt_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_usuario?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $jwt_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jwt_token"
    objects: {
      id_usuario: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jwt_token: string
      usuarios_id: number
    }, ExtArgs["result"]["jwt_token"]>
    composites: {}
  }

  type jwt_tokenGetPayload<S extends boolean | null | undefined | jwt_tokenDefaultArgs> = $Result.GetResult<Prisma.$jwt_tokenPayload, S>

  type jwt_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jwt_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jwt_tokenCountAggregateInputType | true
    }

  export interface jwt_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jwt_token'], meta: { name: 'jwt_token' } }
    /**
     * Find zero or one Jwt_token that matches the filter.
     * @param {jwt_tokenFindUniqueArgs} args - Arguments to find a Jwt_token
     * @example
     * // Get one Jwt_token
     * const jwt_token = await prisma.jwt_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jwt_tokenFindUniqueArgs>(args: SelectSubset<T, jwt_tokenFindUniqueArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Jwt_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jwt_tokenFindUniqueOrThrowArgs} args - Arguments to find a Jwt_token
     * @example
     * // Get one Jwt_token
     * const jwt_token = await prisma.jwt_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jwt_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, jwt_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Jwt_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jwt_tokenFindFirstArgs} args - Arguments to find a Jwt_token
     * @example
     * // Get one Jwt_token
     * const jwt_token = await prisma.jwt_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jwt_tokenFindFirstArgs>(args?: SelectSubset<T, jwt_tokenFindFirstArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Jwt_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jwt_tokenFindFirstOrThrowArgs} args - Arguments to find a Jwt_token
     * @example
     * // Get one Jwt_token
     * const jwt_token = await prisma.jwt_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jwt_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, jwt_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Jwt_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jwt_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jwt_tokens
     * const jwt_tokens = await prisma.jwt_token.findMany()
     * 
     * // Get first 10 Jwt_tokens
     * const jwt_tokens = await prisma.jwt_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwt_tokenWithIdOnly = await prisma.jwt_token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jwt_tokenFindManyArgs>(args?: SelectSubset<T, jwt_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Jwt_token.
     * @param {jwt_tokenCreateArgs} args - Arguments to create a Jwt_token.
     * @example
     * // Create one Jwt_token
     * const Jwt_token = await prisma.jwt_token.create({
     *   data: {
     *     // ... data to create a Jwt_token
     *   }
     * })
     * 
     */
    create<T extends jwt_tokenCreateArgs>(args: SelectSubset<T, jwt_tokenCreateArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Jwt_tokens.
     * @param {jwt_tokenCreateManyArgs} args - Arguments to create many Jwt_tokens.
     * @example
     * // Create many Jwt_tokens
     * const jwt_token = await prisma.jwt_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jwt_tokenCreateManyArgs>(args?: SelectSubset<T, jwt_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jwt_token.
     * @param {jwt_tokenDeleteArgs} args - Arguments to delete one Jwt_token.
     * @example
     * // Delete one Jwt_token
     * const Jwt_token = await prisma.jwt_token.delete({
     *   where: {
     *     // ... filter to delete one Jwt_token
     *   }
     * })
     * 
     */
    delete<T extends jwt_tokenDeleteArgs>(args: SelectSubset<T, jwt_tokenDeleteArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Jwt_token.
     * @param {jwt_tokenUpdateArgs} args - Arguments to update one Jwt_token.
     * @example
     * // Update one Jwt_token
     * const jwt_token = await prisma.jwt_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jwt_tokenUpdateArgs>(args: SelectSubset<T, jwt_tokenUpdateArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Jwt_tokens.
     * @param {jwt_tokenDeleteManyArgs} args - Arguments to filter Jwt_tokens to delete.
     * @example
     * // Delete a few Jwt_tokens
     * const { count } = await prisma.jwt_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jwt_tokenDeleteManyArgs>(args?: SelectSubset<T, jwt_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jwt_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jwt_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jwt_tokens
     * const jwt_token = await prisma.jwt_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jwt_tokenUpdateManyArgs>(args: SelectSubset<T, jwt_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jwt_token.
     * @param {jwt_tokenUpsertArgs} args - Arguments to update or create a Jwt_token.
     * @example
     * // Update or create a Jwt_token
     * const jwt_token = await prisma.jwt_token.upsert({
     *   create: {
     *     // ... data to create a Jwt_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jwt_token we want to update
     *   }
     * })
     */
    upsert<T extends jwt_tokenUpsertArgs>(args: SelectSubset<T, jwt_tokenUpsertArgs<ExtArgs>>): Prisma__jwt_tokenClient<$Result.GetResult<Prisma.$jwt_tokenPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Jwt_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jwt_tokenCountArgs} args - Arguments to filter Jwt_tokens to count.
     * @example
     * // Count the number of Jwt_tokens
     * const count = await prisma.jwt_token.count({
     *   where: {
     *     // ... the filter for the Jwt_tokens we want to count
     *   }
     * })
    **/
    count<T extends jwt_tokenCountArgs>(
      args?: Subset<T, jwt_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jwt_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jwt_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jwt_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jwt_tokenAggregateArgs>(args: Subset<T, Jwt_tokenAggregateArgs>): Prisma.PrismaPromise<GetJwt_tokenAggregateType<T>>

    /**
     * Group by Jwt_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jwt_tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jwt_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jwt_tokenGroupByArgs['orderBy'] }
        : { orderBy?: jwt_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jwt_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwt_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jwt_token model
   */
  readonly fields: jwt_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jwt_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jwt_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jwt_token model
   */ 
  interface jwt_tokenFieldRefs {
    readonly id: FieldRef<"jwt_token", 'Int'>
    readonly jwt_token: FieldRef<"jwt_token", 'String'>
    readonly usuarios_id: FieldRef<"jwt_token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jwt_token findUnique
   */
  export type jwt_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * Filter, which jwt_token to fetch.
     */
    where: jwt_tokenWhereUniqueInput
  }

  /**
   * jwt_token findUniqueOrThrow
   */
  export type jwt_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * Filter, which jwt_token to fetch.
     */
    where: jwt_tokenWhereUniqueInput
  }

  /**
   * jwt_token findFirst
   */
  export type jwt_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * Filter, which jwt_token to fetch.
     */
    where?: jwt_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jwt_tokens to fetch.
     */
    orderBy?: jwt_tokenOrderByWithRelationInput | jwt_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jwt_tokens.
     */
    cursor?: jwt_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jwt_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jwt_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jwt_tokens.
     */
    distinct?: Jwt_tokenScalarFieldEnum | Jwt_tokenScalarFieldEnum[]
  }

  /**
   * jwt_token findFirstOrThrow
   */
  export type jwt_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * Filter, which jwt_token to fetch.
     */
    where?: jwt_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jwt_tokens to fetch.
     */
    orderBy?: jwt_tokenOrderByWithRelationInput | jwt_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jwt_tokens.
     */
    cursor?: jwt_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jwt_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jwt_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jwt_tokens.
     */
    distinct?: Jwt_tokenScalarFieldEnum | Jwt_tokenScalarFieldEnum[]
  }

  /**
   * jwt_token findMany
   */
  export type jwt_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * Filter, which jwt_tokens to fetch.
     */
    where?: jwt_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jwt_tokens to fetch.
     */
    orderBy?: jwt_tokenOrderByWithRelationInput | jwt_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jwt_tokens.
     */
    cursor?: jwt_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jwt_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jwt_tokens.
     */
    skip?: number
    distinct?: Jwt_tokenScalarFieldEnum | Jwt_tokenScalarFieldEnum[]
  }

  /**
   * jwt_token create
   */
  export type jwt_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a jwt_token.
     */
    data: XOR<jwt_tokenCreateInput, jwt_tokenUncheckedCreateInput>
  }

  /**
   * jwt_token createMany
   */
  export type jwt_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jwt_tokens.
     */
    data: jwt_tokenCreateManyInput | jwt_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jwt_token update
   */
  export type jwt_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a jwt_token.
     */
    data: XOR<jwt_tokenUpdateInput, jwt_tokenUncheckedUpdateInput>
    /**
     * Choose, which jwt_token to update.
     */
    where: jwt_tokenWhereUniqueInput
  }

  /**
   * jwt_token updateMany
   */
  export type jwt_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jwt_tokens.
     */
    data: XOR<jwt_tokenUpdateManyMutationInput, jwt_tokenUncheckedUpdateManyInput>
    /**
     * Filter which jwt_tokens to update
     */
    where?: jwt_tokenWhereInput
    /**
     * Limit how many jwt_tokens to update.
     */
    limit?: number
  }

  /**
   * jwt_token upsert
   */
  export type jwt_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the jwt_token to update in case it exists.
     */
    where: jwt_tokenWhereUniqueInput
    /**
     * In case the jwt_token found by the `where` argument doesn't exist, create a new jwt_token with this data.
     */
    create: XOR<jwt_tokenCreateInput, jwt_tokenUncheckedCreateInput>
    /**
     * In case the jwt_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jwt_tokenUpdateInput, jwt_tokenUncheckedUpdateInput>
  }

  /**
   * jwt_token delete
   */
  export type jwt_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
    /**
     * Filter which jwt_token to delete.
     */
    where: jwt_tokenWhereUniqueInput
  }

  /**
   * jwt_token deleteMany
   */
  export type jwt_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jwt_tokens to delete
     */
    where?: jwt_tokenWhereInput
    /**
     * Limit how many jwt_tokens to delete.
     */
    limit?: number
  }

  /**
   * jwt_token without action
   */
  export type jwt_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jwt_token
     */
    select?: jwt_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jwt_token
     */
    omit?: jwt_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jwt_tokenInclude<ExtArgs> | null
  }


  /**
   * Model templates
   */

  export type AggregateTemplates = {
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  export type TemplatesAvgAggregateOutputType = {
    id: number | null
    usuarios_id: number | null
  }

  export type TemplatesSumAggregateOutputType = {
    id: number | null
    usuarios_id: number | null
  }

  export type TemplatesMinAggregateOutputType = {
    id: number | null
    nome_template: string | null
    diretorio_arquivo: string | null
    token_template: string | null
    created_at: Date | null
    is_ativo: boolean | null
    usuarios_id: number | null
  }

  export type TemplatesMaxAggregateOutputType = {
    id: number | null
    nome_template: string | null
    diretorio_arquivo: string | null
    token_template: string | null
    created_at: Date | null
    is_ativo: boolean | null
    usuarios_id: number | null
  }

  export type TemplatesCountAggregateOutputType = {
    id: number
    nome_template: number
    diretorio_arquivo: number
    token_template: number
    created_at: number
    is_ativo: number
    usuarios_id: number
    _all: number
  }


  export type TemplatesAvgAggregateInputType = {
    id?: true
    usuarios_id?: true
  }

  export type TemplatesSumAggregateInputType = {
    id?: true
    usuarios_id?: true
  }

  export type TemplatesMinAggregateInputType = {
    id?: true
    nome_template?: true
    diretorio_arquivo?: true
    token_template?: true
    created_at?: true
    is_ativo?: true
    usuarios_id?: true
  }

  export type TemplatesMaxAggregateInputType = {
    id?: true
    nome_template?: true
    diretorio_arquivo?: true
    token_template?: true
    created_at?: true
    is_ativo?: true
    usuarios_id?: true
  }

  export type TemplatesCountAggregateInputType = {
    id?: true
    nome_template?: true
    diretorio_arquivo?: true
    token_template?: true
    created_at?: true
    is_ativo?: true
    usuarios_id?: true
    _all?: true
  }

  export type TemplatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to aggregate.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned templates
    **/
    _count?: true | TemplatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplatesMaxAggregateInputType
  }

  export type GetTemplatesAggregateType<T extends TemplatesAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplates[P]>
      : GetScalarType<T[P], AggregateTemplates[P]>
  }




  export type templatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templatesWhereInput
    orderBy?: templatesOrderByWithAggregationInput | templatesOrderByWithAggregationInput[]
    by: TemplatesScalarFieldEnum[] | TemplatesScalarFieldEnum
    having?: templatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplatesCountAggregateInputType | true
    _avg?: TemplatesAvgAggregateInputType
    _sum?: TemplatesSumAggregateInputType
    _min?: TemplatesMinAggregateInputType
    _max?: TemplatesMaxAggregateInputType
  }

  export type TemplatesGroupByOutputType = {
    id: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at: Date
    is_ativo: boolean
    usuarios_id: number
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  type GetTemplatesGroupByPayload<T extends templatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplatesGroupByOutputType[P]>
            : GetScalarType<T[P], TemplatesGroupByOutputType[P]>
        }
      >
    >


  export type templatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_template?: boolean
    diretorio_arquivo?: boolean
    token_template?: boolean
    created_at?: boolean
    is_ativo?: boolean
    usuarios_id?: boolean
    id_usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    variaveis_template?: boolean | templates$variaveis_templateArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templates"]>



  export type templatesSelectScalar = {
    id?: boolean
    nome_template?: boolean
    diretorio_arquivo?: boolean
    token_template?: boolean
    created_at?: boolean
    is_ativo?: boolean
    usuarios_id?: boolean
  }

  export type templatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_template" | "diretorio_arquivo" | "token_template" | "created_at" | "is_ativo" | "usuarios_id", ExtArgs["result"]["templates"]>
  export type templatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    variaveis_template?: boolean | templates$variaveis_templateArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $templatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "templates"
    objects: {
      id_usuario: Prisma.$usuariosPayload<ExtArgs>
      variaveis_template: Prisma.$variaveis_templatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_template: string
      diretorio_arquivo: string
      token_template: string
      created_at: Date
      is_ativo: boolean
      usuarios_id: number
    }, ExtArgs["result"]["templates"]>
    composites: {}
  }

  type templatesGetPayload<S extends boolean | null | undefined | templatesDefaultArgs> = $Result.GetResult<Prisma.$templatesPayload, S>

  type templatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<templatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplatesCountAggregateInputType | true
    }

  export interface templatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['templates'], meta: { name: 'templates' } }
    /**
     * Find zero or one Templates that matches the filter.
     * @param {templatesFindUniqueArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends templatesFindUniqueArgs>(args: SelectSubset<T, templatesFindUniqueArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Templates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {templatesFindUniqueOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends templatesFindUniqueOrThrowArgs>(args: SelectSubset<T, templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindFirstArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends templatesFindFirstArgs>(args?: SelectSubset<T, templatesFindFirstArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindFirstOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends templatesFindFirstOrThrowArgs>(args?: SelectSubset<T, templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.templates.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.templates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templatesWithIdOnly = await prisma.templates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends templatesFindManyArgs>(args?: SelectSubset<T, templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Templates.
     * @param {templatesCreateArgs} args - Arguments to create a Templates.
     * @example
     * // Create one Templates
     * const Templates = await prisma.templates.create({
     *   data: {
     *     // ... data to create a Templates
     *   }
     * })
     * 
     */
    create<T extends templatesCreateArgs>(args: SelectSubset<T, templatesCreateArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Templates.
     * @param {templatesCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const templates = await prisma.templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends templatesCreateManyArgs>(args?: SelectSubset<T, templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Templates.
     * @param {templatesDeleteArgs} args - Arguments to delete one Templates.
     * @example
     * // Delete one Templates
     * const Templates = await prisma.templates.delete({
     *   where: {
     *     // ... filter to delete one Templates
     *   }
     * })
     * 
     */
    delete<T extends templatesDeleteArgs>(args: SelectSubset<T, templatesDeleteArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Templates.
     * @param {templatesUpdateArgs} args - Arguments to update one Templates.
     * @example
     * // Update one Templates
     * const templates = await prisma.templates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends templatesUpdateArgs>(args: SelectSubset<T, templatesUpdateArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Templates.
     * @param {templatesDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends templatesDeleteManyArgs>(args?: SelectSubset<T, templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const templates = await prisma.templates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends templatesUpdateManyArgs>(args: SelectSubset<T, templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Templates.
     * @param {templatesUpsertArgs} args - Arguments to update or create a Templates.
     * @example
     * // Update or create a Templates
     * const templates = await prisma.templates.upsert({
     *   create: {
     *     // ... data to create a Templates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Templates we want to update
     *   }
     * })
     */
    upsert<T extends templatesUpsertArgs>(args: SelectSubset<T, templatesUpsertArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.templates.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends templatesCountArgs>(
      args?: Subset<T, templatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplatesAggregateArgs>(args: Subset<T, TemplatesAggregateArgs>): Prisma.PrismaPromise<GetTemplatesAggregateType<T>>

    /**
     * Group by Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends templatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: templatesGroupByArgs['orderBy'] }
        : { orderBy?: templatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the templates model
   */
  readonly fields: templatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__templatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    variaveis_template<T extends templates$variaveis_templateArgs<ExtArgs> = {}>(args?: Subset<T, templates$variaveis_templateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the templates model
   */ 
  interface templatesFieldRefs {
    readonly id: FieldRef<"templates", 'Int'>
    readonly nome_template: FieldRef<"templates", 'String'>
    readonly diretorio_arquivo: FieldRef<"templates", 'String'>
    readonly token_template: FieldRef<"templates", 'String'>
    readonly created_at: FieldRef<"templates", 'DateTime'>
    readonly is_ativo: FieldRef<"templates", 'Boolean'>
    readonly usuarios_id: FieldRef<"templates", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * templates findUnique
   */
  export type templatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates findUniqueOrThrow
   */
  export type templatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates findFirst
   */
  export type templatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates findFirstOrThrow
   */
  export type templatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates findMany
   */
  export type templatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates create
   */
  export type templatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The data needed to create a templates.
     */
    data: XOR<templatesCreateInput, templatesUncheckedCreateInput>
  }

  /**
   * templates createMany
   */
  export type templatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many templates.
     */
    data: templatesCreateManyInput | templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * templates update
   */
  export type templatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The data needed to update a templates.
     */
    data: XOR<templatesUpdateInput, templatesUncheckedUpdateInput>
    /**
     * Choose, which templates to update.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates updateMany
   */
  export type templatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update templates.
     */
    data: XOR<templatesUpdateManyMutationInput, templatesUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templatesWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
  }

  /**
   * templates upsert
   */
  export type templatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The filter to search for the templates to update in case it exists.
     */
    where: templatesWhereUniqueInput
    /**
     * In case the templates found by the `where` argument doesn't exist, create a new templates with this data.
     */
    create: XOR<templatesCreateInput, templatesUncheckedCreateInput>
    /**
     * In case the templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<templatesUpdateInput, templatesUncheckedUpdateInput>
  }

  /**
   * templates delete
   */
  export type templatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter which templates to delete.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates deleteMany
   */
  export type templatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to delete
     */
    where?: templatesWhereInput
    /**
     * Limit how many templates to delete.
     */
    limit?: number
  }

  /**
   * templates.variaveis_template
   */
  export type templates$variaveis_templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    where?: variaveis_templateWhereInput
    orderBy?: variaveis_templateOrderByWithRelationInput | variaveis_templateOrderByWithRelationInput[]
    cursor?: variaveis_templateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Variaveis_templateScalarFieldEnum | Variaveis_templateScalarFieldEnum[]
  }

  /**
   * templates without action
   */
  export type templatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
  }


  /**
   * Model variaveis_template
   */

  export type AggregateVariaveis_template = {
    _count: Variaveis_templateCountAggregateOutputType | null
    _avg: Variaveis_templateAvgAggregateOutputType | null
    _sum: Variaveis_templateSumAggregateOutputType | null
    _min: Variaveis_templateMinAggregateOutputType | null
    _max: Variaveis_templateMaxAggregateOutputType | null
  }

  export type Variaveis_templateAvgAggregateOutputType = {
    id: number | null
    templates_id: number | null
  }

  export type Variaveis_templateSumAggregateOutputType = {
    id: number | null
    templates_id: number | null
  }

  export type Variaveis_templateMinAggregateOutputType = {
    id: number | null
    templates_id: number | null
  }

  export type Variaveis_templateMaxAggregateOutputType = {
    id: number | null
    templates_id: number | null
  }

  export type Variaveis_templateCountAggregateOutputType = {
    id: number
    templates_id: number
    _all: number
  }


  export type Variaveis_templateAvgAggregateInputType = {
    id?: true
    templates_id?: true
  }

  export type Variaveis_templateSumAggregateInputType = {
    id?: true
    templates_id?: true
  }

  export type Variaveis_templateMinAggregateInputType = {
    id?: true
    templates_id?: true
  }

  export type Variaveis_templateMaxAggregateInputType = {
    id?: true
    templates_id?: true
  }

  export type Variaveis_templateCountAggregateInputType = {
    id?: true
    templates_id?: true
    _all?: true
  }

  export type Variaveis_templateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variaveis_template to aggregate.
     */
    where?: variaveis_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variaveis_templates to fetch.
     */
    orderBy?: variaveis_templateOrderByWithRelationInput | variaveis_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variaveis_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variaveis_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variaveis_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variaveis_templates
    **/
    _count?: true | Variaveis_templateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Variaveis_templateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Variaveis_templateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Variaveis_templateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Variaveis_templateMaxAggregateInputType
  }

  export type GetVariaveis_templateAggregateType<T extends Variaveis_templateAggregateArgs> = {
        [P in keyof T & keyof AggregateVariaveis_template]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariaveis_template[P]>
      : GetScalarType<T[P], AggregateVariaveis_template[P]>
  }




  export type variaveis_templateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variaveis_templateWhereInput
    orderBy?: variaveis_templateOrderByWithAggregationInput | variaveis_templateOrderByWithAggregationInput[]
    by: Variaveis_templateScalarFieldEnum[] | Variaveis_templateScalarFieldEnum
    having?: variaveis_templateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Variaveis_templateCountAggregateInputType | true
    _avg?: Variaveis_templateAvgAggregateInputType
    _sum?: Variaveis_templateSumAggregateInputType
    _min?: Variaveis_templateMinAggregateInputType
    _max?: Variaveis_templateMaxAggregateInputType
  }

  export type Variaveis_templateGroupByOutputType = {
    id: number
    templates_id: number
    _count: Variaveis_templateCountAggregateOutputType | null
    _avg: Variaveis_templateAvgAggregateOutputType | null
    _sum: Variaveis_templateSumAggregateOutputType | null
    _min: Variaveis_templateMinAggregateOutputType | null
    _max: Variaveis_templateMaxAggregateOutputType | null
  }

  type GetVariaveis_templateGroupByPayload<T extends variaveis_templateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Variaveis_templateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Variaveis_templateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Variaveis_templateGroupByOutputType[P]>
            : GetScalarType<T[P], Variaveis_templateGroupByOutputType[P]>
        }
      >
    >


  export type variaveis_templateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templates_id?: boolean
    id_template?: boolean | templatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variaveis_template"]>



  export type variaveis_templateSelectScalar = {
    id?: boolean
    templates_id?: boolean
  }

  export type variaveis_templateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templates_id", ExtArgs["result"]["variaveis_template"]>
  export type variaveis_templateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_template?: boolean | templatesDefaultArgs<ExtArgs>
  }

  export type $variaveis_templatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variaveis_template"
    objects: {
      id_template: Prisma.$templatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templates_id: number
    }, ExtArgs["result"]["variaveis_template"]>
    composites: {}
  }

  type variaveis_templateGetPayload<S extends boolean | null | undefined | variaveis_templateDefaultArgs> = $Result.GetResult<Prisma.$variaveis_templatePayload, S>

  type variaveis_templateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variaveis_templateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Variaveis_templateCountAggregateInputType | true
    }

  export interface variaveis_templateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variaveis_template'], meta: { name: 'variaveis_template' } }
    /**
     * Find zero or one Variaveis_template that matches the filter.
     * @param {variaveis_templateFindUniqueArgs} args - Arguments to find a Variaveis_template
     * @example
     * // Get one Variaveis_template
     * const variaveis_template = await prisma.variaveis_template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variaveis_templateFindUniqueArgs>(args: SelectSubset<T, variaveis_templateFindUniqueArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Variaveis_template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variaveis_templateFindUniqueOrThrowArgs} args - Arguments to find a Variaveis_template
     * @example
     * // Get one Variaveis_template
     * const variaveis_template = await prisma.variaveis_template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variaveis_templateFindUniqueOrThrowArgs>(args: SelectSubset<T, variaveis_templateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Variaveis_template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variaveis_templateFindFirstArgs} args - Arguments to find a Variaveis_template
     * @example
     * // Get one Variaveis_template
     * const variaveis_template = await prisma.variaveis_template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variaveis_templateFindFirstArgs>(args?: SelectSubset<T, variaveis_templateFindFirstArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Variaveis_template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variaveis_templateFindFirstOrThrowArgs} args - Arguments to find a Variaveis_template
     * @example
     * // Get one Variaveis_template
     * const variaveis_template = await prisma.variaveis_template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variaveis_templateFindFirstOrThrowArgs>(args?: SelectSubset<T, variaveis_templateFindFirstOrThrowArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Variaveis_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variaveis_templateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variaveis_templates
     * const variaveis_templates = await prisma.variaveis_template.findMany()
     * 
     * // Get first 10 Variaveis_templates
     * const variaveis_templates = await prisma.variaveis_template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variaveis_templateWithIdOnly = await prisma.variaveis_template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variaveis_templateFindManyArgs>(args?: SelectSubset<T, variaveis_templateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Variaveis_template.
     * @param {variaveis_templateCreateArgs} args - Arguments to create a Variaveis_template.
     * @example
     * // Create one Variaveis_template
     * const Variaveis_template = await prisma.variaveis_template.create({
     *   data: {
     *     // ... data to create a Variaveis_template
     *   }
     * })
     * 
     */
    create<T extends variaveis_templateCreateArgs>(args: SelectSubset<T, variaveis_templateCreateArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Variaveis_templates.
     * @param {variaveis_templateCreateManyArgs} args - Arguments to create many Variaveis_templates.
     * @example
     * // Create many Variaveis_templates
     * const variaveis_template = await prisma.variaveis_template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variaveis_templateCreateManyArgs>(args?: SelectSubset<T, variaveis_templateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variaveis_template.
     * @param {variaveis_templateDeleteArgs} args - Arguments to delete one Variaveis_template.
     * @example
     * // Delete one Variaveis_template
     * const Variaveis_template = await prisma.variaveis_template.delete({
     *   where: {
     *     // ... filter to delete one Variaveis_template
     *   }
     * })
     * 
     */
    delete<T extends variaveis_templateDeleteArgs>(args: SelectSubset<T, variaveis_templateDeleteArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Variaveis_template.
     * @param {variaveis_templateUpdateArgs} args - Arguments to update one Variaveis_template.
     * @example
     * // Update one Variaveis_template
     * const variaveis_template = await prisma.variaveis_template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variaveis_templateUpdateArgs>(args: SelectSubset<T, variaveis_templateUpdateArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Variaveis_templates.
     * @param {variaveis_templateDeleteManyArgs} args - Arguments to filter Variaveis_templates to delete.
     * @example
     * // Delete a few Variaveis_templates
     * const { count } = await prisma.variaveis_template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variaveis_templateDeleteManyArgs>(args?: SelectSubset<T, variaveis_templateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variaveis_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variaveis_templateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variaveis_templates
     * const variaveis_template = await prisma.variaveis_template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variaveis_templateUpdateManyArgs>(args: SelectSubset<T, variaveis_templateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variaveis_template.
     * @param {variaveis_templateUpsertArgs} args - Arguments to update or create a Variaveis_template.
     * @example
     * // Update or create a Variaveis_template
     * const variaveis_template = await prisma.variaveis_template.upsert({
     *   create: {
     *     // ... data to create a Variaveis_template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variaveis_template we want to update
     *   }
     * })
     */
    upsert<T extends variaveis_templateUpsertArgs>(args: SelectSubset<T, variaveis_templateUpsertArgs<ExtArgs>>): Prisma__variaveis_templateClient<$Result.GetResult<Prisma.$variaveis_templatePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Variaveis_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variaveis_templateCountArgs} args - Arguments to filter Variaveis_templates to count.
     * @example
     * // Count the number of Variaveis_templates
     * const count = await prisma.variaveis_template.count({
     *   where: {
     *     // ... the filter for the Variaveis_templates we want to count
     *   }
     * })
    **/
    count<T extends variaveis_templateCountArgs>(
      args?: Subset<T, variaveis_templateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Variaveis_templateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variaveis_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variaveis_templateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Variaveis_templateAggregateArgs>(args: Subset<T, Variaveis_templateAggregateArgs>): Prisma.PrismaPromise<GetVariaveis_templateAggregateType<T>>

    /**
     * Group by Variaveis_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variaveis_templateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends variaveis_templateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variaveis_templateGroupByArgs['orderBy'] }
        : { orderBy?: variaveis_templateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, variaveis_templateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariaveis_templateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variaveis_template model
   */
  readonly fields: variaveis_templateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variaveis_template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variaveis_templateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_template<T extends templatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, templatesDefaultArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the variaveis_template model
   */ 
  interface variaveis_templateFieldRefs {
    readonly id: FieldRef<"variaveis_template", 'Int'>
    readonly templates_id: FieldRef<"variaveis_template", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * variaveis_template findUnique
   */
  export type variaveis_templateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * Filter, which variaveis_template to fetch.
     */
    where: variaveis_templateWhereUniqueInput
  }

  /**
   * variaveis_template findUniqueOrThrow
   */
  export type variaveis_templateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * Filter, which variaveis_template to fetch.
     */
    where: variaveis_templateWhereUniqueInput
  }

  /**
   * variaveis_template findFirst
   */
  export type variaveis_templateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * Filter, which variaveis_template to fetch.
     */
    where?: variaveis_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variaveis_templates to fetch.
     */
    orderBy?: variaveis_templateOrderByWithRelationInput | variaveis_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variaveis_templates.
     */
    cursor?: variaveis_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variaveis_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variaveis_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variaveis_templates.
     */
    distinct?: Variaveis_templateScalarFieldEnum | Variaveis_templateScalarFieldEnum[]
  }

  /**
   * variaveis_template findFirstOrThrow
   */
  export type variaveis_templateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * Filter, which variaveis_template to fetch.
     */
    where?: variaveis_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variaveis_templates to fetch.
     */
    orderBy?: variaveis_templateOrderByWithRelationInput | variaveis_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variaveis_templates.
     */
    cursor?: variaveis_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variaveis_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variaveis_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variaveis_templates.
     */
    distinct?: Variaveis_templateScalarFieldEnum | Variaveis_templateScalarFieldEnum[]
  }

  /**
   * variaveis_template findMany
   */
  export type variaveis_templateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * Filter, which variaveis_templates to fetch.
     */
    where?: variaveis_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variaveis_templates to fetch.
     */
    orderBy?: variaveis_templateOrderByWithRelationInput | variaveis_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variaveis_templates.
     */
    cursor?: variaveis_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variaveis_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variaveis_templates.
     */
    skip?: number
    distinct?: Variaveis_templateScalarFieldEnum | Variaveis_templateScalarFieldEnum[]
  }

  /**
   * variaveis_template create
   */
  export type variaveis_templateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * The data needed to create a variaveis_template.
     */
    data: XOR<variaveis_templateCreateInput, variaveis_templateUncheckedCreateInput>
  }

  /**
   * variaveis_template createMany
   */
  export type variaveis_templateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variaveis_templates.
     */
    data: variaveis_templateCreateManyInput | variaveis_templateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variaveis_template update
   */
  export type variaveis_templateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * The data needed to update a variaveis_template.
     */
    data: XOR<variaveis_templateUpdateInput, variaveis_templateUncheckedUpdateInput>
    /**
     * Choose, which variaveis_template to update.
     */
    where: variaveis_templateWhereUniqueInput
  }

  /**
   * variaveis_template updateMany
   */
  export type variaveis_templateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variaveis_templates.
     */
    data: XOR<variaveis_templateUpdateManyMutationInput, variaveis_templateUncheckedUpdateManyInput>
    /**
     * Filter which variaveis_templates to update
     */
    where?: variaveis_templateWhereInput
    /**
     * Limit how many variaveis_templates to update.
     */
    limit?: number
  }

  /**
   * variaveis_template upsert
   */
  export type variaveis_templateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * The filter to search for the variaveis_template to update in case it exists.
     */
    where: variaveis_templateWhereUniqueInput
    /**
     * In case the variaveis_template found by the `where` argument doesn't exist, create a new variaveis_template with this data.
     */
    create: XOR<variaveis_templateCreateInput, variaveis_templateUncheckedCreateInput>
    /**
     * In case the variaveis_template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variaveis_templateUpdateInput, variaveis_templateUncheckedUpdateInput>
  }

  /**
   * variaveis_template delete
   */
  export type variaveis_templateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
    /**
     * Filter which variaveis_template to delete.
     */
    where: variaveis_templateWhereUniqueInput
  }

  /**
   * variaveis_template deleteMany
   */
  export type variaveis_templateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variaveis_templates to delete
     */
    where?: variaveis_templateWhereInput
    /**
     * Limit how many variaveis_templates to delete.
     */
    limit?: number
  }

  /**
   * variaveis_template without action
   */
  export type variaveis_templateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variaveis_template
     */
    select?: variaveis_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variaveis_template
     */
    omit?: variaveis_templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variaveis_templateInclude<ExtArgs> | null
  }


  /**
   * Model status_documentos
   */

  export type AggregateStatus_documentos = {
    _count: Status_documentosCountAggregateOutputType | null
    _avg: Status_documentosAvgAggregateOutputType | null
    _sum: Status_documentosSumAggregateOutputType | null
    _min: Status_documentosMinAggregateOutputType | null
    _max: Status_documentosMaxAggregateOutputType | null
  }

  export type Status_documentosAvgAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type Status_documentosSumAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type Status_documentosMinAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type Status_documentosMaxAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type Status_documentosCountAggregateOutputType = {
    id: number
    status_documento: number
    _all: number
  }


  export type Status_documentosAvgAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type Status_documentosSumAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type Status_documentosMinAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type Status_documentosMaxAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type Status_documentosCountAggregateInputType = {
    id?: true
    status_documento?: true
    _all?: true
  }

  export type Status_documentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which status_documentos to aggregate.
     */
    where?: status_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_documentos to fetch.
     */
    orderBy?: status_documentosOrderByWithRelationInput | status_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: status_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned status_documentos
    **/
    _count?: true | Status_documentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Status_documentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Status_documentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Status_documentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Status_documentosMaxAggregateInputType
  }

  export type GetStatus_documentosAggregateType<T extends Status_documentosAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus_documentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus_documentos[P]>
      : GetScalarType<T[P], AggregateStatus_documentos[P]>
  }




  export type status_documentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: status_documentosWhereInput
    orderBy?: status_documentosOrderByWithAggregationInput | status_documentosOrderByWithAggregationInput[]
    by: Status_documentosScalarFieldEnum[] | Status_documentosScalarFieldEnum
    having?: status_documentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Status_documentosCountAggregateInputType | true
    _avg?: Status_documentosAvgAggregateInputType
    _sum?: Status_documentosSumAggregateInputType
    _min?: Status_documentosMinAggregateInputType
    _max?: Status_documentosMaxAggregateInputType
  }

  export type Status_documentosGroupByOutputType = {
    id: number
    status_documento: number
    _count: Status_documentosCountAggregateOutputType | null
    _avg: Status_documentosAvgAggregateOutputType | null
    _sum: Status_documentosSumAggregateOutputType | null
    _min: Status_documentosMinAggregateOutputType | null
    _max: Status_documentosMaxAggregateOutputType | null
  }

  type GetStatus_documentosGroupByPayload<T extends status_documentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Status_documentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Status_documentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Status_documentosGroupByOutputType[P]>
            : GetScalarType<T[P], Status_documentosGroupByOutputType[P]>
        }
      >
    >


  export type status_documentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status_documento?: boolean
  }, ExtArgs["result"]["status_documentos"]>



  export type status_documentosSelectScalar = {
    id?: boolean
    status_documento?: boolean
  }

  export type status_documentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status_documento", ExtArgs["result"]["status_documentos"]>

  export type $status_documentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "status_documentos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status_documento: number
    }, ExtArgs["result"]["status_documentos"]>
    composites: {}
  }

  type status_documentosGetPayload<S extends boolean | null | undefined | status_documentosDefaultArgs> = $Result.GetResult<Prisma.$status_documentosPayload, S>

  type status_documentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<status_documentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Status_documentosCountAggregateInputType | true
    }

  export interface status_documentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['status_documentos'], meta: { name: 'status_documentos' } }
    /**
     * Find zero or one Status_documentos that matches the filter.
     * @param {status_documentosFindUniqueArgs} args - Arguments to find a Status_documentos
     * @example
     * // Get one Status_documentos
     * const status_documentos = await prisma.status_documentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends status_documentosFindUniqueArgs>(args: SelectSubset<T, status_documentosFindUniqueArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Status_documentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {status_documentosFindUniqueOrThrowArgs} args - Arguments to find a Status_documentos
     * @example
     * // Get one Status_documentos
     * const status_documentos = await prisma.status_documentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends status_documentosFindUniqueOrThrowArgs>(args: SelectSubset<T, status_documentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Status_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_documentosFindFirstArgs} args - Arguments to find a Status_documentos
     * @example
     * // Get one Status_documentos
     * const status_documentos = await prisma.status_documentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends status_documentosFindFirstArgs>(args?: SelectSubset<T, status_documentosFindFirstArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Status_documentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_documentosFindFirstOrThrowArgs} args - Arguments to find a Status_documentos
     * @example
     * // Get one Status_documentos
     * const status_documentos = await prisma.status_documentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends status_documentosFindFirstOrThrowArgs>(args?: SelectSubset<T, status_documentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Status_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_documentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Status_documentos
     * const status_documentos = await prisma.status_documentos.findMany()
     * 
     * // Get first 10 Status_documentos
     * const status_documentos = await prisma.status_documentos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const status_documentosWithIdOnly = await prisma.status_documentos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends status_documentosFindManyArgs>(args?: SelectSubset<T, status_documentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Status_documentos.
     * @param {status_documentosCreateArgs} args - Arguments to create a Status_documentos.
     * @example
     * // Create one Status_documentos
     * const Status_documentos = await prisma.status_documentos.create({
     *   data: {
     *     // ... data to create a Status_documentos
     *   }
     * })
     * 
     */
    create<T extends status_documentosCreateArgs>(args: SelectSubset<T, status_documentosCreateArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Status_documentos.
     * @param {status_documentosCreateManyArgs} args - Arguments to create many Status_documentos.
     * @example
     * // Create many Status_documentos
     * const status_documentos = await prisma.status_documentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends status_documentosCreateManyArgs>(args?: SelectSubset<T, status_documentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status_documentos.
     * @param {status_documentosDeleteArgs} args - Arguments to delete one Status_documentos.
     * @example
     * // Delete one Status_documentos
     * const Status_documentos = await prisma.status_documentos.delete({
     *   where: {
     *     // ... filter to delete one Status_documentos
     *   }
     * })
     * 
     */
    delete<T extends status_documentosDeleteArgs>(args: SelectSubset<T, status_documentosDeleteArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Status_documentos.
     * @param {status_documentosUpdateArgs} args - Arguments to update one Status_documentos.
     * @example
     * // Update one Status_documentos
     * const status_documentos = await prisma.status_documentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends status_documentosUpdateArgs>(args: SelectSubset<T, status_documentosUpdateArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Status_documentos.
     * @param {status_documentosDeleteManyArgs} args - Arguments to filter Status_documentos to delete.
     * @example
     * // Delete a few Status_documentos
     * const { count } = await prisma.status_documentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends status_documentosDeleteManyArgs>(args?: SelectSubset<T, status_documentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Status_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_documentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Status_documentos
     * const status_documentos = await prisma.status_documentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends status_documentosUpdateManyArgs>(args: SelectSubset<T, status_documentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status_documentos.
     * @param {status_documentosUpsertArgs} args - Arguments to update or create a Status_documentos.
     * @example
     * // Update or create a Status_documentos
     * const status_documentos = await prisma.status_documentos.upsert({
     *   create: {
     *     // ... data to create a Status_documentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status_documentos we want to update
     *   }
     * })
     */
    upsert<T extends status_documentosUpsertArgs>(args: SelectSubset<T, status_documentosUpsertArgs<ExtArgs>>): Prisma__status_documentosClient<$Result.GetResult<Prisma.$status_documentosPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Status_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_documentosCountArgs} args - Arguments to filter Status_documentos to count.
     * @example
     * // Count the number of Status_documentos
     * const count = await prisma.status_documentos.count({
     *   where: {
     *     // ... the filter for the Status_documentos we want to count
     *   }
     * })
    **/
    count<T extends status_documentosCountArgs>(
      args?: Subset<T, status_documentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Status_documentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_documentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Status_documentosAggregateArgs>(args: Subset<T, Status_documentosAggregateArgs>): Prisma.PrismaPromise<GetStatus_documentosAggregateType<T>>

    /**
     * Group by Status_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_documentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends status_documentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: status_documentosGroupByArgs['orderBy'] }
        : { orderBy?: status_documentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, status_documentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatus_documentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the status_documentos model
   */
  readonly fields: status_documentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for status_documentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__status_documentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the status_documentos model
   */ 
  interface status_documentosFieldRefs {
    readonly id: FieldRef<"status_documentos", 'Int'>
    readonly status_documento: FieldRef<"status_documentos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * status_documentos findUnique
   */
  export type status_documentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * Filter, which status_documentos to fetch.
     */
    where: status_documentosWhereUniqueInput
  }

  /**
   * status_documentos findUniqueOrThrow
   */
  export type status_documentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * Filter, which status_documentos to fetch.
     */
    where: status_documentosWhereUniqueInput
  }

  /**
   * status_documentos findFirst
   */
  export type status_documentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * Filter, which status_documentos to fetch.
     */
    where?: status_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_documentos to fetch.
     */
    orderBy?: status_documentosOrderByWithRelationInput | status_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_documentos.
     */
    cursor?: status_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_documentos.
     */
    distinct?: Status_documentosScalarFieldEnum | Status_documentosScalarFieldEnum[]
  }

  /**
   * status_documentos findFirstOrThrow
   */
  export type status_documentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * Filter, which status_documentos to fetch.
     */
    where?: status_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_documentos to fetch.
     */
    orderBy?: status_documentosOrderByWithRelationInput | status_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_documentos.
     */
    cursor?: status_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_documentos.
     */
    distinct?: Status_documentosScalarFieldEnum | Status_documentosScalarFieldEnum[]
  }

  /**
   * status_documentos findMany
   */
  export type status_documentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * Filter, which status_documentos to fetch.
     */
    where?: status_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_documentos to fetch.
     */
    orderBy?: status_documentosOrderByWithRelationInput | status_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing status_documentos.
     */
    cursor?: status_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_documentos.
     */
    skip?: number
    distinct?: Status_documentosScalarFieldEnum | Status_documentosScalarFieldEnum[]
  }

  /**
   * status_documentos create
   */
  export type status_documentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * The data needed to create a status_documentos.
     */
    data: XOR<status_documentosCreateInput, status_documentosUncheckedCreateInput>
  }

  /**
   * status_documentos createMany
   */
  export type status_documentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many status_documentos.
     */
    data: status_documentosCreateManyInput | status_documentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * status_documentos update
   */
  export type status_documentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * The data needed to update a status_documentos.
     */
    data: XOR<status_documentosUpdateInput, status_documentosUncheckedUpdateInput>
    /**
     * Choose, which status_documentos to update.
     */
    where: status_documentosWhereUniqueInput
  }

  /**
   * status_documentos updateMany
   */
  export type status_documentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update status_documentos.
     */
    data: XOR<status_documentosUpdateManyMutationInput, status_documentosUncheckedUpdateManyInput>
    /**
     * Filter which status_documentos to update
     */
    where?: status_documentosWhereInput
    /**
     * Limit how many status_documentos to update.
     */
    limit?: number
  }

  /**
   * status_documentos upsert
   */
  export type status_documentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * The filter to search for the status_documentos to update in case it exists.
     */
    where: status_documentosWhereUniqueInput
    /**
     * In case the status_documentos found by the `where` argument doesn't exist, create a new status_documentos with this data.
     */
    create: XOR<status_documentosCreateInput, status_documentosUncheckedCreateInput>
    /**
     * In case the status_documentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<status_documentosUpdateInput, status_documentosUncheckedUpdateInput>
  }

  /**
   * status_documentos delete
   */
  export type status_documentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
    /**
     * Filter which status_documentos to delete.
     */
    where: status_documentosWhereUniqueInput
  }

  /**
   * status_documentos deleteMany
   */
  export type status_documentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which status_documentos to delete
     */
    where?: status_documentosWhereInput
    /**
     * Limit how many status_documentos to delete.
     */
    limit?: number
  }

  /**
   * status_documentos without action
   */
  export type status_documentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status_documentos
     */
    select?: status_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status_documentos
     */
    omit?: status_documentosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminsScalarFieldEnum: {
    id: 'id',
    nome_admin: 'nome_admin',
    usuario_admin: 'usuario_admin',
    is_ativo: 'is_ativo'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const OrganizacaoScalarFieldEnum: {
    id: 'id',
    nome_organizacao: 'nome_organizacao',
    usuario_criacao: 'usuario_criacao',
    is_ativo: 'is_ativo'
  };

  export type OrganizacaoScalarFieldEnum = (typeof OrganizacaoScalarFieldEnum)[keyof typeof OrganizacaoScalarFieldEnum]


  export const Usuarios_organizacaoScalarFieldEnum: {
    id: 'id',
    organizacao_id: 'organizacao_id',
    usuarios_id: 'usuarios_id'
  };

  export type Usuarios_organizacaoScalarFieldEnum = (typeof Usuarios_organizacaoScalarFieldEnum)[keyof typeof Usuarios_organizacaoScalarFieldEnum]


  export const Chaves_apiScalarFieldEnum: {
    id: 'id',
    chave_api: 'chave_api',
    is_ativo: 'is_ativo',
    organizacao_id: 'organizacao_id'
  };

  export type Chaves_apiScalarFieldEnum = (typeof Chaves_apiScalarFieldEnum)[keyof typeof Chaves_apiScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
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

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const Jwt_tokenScalarFieldEnum: {
    id: 'id',
    jwt_token: 'jwt_token',
    usuarios_id: 'usuarios_id'
  };

  export type Jwt_tokenScalarFieldEnum = (typeof Jwt_tokenScalarFieldEnum)[keyof typeof Jwt_tokenScalarFieldEnum]


  export const TemplatesScalarFieldEnum: {
    id: 'id',
    nome_template: 'nome_template',
    diretorio_arquivo: 'diretorio_arquivo',
    token_template: 'token_template',
    created_at: 'created_at',
    is_ativo: 'is_ativo',
    usuarios_id: 'usuarios_id'
  };

  export type TemplatesScalarFieldEnum = (typeof TemplatesScalarFieldEnum)[keyof typeof TemplatesScalarFieldEnum]


  export const Variaveis_templateScalarFieldEnum: {
    id: 'id',
    templates_id: 'templates_id'
  };

  export type Variaveis_templateScalarFieldEnum = (typeof Variaveis_templateScalarFieldEnum)[keyof typeof Variaveis_templateScalarFieldEnum]


  export const Status_documentosScalarFieldEnum: {
    id: 'id',
    status_documento: 'status_documento'
  };

  export type Status_documentosScalarFieldEnum = (typeof Status_documentosScalarFieldEnum)[keyof typeof Status_documentosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const adminsOrderByRelevanceFieldEnum: {
    nome_admin: 'nome_admin',
    usuario_admin: 'usuario_admin'
  };

  export type adminsOrderByRelevanceFieldEnum = (typeof adminsOrderByRelevanceFieldEnum)[keyof typeof adminsOrderByRelevanceFieldEnum]


  export const organizacaoOrderByRelevanceFieldEnum: {
    nome_organizacao: 'nome_organizacao',
    usuario_criacao: 'usuario_criacao'
  };

  export type organizacaoOrderByRelevanceFieldEnum = (typeof organizacaoOrderByRelevanceFieldEnum)[keyof typeof organizacaoOrderByRelevanceFieldEnum]


  export const chaves_apiOrderByRelevanceFieldEnum: {
    chave_api: 'chave_api'
  };

  export type chaves_apiOrderByRelevanceFieldEnum = (typeof chaves_apiOrderByRelevanceFieldEnum)[keyof typeof chaves_apiOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    token: 'token',
    tipo_acesso: 'tipo_acesso'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  export const jwt_tokenOrderByRelevanceFieldEnum: {
    jwt_token: 'jwt_token'
  };

  export type jwt_tokenOrderByRelevanceFieldEnum = (typeof jwt_tokenOrderByRelevanceFieldEnum)[keyof typeof jwt_tokenOrderByRelevanceFieldEnum]


  export const templatesOrderByRelevanceFieldEnum: {
    nome_template: 'nome_template',
    diretorio_arquivo: 'diretorio_arquivo',
    token_template: 'token_template'
  };

  export type templatesOrderByRelevanceFieldEnum = (typeof templatesOrderByRelevanceFieldEnum)[keyof typeof templatesOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    id?: IntFilter<"admins"> | number
    nome_admin?: StringFilter<"admins"> | string
    usuario_admin?: StringFilter<"admins"> | string
    is_ativo?: BoolFilter<"admins"> | boolean
  }

  export type adminsOrderByWithRelationInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
    _relevance?: adminsOrderByRelevanceInput
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    nome_admin?: StringFilter<"admins"> | string
    usuario_admin?: StringFilter<"admins"> | string
    is_ativo?: BoolFilter<"admins"> | boolean
  }, "id">

  export type adminsOrderByWithAggregationInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
    _count?: adminsCountOrderByAggregateInput
    _avg?: adminsAvgOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
    _sum?: adminsSumOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admins"> | number
    nome_admin?: StringWithAggregatesFilter<"admins"> | string
    usuario_admin?: StringWithAggregatesFilter<"admins"> | string
    is_ativo?: BoolWithAggregatesFilter<"admins"> | boolean
  }

  export type organizacaoWhereInput = {
    AND?: organizacaoWhereInput | organizacaoWhereInput[]
    OR?: organizacaoWhereInput[]
    NOT?: organizacaoWhereInput | organizacaoWhereInput[]
    id?: IntFilter<"organizacao"> | number
    nome_organizacao?: StringFilter<"organizacao"> | string
    usuario_criacao?: StringFilter<"organizacao"> | string
    is_ativo?: BoolFilter<"organizacao"> | boolean
    chaves_api?: Chaves_apiListRelationFilter
    usuarios_organizacao?: Usuarios_organizacaoListRelationFilter
  }

  export type organizacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
    chaves_api?: chaves_apiOrderByRelationAggregateInput
    usuarios_organizacao?: usuarios_organizacaoOrderByRelationAggregateInput
    _relevance?: organizacaoOrderByRelevanceInput
  }

  export type organizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organizacaoWhereInput | organizacaoWhereInput[]
    OR?: organizacaoWhereInput[]
    NOT?: organizacaoWhereInput | organizacaoWhereInput[]
    nome_organizacao?: StringFilter<"organizacao"> | string
    usuario_criacao?: StringFilter<"organizacao"> | string
    is_ativo?: BoolFilter<"organizacao"> | boolean
    chaves_api?: Chaves_apiListRelationFilter
    usuarios_organizacao?: Usuarios_organizacaoListRelationFilter
  }, "id">

  export type organizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
    _count?: organizacaoCountOrderByAggregateInput
    _avg?: organizacaoAvgOrderByAggregateInput
    _max?: organizacaoMaxOrderByAggregateInput
    _min?: organizacaoMinOrderByAggregateInput
    _sum?: organizacaoSumOrderByAggregateInput
  }

  export type organizacaoScalarWhereWithAggregatesInput = {
    AND?: organizacaoScalarWhereWithAggregatesInput | organizacaoScalarWhereWithAggregatesInput[]
    OR?: organizacaoScalarWhereWithAggregatesInput[]
    NOT?: organizacaoScalarWhereWithAggregatesInput | organizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organizacao"> | number
    nome_organizacao?: StringWithAggregatesFilter<"organizacao"> | string
    usuario_criacao?: StringWithAggregatesFilter<"organizacao"> | string
    is_ativo?: BoolWithAggregatesFilter<"organizacao"> | boolean
  }

  export type usuarios_organizacaoWhereInput = {
    AND?: usuarios_organizacaoWhereInput | usuarios_organizacaoWhereInput[]
    OR?: usuarios_organizacaoWhereInput[]
    NOT?: usuarios_organizacaoWhereInput | usuarios_organizacaoWhereInput[]
    id?: IntFilter<"usuarios_organizacao"> | number
    organizacao_id?: IntFilter<"usuarios_organizacao"> | number
    usuarios_id?: IntFilter<"usuarios_organizacao"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, organizacaoWhereInput>
  }

  export type usuarios_organizacaoOrderByWithRelationInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
    id_usuario?: usuariosOrderByWithRelationInput
    id_organizacao?: organizacaoOrderByWithRelationInput
  }

  export type usuarios_organizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuarios_organizacaoWhereInput | usuarios_organizacaoWhereInput[]
    OR?: usuarios_organizacaoWhereInput[]
    NOT?: usuarios_organizacaoWhereInput | usuarios_organizacaoWhereInput[]
    organizacao_id?: IntFilter<"usuarios_organizacao"> | number
    usuarios_id?: IntFilter<"usuarios_organizacao"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, organizacaoWhereInput>
  }, "id">

  export type usuarios_organizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
    _count?: usuarios_organizacaoCountOrderByAggregateInput
    _avg?: usuarios_organizacaoAvgOrderByAggregateInput
    _max?: usuarios_organizacaoMaxOrderByAggregateInput
    _min?: usuarios_organizacaoMinOrderByAggregateInput
    _sum?: usuarios_organizacaoSumOrderByAggregateInput
  }

  export type usuarios_organizacaoScalarWhereWithAggregatesInput = {
    AND?: usuarios_organizacaoScalarWhereWithAggregatesInput | usuarios_organizacaoScalarWhereWithAggregatesInput[]
    OR?: usuarios_organizacaoScalarWhereWithAggregatesInput[]
    NOT?: usuarios_organizacaoScalarWhereWithAggregatesInput | usuarios_organizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios_organizacao"> | number
    organizacao_id?: IntWithAggregatesFilter<"usuarios_organizacao"> | number
    usuarios_id?: IntWithAggregatesFilter<"usuarios_organizacao"> | number
  }

  export type chaves_apiWhereInput = {
    AND?: chaves_apiWhereInput | chaves_apiWhereInput[]
    OR?: chaves_apiWhereInput[]
    NOT?: chaves_apiWhereInput | chaves_apiWhereInput[]
    id?: IntFilter<"chaves_api"> | number
    chave_api?: StringFilter<"chaves_api"> | string
    is_ativo?: BoolFilter<"chaves_api"> | boolean
    organizacao_id?: IntFilter<"chaves_api"> | number
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, organizacaoWhereInput>
  }

  export type chaves_apiOrderByWithRelationInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacao_id?: SortOrder
    id_organizacao?: organizacaoOrderByWithRelationInput
    _relevance?: chaves_apiOrderByRelevanceInput
  }

  export type chaves_apiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chave_api?: string
    AND?: chaves_apiWhereInput | chaves_apiWhereInput[]
    OR?: chaves_apiWhereInput[]
    NOT?: chaves_apiWhereInput | chaves_apiWhereInput[]
    is_ativo?: BoolFilter<"chaves_api"> | boolean
    organizacao_id?: IntFilter<"chaves_api"> | number
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, organizacaoWhereInput>
  }, "id" | "chave_api">

  export type chaves_apiOrderByWithAggregationInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacao_id?: SortOrder
    _count?: chaves_apiCountOrderByAggregateInput
    _avg?: chaves_apiAvgOrderByAggregateInput
    _max?: chaves_apiMaxOrderByAggregateInput
    _min?: chaves_apiMinOrderByAggregateInput
    _sum?: chaves_apiSumOrderByAggregateInput
  }

  export type chaves_apiScalarWhereWithAggregatesInput = {
    AND?: chaves_apiScalarWhereWithAggregatesInput | chaves_apiScalarWhereWithAggregatesInput[]
    OR?: chaves_apiScalarWhereWithAggregatesInput[]
    NOT?: chaves_apiScalarWhereWithAggregatesInput | chaves_apiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chaves_api"> | number
    chave_api?: StringWithAggregatesFilter<"chaves_api"> | string
    is_ativo?: BoolWithAggregatesFilter<"chaves_api"> | boolean
    organizacao_id?: IntWithAggregatesFilter<"chaves_api"> | number
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    nascimento?: DateTimeFilter<"usuarios"> | Date | string
    senha?: StringFilter<"usuarios"> | string
    token?: StringFilter<"usuarios"> | string
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
    tipo_acesso?: StringFilter<"usuarios"> | string
    is_ativo?: BoolFilter<"usuarios"> | boolean
    jwt_token?: Jwt_tokenListRelationFilter
    templates?: TemplatesListRelationFilter
    usuarios_organizacao?: Usuarios_organizacaoListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    nascimento?: SortOrder
    senha?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipo_acesso?: SortOrder
    is_ativo?: SortOrder
    jwt_token?: jwt_tokenOrderByRelationAggregateInput
    templates?: templatesOrderByRelationAggregateInput
    usuarios_organizacao?: usuarios_organizacaoOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    token?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    nascimento?: DateTimeFilter<"usuarios"> | Date | string
    senha?: StringFilter<"usuarios"> | string
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
    tipo_acesso?: StringFilter<"usuarios"> | string
    is_ativo?: BoolFilter<"usuarios"> | boolean
    jwt_token?: Jwt_tokenListRelationFilter
    templates?: TemplatesListRelationFilter
    usuarios_organizacao?: Usuarios_organizacaoListRelationFilter
  }, "id" | "email" | "token">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    nascimento?: SortOrder
    senha?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipo_acesso?: SortOrder
    is_ativo?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    nascimento?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    token?: StringWithAggregatesFilter<"usuarios"> | string
    created_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    tipo_acesso?: StringWithAggregatesFilter<"usuarios"> | string
    is_ativo?: BoolWithAggregatesFilter<"usuarios"> | boolean
  }

  export type jwt_tokenWhereInput = {
    AND?: jwt_tokenWhereInput | jwt_tokenWhereInput[]
    OR?: jwt_tokenWhereInput[]
    NOT?: jwt_tokenWhereInput | jwt_tokenWhereInput[]
    id?: IntFilter<"jwt_token"> | number
    jwt_token?: StringFilter<"jwt_token"> | string
    usuarios_id?: IntFilter<"jwt_token"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type jwt_tokenOrderByWithRelationInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuarios_id?: SortOrder
    id_usuario?: usuariosOrderByWithRelationInput
    _relevance?: jwt_tokenOrderByRelevanceInput
  }

  export type jwt_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jwt_tokenWhereInput | jwt_tokenWhereInput[]
    OR?: jwt_tokenWhereInput[]
    NOT?: jwt_tokenWhereInput | jwt_tokenWhereInput[]
    jwt_token?: StringFilter<"jwt_token"> | string
    usuarios_id?: IntFilter<"jwt_token"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id">

  export type jwt_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuarios_id?: SortOrder
    _count?: jwt_tokenCountOrderByAggregateInput
    _avg?: jwt_tokenAvgOrderByAggregateInput
    _max?: jwt_tokenMaxOrderByAggregateInput
    _min?: jwt_tokenMinOrderByAggregateInput
    _sum?: jwt_tokenSumOrderByAggregateInput
  }

  export type jwt_tokenScalarWhereWithAggregatesInput = {
    AND?: jwt_tokenScalarWhereWithAggregatesInput | jwt_tokenScalarWhereWithAggregatesInput[]
    OR?: jwt_tokenScalarWhereWithAggregatesInput[]
    NOT?: jwt_tokenScalarWhereWithAggregatesInput | jwt_tokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jwt_token"> | number
    jwt_token?: StringWithAggregatesFilter<"jwt_token"> | string
    usuarios_id?: IntWithAggregatesFilter<"jwt_token"> | number
  }

  export type templatesWhereInput = {
    AND?: templatesWhereInput | templatesWhereInput[]
    OR?: templatesWhereInput[]
    NOT?: templatesWhereInput | templatesWhereInput[]
    id?: IntFilter<"templates"> | number
    nome_template?: StringFilter<"templates"> | string
    diretorio_arquivo?: StringFilter<"templates"> | string
    token_template?: StringFilter<"templates"> | string
    created_at?: DateTimeFilter<"templates"> | Date | string
    is_ativo?: BoolFilter<"templates"> | boolean
    usuarios_id?: IntFilter<"templates"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    variaveis_template?: Variaveis_templateListRelationFilter
  }

  export type templatesOrderByWithRelationInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuarios_id?: SortOrder
    id_usuario?: usuariosOrderByWithRelationInput
    variaveis_template?: variaveis_templateOrderByRelationAggregateInput
    _relevance?: templatesOrderByRelevanceInput
  }

  export type templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: templatesWhereInput | templatesWhereInput[]
    OR?: templatesWhereInput[]
    NOT?: templatesWhereInput | templatesWhereInput[]
    nome_template?: StringFilter<"templates"> | string
    diretorio_arquivo?: StringFilter<"templates"> | string
    token_template?: StringFilter<"templates"> | string
    created_at?: DateTimeFilter<"templates"> | Date | string
    is_ativo?: BoolFilter<"templates"> | boolean
    usuarios_id?: IntFilter<"templates"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    variaveis_template?: Variaveis_templateListRelationFilter
  }, "id">

  export type templatesOrderByWithAggregationInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuarios_id?: SortOrder
    _count?: templatesCountOrderByAggregateInput
    _avg?: templatesAvgOrderByAggregateInput
    _max?: templatesMaxOrderByAggregateInput
    _min?: templatesMinOrderByAggregateInput
    _sum?: templatesSumOrderByAggregateInput
  }

  export type templatesScalarWhereWithAggregatesInput = {
    AND?: templatesScalarWhereWithAggregatesInput | templatesScalarWhereWithAggregatesInput[]
    OR?: templatesScalarWhereWithAggregatesInput[]
    NOT?: templatesScalarWhereWithAggregatesInput | templatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"templates"> | number
    nome_template?: StringWithAggregatesFilter<"templates"> | string
    diretorio_arquivo?: StringWithAggregatesFilter<"templates"> | string
    token_template?: StringWithAggregatesFilter<"templates"> | string
    created_at?: DateTimeWithAggregatesFilter<"templates"> | Date | string
    is_ativo?: BoolWithAggregatesFilter<"templates"> | boolean
    usuarios_id?: IntWithAggregatesFilter<"templates"> | number
  }

  export type variaveis_templateWhereInput = {
    AND?: variaveis_templateWhereInput | variaveis_templateWhereInput[]
    OR?: variaveis_templateWhereInput[]
    NOT?: variaveis_templateWhereInput | variaveis_templateWhereInput[]
    id?: IntFilter<"variaveis_template"> | number
    templates_id?: IntFilter<"variaveis_template"> | number
    id_template?: XOR<TemplatesScalarRelationFilter, templatesWhereInput>
  }

  export type variaveis_templateOrderByWithRelationInput = {
    id?: SortOrder
    templates_id?: SortOrder
    id_template?: templatesOrderByWithRelationInput
  }

  export type variaveis_templateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: variaveis_templateWhereInput | variaveis_templateWhereInput[]
    OR?: variaveis_templateWhereInput[]
    NOT?: variaveis_templateWhereInput | variaveis_templateWhereInput[]
    templates_id?: IntFilter<"variaveis_template"> | number
    id_template?: XOR<TemplatesScalarRelationFilter, templatesWhereInput>
  }, "id">

  export type variaveis_templateOrderByWithAggregationInput = {
    id?: SortOrder
    templates_id?: SortOrder
    _count?: variaveis_templateCountOrderByAggregateInput
    _avg?: variaveis_templateAvgOrderByAggregateInput
    _max?: variaveis_templateMaxOrderByAggregateInput
    _min?: variaveis_templateMinOrderByAggregateInput
    _sum?: variaveis_templateSumOrderByAggregateInput
  }

  export type variaveis_templateScalarWhereWithAggregatesInput = {
    AND?: variaveis_templateScalarWhereWithAggregatesInput | variaveis_templateScalarWhereWithAggregatesInput[]
    OR?: variaveis_templateScalarWhereWithAggregatesInput[]
    NOT?: variaveis_templateScalarWhereWithAggregatesInput | variaveis_templateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"variaveis_template"> | number
    templates_id?: IntWithAggregatesFilter<"variaveis_template"> | number
  }

  export type status_documentosWhereInput = {
    AND?: status_documentosWhereInput | status_documentosWhereInput[]
    OR?: status_documentosWhereInput[]
    NOT?: status_documentosWhereInput | status_documentosWhereInput[]
    id?: IntFilter<"status_documentos"> | number
    status_documento?: IntFilter<"status_documentos"> | number
  }

  export type status_documentosOrderByWithRelationInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type status_documentosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: status_documentosWhereInput | status_documentosWhereInput[]
    OR?: status_documentosWhereInput[]
    NOT?: status_documentosWhereInput | status_documentosWhereInput[]
    status_documento?: IntFilter<"status_documentos"> | number
  }, "id">

  export type status_documentosOrderByWithAggregationInput = {
    id?: SortOrder
    status_documento?: SortOrder
    _count?: status_documentosCountOrderByAggregateInput
    _avg?: status_documentosAvgOrderByAggregateInput
    _max?: status_documentosMaxOrderByAggregateInput
    _min?: status_documentosMinOrderByAggregateInput
    _sum?: status_documentosSumOrderByAggregateInput
  }

  export type status_documentosScalarWhereWithAggregatesInput = {
    AND?: status_documentosScalarWhereWithAggregatesInput | status_documentosScalarWhereWithAggregatesInput[]
    OR?: status_documentosScalarWhereWithAggregatesInput[]
    NOT?: status_documentosScalarWhereWithAggregatesInput | status_documentosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"status_documentos"> | number
    status_documento?: IntWithAggregatesFilter<"status_documentos"> | number
  }

  export type adminsCreateInput = {
    nome_admin: string
    usuario_admin: string
    is_ativo?: boolean
  }

  export type adminsUncheckedCreateInput = {
    id?: number
    nome_admin: string
    usuario_admin: string
    is_ativo?: boolean
  }

  export type adminsUpdateInput = {
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminsCreateManyInput = {
    id?: number
    nome_admin: string
    usuario_admin: string
    is_ativo?: boolean
  }

  export type adminsUpdateManyMutationInput = {
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type organizacaoCreateInput = {
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    chaves_api?: chaves_apiCreateNestedManyWithoutId_organizacaoInput
    usuarios_organizacao?: usuarios_organizacaoCreateNestedManyWithoutId_organizacaoInput
  }

  export type organizacaoUncheckedCreateInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    chaves_api?: chaves_apiUncheckedCreateNestedManyWithoutId_organizacaoInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedCreateNestedManyWithoutId_organizacaoInput
  }

  export type organizacaoUpdateInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    chaves_api?: chaves_apiUpdateManyWithoutId_organizacaoNestedInput
    usuarios_organizacao?: usuarios_organizacaoUpdateManyWithoutId_organizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    chaves_api?: chaves_apiUncheckedUpdateManyWithoutId_organizacaoNestedInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedUpdateManyWithoutId_organizacaoNestedInput
  }

  export type organizacaoCreateManyInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
  }

  export type organizacaoUpdateManyMutationInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type organizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarios_organizacaoCreateInput = {
    id_usuario: usuariosCreateNestedOneWithoutUsuarios_organizacaoInput
    id_organizacao: organizacaoCreateNestedOneWithoutUsuarios_organizacaoInput
  }

  export type usuarios_organizacaoUncheckedCreateInput = {
    id?: number
    organizacao_id: number
    usuarios_id: number
  }

  export type usuarios_organizacaoUpdateInput = {
    id_usuario?: usuariosUpdateOneRequiredWithoutUsuarios_organizacaoNestedInput
    id_organizacao?: organizacaoUpdateOneRequiredWithoutUsuarios_organizacaoNestedInput
  }

  export type usuarios_organizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_organizacaoCreateManyInput = {
    id?: number
    organizacao_id: number
    usuarios_id: number
  }

  export type usuarios_organizacaoUpdateManyMutationInput = {

  }

  export type usuarios_organizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type chaves_apiCreateInput = {
    chave_api: string
    is_ativo?: boolean
    id_organizacao: organizacaoCreateNestedOneWithoutChaves_apiInput
  }

  export type chaves_apiUncheckedCreateInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    organizacao_id: number
  }

  export type chaves_apiUpdateInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_organizacao?: organizacaoUpdateOneRequiredWithoutChaves_apiNestedInput
  }

  export type chaves_apiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    organizacao_id?: IntFieldUpdateOperationsInput | number
  }

  export type chaves_apiCreateManyInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    organizacao_id: number
  }

  export type chaves_apiUpdateManyMutationInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chaves_apiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    organizacao_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    jwt_token?: jwt_tokenCreateNestedManyWithoutId_usuarioInput
    templates?: templatesCreateNestedManyWithoutId_usuarioInput
    usuarios_organizacao?: usuarios_organizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    jwt_token?: jwt_tokenUncheckedCreateNestedManyWithoutId_usuarioInput
    templates?: templatesUncheckedCreateNestedManyWithoutId_usuarioInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    jwt_token?: jwt_tokenUpdateManyWithoutId_usuarioNestedInput
    templates?: templatesUpdateManyWithoutId_usuarioNestedInput
    usuarios_organizacao?: usuarios_organizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    jwt_token?: jwt_tokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    templates?: templatesUncheckedUpdateManyWithoutId_usuarioNestedInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type jwt_tokenCreateInput = {
    jwt_token: string
    id_usuario: usuariosCreateNestedOneWithoutJwt_tokenInput
  }

  export type jwt_tokenUncheckedCreateInput = {
    id?: number
    jwt_token: string
    usuarios_id: number
  }

  export type jwt_tokenUpdateInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
    id_usuario?: usuariosUpdateOneRequiredWithoutJwt_tokenNestedInput
  }

  export type jwt_tokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type jwt_tokenCreateManyInput = {
    id?: number
    jwt_token: string
    usuarios_id: number
  }

  export type jwt_tokenUpdateManyMutationInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type jwt_tokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type templatesCreateInput = {
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    id_usuario: usuariosCreateNestedOneWithoutTemplatesInput
    variaveis_template?: variaveis_templateCreateNestedManyWithoutId_templateInput
  }

  export type templatesUncheckedCreateInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    usuarios_id: number
    variaveis_template?: variaveis_templateUncheckedCreateNestedManyWithoutId_templateInput
  }

  export type templatesUpdateInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: usuariosUpdateOneRequiredWithoutTemplatesNestedInput
    variaveis_template?: variaveis_templateUpdateManyWithoutId_templateNestedInput
  }

  export type templatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuarios_id?: IntFieldUpdateOperationsInput | number
    variaveis_template?: variaveis_templateUncheckedUpdateManyWithoutId_templateNestedInput
  }

  export type templatesCreateManyInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    usuarios_id: number
  }

  export type templatesUpdateManyMutationInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type templatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type variaveis_templateCreateInput = {
    id_template: templatesCreateNestedOneWithoutVariaveis_templateInput
  }

  export type variaveis_templateUncheckedCreateInput = {
    id?: number
    templates_id: number
  }

  export type variaveis_templateUpdateInput = {
    id_template?: templatesUpdateOneRequiredWithoutVariaveis_templateNestedInput
  }

  export type variaveis_templateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templates_id?: IntFieldUpdateOperationsInput | number
  }

  export type variaveis_templateCreateManyInput = {
    id?: number
    templates_id: number
  }

  export type variaveis_templateUpdateManyMutationInput = {

  }

  export type variaveis_templateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templates_id?: IntFieldUpdateOperationsInput | number
  }

  export type status_documentosCreateInput = {
    status_documento: number
  }

  export type status_documentosUncheckedCreateInput = {
    id?: number
    status_documento: number
  }

  export type status_documentosUpdateInput = {
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type status_documentosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type status_documentosCreateManyInput = {
    id?: number
    status_documento: number
  }

  export type status_documentosUpdateManyMutationInput = {
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type status_documentosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type adminsOrderByRelevanceInput = {
    fields: adminsOrderByRelevanceFieldEnum | adminsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminsCountOrderByAggregateInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
  }

  export type adminsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
  }

  export type adminsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Chaves_apiListRelationFilter = {
    every?: chaves_apiWhereInput
    some?: chaves_apiWhereInput
    none?: chaves_apiWhereInput
  }

  export type Usuarios_organizacaoListRelationFilter = {
    every?: usuarios_organizacaoWhereInput
    some?: usuarios_organizacaoWhereInput
    none?: usuarios_organizacaoWhereInput
  }

  export type chaves_apiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarios_organizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizacaoOrderByRelevanceInput = {
    fields: organizacaoOrderByRelevanceFieldEnum | organizacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type organizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
  }

  export type organizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
  }

  export type organizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
  }

  export type organizacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type OrganizacaoScalarRelationFilter = {
    is?: organizacaoWhereInput
    isNot?: organizacaoWhereInput
  }

  export type usuarios_organizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type usuarios_organizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type usuarios_organizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type usuarios_organizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type usuarios_organizacaoSumOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type chaves_apiOrderByRelevanceInput = {
    fields: chaves_apiOrderByRelevanceFieldEnum | chaves_apiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chaves_apiCountOrderByAggregateInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacao_id?: SortOrder
  }

  export type chaves_apiAvgOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
  }

  export type chaves_apiMaxOrderByAggregateInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacao_id?: SortOrder
  }

  export type chaves_apiMinOrderByAggregateInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacao_id?: SortOrder
  }

  export type chaves_apiSumOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Jwt_tokenListRelationFilter = {
    every?: jwt_tokenWhereInput
    some?: jwt_tokenWhereInput
    none?: jwt_tokenWhereInput
  }

  export type TemplatesListRelationFilter = {
    every?: templatesWhereInput
    some?: templatesWhereInput
    none?: templatesWhereInput
  }

  export type jwt_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type templatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    nascimento?: SortOrder
    senha?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipo_acesso?: SortOrder
    is_ativo?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    nascimento?: SortOrder
    senha?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipo_acesso?: SortOrder
    is_ativo?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    nascimento?: SortOrder
    senha?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipo_acesso?: SortOrder
    is_ativo?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type jwt_tokenOrderByRelevanceInput = {
    fields: jwt_tokenOrderByRelevanceFieldEnum | jwt_tokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jwt_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuarios_id?: SortOrder
  }

  export type jwt_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type jwt_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuarios_id?: SortOrder
  }

  export type jwt_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuarios_id?: SortOrder
  }

  export type jwt_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type Variaveis_templateListRelationFilter = {
    every?: variaveis_templateWhereInput
    some?: variaveis_templateWhereInput
    none?: variaveis_templateWhereInput
  }

  export type variaveis_templateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type templatesOrderByRelevanceInput = {
    fields: templatesOrderByRelevanceFieldEnum | templatesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type templatesCountOrderByAggregateInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuarios_id?: SortOrder
  }

  export type templatesAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type templatesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuarios_id?: SortOrder
  }

  export type templatesMinOrderByAggregateInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuarios_id?: SortOrder
  }

  export type templatesSumOrderByAggregateInput = {
    id?: SortOrder
    usuarios_id?: SortOrder
  }

  export type TemplatesScalarRelationFilter = {
    is?: templatesWhereInput
    isNot?: templatesWhereInput
  }

  export type variaveis_templateCountOrderByAggregateInput = {
    id?: SortOrder
    templates_id?: SortOrder
  }

  export type variaveis_templateAvgOrderByAggregateInput = {
    id?: SortOrder
    templates_id?: SortOrder
  }

  export type variaveis_templateMaxOrderByAggregateInput = {
    id?: SortOrder
    templates_id?: SortOrder
  }

  export type variaveis_templateMinOrderByAggregateInput = {
    id?: SortOrder
    templates_id?: SortOrder
  }

  export type variaveis_templateSumOrderByAggregateInput = {
    id?: SortOrder
    templates_id?: SortOrder
  }

  export type status_documentosCountOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type status_documentosAvgOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type status_documentosMaxOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type status_documentosMinOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type status_documentosSumOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type chaves_apiCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<chaves_apiCreateWithoutId_organizacaoInput, chaves_apiUncheckedCreateWithoutId_organizacaoInput> | chaves_apiCreateWithoutId_organizacaoInput[] | chaves_apiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: chaves_apiCreateOrConnectWithoutId_organizacaoInput | chaves_apiCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: chaves_apiCreateManyId_organizacaoInputEnvelope
    connect?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
  }

  export type usuarios_organizacaoCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput> | usuarios_organizacaoCreateWithoutId_organizacaoInput[] | usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput | usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: usuarios_organizacaoCreateManyId_organizacaoInputEnvelope
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
  }

  export type chaves_apiUncheckedCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<chaves_apiCreateWithoutId_organizacaoInput, chaves_apiUncheckedCreateWithoutId_organizacaoInput> | chaves_apiCreateWithoutId_organizacaoInput[] | chaves_apiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: chaves_apiCreateOrConnectWithoutId_organizacaoInput | chaves_apiCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: chaves_apiCreateManyId_organizacaoInputEnvelope
    connect?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
  }

  export type usuarios_organizacaoUncheckedCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput> | usuarios_organizacaoCreateWithoutId_organizacaoInput[] | usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput | usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: usuarios_organizacaoCreateManyId_organizacaoInputEnvelope
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
  }

  export type chaves_apiUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<chaves_apiCreateWithoutId_organizacaoInput, chaves_apiUncheckedCreateWithoutId_organizacaoInput> | chaves_apiCreateWithoutId_organizacaoInput[] | chaves_apiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: chaves_apiCreateOrConnectWithoutId_organizacaoInput | chaves_apiCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: chaves_apiUpsertWithWhereUniqueWithoutId_organizacaoInput | chaves_apiUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: chaves_apiCreateManyId_organizacaoInputEnvelope
    set?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    disconnect?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    delete?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    connect?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    update?: chaves_apiUpdateWithWhereUniqueWithoutId_organizacaoInput | chaves_apiUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: chaves_apiUpdateManyWithWhereWithoutId_organizacaoInput | chaves_apiUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: chaves_apiScalarWhereInput | chaves_apiScalarWhereInput[]
  }

  export type usuarios_organizacaoUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput> | usuarios_organizacaoCreateWithoutId_organizacaoInput[] | usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput | usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: usuarios_organizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput | usuarios_organizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: usuarios_organizacaoCreateManyId_organizacaoInputEnvelope
    set?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    disconnect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    delete?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    update?: usuarios_organizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput | usuarios_organizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: usuarios_organizacaoUpdateManyWithWhereWithoutId_organizacaoInput | usuarios_organizacaoUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: usuarios_organizacaoScalarWhereInput | usuarios_organizacaoScalarWhereInput[]
  }

  export type chaves_apiUncheckedUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<chaves_apiCreateWithoutId_organizacaoInput, chaves_apiUncheckedCreateWithoutId_organizacaoInput> | chaves_apiCreateWithoutId_organizacaoInput[] | chaves_apiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: chaves_apiCreateOrConnectWithoutId_organizacaoInput | chaves_apiCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: chaves_apiUpsertWithWhereUniqueWithoutId_organizacaoInput | chaves_apiUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: chaves_apiCreateManyId_organizacaoInputEnvelope
    set?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    disconnect?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    delete?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    connect?: chaves_apiWhereUniqueInput | chaves_apiWhereUniqueInput[]
    update?: chaves_apiUpdateWithWhereUniqueWithoutId_organizacaoInput | chaves_apiUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: chaves_apiUpdateManyWithWhereWithoutId_organizacaoInput | chaves_apiUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: chaves_apiScalarWhereInput | chaves_apiScalarWhereInput[]
  }

  export type usuarios_organizacaoUncheckedUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput> | usuarios_organizacaoCreateWithoutId_organizacaoInput[] | usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput | usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: usuarios_organizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput | usuarios_organizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: usuarios_organizacaoCreateManyId_organizacaoInputEnvelope
    set?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    disconnect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    delete?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    update?: usuarios_organizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput | usuarios_organizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: usuarios_organizacaoUpdateManyWithWhereWithoutId_organizacaoInput | usuarios_organizacaoUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: usuarios_organizacaoScalarWhereInput | usuarios_organizacaoScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutUsuarios_organizacaoInput = {
    create?: XOR<usuariosCreateWithoutUsuarios_organizacaoInput, usuariosUncheckedCreateWithoutUsuarios_organizacaoInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUsuarios_organizacaoInput
    connect?: usuariosWhereUniqueInput
  }

  export type organizacaoCreateNestedOneWithoutUsuarios_organizacaoInput = {
    create?: XOR<organizacaoCreateWithoutUsuarios_organizacaoInput, organizacaoUncheckedCreateWithoutUsuarios_organizacaoInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutUsuarios_organizacaoInput
    connect?: organizacaoWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutUsuarios_organizacaoNestedInput = {
    create?: XOR<usuariosCreateWithoutUsuarios_organizacaoInput, usuariosUncheckedCreateWithoutUsuarios_organizacaoInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUsuarios_organizacaoInput
    upsert?: usuariosUpsertWithoutUsuarios_organizacaoInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutUsuarios_organizacaoInput, usuariosUpdateWithoutUsuarios_organizacaoInput>, usuariosUncheckedUpdateWithoutUsuarios_organizacaoInput>
  }

  export type organizacaoUpdateOneRequiredWithoutUsuarios_organizacaoNestedInput = {
    create?: XOR<organizacaoCreateWithoutUsuarios_organizacaoInput, organizacaoUncheckedCreateWithoutUsuarios_organizacaoInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutUsuarios_organizacaoInput
    upsert?: organizacaoUpsertWithoutUsuarios_organizacaoInput
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutUsuarios_organizacaoInput, organizacaoUpdateWithoutUsuarios_organizacaoInput>, organizacaoUncheckedUpdateWithoutUsuarios_organizacaoInput>
  }

  export type organizacaoCreateNestedOneWithoutChaves_apiInput = {
    create?: XOR<organizacaoCreateWithoutChaves_apiInput, organizacaoUncheckedCreateWithoutChaves_apiInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutChaves_apiInput
    connect?: organizacaoWhereUniqueInput
  }

  export type organizacaoUpdateOneRequiredWithoutChaves_apiNestedInput = {
    create?: XOR<organizacaoCreateWithoutChaves_apiInput, organizacaoUncheckedCreateWithoutChaves_apiInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutChaves_apiInput
    upsert?: organizacaoUpsertWithoutChaves_apiInput
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutChaves_apiInput, organizacaoUpdateWithoutChaves_apiInput>, organizacaoUncheckedUpdateWithoutChaves_apiInput>
  }

  export type jwt_tokenCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<jwt_tokenCreateWithoutId_usuarioInput, jwt_tokenUncheckedCreateWithoutId_usuarioInput> | jwt_tokenCreateWithoutId_usuarioInput[] | jwt_tokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: jwt_tokenCreateOrConnectWithoutId_usuarioInput | jwt_tokenCreateOrConnectWithoutId_usuarioInput[]
    createMany?: jwt_tokenCreateManyId_usuarioInputEnvelope
    connect?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
  }

  export type templatesCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<templatesCreateWithoutId_usuarioInput, templatesUncheckedCreateWithoutId_usuarioInput> | templatesCreateWithoutId_usuarioInput[] | templatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: templatesCreateOrConnectWithoutId_usuarioInput | templatesCreateOrConnectWithoutId_usuarioInput[]
    createMany?: templatesCreateManyId_usuarioInputEnvelope
    connect?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
  }

  export type usuarios_organizacaoCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_usuarioInput, usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput> | usuarios_organizacaoCreateWithoutId_usuarioInput[] | usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput | usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput[]
    createMany?: usuarios_organizacaoCreateManyId_usuarioInputEnvelope
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
  }

  export type jwt_tokenUncheckedCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<jwt_tokenCreateWithoutId_usuarioInput, jwt_tokenUncheckedCreateWithoutId_usuarioInput> | jwt_tokenCreateWithoutId_usuarioInput[] | jwt_tokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: jwt_tokenCreateOrConnectWithoutId_usuarioInput | jwt_tokenCreateOrConnectWithoutId_usuarioInput[]
    createMany?: jwt_tokenCreateManyId_usuarioInputEnvelope
    connect?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
  }

  export type templatesUncheckedCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<templatesCreateWithoutId_usuarioInput, templatesUncheckedCreateWithoutId_usuarioInput> | templatesCreateWithoutId_usuarioInput[] | templatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: templatesCreateOrConnectWithoutId_usuarioInput | templatesCreateOrConnectWithoutId_usuarioInput[]
    createMany?: templatesCreateManyId_usuarioInputEnvelope
    connect?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
  }

  export type usuarios_organizacaoUncheckedCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_usuarioInput, usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput> | usuarios_organizacaoCreateWithoutId_usuarioInput[] | usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput | usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput[]
    createMany?: usuarios_organizacaoCreateManyId_usuarioInputEnvelope
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type jwt_tokenUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<jwt_tokenCreateWithoutId_usuarioInput, jwt_tokenUncheckedCreateWithoutId_usuarioInput> | jwt_tokenCreateWithoutId_usuarioInput[] | jwt_tokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: jwt_tokenCreateOrConnectWithoutId_usuarioInput | jwt_tokenCreateOrConnectWithoutId_usuarioInput[]
    upsert?: jwt_tokenUpsertWithWhereUniqueWithoutId_usuarioInput | jwt_tokenUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: jwt_tokenCreateManyId_usuarioInputEnvelope
    set?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    disconnect?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    delete?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    connect?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    update?: jwt_tokenUpdateWithWhereUniqueWithoutId_usuarioInput | jwt_tokenUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: jwt_tokenUpdateManyWithWhereWithoutId_usuarioInput | jwt_tokenUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: jwt_tokenScalarWhereInput | jwt_tokenScalarWhereInput[]
  }

  export type templatesUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<templatesCreateWithoutId_usuarioInput, templatesUncheckedCreateWithoutId_usuarioInput> | templatesCreateWithoutId_usuarioInput[] | templatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: templatesCreateOrConnectWithoutId_usuarioInput | templatesCreateOrConnectWithoutId_usuarioInput[]
    upsert?: templatesUpsertWithWhereUniqueWithoutId_usuarioInput | templatesUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: templatesCreateManyId_usuarioInputEnvelope
    set?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    disconnect?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    delete?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    connect?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    update?: templatesUpdateWithWhereUniqueWithoutId_usuarioInput | templatesUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: templatesUpdateManyWithWhereWithoutId_usuarioInput | templatesUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: templatesScalarWhereInput | templatesScalarWhereInput[]
  }

  export type usuarios_organizacaoUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_usuarioInput, usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput> | usuarios_organizacaoCreateWithoutId_usuarioInput[] | usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput | usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput[]
    upsert?: usuarios_organizacaoUpsertWithWhereUniqueWithoutId_usuarioInput | usuarios_organizacaoUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: usuarios_organizacaoCreateManyId_usuarioInputEnvelope
    set?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    disconnect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    delete?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    update?: usuarios_organizacaoUpdateWithWhereUniqueWithoutId_usuarioInput | usuarios_organizacaoUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: usuarios_organizacaoUpdateManyWithWhereWithoutId_usuarioInput | usuarios_organizacaoUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: usuarios_organizacaoScalarWhereInput | usuarios_organizacaoScalarWhereInput[]
  }

  export type jwt_tokenUncheckedUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<jwt_tokenCreateWithoutId_usuarioInput, jwt_tokenUncheckedCreateWithoutId_usuarioInput> | jwt_tokenCreateWithoutId_usuarioInput[] | jwt_tokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: jwt_tokenCreateOrConnectWithoutId_usuarioInput | jwt_tokenCreateOrConnectWithoutId_usuarioInput[]
    upsert?: jwt_tokenUpsertWithWhereUniqueWithoutId_usuarioInput | jwt_tokenUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: jwt_tokenCreateManyId_usuarioInputEnvelope
    set?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    disconnect?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    delete?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    connect?: jwt_tokenWhereUniqueInput | jwt_tokenWhereUniqueInput[]
    update?: jwt_tokenUpdateWithWhereUniqueWithoutId_usuarioInput | jwt_tokenUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: jwt_tokenUpdateManyWithWhereWithoutId_usuarioInput | jwt_tokenUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: jwt_tokenScalarWhereInput | jwt_tokenScalarWhereInput[]
  }

  export type templatesUncheckedUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<templatesCreateWithoutId_usuarioInput, templatesUncheckedCreateWithoutId_usuarioInput> | templatesCreateWithoutId_usuarioInput[] | templatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: templatesCreateOrConnectWithoutId_usuarioInput | templatesCreateOrConnectWithoutId_usuarioInput[]
    upsert?: templatesUpsertWithWhereUniqueWithoutId_usuarioInput | templatesUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: templatesCreateManyId_usuarioInputEnvelope
    set?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    disconnect?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    delete?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    connect?: templatesWhereUniqueInput | templatesWhereUniqueInput[]
    update?: templatesUpdateWithWhereUniqueWithoutId_usuarioInput | templatesUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: templatesUpdateManyWithWhereWithoutId_usuarioInput | templatesUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: templatesScalarWhereInput | templatesScalarWhereInput[]
  }

  export type usuarios_organizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<usuarios_organizacaoCreateWithoutId_usuarioInput, usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput> | usuarios_organizacaoCreateWithoutId_usuarioInput[] | usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput | usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput[]
    upsert?: usuarios_organizacaoUpsertWithWhereUniqueWithoutId_usuarioInput | usuarios_organizacaoUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: usuarios_organizacaoCreateManyId_usuarioInputEnvelope
    set?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    disconnect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    delete?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    connect?: usuarios_organizacaoWhereUniqueInput | usuarios_organizacaoWhereUniqueInput[]
    update?: usuarios_organizacaoUpdateWithWhereUniqueWithoutId_usuarioInput | usuarios_organizacaoUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: usuarios_organizacaoUpdateManyWithWhereWithoutId_usuarioInput | usuarios_organizacaoUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: usuarios_organizacaoScalarWhereInput | usuarios_organizacaoScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutJwt_tokenInput = {
    create?: XOR<usuariosCreateWithoutJwt_tokenInput, usuariosUncheckedCreateWithoutJwt_tokenInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutJwt_tokenInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutJwt_tokenNestedInput = {
    create?: XOR<usuariosCreateWithoutJwt_tokenInput, usuariosUncheckedCreateWithoutJwt_tokenInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutJwt_tokenInput
    upsert?: usuariosUpsertWithoutJwt_tokenInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutJwt_tokenInput, usuariosUpdateWithoutJwt_tokenInput>, usuariosUncheckedUpdateWithoutJwt_tokenInput>
  }

  export type usuariosCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<usuariosCreateWithoutTemplatesInput, usuariosUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTemplatesInput
    connect?: usuariosWhereUniqueInput
  }

  export type variaveis_templateCreateNestedManyWithoutId_templateInput = {
    create?: XOR<variaveis_templateCreateWithoutId_templateInput, variaveis_templateUncheckedCreateWithoutId_templateInput> | variaveis_templateCreateWithoutId_templateInput[] | variaveis_templateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: variaveis_templateCreateOrConnectWithoutId_templateInput | variaveis_templateCreateOrConnectWithoutId_templateInput[]
    createMany?: variaveis_templateCreateManyId_templateInputEnvelope
    connect?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
  }

  export type variaveis_templateUncheckedCreateNestedManyWithoutId_templateInput = {
    create?: XOR<variaveis_templateCreateWithoutId_templateInput, variaveis_templateUncheckedCreateWithoutId_templateInput> | variaveis_templateCreateWithoutId_templateInput[] | variaveis_templateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: variaveis_templateCreateOrConnectWithoutId_templateInput | variaveis_templateCreateOrConnectWithoutId_templateInput[]
    createMany?: variaveis_templateCreateManyId_templateInputEnvelope
    connect?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
  }

  export type usuariosUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<usuariosCreateWithoutTemplatesInput, usuariosUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTemplatesInput
    upsert?: usuariosUpsertWithoutTemplatesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutTemplatesInput, usuariosUpdateWithoutTemplatesInput>, usuariosUncheckedUpdateWithoutTemplatesInput>
  }

  export type variaveis_templateUpdateManyWithoutId_templateNestedInput = {
    create?: XOR<variaveis_templateCreateWithoutId_templateInput, variaveis_templateUncheckedCreateWithoutId_templateInput> | variaveis_templateCreateWithoutId_templateInput[] | variaveis_templateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: variaveis_templateCreateOrConnectWithoutId_templateInput | variaveis_templateCreateOrConnectWithoutId_templateInput[]
    upsert?: variaveis_templateUpsertWithWhereUniqueWithoutId_templateInput | variaveis_templateUpsertWithWhereUniqueWithoutId_templateInput[]
    createMany?: variaveis_templateCreateManyId_templateInputEnvelope
    set?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    disconnect?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    delete?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    connect?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    update?: variaveis_templateUpdateWithWhereUniqueWithoutId_templateInput | variaveis_templateUpdateWithWhereUniqueWithoutId_templateInput[]
    updateMany?: variaveis_templateUpdateManyWithWhereWithoutId_templateInput | variaveis_templateUpdateManyWithWhereWithoutId_templateInput[]
    deleteMany?: variaveis_templateScalarWhereInput | variaveis_templateScalarWhereInput[]
  }

  export type variaveis_templateUncheckedUpdateManyWithoutId_templateNestedInput = {
    create?: XOR<variaveis_templateCreateWithoutId_templateInput, variaveis_templateUncheckedCreateWithoutId_templateInput> | variaveis_templateCreateWithoutId_templateInput[] | variaveis_templateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: variaveis_templateCreateOrConnectWithoutId_templateInput | variaveis_templateCreateOrConnectWithoutId_templateInput[]
    upsert?: variaveis_templateUpsertWithWhereUniqueWithoutId_templateInput | variaveis_templateUpsertWithWhereUniqueWithoutId_templateInput[]
    createMany?: variaveis_templateCreateManyId_templateInputEnvelope
    set?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    disconnect?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    delete?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    connect?: variaveis_templateWhereUniqueInput | variaveis_templateWhereUniqueInput[]
    update?: variaveis_templateUpdateWithWhereUniqueWithoutId_templateInput | variaveis_templateUpdateWithWhereUniqueWithoutId_templateInput[]
    updateMany?: variaveis_templateUpdateManyWithWhereWithoutId_templateInput | variaveis_templateUpdateManyWithWhereWithoutId_templateInput[]
    deleteMany?: variaveis_templateScalarWhereInput | variaveis_templateScalarWhereInput[]
  }

  export type templatesCreateNestedOneWithoutVariaveis_templateInput = {
    create?: XOR<templatesCreateWithoutVariaveis_templateInput, templatesUncheckedCreateWithoutVariaveis_templateInput>
    connectOrCreate?: templatesCreateOrConnectWithoutVariaveis_templateInput
    connect?: templatesWhereUniqueInput
  }

  export type templatesUpdateOneRequiredWithoutVariaveis_templateNestedInput = {
    create?: XOR<templatesCreateWithoutVariaveis_templateInput, templatesUncheckedCreateWithoutVariaveis_templateInput>
    connectOrCreate?: templatesCreateOrConnectWithoutVariaveis_templateInput
    upsert?: templatesUpsertWithoutVariaveis_templateInput
    connect?: templatesWhereUniqueInput
    update?: XOR<XOR<templatesUpdateToOneWithWhereWithoutVariaveis_templateInput, templatesUpdateWithoutVariaveis_templateInput>, templatesUncheckedUpdateWithoutVariaveis_templateInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type chaves_apiCreateWithoutId_organizacaoInput = {
    chave_api: string
    is_ativo?: boolean
  }

  export type chaves_apiUncheckedCreateWithoutId_organizacaoInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
  }

  export type chaves_apiCreateOrConnectWithoutId_organizacaoInput = {
    where: chaves_apiWhereUniqueInput
    create: XOR<chaves_apiCreateWithoutId_organizacaoInput, chaves_apiUncheckedCreateWithoutId_organizacaoInput>
  }

  export type chaves_apiCreateManyId_organizacaoInputEnvelope = {
    data: chaves_apiCreateManyId_organizacaoInput | chaves_apiCreateManyId_organizacaoInput[]
    skipDuplicates?: boolean
  }

  export type usuarios_organizacaoCreateWithoutId_organizacaoInput = {
    id_usuario: usuariosCreateNestedOneWithoutUsuarios_organizacaoInput
  }

  export type usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput = {
    id?: number
    usuarios_id: number
  }

  export type usuarios_organizacaoCreateOrConnectWithoutId_organizacaoInput = {
    where: usuarios_organizacaoWhereUniqueInput
    create: XOR<usuarios_organizacaoCreateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput>
  }

  export type usuarios_organizacaoCreateManyId_organizacaoInputEnvelope = {
    data: usuarios_organizacaoCreateManyId_organizacaoInput | usuarios_organizacaoCreateManyId_organizacaoInput[]
    skipDuplicates?: boolean
  }

  export type chaves_apiUpsertWithWhereUniqueWithoutId_organizacaoInput = {
    where: chaves_apiWhereUniqueInput
    update: XOR<chaves_apiUpdateWithoutId_organizacaoInput, chaves_apiUncheckedUpdateWithoutId_organizacaoInput>
    create: XOR<chaves_apiCreateWithoutId_organizacaoInput, chaves_apiUncheckedCreateWithoutId_organizacaoInput>
  }

  export type chaves_apiUpdateWithWhereUniqueWithoutId_organizacaoInput = {
    where: chaves_apiWhereUniqueInput
    data: XOR<chaves_apiUpdateWithoutId_organizacaoInput, chaves_apiUncheckedUpdateWithoutId_organizacaoInput>
  }

  export type chaves_apiUpdateManyWithWhereWithoutId_organizacaoInput = {
    where: chaves_apiScalarWhereInput
    data: XOR<chaves_apiUpdateManyMutationInput, chaves_apiUncheckedUpdateManyWithoutId_organizacaoInput>
  }

  export type chaves_apiScalarWhereInput = {
    AND?: chaves_apiScalarWhereInput | chaves_apiScalarWhereInput[]
    OR?: chaves_apiScalarWhereInput[]
    NOT?: chaves_apiScalarWhereInput | chaves_apiScalarWhereInput[]
    id?: IntFilter<"chaves_api"> | number
    chave_api?: StringFilter<"chaves_api"> | string
    is_ativo?: BoolFilter<"chaves_api"> | boolean
    organizacao_id?: IntFilter<"chaves_api"> | number
  }

  export type usuarios_organizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput = {
    where: usuarios_organizacaoWhereUniqueInput
    update: XOR<usuarios_organizacaoUpdateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedUpdateWithoutId_organizacaoInput>
    create: XOR<usuarios_organizacaoCreateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedCreateWithoutId_organizacaoInput>
  }

  export type usuarios_organizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput = {
    where: usuarios_organizacaoWhereUniqueInput
    data: XOR<usuarios_organizacaoUpdateWithoutId_organizacaoInput, usuarios_organizacaoUncheckedUpdateWithoutId_organizacaoInput>
  }

  export type usuarios_organizacaoUpdateManyWithWhereWithoutId_organizacaoInput = {
    where: usuarios_organizacaoScalarWhereInput
    data: XOR<usuarios_organizacaoUpdateManyMutationInput, usuarios_organizacaoUncheckedUpdateManyWithoutId_organizacaoInput>
  }

  export type usuarios_organizacaoScalarWhereInput = {
    AND?: usuarios_organizacaoScalarWhereInput | usuarios_organizacaoScalarWhereInput[]
    OR?: usuarios_organizacaoScalarWhereInput[]
    NOT?: usuarios_organizacaoScalarWhereInput | usuarios_organizacaoScalarWhereInput[]
    id?: IntFilter<"usuarios_organizacao"> | number
    organizacao_id?: IntFilter<"usuarios_organizacao"> | number
    usuarios_id?: IntFilter<"usuarios_organizacao"> | number
  }

  export type usuariosCreateWithoutUsuarios_organizacaoInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    jwt_token?: jwt_tokenCreateNestedManyWithoutId_usuarioInput
    templates?: templatesCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosUncheckedCreateWithoutUsuarios_organizacaoInput = {
    id?: number
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    jwt_token?: jwt_tokenUncheckedCreateNestedManyWithoutId_usuarioInput
    templates?: templatesUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosCreateOrConnectWithoutUsuarios_organizacaoInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutUsuarios_organizacaoInput, usuariosUncheckedCreateWithoutUsuarios_organizacaoInput>
  }

  export type organizacaoCreateWithoutUsuarios_organizacaoInput = {
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    chaves_api?: chaves_apiCreateNestedManyWithoutId_organizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutUsuarios_organizacaoInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    chaves_api?: chaves_apiUncheckedCreateNestedManyWithoutId_organizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutUsuarios_organizacaoInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutUsuarios_organizacaoInput, organizacaoUncheckedCreateWithoutUsuarios_organizacaoInput>
  }

  export type usuariosUpsertWithoutUsuarios_organizacaoInput = {
    update: XOR<usuariosUpdateWithoutUsuarios_organizacaoInput, usuariosUncheckedUpdateWithoutUsuarios_organizacaoInput>
    create: XOR<usuariosCreateWithoutUsuarios_organizacaoInput, usuariosUncheckedCreateWithoutUsuarios_organizacaoInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutUsuarios_organizacaoInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutUsuarios_organizacaoInput, usuariosUncheckedUpdateWithoutUsuarios_organizacaoInput>
  }

  export type usuariosUpdateWithoutUsuarios_organizacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    jwt_token?: jwt_tokenUpdateManyWithoutId_usuarioNestedInput
    templates?: templatesUpdateManyWithoutId_usuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutUsuarios_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    jwt_token?: jwt_tokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    templates?: templatesUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type organizacaoUpsertWithoutUsuarios_organizacaoInput = {
    update: XOR<organizacaoUpdateWithoutUsuarios_organizacaoInput, organizacaoUncheckedUpdateWithoutUsuarios_organizacaoInput>
    create: XOR<organizacaoCreateWithoutUsuarios_organizacaoInput, organizacaoUncheckedCreateWithoutUsuarios_organizacaoInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutUsuarios_organizacaoInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutUsuarios_organizacaoInput, organizacaoUncheckedUpdateWithoutUsuarios_organizacaoInput>
  }

  export type organizacaoUpdateWithoutUsuarios_organizacaoInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    chaves_api?: chaves_apiUpdateManyWithoutId_organizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutUsuarios_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    chaves_api?: chaves_apiUncheckedUpdateManyWithoutId_organizacaoNestedInput
  }

  export type organizacaoCreateWithoutChaves_apiInput = {
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    usuarios_organizacao?: usuarios_organizacaoCreateNestedManyWithoutId_organizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutChaves_apiInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    usuarios_organizacao?: usuarios_organizacaoUncheckedCreateNestedManyWithoutId_organizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutChaves_apiInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutChaves_apiInput, organizacaoUncheckedCreateWithoutChaves_apiInput>
  }

  export type organizacaoUpsertWithoutChaves_apiInput = {
    update: XOR<organizacaoUpdateWithoutChaves_apiInput, organizacaoUncheckedUpdateWithoutChaves_apiInput>
    create: XOR<organizacaoCreateWithoutChaves_apiInput, organizacaoUncheckedCreateWithoutChaves_apiInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutChaves_apiInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutChaves_apiInput, organizacaoUncheckedUpdateWithoutChaves_apiInput>
  }

  export type organizacaoUpdateWithoutChaves_apiInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuarios_organizacao?: usuarios_organizacaoUpdateManyWithoutId_organizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutChaves_apiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuarios_organizacao?: usuarios_organizacaoUncheckedUpdateManyWithoutId_organizacaoNestedInput
  }

  export type jwt_tokenCreateWithoutId_usuarioInput = {
    jwt_token: string
  }

  export type jwt_tokenUncheckedCreateWithoutId_usuarioInput = {
    id?: number
    jwt_token: string
  }

  export type jwt_tokenCreateOrConnectWithoutId_usuarioInput = {
    where: jwt_tokenWhereUniqueInput
    create: XOR<jwt_tokenCreateWithoutId_usuarioInput, jwt_tokenUncheckedCreateWithoutId_usuarioInput>
  }

  export type jwt_tokenCreateManyId_usuarioInputEnvelope = {
    data: jwt_tokenCreateManyId_usuarioInput | jwt_tokenCreateManyId_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type templatesCreateWithoutId_usuarioInput = {
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    variaveis_template?: variaveis_templateCreateNestedManyWithoutId_templateInput
  }

  export type templatesUncheckedCreateWithoutId_usuarioInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    variaveis_template?: variaveis_templateUncheckedCreateNestedManyWithoutId_templateInput
  }

  export type templatesCreateOrConnectWithoutId_usuarioInput = {
    where: templatesWhereUniqueInput
    create: XOR<templatesCreateWithoutId_usuarioInput, templatesUncheckedCreateWithoutId_usuarioInput>
  }

  export type templatesCreateManyId_usuarioInputEnvelope = {
    data: templatesCreateManyId_usuarioInput | templatesCreateManyId_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type usuarios_organizacaoCreateWithoutId_usuarioInput = {
    id_organizacao: organizacaoCreateNestedOneWithoutUsuarios_organizacaoInput
  }

  export type usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput = {
    id?: number
    organizacao_id: number
  }

  export type usuarios_organizacaoCreateOrConnectWithoutId_usuarioInput = {
    where: usuarios_organizacaoWhereUniqueInput
    create: XOR<usuarios_organizacaoCreateWithoutId_usuarioInput, usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput>
  }

  export type usuarios_organizacaoCreateManyId_usuarioInputEnvelope = {
    data: usuarios_organizacaoCreateManyId_usuarioInput | usuarios_organizacaoCreateManyId_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type jwt_tokenUpsertWithWhereUniqueWithoutId_usuarioInput = {
    where: jwt_tokenWhereUniqueInput
    update: XOR<jwt_tokenUpdateWithoutId_usuarioInput, jwt_tokenUncheckedUpdateWithoutId_usuarioInput>
    create: XOR<jwt_tokenCreateWithoutId_usuarioInput, jwt_tokenUncheckedCreateWithoutId_usuarioInput>
  }

  export type jwt_tokenUpdateWithWhereUniqueWithoutId_usuarioInput = {
    where: jwt_tokenWhereUniqueInput
    data: XOR<jwt_tokenUpdateWithoutId_usuarioInput, jwt_tokenUncheckedUpdateWithoutId_usuarioInput>
  }

  export type jwt_tokenUpdateManyWithWhereWithoutId_usuarioInput = {
    where: jwt_tokenScalarWhereInput
    data: XOR<jwt_tokenUpdateManyMutationInput, jwt_tokenUncheckedUpdateManyWithoutId_usuarioInput>
  }

  export type jwt_tokenScalarWhereInput = {
    AND?: jwt_tokenScalarWhereInput | jwt_tokenScalarWhereInput[]
    OR?: jwt_tokenScalarWhereInput[]
    NOT?: jwt_tokenScalarWhereInput | jwt_tokenScalarWhereInput[]
    id?: IntFilter<"jwt_token"> | number
    jwt_token?: StringFilter<"jwt_token"> | string
    usuarios_id?: IntFilter<"jwt_token"> | number
  }

  export type templatesUpsertWithWhereUniqueWithoutId_usuarioInput = {
    where: templatesWhereUniqueInput
    update: XOR<templatesUpdateWithoutId_usuarioInput, templatesUncheckedUpdateWithoutId_usuarioInput>
    create: XOR<templatesCreateWithoutId_usuarioInput, templatesUncheckedCreateWithoutId_usuarioInput>
  }

  export type templatesUpdateWithWhereUniqueWithoutId_usuarioInput = {
    where: templatesWhereUniqueInput
    data: XOR<templatesUpdateWithoutId_usuarioInput, templatesUncheckedUpdateWithoutId_usuarioInput>
  }

  export type templatesUpdateManyWithWhereWithoutId_usuarioInput = {
    where: templatesScalarWhereInput
    data: XOR<templatesUpdateManyMutationInput, templatesUncheckedUpdateManyWithoutId_usuarioInput>
  }

  export type templatesScalarWhereInput = {
    AND?: templatesScalarWhereInput | templatesScalarWhereInput[]
    OR?: templatesScalarWhereInput[]
    NOT?: templatesScalarWhereInput | templatesScalarWhereInput[]
    id?: IntFilter<"templates"> | number
    nome_template?: StringFilter<"templates"> | string
    diretorio_arquivo?: StringFilter<"templates"> | string
    token_template?: StringFilter<"templates"> | string
    created_at?: DateTimeFilter<"templates"> | Date | string
    is_ativo?: BoolFilter<"templates"> | boolean
    usuarios_id?: IntFilter<"templates"> | number
  }

  export type usuarios_organizacaoUpsertWithWhereUniqueWithoutId_usuarioInput = {
    where: usuarios_organizacaoWhereUniqueInput
    update: XOR<usuarios_organizacaoUpdateWithoutId_usuarioInput, usuarios_organizacaoUncheckedUpdateWithoutId_usuarioInput>
    create: XOR<usuarios_organizacaoCreateWithoutId_usuarioInput, usuarios_organizacaoUncheckedCreateWithoutId_usuarioInput>
  }

  export type usuarios_organizacaoUpdateWithWhereUniqueWithoutId_usuarioInput = {
    where: usuarios_organizacaoWhereUniqueInput
    data: XOR<usuarios_organizacaoUpdateWithoutId_usuarioInput, usuarios_organizacaoUncheckedUpdateWithoutId_usuarioInput>
  }

  export type usuarios_organizacaoUpdateManyWithWhereWithoutId_usuarioInput = {
    where: usuarios_organizacaoScalarWhereInput
    data: XOR<usuarios_organizacaoUpdateManyMutationInput, usuarios_organizacaoUncheckedUpdateManyWithoutId_usuarioInput>
  }

  export type usuariosCreateWithoutJwt_tokenInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    templates?: templatesCreateNestedManyWithoutId_usuarioInput
    usuarios_organizacao?: usuarios_organizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosUncheckedCreateWithoutJwt_tokenInput = {
    id?: number
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    templates?: templatesUncheckedCreateNestedManyWithoutId_usuarioInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosCreateOrConnectWithoutJwt_tokenInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutJwt_tokenInput, usuariosUncheckedCreateWithoutJwt_tokenInput>
  }

  export type usuariosUpsertWithoutJwt_tokenInput = {
    update: XOR<usuariosUpdateWithoutJwt_tokenInput, usuariosUncheckedUpdateWithoutJwt_tokenInput>
    create: XOR<usuariosCreateWithoutJwt_tokenInput, usuariosUncheckedCreateWithoutJwt_tokenInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutJwt_tokenInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutJwt_tokenInput, usuariosUncheckedUpdateWithoutJwt_tokenInput>
  }

  export type usuariosUpdateWithoutJwt_tokenInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    templates?: templatesUpdateManyWithoutId_usuarioNestedInput
    usuarios_organizacao?: usuarios_organizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutJwt_tokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    templates?: templatesUncheckedUpdateManyWithoutId_usuarioNestedInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type usuariosCreateWithoutTemplatesInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    jwt_token?: jwt_tokenCreateNestedManyWithoutId_usuarioInput
    usuarios_organizacao?: usuarios_organizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosUncheckedCreateWithoutTemplatesInput = {
    id?: number
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    jwt_token?: jwt_tokenUncheckedCreateNestedManyWithoutId_usuarioInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type usuariosCreateOrConnectWithoutTemplatesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutTemplatesInput, usuariosUncheckedCreateWithoutTemplatesInput>
  }

  export type variaveis_templateCreateWithoutId_templateInput = {

  }

  export type variaveis_templateUncheckedCreateWithoutId_templateInput = {
    id?: number
  }

  export type variaveis_templateCreateOrConnectWithoutId_templateInput = {
    where: variaveis_templateWhereUniqueInput
    create: XOR<variaveis_templateCreateWithoutId_templateInput, variaveis_templateUncheckedCreateWithoutId_templateInput>
  }

  export type variaveis_templateCreateManyId_templateInputEnvelope = {
    data: variaveis_templateCreateManyId_templateInput | variaveis_templateCreateManyId_templateInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutTemplatesInput = {
    update: XOR<usuariosUpdateWithoutTemplatesInput, usuariosUncheckedUpdateWithoutTemplatesInput>
    create: XOR<usuariosCreateWithoutTemplatesInput, usuariosUncheckedCreateWithoutTemplatesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutTemplatesInput, usuariosUncheckedUpdateWithoutTemplatesInput>
  }

  export type usuariosUpdateWithoutTemplatesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    jwt_token?: jwt_tokenUpdateManyWithoutId_usuarioNestedInput
    usuarios_organizacao?: usuarios_organizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    jwt_token?: jwt_tokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    usuarios_organizacao?: usuarios_organizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type variaveis_templateUpsertWithWhereUniqueWithoutId_templateInput = {
    where: variaveis_templateWhereUniqueInput
    update: XOR<variaveis_templateUpdateWithoutId_templateInput, variaveis_templateUncheckedUpdateWithoutId_templateInput>
    create: XOR<variaveis_templateCreateWithoutId_templateInput, variaveis_templateUncheckedCreateWithoutId_templateInput>
  }

  export type variaveis_templateUpdateWithWhereUniqueWithoutId_templateInput = {
    where: variaveis_templateWhereUniqueInput
    data: XOR<variaveis_templateUpdateWithoutId_templateInput, variaveis_templateUncheckedUpdateWithoutId_templateInput>
  }

  export type variaveis_templateUpdateManyWithWhereWithoutId_templateInput = {
    where: variaveis_templateScalarWhereInput
    data: XOR<variaveis_templateUpdateManyMutationInput, variaveis_templateUncheckedUpdateManyWithoutId_templateInput>
  }

  export type variaveis_templateScalarWhereInput = {
    AND?: variaveis_templateScalarWhereInput | variaveis_templateScalarWhereInput[]
    OR?: variaveis_templateScalarWhereInput[]
    NOT?: variaveis_templateScalarWhereInput | variaveis_templateScalarWhereInput[]
    id?: IntFilter<"variaveis_template"> | number
    templates_id?: IntFilter<"variaveis_template"> | number
  }

  export type templatesCreateWithoutVariaveis_templateInput = {
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    id_usuario: usuariosCreateNestedOneWithoutTemplatesInput
  }

  export type templatesUncheckedCreateWithoutVariaveis_templateInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    usuarios_id: number
  }

  export type templatesCreateOrConnectWithoutVariaveis_templateInput = {
    where: templatesWhereUniqueInput
    create: XOR<templatesCreateWithoutVariaveis_templateInput, templatesUncheckedCreateWithoutVariaveis_templateInput>
  }

  export type templatesUpsertWithoutVariaveis_templateInput = {
    update: XOR<templatesUpdateWithoutVariaveis_templateInput, templatesUncheckedUpdateWithoutVariaveis_templateInput>
    create: XOR<templatesCreateWithoutVariaveis_templateInput, templatesUncheckedCreateWithoutVariaveis_templateInput>
    where?: templatesWhereInput
  }

  export type templatesUpdateToOneWithWhereWithoutVariaveis_templateInput = {
    where?: templatesWhereInput
    data: XOR<templatesUpdateWithoutVariaveis_templateInput, templatesUncheckedUpdateWithoutVariaveis_templateInput>
  }

  export type templatesUpdateWithoutVariaveis_templateInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: usuariosUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type templatesUncheckedUpdateWithoutVariaveis_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type chaves_apiCreateManyId_organizacaoInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
  }

  export type usuarios_organizacaoCreateManyId_organizacaoInput = {
    id?: number
    usuarios_id: number
  }

  export type chaves_apiUpdateWithoutId_organizacaoInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chaves_apiUncheckedUpdateWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chaves_apiUncheckedUpdateManyWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarios_organizacaoUpdateWithoutId_organizacaoInput = {
    id_usuario?: usuariosUpdateOneRequiredWithoutUsuarios_organizacaoNestedInput
  }

  export type usuarios_organizacaoUncheckedUpdateWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_organizacaoUncheckedUpdateManyWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type jwt_tokenCreateManyId_usuarioInput = {
    id?: number
    jwt_token: string
  }

  export type templatesCreateManyId_usuarioInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
  }

  export type usuarios_organizacaoCreateManyId_usuarioInput = {
    id?: number
    organizacao_id: number
  }

  export type jwt_tokenUpdateWithoutId_usuarioInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type jwt_tokenUncheckedUpdateWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type jwt_tokenUncheckedUpdateManyWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type templatesUpdateWithoutId_usuarioInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    variaveis_template?: variaveis_templateUpdateManyWithoutId_templateNestedInput
  }

  export type templatesUncheckedUpdateWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    variaveis_template?: variaveis_templateUncheckedUpdateManyWithoutId_templateNestedInput
  }

  export type templatesUncheckedUpdateManyWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarios_organizacaoUpdateWithoutId_usuarioInput = {
    id_organizacao?: organizacaoUpdateOneRequiredWithoutUsuarios_organizacaoNestedInput
  }

  export type usuarios_organizacaoUncheckedUpdateWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuarios_organizacaoUncheckedUpdateManyWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
  }

  export type variaveis_templateCreateManyId_templateInput = {
    id?: number
  }

  export type variaveis_templateUpdateWithoutId_templateInput = {

  }

  export type variaveis_templateUncheckedUpdateWithoutId_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type variaveis_templateUncheckedUpdateManyWithoutId_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}