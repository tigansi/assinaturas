
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
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>
/**
 * Model Organizacao
 * 
 */
export type Organizacao = $Result.DefaultSelection<Prisma.$OrganizacaoPayload>
/**
 * Model UsuariosOrganizacao
 * 
 */
export type UsuariosOrganizacao = $Result.DefaultSelection<Prisma.$UsuariosOrganizacaoPayload>
/**
 * Model ChavesApi
 * 
 */
export type ChavesApi = $Result.DefaultSelection<Prisma.$ChavesApiPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model JwtToken
 * 
 */
export type JwtToken = $Result.DefaultSelection<Prisma.$JwtTokenPayload>
/**
 * Model Templates
 * 
 */
export type Templates = $Result.DefaultSelection<Prisma.$TemplatesPayload>
/**
 * Model VariaveisTemplate
 * 
 */
export type VariaveisTemplate = $Result.DefaultSelection<Prisma.$VariaveisTemplatePayload>
/**
 * Model StatusDocumentos
 * 
 */
export type StatusDocumentos = $Result.DefaultSelection<Prisma.$StatusDocumentosPayload>

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
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizacao`: Exposes CRUD operations for the **Organizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizacaos
    * const organizacaos = await prisma.organizacao.findMany()
    * ```
    */
  get organizacao(): Prisma.OrganizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuariosOrganizacao`: Exposes CRUD operations for the **UsuariosOrganizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuariosOrganizacaos
    * const usuariosOrganizacaos = await prisma.usuariosOrganizacao.findMany()
    * ```
    */
  get usuariosOrganizacao(): Prisma.UsuariosOrganizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chavesApi`: Exposes CRUD operations for the **ChavesApi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChavesApis
    * const chavesApis = await prisma.chavesApi.findMany()
    * ```
    */
  get chavesApi(): Prisma.ChavesApiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwtToken`: Exposes CRUD operations for the **JwtToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JwtTokens
    * const jwtTokens = await prisma.jwtToken.findMany()
    * ```
    */
  get jwtToken(): Prisma.JwtTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templates`: Exposes CRUD operations for the **Templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.templates.findMany()
    * ```
    */
  get templates(): Prisma.TemplatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variaveisTemplate`: Exposes CRUD operations for the **VariaveisTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariaveisTemplates
    * const variaveisTemplates = await prisma.variaveisTemplate.findMany()
    * ```
    */
  get variaveisTemplate(): Prisma.VariaveisTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusDocumentos`: Exposes CRUD operations for the **StatusDocumentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusDocumentos
    * const statusDocumentos = await prisma.statusDocumentos.findMany()
    * ```
    */
  get statusDocumentos(): Prisma.StatusDocumentosDelegate<ExtArgs, ClientOptions>;
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
    Admins: 'Admins',
    Organizacao: 'Organizacao',
    UsuariosOrganizacao: 'UsuariosOrganizacao',
    ChavesApi: 'ChavesApi',
    Usuarios: 'Usuarios',
    JwtToken: 'JwtToken',
    Templates: 'Templates',
    VariaveisTemplate: 'VariaveisTemplate',
    StatusDocumentos: 'StatusDocumentos'
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
      modelProps: "admins" | "organizacao" | "usuariosOrganizacao" | "chavesApi" | "usuarios" | "jwtToken" | "templates" | "variaveisTemplate" | "statusDocumentos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admins: {
        payload: Prisma.$AdminsPayload<ExtArgs>
        fields: Prisma.AdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findFirst: {
            args: Prisma.AdminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findMany: {
            args: Prisma.AdminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          create: {
            args: Prisma.AdminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          createMany: {
            args: Prisma.AdminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          update: {
            args: Prisma.AdminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          deleteMany: {
            args: Prisma.AdminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.AdminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      Organizacao: {
        payload: Prisma.$OrganizacaoPayload<ExtArgs>
        fields: Prisma.OrganizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>
          }
          findFirst: {
            args: Prisma.OrganizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>
          }
          findMany: {
            args: Prisma.OrganizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>[]
          }
          create: {
            args: Prisma.OrganizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>
          }
          createMany: {
            args: Prisma.OrganizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>
          }
          update: {
            args: Prisma.OrganizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>
          }
          deleteMany: {
            args: Prisma.OrganizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizacaoPayload>
          }
          aggregate: {
            args: Prisma.OrganizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizacao>
          }
          groupBy: {
            args: Prisma.OrganizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizacaoCountAggregateOutputType> | number
          }
        }
      }
      UsuariosOrganizacao: {
        payload: Prisma.$UsuariosOrganizacaoPayload<ExtArgs>
        fields: Prisma.UsuariosOrganizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosOrganizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosOrganizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>
          }
          findFirst: {
            args: Prisma.UsuariosOrganizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosOrganizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>
          }
          findMany: {
            args: Prisma.UsuariosOrganizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>[]
          }
          create: {
            args: Prisma.UsuariosOrganizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>
          }
          createMany: {
            args: Prisma.UsuariosOrganizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosOrganizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>
          }
          update: {
            args: Prisma.UsuariosOrganizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosOrganizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosOrganizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosOrganizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosOrganizacaoPayload>
          }
          aggregate: {
            args: Prisma.UsuariosOrganizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuariosOrganizacao>
          }
          groupBy: {
            args: Prisma.UsuariosOrganizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosOrganizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosOrganizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosOrganizacaoCountAggregateOutputType> | number
          }
        }
      }
      ChavesApi: {
        payload: Prisma.$ChavesApiPayload<ExtArgs>
        fields: Prisma.ChavesApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChavesApiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChavesApiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>
          }
          findFirst: {
            args: Prisma.ChavesApiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChavesApiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>
          }
          findMany: {
            args: Prisma.ChavesApiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>[]
          }
          create: {
            args: Prisma.ChavesApiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>
          }
          createMany: {
            args: Prisma.ChavesApiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChavesApiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>
          }
          update: {
            args: Prisma.ChavesApiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>
          }
          deleteMany: {
            args: Prisma.ChavesApiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChavesApiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChavesApiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChavesApiPayload>
          }
          aggregate: {
            args: Prisma.ChavesApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChavesApi>
          }
          groupBy: {
            args: Prisma.ChavesApiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChavesApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChavesApiCountArgs<ExtArgs>
            result: $Utils.Optional<ChavesApiCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      JwtToken: {
        payload: Prisma.$JwtTokenPayload<ExtArgs>
        fields: Prisma.JwtTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwtTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwtTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          findFirst: {
            args: Prisma.JwtTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwtTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          findMany: {
            args: Prisma.JwtTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          create: {
            args: Prisma.JwtTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          createMany: {
            args: Prisma.JwtTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JwtTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          update: {
            args: Prisma.JwtTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          deleteMany: {
            args: Prisma.JwtTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwtTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JwtTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          aggregate: {
            args: Prisma.JwtTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwtToken>
          }
          groupBy: {
            args: Prisma.JwtTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwtTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwtTokenCountArgs<ExtArgs>
            result: $Utils.Optional<JwtTokenCountAggregateOutputType> | number
          }
        }
      }
      Templates: {
        payload: Prisma.$TemplatesPayload<ExtArgs>
        fields: Prisma.TemplatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>
          }
          findFirst: {
            args: Prisma.TemplatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>
          }
          findMany: {
            args: Prisma.TemplatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>[]
          }
          create: {
            args: Prisma.TemplatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>
          }
          createMany: {
            args: Prisma.TemplatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemplatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>
          }
          update: {
            args: Prisma.TemplatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>
          }
          deleteMany: {
            args: Prisma.TemplatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatesPayload>
          }
          aggregate: {
            args: Prisma.TemplatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplates>
          }
          groupBy: {
            args: Prisma.TemplatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplatesCountArgs<ExtArgs>
            result: $Utils.Optional<TemplatesCountAggregateOutputType> | number
          }
        }
      }
      VariaveisTemplate: {
        payload: Prisma.$VariaveisTemplatePayload<ExtArgs>
        fields: Prisma.VariaveisTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariaveisTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariaveisTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>
          }
          findFirst: {
            args: Prisma.VariaveisTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariaveisTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>
          }
          findMany: {
            args: Prisma.VariaveisTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>[]
          }
          create: {
            args: Prisma.VariaveisTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>
          }
          createMany: {
            args: Prisma.VariaveisTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VariaveisTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>
          }
          update: {
            args: Prisma.VariaveisTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>
          }
          deleteMany: {
            args: Prisma.VariaveisTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariaveisTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VariaveisTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariaveisTemplatePayload>
          }
          aggregate: {
            args: Prisma.VariaveisTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariaveisTemplate>
          }
          groupBy: {
            args: Prisma.VariaveisTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariaveisTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariaveisTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<VariaveisTemplateCountAggregateOutputType> | number
          }
        }
      }
      StatusDocumentos: {
        payload: Prisma.$StatusDocumentosPayload<ExtArgs>
        fields: Prisma.StatusDocumentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusDocumentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusDocumentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>
          }
          findFirst: {
            args: Prisma.StatusDocumentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusDocumentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>
          }
          findMany: {
            args: Prisma.StatusDocumentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>[]
          }
          create: {
            args: Prisma.StatusDocumentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>
          }
          createMany: {
            args: Prisma.StatusDocumentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusDocumentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>
          }
          update: {
            args: Prisma.StatusDocumentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>
          }
          deleteMany: {
            args: Prisma.StatusDocumentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusDocumentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusDocumentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusDocumentosPayload>
          }
          aggregate: {
            args: Prisma.StatusDocumentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusDocumentos>
          }
          groupBy: {
            args: Prisma.StatusDocumentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusDocumentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusDocumentosCountArgs<ExtArgs>
            result: $Utils.Optional<StatusDocumentosCountAggregateOutputType> | number
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
    admins?: AdminsOmit
    organizacao?: OrganizacaoOmit
    usuariosOrganizacao?: UsuariosOrganizacaoOmit
    chavesApi?: ChavesApiOmit
    usuarios?: UsuariosOmit
    jwtToken?: JwtTokenOmit
    templates?: TemplatesOmit
    variaveisTemplate?: VariaveisTemplateOmit
    statusDocumentos?: StatusDocumentosOmit
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
    ChavesApi: number
    UsuariosOrganizacao: number
  }

  export type OrganizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChavesApi?: boolean | OrganizacaoCountOutputTypeCountChavesApiArgs
    UsuariosOrganizacao?: boolean | OrganizacaoCountOutputTypeCountUsuariosOrganizacaoArgs
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
  export type OrganizacaoCountOutputTypeCountChavesApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChavesApiWhereInput
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountUsuariosOrganizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosOrganizacaoWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    ChavesApi: number
    JwtToken: number
    Templates: number
    UsuariosOrganizacao: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChavesApi?: boolean | UsuariosCountOutputTypeCountChavesApiArgs
    JwtToken?: boolean | UsuariosCountOutputTypeCountJwtTokenArgs
    Templates?: boolean | UsuariosCountOutputTypeCountTemplatesArgs
    UsuariosOrganizacao?: boolean | UsuariosCountOutputTypeCountUsuariosOrganizacaoArgs
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
  export type UsuariosCountOutputTypeCountChavesApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChavesApiWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountJwtTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtTokenWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplatesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuariosOrganizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosOrganizacaoWhereInput
  }


  /**
   * Count Type TemplatesCountOutputType
   */

  export type TemplatesCountOutputType = {
    VariaveisTemplate: number
  }

  export type TemplatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VariaveisTemplate?: boolean | TemplatesCountOutputTypeCountVariaveisTemplateArgs
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
  export type TemplatesCountOutputTypeCountVariaveisTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariaveisTemplateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admins
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
     * Filter which Admins to aggregate.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
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




  export type AdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminsWhereInput
    orderBy?: AdminsOrderByWithAggregationInput | AdminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: AdminsScalarWhereWithAggregatesInput
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

  type GetAdminsGroupByPayload<T extends AdminsGroupByArgs> = Prisma.PrismaPromise<
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


  export type AdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_admin?: boolean
    usuario_admin?: boolean
    is_ativo?: boolean
  }, ExtArgs["result"]["admins"]>



  export type AdminsSelectScalar = {
    id?: boolean
    nome_admin?: boolean
    usuario_admin?: boolean
    is_ativo?: boolean
  }

  export type AdminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_admin" | "usuario_admin" | "is_ativo", ExtArgs["result"]["admins"]>

  export type $AdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_admin: string
      usuario_admin: string
      is_ativo: boolean
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type AdminsGetPayload<S extends boolean | null | undefined | AdminsDefaultArgs> = $Result.GetResult<Prisma.$AdminsPayload, S>

  type AdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface AdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admins'], meta: { name: 'Admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {AdminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminsFindUniqueArgs>(args: SelectSubset<T, AdminsFindUniqueArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminsFindFirstArgs>(args?: SelectSubset<T, AdminsFindFirstArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AdminsFindManyArgs>(args?: SelectSubset<T, AdminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admins.
     * @param {AdminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends AdminsCreateArgs>(args: SelectSubset<T, AdminsCreateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {AdminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminsCreateManyArgs>(args?: SelectSubset<T, AdminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admins.
     * @param {AdminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends AdminsDeleteArgs>(args: SelectSubset<T, AdminsDeleteArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admins.
     * @param {AdminsUpdateArgs} args - Arguments to update one Admins.
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
    update<T extends AdminsUpdateArgs>(args: SelectSubset<T, AdminsUpdateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminsDeleteManyArgs>(args?: SelectSubset<T, AdminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AdminsUpdateManyArgs>(args: SelectSubset<T, AdminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admins.
     * @param {AdminsUpsertArgs} args - Arguments to update or create a Admins.
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
    upsert<T extends AdminsUpsertArgs>(args: SelectSubset<T, AdminsUpsertArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminsCountArgs>(
      args?: Subset<T, AdminsCountArgs>,
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
     * @param {AdminsGroupByArgs} args - Group by arguments.
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
      T extends AdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminsGroupByArgs['orderBy'] }
        : { orderBy?: AdminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admins model
   */
  readonly fields: AdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admins model
   */ 
  interface AdminsFieldRefs {
    readonly id: FieldRef<"Admins", 'Int'>
    readonly nome_admin: FieldRef<"Admins", 'String'>
    readonly usuario_admin: FieldRef<"Admins", 'String'>
    readonly is_ativo: FieldRef<"Admins", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Admins findUnique
   */
  export type AdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findUniqueOrThrow
   */
  export type AdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findFirst
   */
  export type AdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findFirstOrThrow
   */
  export type AdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findMany
   */
  export type AdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins create
   */
  export type AdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data needed to create a Admins.
     */
    data: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
  }

  /**
   * Admins createMany
   */
  export type AdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins update
   */
  export type AdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data needed to update a Admins.
     */
    data: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
    /**
     * Choose, which Admins to update.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins updateMany
   */
  export type AdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins upsert
   */
  export type AdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The filter to search for the Admins to update in case it exists.
     */
    where: AdminsWhereUniqueInput
    /**
     * In case the Admins found by the `where` argument doesn't exist, create a new Admins with this data.
     */
    create: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
    /**
     * In case the Admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
  }

  /**
   * Admins delete
   */
  export type AdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter which Admins to delete.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins deleteMany
   */
  export type AdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admins without action
   */
  export type AdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
  }


  /**
   * Model Organizacao
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
     * Filter which Organizacao to aggregate.
     */
    where?: OrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizacaos to fetch.
     */
    orderBy?: OrganizacaoOrderByWithRelationInput | OrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizacaos
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




  export type OrganizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizacaoWhereInput
    orderBy?: OrganizacaoOrderByWithAggregationInput | OrganizacaoOrderByWithAggregationInput[]
    by: OrganizacaoScalarFieldEnum[] | OrganizacaoScalarFieldEnum
    having?: OrganizacaoScalarWhereWithAggregatesInput
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

  type GetOrganizacaoGroupByPayload<T extends OrganizacaoGroupByArgs> = Prisma.PrismaPromise<
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


  export type OrganizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_organizacao?: boolean
    usuario_criacao?: boolean
    is_ativo?: boolean
    ChavesApi?: boolean | Organizacao$ChavesApiArgs<ExtArgs>
    UsuariosOrganizacao?: boolean | Organizacao$UsuariosOrganizacaoArgs<ExtArgs>
    _count?: boolean | OrganizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizacao"]>



  export type OrganizacaoSelectScalar = {
    id?: boolean
    nome_organizacao?: boolean
    usuario_criacao?: boolean
    is_ativo?: boolean
  }

  export type OrganizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_organizacao" | "usuario_criacao" | "is_ativo", ExtArgs["result"]["organizacao"]>
  export type OrganizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChavesApi?: boolean | Organizacao$ChavesApiArgs<ExtArgs>
    UsuariosOrganizacao?: boolean | Organizacao$UsuariosOrganizacaoArgs<ExtArgs>
    _count?: boolean | OrganizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizacao"
    objects: {
      ChavesApi: Prisma.$ChavesApiPayload<ExtArgs>[]
      UsuariosOrganizacao: Prisma.$UsuariosOrganizacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_organizacao: string
      usuario_criacao: string
      is_ativo: boolean
    }, ExtArgs["result"]["organizacao"]>
    composites: {}
  }

  type OrganizacaoGetPayload<S extends boolean | null | undefined | OrganizacaoDefaultArgs> = $Result.GetResult<Prisma.$OrganizacaoPayload, S>

  type OrganizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizacaoCountAggregateInputType | true
    }

  export interface OrganizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizacao'], meta: { name: 'Organizacao' } }
    /**
     * Find zero or one Organizacao that matches the filter.
     * @param {OrganizacaoFindUniqueArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizacaoFindUniqueArgs>(args: SelectSubset<T, OrganizacaoFindUniqueArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Organizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizacaoFindUniqueOrThrowArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Organizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoFindFirstArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizacaoFindFirstArgs>(args?: SelectSubset<T, OrganizacaoFindFirstArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Organizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoFindFirstOrThrowArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Organizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends OrganizacaoFindManyArgs>(args?: SelectSubset<T, OrganizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Organizacao.
     * @param {OrganizacaoCreateArgs} args - Arguments to create a Organizacao.
     * @example
     * // Create one Organizacao
     * const Organizacao = await prisma.organizacao.create({
     *   data: {
     *     // ... data to create a Organizacao
     *   }
     * })
     * 
     */
    create<T extends OrganizacaoCreateArgs>(args: SelectSubset<T, OrganizacaoCreateArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Organizacaos.
     * @param {OrganizacaoCreateManyArgs} args - Arguments to create many Organizacaos.
     * @example
     * // Create many Organizacaos
     * const organizacao = await prisma.organizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizacaoCreateManyArgs>(args?: SelectSubset<T, OrganizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organizacao.
     * @param {OrganizacaoDeleteArgs} args - Arguments to delete one Organizacao.
     * @example
     * // Delete one Organizacao
     * const Organizacao = await prisma.organizacao.delete({
     *   where: {
     *     // ... filter to delete one Organizacao
     *   }
     * })
     * 
     */
    delete<T extends OrganizacaoDeleteArgs>(args: SelectSubset<T, OrganizacaoDeleteArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Organizacao.
     * @param {OrganizacaoUpdateArgs} args - Arguments to update one Organizacao.
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
    update<T extends OrganizacaoUpdateArgs>(args: SelectSubset<T, OrganizacaoUpdateArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Organizacaos.
     * @param {OrganizacaoDeleteManyArgs} args - Arguments to filter Organizacaos to delete.
     * @example
     * // Delete a few Organizacaos
     * const { count } = await prisma.organizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizacaoDeleteManyArgs>(args?: SelectSubset<T, OrganizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends OrganizacaoUpdateManyArgs>(args: SelectSubset<T, OrganizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizacao.
     * @param {OrganizacaoUpsertArgs} args - Arguments to update or create a Organizacao.
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
    upsert<T extends OrganizacaoUpsertArgs>(args: SelectSubset<T, OrganizacaoUpsertArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoCountArgs} args - Arguments to filter Organizacaos to count.
     * @example
     * // Count the number of Organizacaos
     * const count = await prisma.organizacao.count({
     *   where: {
     *     // ... the filter for the Organizacaos we want to count
     *   }
     * })
    **/
    count<T extends OrganizacaoCountArgs>(
      args?: Subset<T, OrganizacaoCountArgs>,
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
     * @param {OrganizacaoGroupByArgs} args - Group by arguments.
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
      T extends OrganizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizacaoGroupByArgs['orderBy'] }
        : { orderBy?: OrganizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizacao model
   */
  readonly fields: OrganizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChavesApi<T extends Organizacao$ChavesApiArgs<ExtArgs> = {}>(args?: Subset<T, Organizacao$ChavesApiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    UsuariosOrganizacao<T extends Organizacao$UsuariosOrganizacaoArgs<ExtArgs> = {}>(args?: Subset<T, Organizacao$UsuariosOrganizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Organizacao model
   */ 
  interface OrganizacaoFieldRefs {
    readonly id: FieldRef<"Organizacao", 'Int'>
    readonly nome_organizacao: FieldRef<"Organizacao", 'String'>
    readonly usuario_criacao: FieldRef<"Organizacao", 'String'>
    readonly is_ativo: FieldRef<"Organizacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Organizacao findUnique
   */
  export type OrganizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Organizacao to fetch.
     */
    where: OrganizacaoWhereUniqueInput
  }

  /**
   * Organizacao findUniqueOrThrow
   */
  export type OrganizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Organizacao to fetch.
     */
    where: OrganizacaoWhereUniqueInput
  }

  /**
   * Organizacao findFirst
   */
  export type OrganizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Organizacao to fetch.
     */
    where?: OrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizacaos to fetch.
     */
    orderBy?: OrganizacaoOrderByWithRelationInput | OrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizacaos.
     */
    cursor?: OrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizacaos.
     */
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * Organizacao findFirstOrThrow
   */
  export type OrganizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Organizacao to fetch.
     */
    where?: OrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizacaos to fetch.
     */
    orderBy?: OrganizacaoOrderByWithRelationInput | OrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizacaos.
     */
    cursor?: OrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizacaos.
     */
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * Organizacao findMany
   */
  export type OrganizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Organizacaos to fetch.
     */
    where?: OrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizacaos to fetch.
     */
    orderBy?: OrganizacaoOrderByWithRelationInput | OrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizacaos.
     */
    cursor?: OrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizacaos.
     */
    skip?: number
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * Organizacao create
   */
  export type OrganizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizacao.
     */
    data: XOR<OrganizacaoCreateInput, OrganizacaoUncheckedCreateInput>
  }

  /**
   * Organizacao createMany
   */
  export type OrganizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizacaos.
     */
    data: OrganizacaoCreateManyInput | OrganizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizacao update
   */
  export type OrganizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizacao.
     */
    data: XOR<OrganizacaoUpdateInput, OrganizacaoUncheckedUpdateInput>
    /**
     * Choose, which Organizacao to update.
     */
    where: OrganizacaoWhereUniqueInput
  }

  /**
   * Organizacao updateMany
   */
  export type OrganizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizacaos.
     */
    data: XOR<OrganizacaoUpdateManyMutationInput, OrganizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Organizacaos to update
     */
    where?: OrganizacaoWhereInput
    /**
     * Limit how many Organizacaos to update.
     */
    limit?: number
  }

  /**
   * Organizacao upsert
   */
  export type OrganizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizacao to update in case it exists.
     */
    where: OrganizacaoWhereUniqueInput
    /**
     * In case the Organizacao found by the `where` argument doesn't exist, create a new Organizacao with this data.
     */
    create: XOR<OrganizacaoCreateInput, OrganizacaoUncheckedCreateInput>
    /**
     * In case the Organizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizacaoUpdateInput, OrganizacaoUncheckedUpdateInput>
  }

  /**
   * Organizacao delete
   */
  export type OrganizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
    /**
     * Filter which Organizacao to delete.
     */
    where: OrganizacaoWhereUniqueInput
  }

  /**
   * Organizacao deleteMany
   */
  export type OrganizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizacaos to delete
     */
    where?: OrganizacaoWhereInput
    /**
     * Limit how many Organizacaos to delete.
     */
    limit?: number
  }

  /**
   * Organizacao.ChavesApi
   */
  export type Organizacao$ChavesApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    where?: ChavesApiWhereInput
    orderBy?: ChavesApiOrderByWithRelationInput | ChavesApiOrderByWithRelationInput[]
    cursor?: ChavesApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChavesApiScalarFieldEnum | ChavesApiScalarFieldEnum[]
  }

  /**
   * Organizacao.UsuariosOrganizacao
   */
  export type Organizacao$UsuariosOrganizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    where?: UsuariosOrganizacaoWhereInput
    orderBy?: UsuariosOrganizacaoOrderByWithRelationInput | UsuariosOrganizacaoOrderByWithRelationInput[]
    cursor?: UsuariosOrganizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosOrganizacaoScalarFieldEnum | UsuariosOrganizacaoScalarFieldEnum[]
  }

  /**
   * Organizacao without action
   */
  export type OrganizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizacao
     */
    select?: OrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizacao
     */
    omit?: OrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizacaoInclude<ExtArgs> | null
  }


  /**
   * Model UsuariosOrganizacao
   */

  export type AggregateUsuariosOrganizacao = {
    _count: UsuariosOrganizacaoCountAggregateOutputType | null
    _avg: UsuariosOrganizacaoAvgAggregateOutputType | null
    _sum: UsuariosOrganizacaoSumAggregateOutputType | null
    _min: UsuariosOrganizacaoMinAggregateOutputType | null
    _max: UsuariosOrganizacaoMaxAggregateOutputType | null
  }

  export type UsuariosOrganizacaoAvgAggregateOutputType = {
    id: number | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type UsuariosOrganizacaoSumAggregateOutputType = {
    id: number | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type UsuariosOrganizacaoMinAggregateOutputType = {
    id: number | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type UsuariosOrganizacaoMaxAggregateOutputType = {
    id: number | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type UsuariosOrganizacaoCountAggregateOutputType = {
    id: number
    organizacaoId: number
    usuariosId: number
    _all: number
  }


  export type UsuariosOrganizacaoAvgAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type UsuariosOrganizacaoSumAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type UsuariosOrganizacaoMinAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type UsuariosOrganizacaoMaxAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type UsuariosOrganizacaoCountAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
    _all?: true
  }

  export type UsuariosOrganizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuariosOrganizacao to aggregate.
     */
    where?: UsuariosOrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosOrganizacaos to fetch.
     */
    orderBy?: UsuariosOrganizacaoOrderByWithRelationInput | UsuariosOrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosOrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosOrganizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosOrganizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuariosOrganizacaos
    **/
    _count?: true | UsuariosOrganizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosOrganizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosOrganizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosOrganizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosOrganizacaoMaxAggregateInputType
  }

  export type GetUsuariosOrganizacaoAggregateType<T extends UsuariosOrganizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuariosOrganizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuariosOrganizacao[P]>
      : GetScalarType<T[P], AggregateUsuariosOrganizacao[P]>
  }




  export type UsuariosOrganizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosOrganizacaoWhereInput
    orderBy?: UsuariosOrganizacaoOrderByWithAggregationInput | UsuariosOrganizacaoOrderByWithAggregationInput[]
    by: UsuariosOrganizacaoScalarFieldEnum[] | UsuariosOrganizacaoScalarFieldEnum
    having?: UsuariosOrganizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosOrganizacaoCountAggregateInputType | true
    _avg?: UsuariosOrganizacaoAvgAggregateInputType
    _sum?: UsuariosOrganizacaoSumAggregateInputType
    _min?: UsuariosOrganizacaoMinAggregateInputType
    _max?: UsuariosOrganizacaoMaxAggregateInputType
  }

  export type UsuariosOrganizacaoGroupByOutputType = {
    id: number
    organizacaoId: number
    usuariosId: number
    _count: UsuariosOrganizacaoCountAggregateOutputType | null
    _avg: UsuariosOrganizacaoAvgAggregateOutputType | null
    _sum: UsuariosOrganizacaoSumAggregateOutputType | null
    _min: UsuariosOrganizacaoMinAggregateOutputType | null
    _max: UsuariosOrganizacaoMaxAggregateOutputType | null
  }

  type GetUsuariosOrganizacaoGroupByPayload<T extends UsuariosOrganizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosOrganizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosOrganizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosOrganizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosOrganizacaoGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosOrganizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacaoId?: boolean
    usuariosId?: boolean
    id_usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    id_organizacao?: boolean | OrganizacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosOrganizacao"]>



  export type UsuariosOrganizacaoSelectScalar = {
    id?: boolean
    organizacaoId?: boolean
    usuariosId?: boolean
  }

  export type UsuariosOrganizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizacaoId" | "usuariosId", ExtArgs["result"]["usuariosOrganizacao"]>
  export type UsuariosOrganizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    id_organizacao?: boolean | OrganizacaoDefaultArgs<ExtArgs>
  }

  export type $UsuariosOrganizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuariosOrganizacao"
    objects: {
      id_usuario: Prisma.$UsuariosPayload<ExtArgs>
      id_organizacao: Prisma.$OrganizacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizacaoId: number
      usuariosId: number
    }, ExtArgs["result"]["usuariosOrganizacao"]>
    composites: {}
  }

  type UsuariosOrganizacaoGetPayload<S extends boolean | null | undefined | UsuariosOrganizacaoDefaultArgs> = $Result.GetResult<Prisma.$UsuariosOrganizacaoPayload, S>

  type UsuariosOrganizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosOrganizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosOrganizacaoCountAggregateInputType | true
    }

  export interface UsuariosOrganizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuariosOrganizacao'], meta: { name: 'UsuariosOrganizacao' } }
    /**
     * Find zero or one UsuariosOrganizacao that matches the filter.
     * @param {UsuariosOrganizacaoFindUniqueArgs} args - Arguments to find a UsuariosOrganizacao
     * @example
     * // Get one UsuariosOrganizacao
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosOrganizacaoFindUniqueArgs>(args: SelectSubset<T, UsuariosOrganizacaoFindUniqueArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UsuariosOrganizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosOrganizacaoFindUniqueOrThrowArgs} args - Arguments to find a UsuariosOrganizacao
     * @example
     * // Get one UsuariosOrganizacao
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosOrganizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosOrganizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UsuariosOrganizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoFindFirstArgs} args - Arguments to find a UsuariosOrganizacao
     * @example
     * // Get one UsuariosOrganizacao
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosOrganizacaoFindFirstArgs>(args?: SelectSubset<T, UsuariosOrganizacaoFindFirstArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UsuariosOrganizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoFindFirstOrThrowArgs} args - Arguments to find a UsuariosOrganizacao
     * @example
     * // Get one UsuariosOrganizacao
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosOrganizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosOrganizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UsuariosOrganizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuariosOrganizacaos
     * const usuariosOrganizacaos = await prisma.usuariosOrganizacao.findMany()
     * 
     * // Get first 10 UsuariosOrganizacaos
     * const usuariosOrganizacaos = await prisma.usuariosOrganizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosOrganizacaoWithIdOnly = await prisma.usuariosOrganizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosOrganizacaoFindManyArgs>(args?: SelectSubset<T, UsuariosOrganizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UsuariosOrganizacao.
     * @param {UsuariosOrganizacaoCreateArgs} args - Arguments to create a UsuariosOrganizacao.
     * @example
     * // Create one UsuariosOrganizacao
     * const UsuariosOrganizacao = await prisma.usuariosOrganizacao.create({
     *   data: {
     *     // ... data to create a UsuariosOrganizacao
     *   }
     * })
     * 
     */
    create<T extends UsuariosOrganizacaoCreateArgs>(args: SelectSubset<T, UsuariosOrganizacaoCreateArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UsuariosOrganizacaos.
     * @param {UsuariosOrganizacaoCreateManyArgs} args - Arguments to create many UsuariosOrganizacaos.
     * @example
     * // Create many UsuariosOrganizacaos
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosOrganizacaoCreateManyArgs>(args?: SelectSubset<T, UsuariosOrganizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsuariosOrganizacao.
     * @param {UsuariosOrganizacaoDeleteArgs} args - Arguments to delete one UsuariosOrganizacao.
     * @example
     * // Delete one UsuariosOrganizacao
     * const UsuariosOrganizacao = await prisma.usuariosOrganizacao.delete({
     *   where: {
     *     // ... filter to delete one UsuariosOrganizacao
     *   }
     * })
     * 
     */
    delete<T extends UsuariosOrganizacaoDeleteArgs>(args: SelectSubset<T, UsuariosOrganizacaoDeleteArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UsuariosOrganizacao.
     * @param {UsuariosOrganizacaoUpdateArgs} args - Arguments to update one UsuariosOrganizacao.
     * @example
     * // Update one UsuariosOrganizacao
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosOrganizacaoUpdateArgs>(args: SelectSubset<T, UsuariosOrganizacaoUpdateArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UsuariosOrganizacaos.
     * @param {UsuariosOrganizacaoDeleteManyArgs} args - Arguments to filter UsuariosOrganizacaos to delete.
     * @example
     * // Delete a few UsuariosOrganizacaos
     * const { count } = await prisma.usuariosOrganizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosOrganizacaoDeleteManyArgs>(args?: SelectSubset<T, UsuariosOrganizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuariosOrganizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuariosOrganizacaos
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosOrganizacaoUpdateManyArgs>(args: SelectSubset<T, UsuariosOrganizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsuariosOrganizacao.
     * @param {UsuariosOrganizacaoUpsertArgs} args - Arguments to update or create a UsuariosOrganizacao.
     * @example
     * // Update or create a UsuariosOrganizacao
     * const usuariosOrganizacao = await prisma.usuariosOrganizacao.upsert({
     *   create: {
     *     // ... data to create a UsuariosOrganizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuariosOrganizacao we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosOrganizacaoUpsertArgs>(args: SelectSubset<T, UsuariosOrganizacaoUpsertArgs<ExtArgs>>): Prisma__UsuariosOrganizacaoClient<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UsuariosOrganizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoCountArgs} args - Arguments to filter UsuariosOrganizacaos to count.
     * @example
     * // Count the number of UsuariosOrganizacaos
     * const count = await prisma.usuariosOrganizacao.count({
     *   where: {
     *     // ... the filter for the UsuariosOrganizacaos we want to count
     *   }
     * })
    **/
    count<T extends UsuariosOrganizacaoCountArgs>(
      args?: Subset<T, UsuariosOrganizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosOrganizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuariosOrganizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosOrganizacaoAggregateArgs>(args: Subset<T, UsuariosOrganizacaoAggregateArgs>): Prisma.PrismaPromise<GetUsuariosOrganizacaoAggregateType<T>>

    /**
     * Group by UsuariosOrganizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosOrganizacaoGroupByArgs} args - Group by arguments.
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
      T extends UsuariosOrganizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosOrganizacaoGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosOrganizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosOrganizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosOrganizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuariosOrganizacao model
   */
  readonly fields: UsuariosOrganizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuariosOrganizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosOrganizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_usuario<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    id_organizacao<T extends OrganizacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizacaoDefaultArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the UsuariosOrganizacao model
   */ 
  interface UsuariosOrganizacaoFieldRefs {
    readonly id: FieldRef<"UsuariosOrganizacao", 'Int'>
    readonly organizacaoId: FieldRef<"UsuariosOrganizacao", 'Int'>
    readonly usuariosId: FieldRef<"UsuariosOrganizacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuariosOrganizacao findUnique
   */
  export type UsuariosOrganizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosOrganizacao to fetch.
     */
    where: UsuariosOrganizacaoWhereUniqueInput
  }

  /**
   * UsuariosOrganizacao findUniqueOrThrow
   */
  export type UsuariosOrganizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosOrganizacao to fetch.
     */
    where: UsuariosOrganizacaoWhereUniqueInput
  }

  /**
   * UsuariosOrganizacao findFirst
   */
  export type UsuariosOrganizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosOrganizacao to fetch.
     */
    where?: UsuariosOrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosOrganizacaos to fetch.
     */
    orderBy?: UsuariosOrganizacaoOrderByWithRelationInput | UsuariosOrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuariosOrganizacaos.
     */
    cursor?: UsuariosOrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosOrganizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosOrganizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuariosOrganizacaos.
     */
    distinct?: UsuariosOrganizacaoScalarFieldEnum | UsuariosOrganizacaoScalarFieldEnum[]
  }

  /**
   * UsuariosOrganizacao findFirstOrThrow
   */
  export type UsuariosOrganizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosOrganizacao to fetch.
     */
    where?: UsuariosOrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosOrganizacaos to fetch.
     */
    orderBy?: UsuariosOrganizacaoOrderByWithRelationInput | UsuariosOrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuariosOrganizacaos.
     */
    cursor?: UsuariosOrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosOrganizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosOrganizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuariosOrganizacaos.
     */
    distinct?: UsuariosOrganizacaoScalarFieldEnum | UsuariosOrganizacaoScalarFieldEnum[]
  }

  /**
   * UsuariosOrganizacao findMany
   */
  export type UsuariosOrganizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosOrganizacaos to fetch.
     */
    where?: UsuariosOrganizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosOrganizacaos to fetch.
     */
    orderBy?: UsuariosOrganizacaoOrderByWithRelationInput | UsuariosOrganizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuariosOrganizacaos.
     */
    cursor?: UsuariosOrganizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosOrganizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosOrganizacaos.
     */
    skip?: number
    distinct?: UsuariosOrganizacaoScalarFieldEnum | UsuariosOrganizacaoScalarFieldEnum[]
  }

  /**
   * UsuariosOrganizacao create
   */
  export type UsuariosOrganizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuariosOrganizacao.
     */
    data: XOR<UsuariosOrganizacaoCreateInput, UsuariosOrganizacaoUncheckedCreateInput>
  }

  /**
   * UsuariosOrganizacao createMany
   */
  export type UsuariosOrganizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuariosOrganizacaos.
     */
    data: UsuariosOrganizacaoCreateManyInput | UsuariosOrganizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuariosOrganizacao update
   */
  export type UsuariosOrganizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuariosOrganizacao.
     */
    data: XOR<UsuariosOrganizacaoUpdateInput, UsuariosOrganizacaoUncheckedUpdateInput>
    /**
     * Choose, which UsuariosOrganizacao to update.
     */
    where: UsuariosOrganizacaoWhereUniqueInput
  }

  /**
   * UsuariosOrganizacao updateMany
   */
  export type UsuariosOrganizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuariosOrganizacaos.
     */
    data: XOR<UsuariosOrganizacaoUpdateManyMutationInput, UsuariosOrganizacaoUncheckedUpdateManyInput>
    /**
     * Filter which UsuariosOrganizacaos to update
     */
    where?: UsuariosOrganizacaoWhereInput
    /**
     * Limit how many UsuariosOrganizacaos to update.
     */
    limit?: number
  }

  /**
   * UsuariosOrganizacao upsert
   */
  export type UsuariosOrganizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuariosOrganizacao to update in case it exists.
     */
    where: UsuariosOrganizacaoWhereUniqueInput
    /**
     * In case the UsuariosOrganizacao found by the `where` argument doesn't exist, create a new UsuariosOrganizacao with this data.
     */
    create: XOR<UsuariosOrganizacaoCreateInput, UsuariosOrganizacaoUncheckedCreateInput>
    /**
     * In case the UsuariosOrganizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosOrganizacaoUpdateInput, UsuariosOrganizacaoUncheckedUpdateInput>
  }

  /**
   * UsuariosOrganizacao delete
   */
  export type UsuariosOrganizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    /**
     * Filter which UsuariosOrganizacao to delete.
     */
    where: UsuariosOrganizacaoWhereUniqueInput
  }

  /**
   * UsuariosOrganizacao deleteMany
   */
  export type UsuariosOrganizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuariosOrganizacaos to delete
     */
    where?: UsuariosOrganizacaoWhereInput
    /**
     * Limit how many UsuariosOrganizacaos to delete.
     */
    limit?: number
  }

  /**
   * UsuariosOrganizacao without action
   */
  export type UsuariosOrganizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
  }


  /**
   * Model ChavesApi
   */

  export type AggregateChavesApi = {
    _count: ChavesApiCountAggregateOutputType | null
    _avg: ChavesApiAvgAggregateOutputType | null
    _sum: ChavesApiSumAggregateOutputType | null
    _min: ChavesApiMinAggregateOutputType | null
    _max: ChavesApiMaxAggregateOutputType | null
  }

  export type ChavesApiAvgAggregateOutputType = {
    id: number | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type ChavesApiSumAggregateOutputType = {
    id: number | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type ChavesApiMinAggregateOutputType = {
    id: number | null
    chave_api: string | null
    is_ativo: boolean | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type ChavesApiMaxAggregateOutputType = {
    id: number | null
    chave_api: string | null
    is_ativo: boolean | null
    organizacaoId: number | null
    usuariosId: number | null
  }

  export type ChavesApiCountAggregateOutputType = {
    id: number
    chave_api: number
    is_ativo: number
    organizacaoId: number
    usuariosId: number
    _all: number
  }


  export type ChavesApiAvgAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type ChavesApiSumAggregateInputType = {
    id?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type ChavesApiMinAggregateInputType = {
    id?: true
    chave_api?: true
    is_ativo?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type ChavesApiMaxAggregateInputType = {
    id?: true
    chave_api?: true
    is_ativo?: true
    organizacaoId?: true
    usuariosId?: true
  }

  export type ChavesApiCountAggregateInputType = {
    id?: true
    chave_api?: true
    is_ativo?: true
    organizacaoId?: true
    usuariosId?: true
    _all?: true
  }

  export type ChavesApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChavesApi to aggregate.
     */
    where?: ChavesApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChavesApis to fetch.
     */
    orderBy?: ChavesApiOrderByWithRelationInput | ChavesApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChavesApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChavesApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChavesApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChavesApis
    **/
    _count?: true | ChavesApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChavesApiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChavesApiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChavesApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChavesApiMaxAggregateInputType
  }

  export type GetChavesApiAggregateType<T extends ChavesApiAggregateArgs> = {
        [P in keyof T & keyof AggregateChavesApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChavesApi[P]>
      : GetScalarType<T[P], AggregateChavesApi[P]>
  }




  export type ChavesApiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChavesApiWhereInput
    orderBy?: ChavesApiOrderByWithAggregationInput | ChavesApiOrderByWithAggregationInput[]
    by: ChavesApiScalarFieldEnum[] | ChavesApiScalarFieldEnum
    having?: ChavesApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChavesApiCountAggregateInputType | true
    _avg?: ChavesApiAvgAggregateInputType
    _sum?: ChavesApiSumAggregateInputType
    _min?: ChavesApiMinAggregateInputType
    _max?: ChavesApiMaxAggregateInputType
  }

  export type ChavesApiGroupByOutputType = {
    id: number
    chave_api: string
    is_ativo: boolean
    organizacaoId: number
    usuariosId: number | null
    _count: ChavesApiCountAggregateOutputType | null
    _avg: ChavesApiAvgAggregateOutputType | null
    _sum: ChavesApiSumAggregateOutputType | null
    _min: ChavesApiMinAggregateOutputType | null
    _max: ChavesApiMaxAggregateOutputType | null
  }

  type GetChavesApiGroupByPayload<T extends ChavesApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChavesApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChavesApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChavesApiGroupByOutputType[P]>
            : GetScalarType<T[P], ChavesApiGroupByOutputType[P]>
        }
      >
    >


  export type ChavesApiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave_api?: boolean
    is_ativo?: boolean
    organizacaoId?: boolean
    usuariosId?: boolean
    id_organizacao?: boolean | OrganizacaoDefaultArgs<ExtArgs>
    Usuarios?: boolean | ChavesApi$UsuariosArgs<ExtArgs>
  }, ExtArgs["result"]["chavesApi"]>



  export type ChavesApiSelectScalar = {
    id?: boolean
    chave_api?: boolean
    is_ativo?: boolean
    organizacaoId?: boolean
    usuariosId?: boolean
  }

  export type ChavesApiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chave_api" | "is_ativo" | "organizacaoId" | "usuariosId", ExtArgs["result"]["chavesApi"]>
  export type ChavesApiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_organizacao?: boolean | OrganizacaoDefaultArgs<ExtArgs>
    Usuarios?: boolean | ChavesApi$UsuariosArgs<ExtArgs>
  }

  export type $ChavesApiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChavesApi"
    objects: {
      id_organizacao: Prisma.$OrganizacaoPayload<ExtArgs>
      Usuarios: Prisma.$UsuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chave_api: string
      is_ativo: boolean
      organizacaoId: number
      usuariosId: number | null
    }, ExtArgs["result"]["chavesApi"]>
    composites: {}
  }

  type ChavesApiGetPayload<S extends boolean | null | undefined | ChavesApiDefaultArgs> = $Result.GetResult<Prisma.$ChavesApiPayload, S>

  type ChavesApiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChavesApiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChavesApiCountAggregateInputType | true
    }

  export interface ChavesApiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChavesApi'], meta: { name: 'ChavesApi' } }
    /**
     * Find zero or one ChavesApi that matches the filter.
     * @param {ChavesApiFindUniqueArgs} args - Arguments to find a ChavesApi
     * @example
     * // Get one ChavesApi
     * const chavesApi = await prisma.chavesApi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChavesApiFindUniqueArgs>(args: SelectSubset<T, ChavesApiFindUniqueArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ChavesApi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChavesApiFindUniqueOrThrowArgs} args - Arguments to find a ChavesApi
     * @example
     * // Get one ChavesApi
     * const chavesApi = await prisma.chavesApi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChavesApiFindUniqueOrThrowArgs>(args: SelectSubset<T, ChavesApiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ChavesApi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiFindFirstArgs} args - Arguments to find a ChavesApi
     * @example
     * // Get one ChavesApi
     * const chavesApi = await prisma.chavesApi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChavesApiFindFirstArgs>(args?: SelectSubset<T, ChavesApiFindFirstArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ChavesApi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiFindFirstOrThrowArgs} args - Arguments to find a ChavesApi
     * @example
     * // Get one ChavesApi
     * const chavesApi = await prisma.chavesApi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChavesApiFindFirstOrThrowArgs>(args?: SelectSubset<T, ChavesApiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ChavesApis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChavesApis
     * const chavesApis = await prisma.chavesApi.findMany()
     * 
     * // Get first 10 ChavesApis
     * const chavesApis = await prisma.chavesApi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chavesApiWithIdOnly = await prisma.chavesApi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChavesApiFindManyArgs>(args?: SelectSubset<T, ChavesApiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ChavesApi.
     * @param {ChavesApiCreateArgs} args - Arguments to create a ChavesApi.
     * @example
     * // Create one ChavesApi
     * const ChavesApi = await prisma.chavesApi.create({
     *   data: {
     *     // ... data to create a ChavesApi
     *   }
     * })
     * 
     */
    create<T extends ChavesApiCreateArgs>(args: SelectSubset<T, ChavesApiCreateArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ChavesApis.
     * @param {ChavesApiCreateManyArgs} args - Arguments to create many ChavesApis.
     * @example
     * // Create many ChavesApis
     * const chavesApi = await prisma.chavesApi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChavesApiCreateManyArgs>(args?: SelectSubset<T, ChavesApiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChavesApi.
     * @param {ChavesApiDeleteArgs} args - Arguments to delete one ChavesApi.
     * @example
     * // Delete one ChavesApi
     * const ChavesApi = await prisma.chavesApi.delete({
     *   where: {
     *     // ... filter to delete one ChavesApi
     *   }
     * })
     * 
     */
    delete<T extends ChavesApiDeleteArgs>(args: SelectSubset<T, ChavesApiDeleteArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ChavesApi.
     * @param {ChavesApiUpdateArgs} args - Arguments to update one ChavesApi.
     * @example
     * // Update one ChavesApi
     * const chavesApi = await prisma.chavesApi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChavesApiUpdateArgs>(args: SelectSubset<T, ChavesApiUpdateArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ChavesApis.
     * @param {ChavesApiDeleteManyArgs} args - Arguments to filter ChavesApis to delete.
     * @example
     * // Delete a few ChavesApis
     * const { count } = await prisma.chavesApi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChavesApiDeleteManyArgs>(args?: SelectSubset<T, ChavesApiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChavesApis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChavesApis
     * const chavesApi = await prisma.chavesApi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChavesApiUpdateManyArgs>(args: SelectSubset<T, ChavesApiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChavesApi.
     * @param {ChavesApiUpsertArgs} args - Arguments to update or create a ChavesApi.
     * @example
     * // Update or create a ChavesApi
     * const chavesApi = await prisma.chavesApi.upsert({
     *   create: {
     *     // ... data to create a ChavesApi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChavesApi we want to update
     *   }
     * })
     */
    upsert<T extends ChavesApiUpsertArgs>(args: SelectSubset<T, ChavesApiUpsertArgs<ExtArgs>>): Prisma__ChavesApiClient<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ChavesApis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiCountArgs} args - Arguments to filter ChavesApis to count.
     * @example
     * // Count the number of ChavesApis
     * const count = await prisma.chavesApi.count({
     *   where: {
     *     // ... the filter for the ChavesApis we want to count
     *   }
     * })
    **/
    count<T extends ChavesApiCountArgs>(
      args?: Subset<T, ChavesApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChavesApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChavesApi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChavesApiAggregateArgs>(args: Subset<T, ChavesApiAggregateArgs>): Prisma.PrismaPromise<GetChavesApiAggregateType<T>>

    /**
     * Group by ChavesApi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChavesApiGroupByArgs} args - Group by arguments.
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
      T extends ChavesApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChavesApiGroupByArgs['orderBy'] }
        : { orderBy?: ChavesApiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChavesApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChavesApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChavesApi model
   */
  readonly fields: ChavesApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChavesApi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChavesApiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_organizacao<T extends OrganizacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizacaoDefaultArgs<ExtArgs>>): Prisma__OrganizacaoClient<$Result.GetResult<Prisma.$OrganizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Usuarios<T extends ChavesApi$UsuariosArgs<ExtArgs> = {}>(args?: Subset<T, ChavesApi$UsuariosArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the ChavesApi model
   */ 
  interface ChavesApiFieldRefs {
    readonly id: FieldRef<"ChavesApi", 'Int'>
    readonly chave_api: FieldRef<"ChavesApi", 'String'>
    readonly is_ativo: FieldRef<"ChavesApi", 'Boolean'>
    readonly organizacaoId: FieldRef<"ChavesApi", 'Int'>
    readonly usuariosId: FieldRef<"ChavesApi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChavesApi findUnique
   */
  export type ChavesApiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * Filter, which ChavesApi to fetch.
     */
    where: ChavesApiWhereUniqueInput
  }

  /**
   * ChavesApi findUniqueOrThrow
   */
  export type ChavesApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * Filter, which ChavesApi to fetch.
     */
    where: ChavesApiWhereUniqueInput
  }

  /**
   * ChavesApi findFirst
   */
  export type ChavesApiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * Filter, which ChavesApi to fetch.
     */
    where?: ChavesApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChavesApis to fetch.
     */
    orderBy?: ChavesApiOrderByWithRelationInput | ChavesApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChavesApis.
     */
    cursor?: ChavesApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChavesApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChavesApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChavesApis.
     */
    distinct?: ChavesApiScalarFieldEnum | ChavesApiScalarFieldEnum[]
  }

  /**
   * ChavesApi findFirstOrThrow
   */
  export type ChavesApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * Filter, which ChavesApi to fetch.
     */
    where?: ChavesApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChavesApis to fetch.
     */
    orderBy?: ChavesApiOrderByWithRelationInput | ChavesApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChavesApis.
     */
    cursor?: ChavesApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChavesApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChavesApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChavesApis.
     */
    distinct?: ChavesApiScalarFieldEnum | ChavesApiScalarFieldEnum[]
  }

  /**
   * ChavesApi findMany
   */
  export type ChavesApiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * Filter, which ChavesApis to fetch.
     */
    where?: ChavesApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChavesApis to fetch.
     */
    orderBy?: ChavesApiOrderByWithRelationInput | ChavesApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChavesApis.
     */
    cursor?: ChavesApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChavesApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChavesApis.
     */
    skip?: number
    distinct?: ChavesApiScalarFieldEnum | ChavesApiScalarFieldEnum[]
  }

  /**
   * ChavesApi create
   */
  export type ChavesApiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * The data needed to create a ChavesApi.
     */
    data: XOR<ChavesApiCreateInput, ChavesApiUncheckedCreateInput>
  }

  /**
   * ChavesApi createMany
   */
  export type ChavesApiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChavesApis.
     */
    data: ChavesApiCreateManyInput | ChavesApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChavesApi update
   */
  export type ChavesApiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * The data needed to update a ChavesApi.
     */
    data: XOR<ChavesApiUpdateInput, ChavesApiUncheckedUpdateInput>
    /**
     * Choose, which ChavesApi to update.
     */
    where: ChavesApiWhereUniqueInput
  }

  /**
   * ChavesApi updateMany
   */
  export type ChavesApiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChavesApis.
     */
    data: XOR<ChavesApiUpdateManyMutationInput, ChavesApiUncheckedUpdateManyInput>
    /**
     * Filter which ChavesApis to update
     */
    where?: ChavesApiWhereInput
    /**
     * Limit how many ChavesApis to update.
     */
    limit?: number
  }

  /**
   * ChavesApi upsert
   */
  export type ChavesApiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * The filter to search for the ChavesApi to update in case it exists.
     */
    where: ChavesApiWhereUniqueInput
    /**
     * In case the ChavesApi found by the `where` argument doesn't exist, create a new ChavesApi with this data.
     */
    create: XOR<ChavesApiCreateInput, ChavesApiUncheckedCreateInput>
    /**
     * In case the ChavesApi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChavesApiUpdateInput, ChavesApiUncheckedUpdateInput>
  }

  /**
   * ChavesApi delete
   */
  export type ChavesApiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    /**
     * Filter which ChavesApi to delete.
     */
    where: ChavesApiWhereUniqueInput
  }

  /**
   * ChavesApi deleteMany
   */
  export type ChavesApiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChavesApis to delete
     */
    where?: ChavesApiWhereInput
    /**
     * Limit how many ChavesApis to delete.
     */
    limit?: number
  }

  /**
   * ChavesApi.Usuarios
   */
  export type ChavesApi$UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * ChavesApi without action
   */
  export type ChavesApiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
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
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
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




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
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

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    ChavesApi?: boolean | Usuarios$ChavesApiArgs<ExtArgs>
    JwtToken?: boolean | Usuarios$JwtTokenArgs<ExtArgs>
    Templates?: boolean | Usuarios$TemplatesArgs<ExtArgs>
    UsuariosOrganizacao?: boolean | Usuarios$UsuariosOrganizacaoArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
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

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "nascimento" | "senha" | "token" | "created_at" | "updated_at" | "tipo_acesso" | "is_ativo", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChavesApi?: boolean | Usuarios$ChavesApiArgs<ExtArgs>
    JwtToken?: boolean | Usuarios$JwtTokenArgs<ExtArgs>
    Templates?: boolean | Usuarios$TemplatesArgs<ExtArgs>
    UsuariosOrganizacao?: boolean | Usuarios$UsuariosOrganizacaoArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      ChavesApi: Prisma.$ChavesApiPayload<ExtArgs>[]
      JwtToken: Prisma.$JwtTokenPayload<ExtArgs>[]
      Templates: Prisma.$TemplatesPayload<ExtArgs>[]
      UsuariosOrganizacao: Prisma.$UsuariosOrganizacaoPayload<ExtArgs>[]
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

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
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
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
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
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
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
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChavesApi<T extends Usuarios$ChavesApiArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$ChavesApiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChavesApiPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    JwtToken<T extends Usuarios$JwtTokenArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$JwtTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Templates<T extends Usuarios$TemplatesArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$TemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    UsuariosOrganizacao<T extends Usuarios$UsuariosOrganizacaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$UsuariosOrganizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosOrganizacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Usuarios model
   */ 
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'Int'>
    readonly nome: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly nascimento: FieldRef<"Usuarios", 'DateTime'>
    readonly senha: FieldRef<"Usuarios", 'String'>
    readonly token: FieldRef<"Usuarios", 'String'>
    readonly created_at: FieldRef<"Usuarios", 'DateTime'>
    readonly updated_at: FieldRef<"Usuarios", 'DateTime'>
    readonly tipo_acesso: FieldRef<"Usuarios", 'String'>
    readonly is_ativo: FieldRef<"Usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.ChavesApi
   */
  export type Usuarios$ChavesApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChavesApi
     */
    select?: ChavesApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChavesApi
     */
    omit?: ChavesApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChavesApiInclude<ExtArgs> | null
    where?: ChavesApiWhereInput
    orderBy?: ChavesApiOrderByWithRelationInput | ChavesApiOrderByWithRelationInput[]
    cursor?: ChavesApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChavesApiScalarFieldEnum | ChavesApiScalarFieldEnum[]
  }

  /**
   * Usuarios.JwtToken
   */
  export type Usuarios$JwtTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    where?: JwtTokenWhereInput
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    cursor?: JwtTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * Usuarios.Templates
   */
  export type Usuarios$TemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    where?: TemplatesWhereInput
    orderBy?: TemplatesOrderByWithRelationInput | TemplatesOrderByWithRelationInput[]
    cursor?: TemplatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * Usuarios.UsuariosOrganizacao
   */
  export type Usuarios$UsuariosOrganizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosOrganizacao
     */
    select?: UsuariosOrganizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosOrganizacao
     */
    omit?: UsuariosOrganizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosOrganizacaoInclude<ExtArgs> | null
    where?: UsuariosOrganizacaoWhereInput
    orderBy?: UsuariosOrganizacaoOrderByWithRelationInput | UsuariosOrganizacaoOrderByWithRelationInput[]
    cursor?: UsuariosOrganizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosOrganizacaoScalarFieldEnum | UsuariosOrganizacaoScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model JwtToken
   */

  export type AggregateJwtToken = {
    _count: JwtTokenCountAggregateOutputType | null
    _avg: JwtTokenAvgAggregateOutputType | null
    _sum: JwtTokenSumAggregateOutputType | null
    _min: JwtTokenMinAggregateOutputType | null
    _max: JwtTokenMaxAggregateOutputType | null
  }

  export type JwtTokenAvgAggregateOutputType = {
    id: number | null
    usuariosId: number | null
  }

  export type JwtTokenSumAggregateOutputType = {
    id: number | null
    usuariosId: number | null
  }

  export type JwtTokenMinAggregateOutputType = {
    id: number | null
    jwt_token: string | null
    usuariosId: number | null
  }

  export type JwtTokenMaxAggregateOutputType = {
    id: number | null
    jwt_token: string | null
    usuariosId: number | null
  }

  export type JwtTokenCountAggregateOutputType = {
    id: number
    jwt_token: number
    usuariosId: number
    _all: number
  }


  export type JwtTokenAvgAggregateInputType = {
    id?: true
    usuariosId?: true
  }

  export type JwtTokenSumAggregateInputType = {
    id?: true
    usuariosId?: true
  }

  export type JwtTokenMinAggregateInputType = {
    id?: true
    jwt_token?: true
    usuariosId?: true
  }

  export type JwtTokenMaxAggregateInputType = {
    id?: true
    jwt_token?: true
    usuariosId?: true
  }

  export type JwtTokenCountAggregateInputType = {
    id?: true
    jwt_token?: true
    usuariosId?: true
    _all?: true
  }

  export type JwtTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtToken to aggregate.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JwtTokens
    **/
    _count?: true | JwtTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JwtTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JwtTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwtTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwtTokenMaxAggregateInputType
  }

  export type GetJwtTokenAggregateType<T extends JwtTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateJwtToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwtToken[P]>
      : GetScalarType<T[P], AggregateJwtToken[P]>
  }




  export type JwtTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtTokenWhereInput
    orderBy?: JwtTokenOrderByWithAggregationInput | JwtTokenOrderByWithAggregationInput[]
    by: JwtTokenScalarFieldEnum[] | JwtTokenScalarFieldEnum
    having?: JwtTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwtTokenCountAggregateInputType | true
    _avg?: JwtTokenAvgAggregateInputType
    _sum?: JwtTokenSumAggregateInputType
    _min?: JwtTokenMinAggregateInputType
    _max?: JwtTokenMaxAggregateInputType
  }

  export type JwtTokenGroupByOutputType = {
    id: number
    jwt_token: string
    usuariosId: number
    _count: JwtTokenCountAggregateOutputType | null
    _avg: JwtTokenAvgAggregateOutputType | null
    _sum: JwtTokenSumAggregateOutputType | null
    _min: JwtTokenMinAggregateOutputType | null
    _max: JwtTokenMaxAggregateOutputType | null
  }

  type GetJwtTokenGroupByPayload<T extends JwtTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwtTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwtTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwtTokenGroupByOutputType[P]>
            : GetScalarType<T[P], JwtTokenGroupByOutputType[P]>
        }
      >
    >


  export type JwtTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jwt_token?: boolean
    usuariosId?: boolean
    id_usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>



  export type JwtTokenSelectScalar = {
    id?: boolean
    jwt_token?: boolean
    usuariosId?: boolean
  }

  export type JwtTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jwt_token" | "usuariosId", ExtArgs["result"]["jwtToken"]>
  export type JwtTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
  }

  export type $JwtTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JwtToken"
    objects: {
      id_usuario: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jwt_token: string
      usuariosId: number
    }, ExtArgs["result"]["jwtToken"]>
    composites: {}
  }

  type JwtTokenGetPayload<S extends boolean | null | undefined | JwtTokenDefaultArgs> = $Result.GetResult<Prisma.$JwtTokenPayload, S>

  type JwtTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwtTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwtTokenCountAggregateInputType | true
    }

  export interface JwtTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JwtToken'], meta: { name: 'JwtToken' } }
    /**
     * Find zero or one JwtToken that matches the filter.
     * @param {JwtTokenFindUniqueArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwtTokenFindUniqueArgs>(args: SelectSubset<T, JwtTokenFindUniqueArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one JwtToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwtTokenFindUniqueOrThrowArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwtTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, JwtTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first JwtToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindFirstArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwtTokenFindFirstArgs>(args?: SelectSubset<T, JwtTokenFindFirstArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first JwtToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindFirstOrThrowArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwtTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, JwtTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more JwtTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JwtTokens
     * const jwtTokens = await prisma.jwtToken.findMany()
     * 
     * // Get first 10 JwtTokens
     * const jwtTokens = await prisma.jwtToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JwtTokenFindManyArgs>(args?: SelectSubset<T, JwtTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a JwtToken.
     * @param {JwtTokenCreateArgs} args - Arguments to create a JwtToken.
     * @example
     * // Create one JwtToken
     * const JwtToken = await prisma.jwtToken.create({
     *   data: {
     *     // ... data to create a JwtToken
     *   }
     * })
     * 
     */
    create<T extends JwtTokenCreateArgs>(args: SelectSubset<T, JwtTokenCreateArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many JwtTokens.
     * @param {JwtTokenCreateManyArgs} args - Arguments to create many JwtTokens.
     * @example
     * // Create many JwtTokens
     * const jwtToken = await prisma.jwtToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwtTokenCreateManyArgs>(args?: SelectSubset<T, JwtTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JwtToken.
     * @param {JwtTokenDeleteArgs} args - Arguments to delete one JwtToken.
     * @example
     * // Delete one JwtToken
     * const JwtToken = await prisma.jwtToken.delete({
     *   where: {
     *     // ... filter to delete one JwtToken
     *   }
     * })
     * 
     */
    delete<T extends JwtTokenDeleteArgs>(args: SelectSubset<T, JwtTokenDeleteArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one JwtToken.
     * @param {JwtTokenUpdateArgs} args - Arguments to update one JwtToken.
     * @example
     * // Update one JwtToken
     * const jwtToken = await prisma.jwtToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwtTokenUpdateArgs>(args: SelectSubset<T, JwtTokenUpdateArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more JwtTokens.
     * @param {JwtTokenDeleteManyArgs} args - Arguments to filter JwtTokens to delete.
     * @example
     * // Delete a few JwtTokens
     * const { count } = await prisma.jwtToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwtTokenDeleteManyArgs>(args?: SelectSubset<T, JwtTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JwtTokens
     * const jwtToken = await prisma.jwtToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwtTokenUpdateManyArgs>(args: SelectSubset<T, JwtTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JwtToken.
     * @param {JwtTokenUpsertArgs} args - Arguments to update or create a JwtToken.
     * @example
     * // Update or create a JwtToken
     * const jwtToken = await prisma.jwtToken.upsert({
     *   create: {
     *     // ... data to create a JwtToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JwtToken we want to update
     *   }
     * })
     */
    upsert<T extends JwtTokenUpsertArgs>(args: SelectSubset<T, JwtTokenUpsertArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of JwtTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenCountArgs} args - Arguments to filter JwtTokens to count.
     * @example
     * // Count the number of JwtTokens
     * const count = await prisma.jwtToken.count({
     *   where: {
     *     // ... the filter for the JwtTokens we want to count
     *   }
     * })
    **/
    count<T extends JwtTokenCountArgs>(
      args?: Subset<T, JwtTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwtTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JwtToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JwtTokenAggregateArgs>(args: Subset<T, JwtTokenAggregateArgs>): Prisma.PrismaPromise<GetJwtTokenAggregateType<T>>

    /**
     * Group by JwtToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenGroupByArgs} args - Group by arguments.
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
      T extends JwtTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwtTokenGroupByArgs['orderBy'] }
        : { orderBy?: JwtTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JwtTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwtTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JwtToken model
   */
  readonly fields: JwtTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JwtToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwtTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_usuario<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the JwtToken model
   */ 
  interface JwtTokenFieldRefs {
    readonly id: FieldRef<"JwtToken", 'Int'>
    readonly jwt_token: FieldRef<"JwtToken", 'String'>
    readonly usuariosId: FieldRef<"JwtToken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JwtToken findUnique
   */
  export type JwtTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken findUniqueOrThrow
   */
  export type JwtTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken findFirst
   */
  export type JwtTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtTokens.
     */
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken findFirstOrThrow
   */
  export type JwtTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtTokens.
     */
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken findMany
   */
  export type JwtTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtTokens to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken create
   */
  export type JwtTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a JwtToken.
     */
    data: XOR<JwtTokenCreateInput, JwtTokenUncheckedCreateInput>
  }

  /**
   * JwtToken createMany
   */
  export type JwtTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JwtTokens.
     */
    data: JwtTokenCreateManyInput | JwtTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JwtToken update
   */
  export type JwtTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a JwtToken.
     */
    data: XOR<JwtTokenUpdateInput, JwtTokenUncheckedUpdateInput>
    /**
     * Choose, which JwtToken to update.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken updateMany
   */
  export type JwtTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JwtTokens.
     */
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyInput>
    /**
     * Filter which JwtTokens to update
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to update.
     */
    limit?: number
  }

  /**
   * JwtToken upsert
   */
  export type JwtTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the JwtToken to update in case it exists.
     */
    where: JwtTokenWhereUniqueInput
    /**
     * In case the JwtToken found by the `where` argument doesn't exist, create a new JwtToken with this data.
     */
    create: XOR<JwtTokenCreateInput, JwtTokenUncheckedCreateInput>
    /**
     * In case the JwtToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwtTokenUpdateInput, JwtTokenUncheckedUpdateInput>
  }

  /**
   * JwtToken delete
   */
  export type JwtTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter which JwtToken to delete.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken deleteMany
   */
  export type JwtTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtTokens to delete
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to delete.
     */
    limit?: number
  }

  /**
   * JwtToken without action
   */
  export type JwtTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
  }


  /**
   * Model Templates
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
    usuariosId: number | null
  }

  export type TemplatesSumAggregateOutputType = {
    id: number | null
    usuariosId: number | null
  }

  export type TemplatesMinAggregateOutputType = {
    id: number | null
    nome_template: string | null
    diretorio_arquivo: string | null
    token_template: string | null
    created_at: Date | null
    is_ativo: boolean | null
    usuariosId: number | null
  }

  export type TemplatesMaxAggregateOutputType = {
    id: number | null
    nome_template: string | null
    diretorio_arquivo: string | null
    token_template: string | null
    created_at: Date | null
    is_ativo: boolean | null
    usuariosId: number | null
  }

  export type TemplatesCountAggregateOutputType = {
    id: number
    nome_template: number
    diretorio_arquivo: number
    token_template: number
    created_at: number
    is_ativo: number
    usuariosId: number
    _all: number
  }


  export type TemplatesAvgAggregateInputType = {
    id?: true
    usuariosId?: true
  }

  export type TemplatesSumAggregateInputType = {
    id?: true
    usuariosId?: true
  }

  export type TemplatesMinAggregateInputType = {
    id?: true
    nome_template?: true
    diretorio_arquivo?: true
    token_template?: true
    created_at?: true
    is_ativo?: true
    usuariosId?: true
  }

  export type TemplatesMaxAggregateInputType = {
    id?: true
    nome_template?: true
    diretorio_arquivo?: true
    token_template?: true
    created_at?: true
    is_ativo?: true
    usuariosId?: true
  }

  export type TemplatesCountAggregateInputType = {
    id?: true
    nome_template?: true
    diretorio_arquivo?: true
    token_template?: true
    created_at?: true
    is_ativo?: true
    usuariosId?: true
    _all?: true
  }

  export type TemplatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to aggregate.
     */
    where?: TemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplatesOrderByWithRelationInput | TemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
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




  export type TemplatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplatesWhereInput
    orderBy?: TemplatesOrderByWithAggregationInput | TemplatesOrderByWithAggregationInput[]
    by: TemplatesScalarFieldEnum[] | TemplatesScalarFieldEnum
    having?: TemplatesScalarWhereWithAggregatesInput
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
    usuariosId: number
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  type GetTemplatesGroupByPayload<T extends TemplatesGroupByArgs> = Prisma.PrismaPromise<
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


  export type TemplatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_template?: boolean
    diretorio_arquivo?: boolean
    token_template?: boolean
    created_at?: boolean
    is_ativo?: boolean
    usuariosId?: boolean
    id_usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    VariaveisTemplate?: boolean | Templates$VariaveisTemplateArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templates"]>



  export type TemplatesSelectScalar = {
    id?: boolean
    nome_template?: boolean
    diretorio_arquivo?: boolean
    token_template?: boolean
    created_at?: boolean
    is_ativo?: boolean
    usuariosId?: boolean
  }

  export type TemplatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_template" | "diretorio_arquivo" | "token_template" | "created_at" | "is_ativo" | "usuariosId", ExtArgs["result"]["templates"]>
  export type TemplatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    VariaveisTemplate?: boolean | Templates$VariaveisTemplateArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TemplatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Templates"
    objects: {
      id_usuario: Prisma.$UsuariosPayload<ExtArgs>
      VariaveisTemplate: Prisma.$VariaveisTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_template: string
      diretorio_arquivo: string
      token_template: string
      created_at: Date
      is_ativo: boolean
      usuariosId: number
    }, ExtArgs["result"]["templates"]>
    composites: {}
  }

  type TemplatesGetPayload<S extends boolean | null | undefined | TemplatesDefaultArgs> = $Result.GetResult<Prisma.$TemplatesPayload, S>

  type TemplatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplatesCountAggregateInputType | true
    }

  export interface TemplatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Templates'], meta: { name: 'Templates' } }
    /**
     * Find zero or one Templates that matches the filter.
     * @param {TemplatesFindUniqueArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplatesFindUniqueArgs>(args: SelectSubset<T, TemplatesFindUniqueArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Templates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplatesFindUniqueOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplatesFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesFindFirstArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplatesFindFirstArgs>(args?: SelectSubset<T, TemplatesFindFirstArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesFindFirstOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplatesFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends TemplatesFindManyArgs>(args?: SelectSubset<T, TemplatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Templates.
     * @param {TemplatesCreateArgs} args - Arguments to create a Templates.
     * @example
     * // Create one Templates
     * const Templates = await prisma.templates.create({
     *   data: {
     *     // ... data to create a Templates
     *   }
     * })
     * 
     */
    create<T extends TemplatesCreateArgs>(args: SelectSubset<T, TemplatesCreateArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Templates.
     * @param {TemplatesCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const templates = await prisma.templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplatesCreateManyArgs>(args?: SelectSubset<T, TemplatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Templates.
     * @param {TemplatesDeleteArgs} args - Arguments to delete one Templates.
     * @example
     * // Delete one Templates
     * const Templates = await prisma.templates.delete({
     *   where: {
     *     // ... filter to delete one Templates
     *   }
     * })
     * 
     */
    delete<T extends TemplatesDeleteArgs>(args: SelectSubset<T, TemplatesDeleteArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Templates.
     * @param {TemplatesUpdateArgs} args - Arguments to update one Templates.
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
    update<T extends TemplatesUpdateArgs>(args: SelectSubset<T, TemplatesUpdateArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplatesDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplatesDeleteManyArgs>(args?: SelectSubset<T, TemplatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends TemplatesUpdateManyArgs>(args: SelectSubset<T, TemplatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Templates.
     * @param {TemplatesUpsertArgs} args - Arguments to update or create a Templates.
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
    upsert<T extends TemplatesUpsertArgs>(args: SelectSubset<T, TemplatesUpsertArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.templates.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplatesCountArgs>(
      args?: Subset<T, TemplatesCountArgs>,
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
     * @param {TemplatesGroupByArgs} args - Group by arguments.
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
      T extends TemplatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplatesGroupByArgs['orderBy'] }
        : { orderBy?: TemplatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Templates model
   */
  readonly fields: TemplatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_usuario<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    VariaveisTemplate<T extends Templates$VariaveisTemplateArgs<ExtArgs> = {}>(args?: Subset<T, Templates$VariaveisTemplateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Templates model
   */ 
  interface TemplatesFieldRefs {
    readonly id: FieldRef<"Templates", 'Int'>
    readonly nome_template: FieldRef<"Templates", 'String'>
    readonly diretorio_arquivo: FieldRef<"Templates", 'String'>
    readonly token_template: FieldRef<"Templates", 'String'>
    readonly created_at: FieldRef<"Templates", 'DateTime'>
    readonly is_ativo: FieldRef<"Templates", 'Boolean'>
    readonly usuariosId: FieldRef<"Templates", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Templates findUnique
   */
  export type TemplatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where: TemplatesWhereUniqueInput
  }

  /**
   * Templates findUniqueOrThrow
   */
  export type TemplatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where: TemplatesWhereUniqueInput
  }

  /**
   * Templates findFirst
   */
  export type TemplatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplatesOrderByWithRelationInput | TemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * Templates findFirstOrThrow
   */
  export type TemplatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplatesOrderByWithRelationInput | TemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * Templates findMany
   */
  export type TemplatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplatesOrderByWithRelationInput | TemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * Templates create
   */
  export type TemplatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * The data needed to create a Templates.
     */
    data: XOR<TemplatesCreateInput, TemplatesUncheckedCreateInput>
  }

  /**
   * Templates createMany
   */
  export type TemplatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplatesCreateManyInput | TemplatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Templates update
   */
  export type TemplatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * The data needed to update a Templates.
     */
    data: XOR<TemplatesUpdateInput, TemplatesUncheckedUpdateInput>
    /**
     * Choose, which Templates to update.
     */
    where: TemplatesWhereUniqueInput
  }

  /**
   * Templates updateMany
   */
  export type TemplatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplatesUpdateManyMutationInput, TemplatesUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplatesWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Templates upsert
   */
  export type TemplatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * The filter to search for the Templates to update in case it exists.
     */
    where: TemplatesWhereUniqueInput
    /**
     * In case the Templates found by the `where` argument doesn't exist, create a new Templates with this data.
     */
    create: XOR<TemplatesCreateInput, TemplatesUncheckedCreateInput>
    /**
     * In case the Templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplatesUpdateInput, TemplatesUncheckedUpdateInput>
  }

  /**
   * Templates delete
   */
  export type TemplatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
    /**
     * Filter which Templates to delete.
     */
    where: TemplatesWhereUniqueInput
  }

  /**
   * Templates deleteMany
   */
  export type TemplatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplatesWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Templates.VariaveisTemplate
   */
  export type Templates$VariaveisTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    where?: VariaveisTemplateWhereInput
    orderBy?: VariaveisTemplateOrderByWithRelationInput | VariaveisTemplateOrderByWithRelationInput[]
    cursor?: VariaveisTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariaveisTemplateScalarFieldEnum | VariaveisTemplateScalarFieldEnum[]
  }

  /**
   * Templates without action
   */
  export type TemplatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Templates
     */
    select?: TemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Templates
     */
    omit?: TemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatesInclude<ExtArgs> | null
  }


  /**
   * Model VariaveisTemplate
   */

  export type AggregateVariaveisTemplate = {
    _count: VariaveisTemplateCountAggregateOutputType | null
    _avg: VariaveisTemplateAvgAggregateOutputType | null
    _sum: VariaveisTemplateSumAggregateOutputType | null
    _min: VariaveisTemplateMinAggregateOutputType | null
    _max: VariaveisTemplateMaxAggregateOutputType | null
  }

  export type VariaveisTemplateAvgAggregateOutputType = {
    id: number | null
    templatesId: number | null
  }

  export type VariaveisTemplateSumAggregateOutputType = {
    id: number | null
    templatesId: number | null
  }

  export type VariaveisTemplateMinAggregateOutputType = {
    id: number | null
    templatesId: number | null
  }

  export type VariaveisTemplateMaxAggregateOutputType = {
    id: number | null
    templatesId: number | null
  }

  export type VariaveisTemplateCountAggregateOutputType = {
    id: number
    templatesId: number
    _all: number
  }


  export type VariaveisTemplateAvgAggregateInputType = {
    id?: true
    templatesId?: true
  }

  export type VariaveisTemplateSumAggregateInputType = {
    id?: true
    templatesId?: true
  }

  export type VariaveisTemplateMinAggregateInputType = {
    id?: true
    templatesId?: true
  }

  export type VariaveisTemplateMaxAggregateInputType = {
    id?: true
    templatesId?: true
  }

  export type VariaveisTemplateCountAggregateInputType = {
    id?: true
    templatesId?: true
    _all?: true
  }

  export type VariaveisTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariaveisTemplate to aggregate.
     */
    where?: VariaveisTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariaveisTemplates to fetch.
     */
    orderBy?: VariaveisTemplateOrderByWithRelationInput | VariaveisTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariaveisTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariaveisTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariaveisTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariaveisTemplates
    **/
    _count?: true | VariaveisTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariaveisTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariaveisTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariaveisTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariaveisTemplateMaxAggregateInputType
  }

  export type GetVariaveisTemplateAggregateType<T extends VariaveisTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateVariaveisTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariaveisTemplate[P]>
      : GetScalarType<T[P], AggregateVariaveisTemplate[P]>
  }




  export type VariaveisTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariaveisTemplateWhereInput
    orderBy?: VariaveisTemplateOrderByWithAggregationInput | VariaveisTemplateOrderByWithAggregationInput[]
    by: VariaveisTemplateScalarFieldEnum[] | VariaveisTemplateScalarFieldEnum
    having?: VariaveisTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariaveisTemplateCountAggregateInputType | true
    _avg?: VariaveisTemplateAvgAggregateInputType
    _sum?: VariaveisTemplateSumAggregateInputType
    _min?: VariaveisTemplateMinAggregateInputType
    _max?: VariaveisTemplateMaxAggregateInputType
  }

  export type VariaveisTemplateGroupByOutputType = {
    id: number
    templatesId: number
    _count: VariaveisTemplateCountAggregateOutputType | null
    _avg: VariaveisTemplateAvgAggregateOutputType | null
    _sum: VariaveisTemplateSumAggregateOutputType | null
    _min: VariaveisTemplateMinAggregateOutputType | null
    _max: VariaveisTemplateMaxAggregateOutputType | null
  }

  type GetVariaveisTemplateGroupByPayload<T extends VariaveisTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariaveisTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariaveisTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariaveisTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], VariaveisTemplateGroupByOutputType[P]>
        }
      >
    >


  export type VariaveisTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templatesId?: boolean
    id_template?: boolean | TemplatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variaveisTemplate"]>



  export type VariaveisTemplateSelectScalar = {
    id?: boolean
    templatesId?: boolean
  }

  export type VariaveisTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templatesId", ExtArgs["result"]["variaveisTemplate"]>
  export type VariaveisTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_template?: boolean | TemplatesDefaultArgs<ExtArgs>
  }

  export type $VariaveisTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariaveisTemplate"
    objects: {
      id_template: Prisma.$TemplatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templatesId: number
    }, ExtArgs["result"]["variaveisTemplate"]>
    composites: {}
  }

  type VariaveisTemplateGetPayload<S extends boolean | null | undefined | VariaveisTemplateDefaultArgs> = $Result.GetResult<Prisma.$VariaveisTemplatePayload, S>

  type VariaveisTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariaveisTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariaveisTemplateCountAggregateInputType | true
    }

  export interface VariaveisTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariaveisTemplate'], meta: { name: 'VariaveisTemplate' } }
    /**
     * Find zero or one VariaveisTemplate that matches the filter.
     * @param {VariaveisTemplateFindUniqueArgs} args - Arguments to find a VariaveisTemplate
     * @example
     * // Get one VariaveisTemplate
     * const variaveisTemplate = await prisma.variaveisTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariaveisTemplateFindUniqueArgs>(args: SelectSubset<T, VariaveisTemplateFindUniqueArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VariaveisTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariaveisTemplateFindUniqueOrThrowArgs} args - Arguments to find a VariaveisTemplate
     * @example
     * // Get one VariaveisTemplate
     * const variaveisTemplate = await prisma.variaveisTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariaveisTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, VariaveisTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VariaveisTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateFindFirstArgs} args - Arguments to find a VariaveisTemplate
     * @example
     * // Get one VariaveisTemplate
     * const variaveisTemplate = await prisma.variaveisTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariaveisTemplateFindFirstArgs>(args?: SelectSubset<T, VariaveisTemplateFindFirstArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VariaveisTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateFindFirstOrThrowArgs} args - Arguments to find a VariaveisTemplate
     * @example
     * // Get one VariaveisTemplate
     * const variaveisTemplate = await prisma.variaveisTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariaveisTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, VariaveisTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VariaveisTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariaveisTemplates
     * const variaveisTemplates = await prisma.variaveisTemplate.findMany()
     * 
     * // Get first 10 VariaveisTemplates
     * const variaveisTemplates = await prisma.variaveisTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variaveisTemplateWithIdOnly = await prisma.variaveisTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariaveisTemplateFindManyArgs>(args?: SelectSubset<T, VariaveisTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VariaveisTemplate.
     * @param {VariaveisTemplateCreateArgs} args - Arguments to create a VariaveisTemplate.
     * @example
     * // Create one VariaveisTemplate
     * const VariaveisTemplate = await prisma.variaveisTemplate.create({
     *   data: {
     *     // ... data to create a VariaveisTemplate
     *   }
     * })
     * 
     */
    create<T extends VariaveisTemplateCreateArgs>(args: SelectSubset<T, VariaveisTemplateCreateArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VariaveisTemplates.
     * @param {VariaveisTemplateCreateManyArgs} args - Arguments to create many VariaveisTemplates.
     * @example
     * // Create many VariaveisTemplates
     * const variaveisTemplate = await prisma.variaveisTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariaveisTemplateCreateManyArgs>(args?: SelectSubset<T, VariaveisTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VariaveisTemplate.
     * @param {VariaveisTemplateDeleteArgs} args - Arguments to delete one VariaveisTemplate.
     * @example
     * // Delete one VariaveisTemplate
     * const VariaveisTemplate = await prisma.variaveisTemplate.delete({
     *   where: {
     *     // ... filter to delete one VariaveisTemplate
     *   }
     * })
     * 
     */
    delete<T extends VariaveisTemplateDeleteArgs>(args: SelectSubset<T, VariaveisTemplateDeleteArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VariaveisTemplate.
     * @param {VariaveisTemplateUpdateArgs} args - Arguments to update one VariaveisTemplate.
     * @example
     * // Update one VariaveisTemplate
     * const variaveisTemplate = await prisma.variaveisTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariaveisTemplateUpdateArgs>(args: SelectSubset<T, VariaveisTemplateUpdateArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VariaveisTemplates.
     * @param {VariaveisTemplateDeleteManyArgs} args - Arguments to filter VariaveisTemplates to delete.
     * @example
     * // Delete a few VariaveisTemplates
     * const { count } = await prisma.variaveisTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariaveisTemplateDeleteManyArgs>(args?: SelectSubset<T, VariaveisTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariaveisTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariaveisTemplates
     * const variaveisTemplate = await prisma.variaveisTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariaveisTemplateUpdateManyArgs>(args: SelectSubset<T, VariaveisTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VariaveisTemplate.
     * @param {VariaveisTemplateUpsertArgs} args - Arguments to update or create a VariaveisTemplate.
     * @example
     * // Update or create a VariaveisTemplate
     * const variaveisTemplate = await prisma.variaveisTemplate.upsert({
     *   create: {
     *     // ... data to create a VariaveisTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariaveisTemplate we want to update
     *   }
     * })
     */
    upsert<T extends VariaveisTemplateUpsertArgs>(args: SelectSubset<T, VariaveisTemplateUpsertArgs<ExtArgs>>): Prisma__VariaveisTemplateClient<$Result.GetResult<Prisma.$VariaveisTemplatePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VariaveisTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateCountArgs} args - Arguments to filter VariaveisTemplates to count.
     * @example
     * // Count the number of VariaveisTemplates
     * const count = await prisma.variaveisTemplate.count({
     *   where: {
     *     // ... the filter for the VariaveisTemplates we want to count
     *   }
     * })
    **/
    count<T extends VariaveisTemplateCountArgs>(
      args?: Subset<T, VariaveisTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariaveisTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariaveisTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariaveisTemplateAggregateArgs>(args: Subset<T, VariaveisTemplateAggregateArgs>): Prisma.PrismaPromise<GetVariaveisTemplateAggregateType<T>>

    /**
     * Group by VariaveisTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariaveisTemplateGroupByArgs} args - Group by arguments.
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
      T extends VariaveisTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariaveisTemplateGroupByArgs['orderBy'] }
        : { orderBy?: VariaveisTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariaveisTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariaveisTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariaveisTemplate model
   */
  readonly fields: VariaveisTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariaveisTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariaveisTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_template<T extends TemplatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplatesDefaultArgs<ExtArgs>>): Prisma__TemplatesClient<$Result.GetResult<Prisma.$TemplatesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the VariaveisTemplate model
   */ 
  interface VariaveisTemplateFieldRefs {
    readonly id: FieldRef<"VariaveisTemplate", 'Int'>
    readonly templatesId: FieldRef<"VariaveisTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VariaveisTemplate findUnique
   */
  export type VariaveisTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VariaveisTemplate to fetch.
     */
    where: VariaveisTemplateWhereUniqueInput
  }

  /**
   * VariaveisTemplate findUniqueOrThrow
   */
  export type VariaveisTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VariaveisTemplate to fetch.
     */
    where: VariaveisTemplateWhereUniqueInput
  }

  /**
   * VariaveisTemplate findFirst
   */
  export type VariaveisTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VariaveisTemplate to fetch.
     */
    where?: VariaveisTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariaveisTemplates to fetch.
     */
    orderBy?: VariaveisTemplateOrderByWithRelationInput | VariaveisTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariaveisTemplates.
     */
    cursor?: VariaveisTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariaveisTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariaveisTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariaveisTemplates.
     */
    distinct?: VariaveisTemplateScalarFieldEnum | VariaveisTemplateScalarFieldEnum[]
  }

  /**
   * VariaveisTemplate findFirstOrThrow
   */
  export type VariaveisTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VariaveisTemplate to fetch.
     */
    where?: VariaveisTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariaveisTemplates to fetch.
     */
    orderBy?: VariaveisTemplateOrderByWithRelationInput | VariaveisTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariaveisTemplates.
     */
    cursor?: VariaveisTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariaveisTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariaveisTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariaveisTemplates.
     */
    distinct?: VariaveisTemplateScalarFieldEnum | VariaveisTemplateScalarFieldEnum[]
  }

  /**
   * VariaveisTemplate findMany
   */
  export type VariaveisTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VariaveisTemplates to fetch.
     */
    where?: VariaveisTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariaveisTemplates to fetch.
     */
    orderBy?: VariaveisTemplateOrderByWithRelationInput | VariaveisTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariaveisTemplates.
     */
    cursor?: VariaveisTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariaveisTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariaveisTemplates.
     */
    skip?: number
    distinct?: VariaveisTemplateScalarFieldEnum | VariaveisTemplateScalarFieldEnum[]
  }

  /**
   * VariaveisTemplate create
   */
  export type VariaveisTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a VariaveisTemplate.
     */
    data: XOR<VariaveisTemplateCreateInput, VariaveisTemplateUncheckedCreateInput>
  }

  /**
   * VariaveisTemplate createMany
   */
  export type VariaveisTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariaveisTemplates.
     */
    data: VariaveisTemplateCreateManyInput | VariaveisTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VariaveisTemplate update
   */
  export type VariaveisTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a VariaveisTemplate.
     */
    data: XOR<VariaveisTemplateUpdateInput, VariaveisTemplateUncheckedUpdateInput>
    /**
     * Choose, which VariaveisTemplate to update.
     */
    where: VariaveisTemplateWhereUniqueInput
  }

  /**
   * VariaveisTemplate updateMany
   */
  export type VariaveisTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariaveisTemplates.
     */
    data: XOR<VariaveisTemplateUpdateManyMutationInput, VariaveisTemplateUncheckedUpdateManyInput>
    /**
     * Filter which VariaveisTemplates to update
     */
    where?: VariaveisTemplateWhereInput
    /**
     * Limit how many VariaveisTemplates to update.
     */
    limit?: number
  }

  /**
   * VariaveisTemplate upsert
   */
  export type VariaveisTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the VariaveisTemplate to update in case it exists.
     */
    where: VariaveisTemplateWhereUniqueInput
    /**
     * In case the VariaveisTemplate found by the `where` argument doesn't exist, create a new VariaveisTemplate with this data.
     */
    create: XOR<VariaveisTemplateCreateInput, VariaveisTemplateUncheckedCreateInput>
    /**
     * In case the VariaveisTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariaveisTemplateUpdateInput, VariaveisTemplateUncheckedUpdateInput>
  }

  /**
   * VariaveisTemplate delete
   */
  export type VariaveisTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
    /**
     * Filter which VariaveisTemplate to delete.
     */
    where: VariaveisTemplateWhereUniqueInput
  }

  /**
   * VariaveisTemplate deleteMany
   */
  export type VariaveisTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariaveisTemplates to delete
     */
    where?: VariaveisTemplateWhereInput
    /**
     * Limit how many VariaveisTemplates to delete.
     */
    limit?: number
  }

  /**
   * VariaveisTemplate without action
   */
  export type VariaveisTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariaveisTemplate
     */
    select?: VariaveisTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariaveisTemplate
     */
    omit?: VariaveisTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariaveisTemplateInclude<ExtArgs> | null
  }


  /**
   * Model StatusDocumentos
   */

  export type AggregateStatusDocumentos = {
    _count: StatusDocumentosCountAggregateOutputType | null
    _avg: StatusDocumentosAvgAggregateOutputType | null
    _sum: StatusDocumentosSumAggregateOutputType | null
    _min: StatusDocumentosMinAggregateOutputType | null
    _max: StatusDocumentosMaxAggregateOutputType | null
  }

  export type StatusDocumentosAvgAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type StatusDocumentosSumAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type StatusDocumentosMinAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type StatusDocumentosMaxAggregateOutputType = {
    id: number | null
    status_documento: number | null
  }

  export type StatusDocumentosCountAggregateOutputType = {
    id: number
    status_documento: number
    _all: number
  }


  export type StatusDocumentosAvgAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type StatusDocumentosSumAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type StatusDocumentosMinAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type StatusDocumentosMaxAggregateInputType = {
    id?: true
    status_documento?: true
  }

  export type StatusDocumentosCountAggregateInputType = {
    id?: true
    status_documento?: true
    _all?: true
  }

  export type StatusDocumentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusDocumentos to aggregate.
     */
    where?: StatusDocumentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusDocumentos to fetch.
     */
    orderBy?: StatusDocumentosOrderByWithRelationInput | StatusDocumentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusDocumentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusDocumentos
    **/
    _count?: true | StatusDocumentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusDocumentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusDocumentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusDocumentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusDocumentosMaxAggregateInputType
  }

  export type GetStatusDocumentosAggregateType<T extends StatusDocumentosAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusDocumentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusDocumentos[P]>
      : GetScalarType<T[P], AggregateStatusDocumentos[P]>
  }




  export type StatusDocumentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusDocumentosWhereInput
    orderBy?: StatusDocumentosOrderByWithAggregationInput | StatusDocumentosOrderByWithAggregationInput[]
    by: StatusDocumentosScalarFieldEnum[] | StatusDocumentosScalarFieldEnum
    having?: StatusDocumentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusDocumentosCountAggregateInputType | true
    _avg?: StatusDocumentosAvgAggregateInputType
    _sum?: StatusDocumentosSumAggregateInputType
    _min?: StatusDocumentosMinAggregateInputType
    _max?: StatusDocumentosMaxAggregateInputType
  }

  export type StatusDocumentosGroupByOutputType = {
    id: number
    status_documento: number
    _count: StatusDocumentosCountAggregateOutputType | null
    _avg: StatusDocumentosAvgAggregateOutputType | null
    _sum: StatusDocumentosSumAggregateOutputType | null
    _min: StatusDocumentosMinAggregateOutputType | null
    _max: StatusDocumentosMaxAggregateOutputType | null
  }

  type GetStatusDocumentosGroupByPayload<T extends StatusDocumentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusDocumentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusDocumentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusDocumentosGroupByOutputType[P]>
            : GetScalarType<T[P], StatusDocumentosGroupByOutputType[P]>
        }
      >
    >


  export type StatusDocumentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status_documento?: boolean
  }, ExtArgs["result"]["statusDocumentos"]>



  export type StatusDocumentosSelectScalar = {
    id?: boolean
    status_documento?: boolean
  }

  export type StatusDocumentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status_documento", ExtArgs["result"]["statusDocumentos"]>

  export type $StatusDocumentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusDocumentos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status_documento: number
    }, ExtArgs["result"]["statusDocumentos"]>
    composites: {}
  }

  type StatusDocumentosGetPayload<S extends boolean | null | undefined | StatusDocumentosDefaultArgs> = $Result.GetResult<Prisma.$StatusDocumentosPayload, S>

  type StatusDocumentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusDocumentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusDocumentosCountAggregateInputType | true
    }

  export interface StatusDocumentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusDocumentos'], meta: { name: 'StatusDocumentos' } }
    /**
     * Find zero or one StatusDocumentos that matches the filter.
     * @param {StatusDocumentosFindUniqueArgs} args - Arguments to find a StatusDocumentos
     * @example
     * // Get one StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusDocumentosFindUniqueArgs>(args: SelectSubset<T, StatusDocumentosFindUniqueArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StatusDocumentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusDocumentosFindUniqueOrThrowArgs} args - Arguments to find a StatusDocumentos
     * @example
     * // Get one StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusDocumentosFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusDocumentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StatusDocumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosFindFirstArgs} args - Arguments to find a StatusDocumentos
     * @example
     * // Get one StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusDocumentosFindFirstArgs>(args?: SelectSubset<T, StatusDocumentosFindFirstArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StatusDocumentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosFindFirstOrThrowArgs} args - Arguments to find a StatusDocumentos
     * @example
     * // Get one StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusDocumentosFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusDocumentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StatusDocumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.findMany()
     * 
     * // Get first 10 StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusDocumentosWithIdOnly = await prisma.statusDocumentos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusDocumentosFindManyArgs>(args?: SelectSubset<T, StatusDocumentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StatusDocumentos.
     * @param {StatusDocumentosCreateArgs} args - Arguments to create a StatusDocumentos.
     * @example
     * // Create one StatusDocumentos
     * const StatusDocumentos = await prisma.statusDocumentos.create({
     *   data: {
     *     // ... data to create a StatusDocumentos
     *   }
     * })
     * 
     */
    create<T extends StatusDocumentosCreateArgs>(args: SelectSubset<T, StatusDocumentosCreateArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StatusDocumentos.
     * @param {StatusDocumentosCreateManyArgs} args - Arguments to create many StatusDocumentos.
     * @example
     * // Create many StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusDocumentosCreateManyArgs>(args?: SelectSubset<T, StatusDocumentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusDocumentos.
     * @param {StatusDocumentosDeleteArgs} args - Arguments to delete one StatusDocumentos.
     * @example
     * // Delete one StatusDocumentos
     * const StatusDocumentos = await prisma.statusDocumentos.delete({
     *   where: {
     *     // ... filter to delete one StatusDocumentos
     *   }
     * })
     * 
     */
    delete<T extends StatusDocumentosDeleteArgs>(args: SelectSubset<T, StatusDocumentosDeleteArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StatusDocumentos.
     * @param {StatusDocumentosUpdateArgs} args - Arguments to update one StatusDocumentos.
     * @example
     * // Update one StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusDocumentosUpdateArgs>(args: SelectSubset<T, StatusDocumentosUpdateArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StatusDocumentos.
     * @param {StatusDocumentosDeleteManyArgs} args - Arguments to filter StatusDocumentos to delete.
     * @example
     * // Delete a few StatusDocumentos
     * const { count } = await prisma.statusDocumentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDocumentosDeleteManyArgs>(args?: SelectSubset<T, StatusDocumentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusDocumentosUpdateManyArgs>(args: SelectSubset<T, StatusDocumentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusDocumentos.
     * @param {StatusDocumentosUpsertArgs} args - Arguments to update or create a StatusDocumentos.
     * @example
     * // Update or create a StatusDocumentos
     * const statusDocumentos = await prisma.statusDocumentos.upsert({
     *   create: {
     *     // ... data to create a StatusDocumentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusDocumentos we want to update
     *   }
     * })
     */
    upsert<T extends StatusDocumentosUpsertArgs>(args: SelectSubset<T, StatusDocumentosUpsertArgs<ExtArgs>>): Prisma__StatusDocumentosClient<$Result.GetResult<Prisma.$StatusDocumentosPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StatusDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosCountArgs} args - Arguments to filter StatusDocumentos to count.
     * @example
     * // Count the number of StatusDocumentos
     * const count = await prisma.statusDocumentos.count({
     *   where: {
     *     // ... the filter for the StatusDocumentos we want to count
     *   }
     * })
    **/
    count<T extends StatusDocumentosCountArgs>(
      args?: Subset<T, StatusDocumentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusDocumentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusDocumentosAggregateArgs>(args: Subset<T, StatusDocumentosAggregateArgs>): Prisma.PrismaPromise<GetStatusDocumentosAggregateType<T>>

    /**
     * Group by StatusDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusDocumentosGroupByArgs} args - Group by arguments.
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
      T extends StatusDocumentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusDocumentosGroupByArgs['orderBy'] }
        : { orderBy?: StatusDocumentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusDocumentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusDocumentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusDocumentos model
   */
  readonly fields: StatusDocumentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusDocumentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusDocumentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StatusDocumentos model
   */ 
  interface StatusDocumentosFieldRefs {
    readonly id: FieldRef<"StatusDocumentos", 'Int'>
    readonly status_documento: FieldRef<"StatusDocumentos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StatusDocumentos findUnique
   */
  export type StatusDocumentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * Filter, which StatusDocumentos to fetch.
     */
    where: StatusDocumentosWhereUniqueInput
  }

  /**
   * StatusDocumentos findUniqueOrThrow
   */
  export type StatusDocumentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * Filter, which StatusDocumentos to fetch.
     */
    where: StatusDocumentosWhereUniqueInput
  }

  /**
   * StatusDocumentos findFirst
   */
  export type StatusDocumentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * Filter, which StatusDocumentos to fetch.
     */
    where?: StatusDocumentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusDocumentos to fetch.
     */
    orderBy?: StatusDocumentosOrderByWithRelationInput | StatusDocumentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusDocumentos.
     */
    cursor?: StatusDocumentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusDocumentos.
     */
    distinct?: StatusDocumentosScalarFieldEnum | StatusDocumentosScalarFieldEnum[]
  }

  /**
   * StatusDocumentos findFirstOrThrow
   */
  export type StatusDocumentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * Filter, which StatusDocumentos to fetch.
     */
    where?: StatusDocumentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusDocumentos to fetch.
     */
    orderBy?: StatusDocumentosOrderByWithRelationInput | StatusDocumentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusDocumentos.
     */
    cursor?: StatusDocumentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusDocumentos.
     */
    distinct?: StatusDocumentosScalarFieldEnum | StatusDocumentosScalarFieldEnum[]
  }

  /**
   * StatusDocumentos findMany
   */
  export type StatusDocumentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * Filter, which StatusDocumentos to fetch.
     */
    where?: StatusDocumentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusDocumentos to fetch.
     */
    orderBy?: StatusDocumentosOrderByWithRelationInput | StatusDocumentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusDocumentos.
     */
    cursor?: StatusDocumentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusDocumentos.
     */
    skip?: number
    distinct?: StatusDocumentosScalarFieldEnum | StatusDocumentosScalarFieldEnum[]
  }

  /**
   * StatusDocumentos create
   */
  export type StatusDocumentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * The data needed to create a StatusDocumentos.
     */
    data: XOR<StatusDocumentosCreateInput, StatusDocumentosUncheckedCreateInput>
  }

  /**
   * StatusDocumentos createMany
   */
  export type StatusDocumentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusDocumentos.
     */
    data: StatusDocumentosCreateManyInput | StatusDocumentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusDocumentos update
   */
  export type StatusDocumentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * The data needed to update a StatusDocumentos.
     */
    data: XOR<StatusDocumentosUpdateInput, StatusDocumentosUncheckedUpdateInput>
    /**
     * Choose, which StatusDocumentos to update.
     */
    where: StatusDocumentosWhereUniqueInput
  }

  /**
   * StatusDocumentos updateMany
   */
  export type StatusDocumentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusDocumentos.
     */
    data: XOR<StatusDocumentosUpdateManyMutationInput, StatusDocumentosUncheckedUpdateManyInput>
    /**
     * Filter which StatusDocumentos to update
     */
    where?: StatusDocumentosWhereInput
    /**
     * Limit how many StatusDocumentos to update.
     */
    limit?: number
  }

  /**
   * StatusDocumentos upsert
   */
  export type StatusDocumentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * The filter to search for the StatusDocumentos to update in case it exists.
     */
    where: StatusDocumentosWhereUniqueInput
    /**
     * In case the StatusDocumentos found by the `where` argument doesn't exist, create a new StatusDocumentos with this data.
     */
    create: XOR<StatusDocumentosCreateInput, StatusDocumentosUncheckedCreateInput>
    /**
     * In case the StatusDocumentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusDocumentosUpdateInput, StatusDocumentosUncheckedUpdateInput>
  }

  /**
   * StatusDocumentos delete
   */
  export type StatusDocumentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
    /**
     * Filter which StatusDocumentos to delete.
     */
    where: StatusDocumentosWhereUniqueInput
  }

  /**
   * StatusDocumentos deleteMany
   */
  export type StatusDocumentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusDocumentos to delete
     */
    where?: StatusDocumentosWhereInput
    /**
     * Limit how many StatusDocumentos to delete.
     */
    limit?: number
  }

  /**
   * StatusDocumentos without action
   */
  export type StatusDocumentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusDocumentos
     */
    select?: StatusDocumentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusDocumentos
     */
    omit?: StatusDocumentosOmit<ExtArgs> | null
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


  export const UsuariosOrganizacaoScalarFieldEnum: {
    id: 'id',
    organizacaoId: 'organizacaoId',
    usuariosId: 'usuariosId'
  };

  export type UsuariosOrganizacaoScalarFieldEnum = (typeof UsuariosOrganizacaoScalarFieldEnum)[keyof typeof UsuariosOrganizacaoScalarFieldEnum]


  export const ChavesApiScalarFieldEnum: {
    id: 'id',
    chave_api: 'chave_api',
    is_ativo: 'is_ativo',
    organizacaoId: 'organizacaoId',
    usuariosId: 'usuariosId'
  };

  export type ChavesApiScalarFieldEnum = (typeof ChavesApiScalarFieldEnum)[keyof typeof ChavesApiScalarFieldEnum]


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


  export const JwtTokenScalarFieldEnum: {
    id: 'id',
    jwt_token: 'jwt_token',
    usuariosId: 'usuariosId'
  };

  export type JwtTokenScalarFieldEnum = (typeof JwtTokenScalarFieldEnum)[keyof typeof JwtTokenScalarFieldEnum]


  export const TemplatesScalarFieldEnum: {
    id: 'id',
    nome_template: 'nome_template',
    diretorio_arquivo: 'diretorio_arquivo',
    token_template: 'token_template',
    created_at: 'created_at',
    is_ativo: 'is_ativo',
    usuariosId: 'usuariosId'
  };

  export type TemplatesScalarFieldEnum = (typeof TemplatesScalarFieldEnum)[keyof typeof TemplatesScalarFieldEnum]


  export const VariaveisTemplateScalarFieldEnum: {
    id: 'id',
    templatesId: 'templatesId'
  };

  export type VariaveisTemplateScalarFieldEnum = (typeof VariaveisTemplateScalarFieldEnum)[keyof typeof VariaveisTemplateScalarFieldEnum]


  export const StatusDocumentosScalarFieldEnum: {
    id: 'id',
    status_documento: 'status_documento'
  };

  export type StatusDocumentosScalarFieldEnum = (typeof StatusDocumentosScalarFieldEnum)[keyof typeof StatusDocumentosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminsOrderByRelevanceFieldEnum: {
    nome_admin: 'nome_admin',
    usuario_admin: 'usuario_admin'
  };

  export type AdminsOrderByRelevanceFieldEnum = (typeof AdminsOrderByRelevanceFieldEnum)[keyof typeof AdminsOrderByRelevanceFieldEnum]


  export const OrganizacaoOrderByRelevanceFieldEnum: {
    nome_organizacao: 'nome_organizacao',
    usuario_criacao: 'usuario_criacao'
  };

  export type OrganizacaoOrderByRelevanceFieldEnum = (typeof OrganizacaoOrderByRelevanceFieldEnum)[keyof typeof OrganizacaoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ChavesApiOrderByRelevanceFieldEnum: {
    chave_api: 'chave_api'
  };

  export type ChavesApiOrderByRelevanceFieldEnum = (typeof ChavesApiOrderByRelevanceFieldEnum)[keyof typeof ChavesApiOrderByRelevanceFieldEnum]


  export const UsuariosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    token: 'token',
    tipo_acesso: 'tipo_acesso'
  };

  export type UsuariosOrderByRelevanceFieldEnum = (typeof UsuariosOrderByRelevanceFieldEnum)[keyof typeof UsuariosOrderByRelevanceFieldEnum]


  export const JwtTokenOrderByRelevanceFieldEnum: {
    jwt_token: 'jwt_token'
  };

  export type JwtTokenOrderByRelevanceFieldEnum = (typeof JwtTokenOrderByRelevanceFieldEnum)[keyof typeof JwtTokenOrderByRelevanceFieldEnum]


  export const TemplatesOrderByRelevanceFieldEnum: {
    nome_template: 'nome_template',
    diretorio_arquivo: 'diretorio_arquivo',
    token_template: 'token_template'
  };

  export type TemplatesOrderByRelevanceFieldEnum = (typeof TemplatesOrderByRelevanceFieldEnum)[keyof typeof TemplatesOrderByRelevanceFieldEnum]


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


  export type AdminsWhereInput = {
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    id?: IntFilter<"Admins"> | number
    nome_admin?: StringFilter<"Admins"> | string
    usuario_admin?: StringFilter<"Admins"> | string
    is_ativo?: BoolFilter<"Admins"> | boolean
  }

  export type AdminsOrderByWithRelationInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
    _relevance?: AdminsOrderByRelevanceInput
  }

  export type AdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    nome_admin?: StringFilter<"Admins"> | string
    usuario_admin?: StringFilter<"Admins"> | string
    is_ativo?: BoolFilter<"Admins"> | boolean
  }, "id">

  export type AdminsOrderByWithAggregationInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
    _count?: AdminsCountOrderByAggregateInput
    _avg?: AdminsAvgOrderByAggregateInput
    _max?: AdminsMaxOrderByAggregateInput
    _min?: AdminsMinOrderByAggregateInput
    _sum?: AdminsSumOrderByAggregateInput
  }

  export type AdminsScalarWhereWithAggregatesInput = {
    AND?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    OR?: AdminsScalarWhereWithAggregatesInput[]
    NOT?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admins"> | number
    nome_admin?: StringWithAggregatesFilter<"Admins"> | string
    usuario_admin?: StringWithAggregatesFilter<"Admins"> | string
    is_ativo?: BoolWithAggregatesFilter<"Admins"> | boolean
  }

  export type OrganizacaoWhereInput = {
    AND?: OrganizacaoWhereInput | OrganizacaoWhereInput[]
    OR?: OrganizacaoWhereInput[]
    NOT?: OrganizacaoWhereInput | OrganizacaoWhereInput[]
    id?: IntFilter<"Organizacao"> | number
    nome_organizacao?: StringFilter<"Organizacao"> | string
    usuario_criacao?: StringFilter<"Organizacao"> | string
    is_ativo?: BoolFilter<"Organizacao"> | boolean
    ChavesApi?: ChavesApiListRelationFilter
    UsuariosOrganizacao?: UsuariosOrganizacaoListRelationFilter
  }

  export type OrganizacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
    ChavesApi?: ChavesApiOrderByRelationAggregateInput
    UsuariosOrganizacao?: UsuariosOrganizacaoOrderByRelationAggregateInput
    _relevance?: OrganizacaoOrderByRelevanceInput
  }

  export type OrganizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizacaoWhereInput | OrganizacaoWhereInput[]
    OR?: OrganizacaoWhereInput[]
    NOT?: OrganizacaoWhereInput | OrganizacaoWhereInput[]
    nome_organizacao?: StringFilter<"Organizacao"> | string
    usuario_criacao?: StringFilter<"Organizacao"> | string
    is_ativo?: BoolFilter<"Organizacao"> | boolean
    ChavesApi?: ChavesApiListRelationFilter
    UsuariosOrganizacao?: UsuariosOrganizacaoListRelationFilter
  }, "id">

  export type OrganizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
    _count?: OrganizacaoCountOrderByAggregateInput
    _avg?: OrganizacaoAvgOrderByAggregateInput
    _max?: OrganizacaoMaxOrderByAggregateInput
    _min?: OrganizacaoMinOrderByAggregateInput
    _sum?: OrganizacaoSumOrderByAggregateInput
  }

  export type OrganizacaoScalarWhereWithAggregatesInput = {
    AND?: OrganizacaoScalarWhereWithAggregatesInput | OrganizacaoScalarWhereWithAggregatesInput[]
    OR?: OrganizacaoScalarWhereWithAggregatesInput[]
    NOT?: OrganizacaoScalarWhereWithAggregatesInput | OrganizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organizacao"> | number
    nome_organizacao?: StringWithAggregatesFilter<"Organizacao"> | string
    usuario_criacao?: StringWithAggregatesFilter<"Organizacao"> | string
    is_ativo?: BoolWithAggregatesFilter<"Organizacao"> | boolean
  }

  export type UsuariosOrganizacaoWhereInput = {
    AND?: UsuariosOrganizacaoWhereInput | UsuariosOrganizacaoWhereInput[]
    OR?: UsuariosOrganizacaoWhereInput[]
    NOT?: UsuariosOrganizacaoWhereInput | UsuariosOrganizacaoWhereInput[]
    id?: IntFilter<"UsuariosOrganizacao"> | number
    organizacaoId?: IntFilter<"UsuariosOrganizacao"> | number
    usuariosId?: IntFilter<"UsuariosOrganizacao"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, OrganizacaoWhereInput>
  }

  export type UsuariosOrganizacaoOrderByWithRelationInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
    id_usuario?: UsuariosOrderByWithRelationInput
    id_organizacao?: OrganizacaoOrderByWithRelationInput
  }

  export type UsuariosOrganizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuariosOrganizacaoWhereInput | UsuariosOrganizacaoWhereInput[]
    OR?: UsuariosOrganizacaoWhereInput[]
    NOT?: UsuariosOrganizacaoWhereInput | UsuariosOrganizacaoWhereInput[]
    organizacaoId?: IntFilter<"UsuariosOrganizacao"> | number
    usuariosId?: IntFilter<"UsuariosOrganizacao"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, OrganizacaoWhereInput>
  }, "id">

  export type UsuariosOrganizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
    _count?: UsuariosOrganizacaoCountOrderByAggregateInput
    _avg?: UsuariosOrganizacaoAvgOrderByAggregateInput
    _max?: UsuariosOrganizacaoMaxOrderByAggregateInput
    _min?: UsuariosOrganizacaoMinOrderByAggregateInput
    _sum?: UsuariosOrganizacaoSumOrderByAggregateInput
  }

  export type UsuariosOrganizacaoScalarWhereWithAggregatesInput = {
    AND?: UsuariosOrganizacaoScalarWhereWithAggregatesInput | UsuariosOrganizacaoScalarWhereWithAggregatesInput[]
    OR?: UsuariosOrganizacaoScalarWhereWithAggregatesInput[]
    NOT?: UsuariosOrganizacaoScalarWhereWithAggregatesInput | UsuariosOrganizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuariosOrganizacao"> | number
    organizacaoId?: IntWithAggregatesFilter<"UsuariosOrganizacao"> | number
    usuariosId?: IntWithAggregatesFilter<"UsuariosOrganizacao"> | number
  }

  export type ChavesApiWhereInput = {
    AND?: ChavesApiWhereInput | ChavesApiWhereInput[]
    OR?: ChavesApiWhereInput[]
    NOT?: ChavesApiWhereInput | ChavesApiWhereInput[]
    id?: IntFilter<"ChavesApi"> | number
    chave_api?: StringFilter<"ChavesApi"> | string
    is_ativo?: BoolFilter<"ChavesApi"> | boolean
    organizacaoId?: IntFilter<"ChavesApi"> | number
    usuariosId?: IntNullableFilter<"ChavesApi"> | number | null
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, OrganizacaoWhereInput>
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
  }

  export type ChavesApiOrderByWithRelationInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrderInput | SortOrder
    id_organizacao?: OrganizacaoOrderByWithRelationInput
    Usuarios?: UsuariosOrderByWithRelationInput
    _relevance?: ChavesApiOrderByRelevanceInput
  }

  export type ChavesApiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chave_api?: string
    AND?: ChavesApiWhereInput | ChavesApiWhereInput[]
    OR?: ChavesApiWhereInput[]
    NOT?: ChavesApiWhereInput | ChavesApiWhereInput[]
    is_ativo?: BoolFilter<"ChavesApi"> | boolean
    organizacaoId?: IntFilter<"ChavesApi"> | number
    usuariosId?: IntNullableFilter<"ChavesApi"> | number | null
    id_organizacao?: XOR<OrganizacaoScalarRelationFilter, OrganizacaoWhereInput>
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
  }, "id" | "chave_api">

  export type ChavesApiOrderByWithAggregationInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrderInput | SortOrder
    _count?: ChavesApiCountOrderByAggregateInput
    _avg?: ChavesApiAvgOrderByAggregateInput
    _max?: ChavesApiMaxOrderByAggregateInput
    _min?: ChavesApiMinOrderByAggregateInput
    _sum?: ChavesApiSumOrderByAggregateInput
  }

  export type ChavesApiScalarWhereWithAggregatesInput = {
    AND?: ChavesApiScalarWhereWithAggregatesInput | ChavesApiScalarWhereWithAggregatesInput[]
    OR?: ChavesApiScalarWhereWithAggregatesInput[]
    NOT?: ChavesApiScalarWhereWithAggregatesInput | ChavesApiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChavesApi"> | number
    chave_api?: StringWithAggregatesFilter<"ChavesApi"> | string
    is_ativo?: BoolWithAggregatesFilter<"ChavesApi"> | boolean
    organizacaoId?: IntWithAggregatesFilter<"ChavesApi"> | number
    usuariosId?: IntNullableWithAggregatesFilter<"ChavesApi"> | number | null
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: IntFilter<"Usuarios"> | number
    nome?: StringFilter<"Usuarios"> | string
    email?: StringFilter<"Usuarios"> | string
    nascimento?: DateTimeFilter<"Usuarios"> | Date | string
    senha?: StringFilter<"Usuarios"> | string
    token?: StringFilter<"Usuarios"> | string
    created_at?: DateTimeFilter<"Usuarios"> | Date | string
    updated_at?: DateTimeFilter<"Usuarios"> | Date | string
    tipo_acesso?: StringFilter<"Usuarios"> | string
    is_ativo?: BoolFilter<"Usuarios"> | boolean
    ChavesApi?: ChavesApiListRelationFilter
    JwtToken?: JwtTokenListRelationFilter
    Templates?: TemplatesListRelationFilter
    UsuariosOrganizacao?: UsuariosOrganizacaoListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
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
    ChavesApi?: ChavesApiOrderByRelationAggregateInput
    JwtToken?: JwtTokenOrderByRelationAggregateInput
    Templates?: TemplatesOrderByRelationAggregateInput
    UsuariosOrganizacao?: UsuariosOrganizacaoOrderByRelationAggregateInput
    _relevance?: UsuariosOrderByRelevanceInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    token?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nome?: StringFilter<"Usuarios"> | string
    nascimento?: DateTimeFilter<"Usuarios"> | Date | string
    senha?: StringFilter<"Usuarios"> | string
    created_at?: DateTimeFilter<"Usuarios"> | Date | string
    updated_at?: DateTimeFilter<"Usuarios"> | Date | string
    tipo_acesso?: StringFilter<"Usuarios"> | string
    is_ativo?: BoolFilter<"Usuarios"> | boolean
    ChavesApi?: ChavesApiListRelationFilter
    JwtToken?: JwtTokenListRelationFilter
    Templates?: TemplatesListRelationFilter
    UsuariosOrganizacao?: UsuariosOrganizacaoListRelationFilter
  }, "id" | "email" | "token">

  export type UsuariosOrderByWithAggregationInput = {
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
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuarios"> | number
    nome?: StringWithAggregatesFilter<"Usuarios"> | string
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    senha?: StringWithAggregatesFilter<"Usuarios"> | string
    token?: StringWithAggregatesFilter<"Usuarios"> | string
    created_at?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    tipo_acesso?: StringWithAggregatesFilter<"Usuarios"> | string
    is_ativo?: BoolWithAggregatesFilter<"Usuarios"> | boolean
  }

  export type JwtTokenWhereInput = {
    AND?: JwtTokenWhereInput | JwtTokenWhereInput[]
    OR?: JwtTokenWhereInput[]
    NOT?: JwtTokenWhereInput | JwtTokenWhereInput[]
    id?: IntFilter<"JwtToken"> | number
    jwt_token?: StringFilter<"JwtToken"> | string
    usuariosId?: IntFilter<"JwtToken"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }

  export type JwtTokenOrderByWithRelationInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuariosId?: SortOrder
    id_usuario?: UsuariosOrderByWithRelationInput
    _relevance?: JwtTokenOrderByRelevanceInput
  }

  export type JwtTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JwtTokenWhereInput | JwtTokenWhereInput[]
    OR?: JwtTokenWhereInput[]
    NOT?: JwtTokenWhereInput | JwtTokenWhereInput[]
    jwt_token?: StringFilter<"JwtToken"> | string
    usuariosId?: IntFilter<"JwtToken"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }, "id">

  export type JwtTokenOrderByWithAggregationInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuariosId?: SortOrder
    _count?: JwtTokenCountOrderByAggregateInput
    _avg?: JwtTokenAvgOrderByAggregateInput
    _max?: JwtTokenMaxOrderByAggregateInput
    _min?: JwtTokenMinOrderByAggregateInput
    _sum?: JwtTokenSumOrderByAggregateInput
  }

  export type JwtTokenScalarWhereWithAggregatesInput = {
    AND?: JwtTokenScalarWhereWithAggregatesInput | JwtTokenScalarWhereWithAggregatesInput[]
    OR?: JwtTokenScalarWhereWithAggregatesInput[]
    NOT?: JwtTokenScalarWhereWithAggregatesInput | JwtTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JwtToken"> | number
    jwt_token?: StringWithAggregatesFilter<"JwtToken"> | string
    usuariosId?: IntWithAggregatesFilter<"JwtToken"> | number
  }

  export type TemplatesWhereInput = {
    AND?: TemplatesWhereInput | TemplatesWhereInput[]
    OR?: TemplatesWhereInput[]
    NOT?: TemplatesWhereInput | TemplatesWhereInput[]
    id?: IntFilter<"Templates"> | number
    nome_template?: StringFilter<"Templates"> | string
    diretorio_arquivo?: StringFilter<"Templates"> | string
    token_template?: StringFilter<"Templates"> | string
    created_at?: DateTimeFilter<"Templates"> | Date | string
    is_ativo?: BoolFilter<"Templates"> | boolean
    usuariosId?: IntFilter<"Templates"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    VariaveisTemplate?: VariaveisTemplateListRelationFilter
  }

  export type TemplatesOrderByWithRelationInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuariosId?: SortOrder
    id_usuario?: UsuariosOrderByWithRelationInput
    VariaveisTemplate?: VariaveisTemplateOrderByRelationAggregateInput
    _relevance?: TemplatesOrderByRelevanceInput
  }

  export type TemplatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplatesWhereInput | TemplatesWhereInput[]
    OR?: TemplatesWhereInput[]
    NOT?: TemplatesWhereInput | TemplatesWhereInput[]
    nome_template?: StringFilter<"Templates"> | string
    diretorio_arquivo?: StringFilter<"Templates"> | string
    token_template?: StringFilter<"Templates"> | string
    created_at?: DateTimeFilter<"Templates"> | Date | string
    is_ativo?: BoolFilter<"Templates"> | boolean
    usuariosId?: IntFilter<"Templates"> | number
    id_usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    VariaveisTemplate?: VariaveisTemplateListRelationFilter
  }, "id">

  export type TemplatesOrderByWithAggregationInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuariosId?: SortOrder
    _count?: TemplatesCountOrderByAggregateInput
    _avg?: TemplatesAvgOrderByAggregateInput
    _max?: TemplatesMaxOrderByAggregateInput
    _min?: TemplatesMinOrderByAggregateInput
    _sum?: TemplatesSumOrderByAggregateInput
  }

  export type TemplatesScalarWhereWithAggregatesInput = {
    AND?: TemplatesScalarWhereWithAggregatesInput | TemplatesScalarWhereWithAggregatesInput[]
    OR?: TemplatesScalarWhereWithAggregatesInput[]
    NOT?: TemplatesScalarWhereWithAggregatesInput | TemplatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Templates"> | number
    nome_template?: StringWithAggregatesFilter<"Templates"> | string
    diretorio_arquivo?: StringWithAggregatesFilter<"Templates"> | string
    token_template?: StringWithAggregatesFilter<"Templates"> | string
    created_at?: DateTimeWithAggregatesFilter<"Templates"> | Date | string
    is_ativo?: BoolWithAggregatesFilter<"Templates"> | boolean
    usuariosId?: IntWithAggregatesFilter<"Templates"> | number
  }

  export type VariaveisTemplateWhereInput = {
    AND?: VariaveisTemplateWhereInput | VariaveisTemplateWhereInput[]
    OR?: VariaveisTemplateWhereInput[]
    NOT?: VariaveisTemplateWhereInput | VariaveisTemplateWhereInput[]
    id?: IntFilter<"VariaveisTemplate"> | number
    templatesId?: IntFilter<"VariaveisTemplate"> | number
    id_template?: XOR<TemplatesScalarRelationFilter, TemplatesWhereInput>
  }

  export type VariaveisTemplateOrderByWithRelationInput = {
    id?: SortOrder
    templatesId?: SortOrder
    id_template?: TemplatesOrderByWithRelationInput
  }

  export type VariaveisTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VariaveisTemplateWhereInput | VariaveisTemplateWhereInput[]
    OR?: VariaveisTemplateWhereInput[]
    NOT?: VariaveisTemplateWhereInput | VariaveisTemplateWhereInput[]
    templatesId?: IntFilter<"VariaveisTemplate"> | number
    id_template?: XOR<TemplatesScalarRelationFilter, TemplatesWhereInput>
  }, "id">

  export type VariaveisTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    templatesId?: SortOrder
    _count?: VariaveisTemplateCountOrderByAggregateInput
    _avg?: VariaveisTemplateAvgOrderByAggregateInput
    _max?: VariaveisTemplateMaxOrderByAggregateInput
    _min?: VariaveisTemplateMinOrderByAggregateInput
    _sum?: VariaveisTemplateSumOrderByAggregateInput
  }

  export type VariaveisTemplateScalarWhereWithAggregatesInput = {
    AND?: VariaveisTemplateScalarWhereWithAggregatesInput | VariaveisTemplateScalarWhereWithAggregatesInput[]
    OR?: VariaveisTemplateScalarWhereWithAggregatesInput[]
    NOT?: VariaveisTemplateScalarWhereWithAggregatesInput | VariaveisTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VariaveisTemplate"> | number
    templatesId?: IntWithAggregatesFilter<"VariaveisTemplate"> | number
  }

  export type StatusDocumentosWhereInput = {
    AND?: StatusDocumentosWhereInput | StatusDocumentosWhereInput[]
    OR?: StatusDocumentosWhereInput[]
    NOT?: StatusDocumentosWhereInput | StatusDocumentosWhereInput[]
    id?: IntFilter<"StatusDocumentos"> | number
    status_documento?: IntFilter<"StatusDocumentos"> | number
  }

  export type StatusDocumentosOrderByWithRelationInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type StatusDocumentosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusDocumentosWhereInput | StatusDocumentosWhereInput[]
    OR?: StatusDocumentosWhereInput[]
    NOT?: StatusDocumentosWhereInput | StatusDocumentosWhereInput[]
    status_documento?: IntFilter<"StatusDocumentos"> | number
  }, "id">

  export type StatusDocumentosOrderByWithAggregationInput = {
    id?: SortOrder
    status_documento?: SortOrder
    _count?: StatusDocumentosCountOrderByAggregateInput
    _avg?: StatusDocumentosAvgOrderByAggregateInput
    _max?: StatusDocumentosMaxOrderByAggregateInput
    _min?: StatusDocumentosMinOrderByAggregateInput
    _sum?: StatusDocumentosSumOrderByAggregateInput
  }

  export type StatusDocumentosScalarWhereWithAggregatesInput = {
    AND?: StatusDocumentosScalarWhereWithAggregatesInput | StatusDocumentosScalarWhereWithAggregatesInput[]
    OR?: StatusDocumentosScalarWhereWithAggregatesInput[]
    NOT?: StatusDocumentosScalarWhereWithAggregatesInput | StatusDocumentosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StatusDocumentos"> | number
    status_documento?: IntWithAggregatesFilter<"StatusDocumentos"> | number
  }

  export type AdminsCreateInput = {
    nome_admin: string
    usuario_admin: string
    is_ativo?: boolean
  }

  export type AdminsUncheckedCreateInput = {
    id?: number
    nome_admin: string
    usuario_admin: string
    is_ativo?: boolean
  }

  export type AdminsUpdateInput = {
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminsCreateManyInput = {
    id?: number
    nome_admin: string
    usuario_admin: string
    is_ativo?: boolean
  }

  export type AdminsUpdateManyMutationInput = {
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_admin?: StringFieldUpdateOperationsInput | string
    usuario_admin?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizacaoCreateInput = {
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiCreateNestedManyWithoutId_organizacaoInput
    UsuariosOrganizacao?: UsuariosOrganizacaoCreateNestedManyWithoutId_organizacaoInput
  }

  export type OrganizacaoUncheckedCreateInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiUncheckedCreateNestedManyWithoutId_organizacaoInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_organizacaoInput
  }

  export type OrganizacaoUpdateInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUpdateManyWithoutId_organizacaoNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUpdateManyWithoutId_organizacaoNestedInput
  }

  export type OrganizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUncheckedUpdateManyWithoutId_organizacaoNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedUpdateManyWithoutId_organizacaoNestedInput
  }

  export type OrganizacaoCreateManyInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
  }

  export type OrganizacaoUpdateManyMutationInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariosOrganizacaoCreateInput = {
    id_usuario: UsuariosCreateNestedOneWithoutUsuariosOrganizacaoInput
    id_organizacao: OrganizacaoCreateNestedOneWithoutUsuariosOrganizacaoInput
  }

  export type UsuariosOrganizacaoUncheckedCreateInput = {
    id?: number
    organizacaoId: number
    usuariosId: number
  }

  export type UsuariosOrganizacaoUpdateInput = {
    id_usuario?: UsuariosUpdateOneRequiredWithoutUsuariosOrganizacaoNestedInput
    id_organizacao?: OrganizacaoUpdateOneRequiredWithoutUsuariosOrganizacaoNestedInput
  }

  export type UsuariosOrganizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacaoId?: IntFieldUpdateOperationsInput | number
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosOrganizacaoCreateManyInput = {
    id?: number
    organizacaoId: number
    usuariosId: number
  }

  export type UsuariosOrganizacaoUpdateManyMutationInput = {

  }

  export type UsuariosOrganizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacaoId?: IntFieldUpdateOperationsInput | number
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type ChavesApiCreateInput = {
    chave_api: string
    is_ativo?: boolean
    id_organizacao: OrganizacaoCreateNestedOneWithoutChavesApiInput
    Usuarios?: UsuariosCreateNestedOneWithoutChavesApiInput
  }

  export type ChavesApiUncheckedCreateInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    organizacaoId: number
    usuariosId?: number | null
  }

  export type ChavesApiUpdateInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_organizacao?: OrganizacaoUpdateOneRequiredWithoutChavesApiNestedInput
    Usuarios?: UsuariosUpdateOneWithoutChavesApiNestedInput
  }

  export type ChavesApiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    organizacaoId?: IntFieldUpdateOperationsInput | number
    usuariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChavesApiCreateManyInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    organizacaoId: number
    usuariosId?: number | null
  }

  export type ChavesApiUpdateManyMutationInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChavesApiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    organizacaoId?: IntFieldUpdateOperationsInput | number
    usuariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiCreateNestedManyWithoutUsuariosInput
    JwtToken?: JwtTokenCreateNestedManyWithoutId_usuarioInput
    Templates?: TemplatesCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosUncheckedCreateInput = {
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
    ChavesApi?: ChavesApiUncheckedCreateNestedManyWithoutUsuariosInput
    JwtToken?: JwtTokenUncheckedCreateNestedManyWithoutId_usuarioInput
    Templates?: TemplatesUncheckedCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUpdateManyWithoutUsuariosNestedInput
    JwtToken?: JwtTokenUpdateManyWithoutId_usuarioNestedInput
    Templates?: TemplatesUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
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
    ChavesApi?: ChavesApiUncheckedUpdateManyWithoutUsuariosNestedInput
    JwtToken?: JwtTokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    Templates?: TemplatesUncheckedUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosCreateManyInput = {
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

  export type UsuariosUpdateManyMutationInput = {
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

  export type UsuariosUncheckedUpdateManyInput = {
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

  export type JwtTokenCreateInput = {
    jwt_token: string
    id_usuario: UsuariosCreateNestedOneWithoutJwtTokenInput
  }

  export type JwtTokenUncheckedCreateInput = {
    id?: number
    jwt_token: string
    usuariosId: number
  }

  export type JwtTokenUpdateInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
    id_usuario?: UsuariosUpdateOneRequiredWithoutJwtTokenNestedInput
  }

  export type JwtTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type JwtTokenCreateManyInput = {
    id?: number
    jwt_token: string
    usuariosId: number
  }

  export type JwtTokenUpdateManyMutationInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type JwtTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type TemplatesCreateInput = {
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    id_usuario: UsuariosCreateNestedOneWithoutTemplatesInput
    VariaveisTemplate?: VariaveisTemplateCreateNestedManyWithoutId_templateInput
  }

  export type TemplatesUncheckedCreateInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    usuariosId: number
    VariaveisTemplate?: VariaveisTemplateUncheckedCreateNestedManyWithoutId_templateInput
  }

  export type TemplatesUpdateInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: UsuariosUpdateOneRequiredWithoutTemplatesNestedInput
    VariaveisTemplate?: VariaveisTemplateUpdateManyWithoutId_templateNestedInput
  }

  export type TemplatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuariosId?: IntFieldUpdateOperationsInput | number
    VariaveisTemplate?: VariaveisTemplateUncheckedUpdateManyWithoutId_templateNestedInput
  }

  export type TemplatesCreateManyInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    usuariosId: number
  }

  export type TemplatesUpdateManyMutationInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type VariaveisTemplateCreateInput = {
    id_template: TemplatesCreateNestedOneWithoutVariaveisTemplateInput
  }

  export type VariaveisTemplateUncheckedCreateInput = {
    id?: number
    templatesId: number
  }

  export type VariaveisTemplateUpdateInput = {
    id_template?: TemplatesUpdateOneRequiredWithoutVariaveisTemplateNestedInput
  }

  export type VariaveisTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templatesId?: IntFieldUpdateOperationsInput | number
  }

  export type VariaveisTemplateCreateManyInput = {
    id?: number
    templatesId: number
  }

  export type VariaveisTemplateUpdateManyMutationInput = {

  }

  export type VariaveisTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templatesId?: IntFieldUpdateOperationsInput | number
  }

  export type StatusDocumentosCreateInput = {
    status_documento: number
  }

  export type StatusDocumentosUncheckedCreateInput = {
    id?: number
    status_documento: number
  }

  export type StatusDocumentosUpdateInput = {
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type StatusDocumentosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type StatusDocumentosCreateManyInput = {
    id?: number
    status_documento: number
  }

  export type StatusDocumentosUpdateManyMutationInput = {
    status_documento?: IntFieldUpdateOperationsInput | number
  }

  export type StatusDocumentosUncheckedUpdateManyInput = {
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

  export type AdminsOrderByRelevanceInput = {
    fields: AdminsOrderByRelevanceFieldEnum | AdminsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminsCountOrderByAggregateInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
  }

  export type AdminsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
  }

  export type AdminsMinOrderByAggregateInput = {
    id?: SortOrder
    nome_admin?: SortOrder
    usuario_admin?: SortOrder
    is_ativo?: SortOrder
  }

  export type AdminsSumOrderByAggregateInput = {
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

  export type ChavesApiListRelationFilter = {
    every?: ChavesApiWhereInput
    some?: ChavesApiWhereInput
    none?: ChavesApiWhereInput
  }

  export type UsuariosOrganizacaoListRelationFilter = {
    every?: UsuariosOrganizacaoWhereInput
    some?: UsuariosOrganizacaoWhereInput
    none?: UsuariosOrganizacaoWhereInput
  }

  export type ChavesApiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosOrganizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizacaoOrderByRelevanceInput = {
    fields: OrganizacaoOrderByRelevanceFieldEnum | OrganizacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
  }

  export type OrganizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
  }

  export type OrganizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome_organizacao?: SortOrder
    usuario_criacao?: SortOrder
    is_ativo?: SortOrder
  }

  export type OrganizacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type OrganizacaoScalarRelationFilter = {
    is?: OrganizacaoWhereInput
    isNot?: OrganizacaoWhereInput
  }

  export type UsuariosOrganizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type UsuariosOrganizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type UsuariosOrganizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type UsuariosOrganizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type UsuariosOrganizacaoSumOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: UsuariosWhereInput | null
    isNot?: UsuariosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChavesApiOrderByRelevanceInput = {
    fields: ChavesApiOrderByRelevanceFieldEnum | ChavesApiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChavesApiCountOrderByAggregateInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type ChavesApiAvgOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type ChavesApiMaxOrderByAggregateInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type ChavesApiMinOrderByAggregateInput = {
    id?: SortOrder
    chave_api?: SortOrder
    is_ativo?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type ChavesApiSumOrderByAggregateInput = {
    id?: SortOrder
    organizacaoId?: SortOrder
    usuariosId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type JwtTokenListRelationFilter = {
    every?: JwtTokenWhereInput
    some?: JwtTokenWhereInput
    none?: JwtTokenWhereInput
  }

  export type TemplatesListRelationFilter = {
    every?: TemplatesWhereInput
    some?: TemplatesWhereInput
    none?: TemplatesWhereInput
  }

  export type JwtTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosOrderByRelevanceInput = {
    fields: UsuariosOrderByRelevanceFieldEnum | UsuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuariosCountOrderByAggregateInput = {
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

  export type UsuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
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

  export type UsuariosMinOrderByAggregateInput = {
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

  export type UsuariosSumOrderByAggregateInput = {
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

  export type JwtTokenOrderByRelevanceInput = {
    fields: JwtTokenOrderByRelevanceFieldEnum | JwtTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JwtTokenCountOrderByAggregateInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuariosId?: SortOrder
  }

  export type JwtTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    usuariosId?: SortOrder
  }

  export type JwtTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuariosId?: SortOrder
  }

  export type JwtTokenMinOrderByAggregateInput = {
    id?: SortOrder
    jwt_token?: SortOrder
    usuariosId?: SortOrder
  }

  export type JwtTokenSumOrderByAggregateInput = {
    id?: SortOrder
    usuariosId?: SortOrder
  }

  export type VariaveisTemplateListRelationFilter = {
    every?: VariaveisTemplateWhereInput
    some?: VariaveisTemplateWhereInput
    none?: VariaveisTemplateWhereInput
  }

  export type VariaveisTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplatesOrderByRelevanceInput = {
    fields: TemplatesOrderByRelevanceFieldEnum | TemplatesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplatesCountOrderByAggregateInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuariosId?: SortOrder
  }

  export type TemplatesAvgOrderByAggregateInput = {
    id?: SortOrder
    usuariosId?: SortOrder
  }

  export type TemplatesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuariosId?: SortOrder
  }

  export type TemplatesMinOrderByAggregateInput = {
    id?: SortOrder
    nome_template?: SortOrder
    diretorio_arquivo?: SortOrder
    token_template?: SortOrder
    created_at?: SortOrder
    is_ativo?: SortOrder
    usuariosId?: SortOrder
  }

  export type TemplatesSumOrderByAggregateInput = {
    id?: SortOrder
    usuariosId?: SortOrder
  }

  export type TemplatesScalarRelationFilter = {
    is?: TemplatesWhereInput
    isNot?: TemplatesWhereInput
  }

  export type VariaveisTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    templatesId?: SortOrder
  }

  export type VariaveisTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    templatesId?: SortOrder
  }

  export type VariaveisTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    templatesId?: SortOrder
  }

  export type VariaveisTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    templatesId?: SortOrder
  }

  export type VariaveisTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    templatesId?: SortOrder
  }

  export type StatusDocumentosCountOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type StatusDocumentosAvgOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type StatusDocumentosMaxOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type StatusDocumentosMinOrderByAggregateInput = {
    id?: SortOrder
    status_documento?: SortOrder
  }

  export type StatusDocumentosSumOrderByAggregateInput = {
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

  export type ChavesApiCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<ChavesApiCreateWithoutId_organizacaoInput, ChavesApiUncheckedCreateWithoutId_organizacaoInput> | ChavesApiCreateWithoutId_organizacaoInput[] | ChavesApiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutId_organizacaoInput | ChavesApiCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: ChavesApiCreateManyId_organizacaoInputEnvelope
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
  }

  export type UsuariosOrganizacaoCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput> | UsuariosOrganizacaoCreateWithoutId_organizacaoInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput | UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_organizacaoInputEnvelope
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
  }

  export type ChavesApiUncheckedCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<ChavesApiCreateWithoutId_organizacaoInput, ChavesApiUncheckedCreateWithoutId_organizacaoInput> | ChavesApiCreateWithoutId_organizacaoInput[] | ChavesApiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutId_organizacaoInput | ChavesApiCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: ChavesApiCreateManyId_organizacaoInputEnvelope
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
  }

  export type UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_organizacaoInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput> | UsuariosOrganizacaoCreateWithoutId_organizacaoInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput | UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_organizacaoInputEnvelope
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
  }

  export type ChavesApiUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<ChavesApiCreateWithoutId_organizacaoInput, ChavesApiUncheckedCreateWithoutId_organizacaoInput> | ChavesApiCreateWithoutId_organizacaoInput[] | ChavesApiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutId_organizacaoInput | ChavesApiCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: ChavesApiUpsertWithWhereUniqueWithoutId_organizacaoInput | ChavesApiUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: ChavesApiCreateManyId_organizacaoInputEnvelope
    set?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    disconnect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    delete?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    update?: ChavesApiUpdateWithWhereUniqueWithoutId_organizacaoInput | ChavesApiUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: ChavesApiUpdateManyWithWhereWithoutId_organizacaoInput | ChavesApiUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: ChavesApiScalarWhereInput | ChavesApiScalarWhereInput[]
  }

  export type UsuariosOrganizacaoUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput> | UsuariosOrganizacaoCreateWithoutId_organizacaoInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput | UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput | UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_organizacaoInputEnvelope
    set?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    disconnect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    delete?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    update?: UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput | UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: UsuariosOrganizacaoUpdateManyWithWhereWithoutId_organizacaoInput | UsuariosOrganizacaoUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: UsuariosOrganizacaoScalarWhereInput | UsuariosOrganizacaoScalarWhereInput[]
  }

  export type ChavesApiUncheckedUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<ChavesApiCreateWithoutId_organizacaoInput, ChavesApiUncheckedCreateWithoutId_organizacaoInput> | ChavesApiCreateWithoutId_organizacaoInput[] | ChavesApiUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutId_organizacaoInput | ChavesApiCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: ChavesApiUpsertWithWhereUniqueWithoutId_organizacaoInput | ChavesApiUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: ChavesApiCreateManyId_organizacaoInputEnvelope
    set?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    disconnect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    delete?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    update?: ChavesApiUpdateWithWhereUniqueWithoutId_organizacaoInput | ChavesApiUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: ChavesApiUpdateManyWithWhereWithoutId_organizacaoInput | ChavesApiUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: ChavesApiScalarWhereInput | ChavesApiScalarWhereInput[]
  }

  export type UsuariosOrganizacaoUncheckedUpdateManyWithoutId_organizacaoNestedInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput> | UsuariosOrganizacaoCreateWithoutId_organizacaoInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput | UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput[]
    upsert?: UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput | UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_organizacaoInputEnvelope
    set?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    disconnect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    delete?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    update?: UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput | UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput[]
    updateMany?: UsuariosOrganizacaoUpdateManyWithWhereWithoutId_organizacaoInput | UsuariosOrganizacaoUpdateManyWithWhereWithoutId_organizacaoInput[]
    deleteMany?: UsuariosOrganizacaoScalarWhereInput | UsuariosOrganizacaoScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutUsuariosOrganizacaoInput = {
    create?: XOR<UsuariosCreateWithoutUsuariosOrganizacaoInput, UsuariosUncheckedCreateWithoutUsuariosOrganizacaoInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuariosOrganizacaoInput
    connect?: UsuariosWhereUniqueInput
  }

  export type OrganizacaoCreateNestedOneWithoutUsuariosOrganizacaoInput = {
    create?: XOR<OrganizacaoCreateWithoutUsuariosOrganizacaoInput, OrganizacaoUncheckedCreateWithoutUsuariosOrganizacaoInput>
    connectOrCreate?: OrganizacaoCreateOrConnectWithoutUsuariosOrganizacaoInput
    connect?: OrganizacaoWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutUsuariosOrganizacaoNestedInput = {
    create?: XOR<UsuariosCreateWithoutUsuariosOrganizacaoInput, UsuariosUncheckedCreateWithoutUsuariosOrganizacaoInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuariosOrganizacaoInput
    upsert?: UsuariosUpsertWithoutUsuariosOrganizacaoInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUsuariosOrganizacaoInput, UsuariosUpdateWithoutUsuariosOrganizacaoInput>, UsuariosUncheckedUpdateWithoutUsuariosOrganizacaoInput>
  }

  export type OrganizacaoUpdateOneRequiredWithoutUsuariosOrganizacaoNestedInput = {
    create?: XOR<OrganizacaoCreateWithoutUsuariosOrganizacaoInput, OrganizacaoUncheckedCreateWithoutUsuariosOrganizacaoInput>
    connectOrCreate?: OrganizacaoCreateOrConnectWithoutUsuariosOrganizacaoInput
    upsert?: OrganizacaoUpsertWithoutUsuariosOrganizacaoInput
    connect?: OrganizacaoWhereUniqueInput
    update?: XOR<XOR<OrganizacaoUpdateToOneWithWhereWithoutUsuariosOrganizacaoInput, OrganizacaoUpdateWithoutUsuariosOrganizacaoInput>, OrganizacaoUncheckedUpdateWithoutUsuariosOrganizacaoInput>
  }

  export type OrganizacaoCreateNestedOneWithoutChavesApiInput = {
    create?: XOR<OrganizacaoCreateWithoutChavesApiInput, OrganizacaoUncheckedCreateWithoutChavesApiInput>
    connectOrCreate?: OrganizacaoCreateOrConnectWithoutChavesApiInput
    connect?: OrganizacaoWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutChavesApiInput = {
    create?: XOR<UsuariosCreateWithoutChavesApiInput, UsuariosUncheckedCreateWithoutChavesApiInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutChavesApiInput
    connect?: UsuariosWhereUniqueInput
  }

  export type OrganizacaoUpdateOneRequiredWithoutChavesApiNestedInput = {
    create?: XOR<OrganizacaoCreateWithoutChavesApiInput, OrganizacaoUncheckedCreateWithoutChavesApiInput>
    connectOrCreate?: OrganizacaoCreateOrConnectWithoutChavesApiInput
    upsert?: OrganizacaoUpsertWithoutChavesApiInput
    connect?: OrganizacaoWhereUniqueInput
    update?: XOR<XOR<OrganizacaoUpdateToOneWithWhereWithoutChavesApiInput, OrganizacaoUpdateWithoutChavesApiInput>, OrganizacaoUncheckedUpdateWithoutChavesApiInput>
  }

  export type UsuariosUpdateOneWithoutChavesApiNestedInput = {
    create?: XOR<UsuariosCreateWithoutChavesApiInput, UsuariosUncheckedCreateWithoutChavesApiInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutChavesApiInput
    upsert?: UsuariosUpsertWithoutChavesApiInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutChavesApiInput, UsuariosUpdateWithoutChavesApiInput>, UsuariosUncheckedUpdateWithoutChavesApiInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChavesApiCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ChavesApiCreateWithoutUsuariosInput, ChavesApiUncheckedCreateWithoutUsuariosInput> | ChavesApiCreateWithoutUsuariosInput[] | ChavesApiUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutUsuariosInput | ChavesApiCreateOrConnectWithoutUsuariosInput[]
    createMany?: ChavesApiCreateManyUsuariosInputEnvelope
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
  }

  export type JwtTokenCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<JwtTokenCreateWithoutId_usuarioInput, JwtTokenUncheckedCreateWithoutId_usuarioInput> | JwtTokenCreateWithoutId_usuarioInput[] | JwtTokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutId_usuarioInput | JwtTokenCreateOrConnectWithoutId_usuarioInput[]
    createMany?: JwtTokenCreateManyId_usuarioInputEnvelope
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
  }

  export type TemplatesCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<TemplatesCreateWithoutId_usuarioInput, TemplatesUncheckedCreateWithoutId_usuarioInput> | TemplatesCreateWithoutId_usuarioInput[] | TemplatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: TemplatesCreateOrConnectWithoutId_usuarioInput | TemplatesCreateOrConnectWithoutId_usuarioInput[]
    createMany?: TemplatesCreateManyId_usuarioInputEnvelope
    connect?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
  }

  export type UsuariosOrganizacaoCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput> | UsuariosOrganizacaoCreateWithoutId_usuarioInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput | UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_usuarioInputEnvelope
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
  }

  export type ChavesApiUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ChavesApiCreateWithoutUsuariosInput, ChavesApiUncheckedCreateWithoutUsuariosInput> | ChavesApiCreateWithoutUsuariosInput[] | ChavesApiUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutUsuariosInput | ChavesApiCreateOrConnectWithoutUsuariosInput[]
    createMany?: ChavesApiCreateManyUsuariosInputEnvelope
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
  }

  export type JwtTokenUncheckedCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<JwtTokenCreateWithoutId_usuarioInput, JwtTokenUncheckedCreateWithoutId_usuarioInput> | JwtTokenCreateWithoutId_usuarioInput[] | JwtTokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutId_usuarioInput | JwtTokenCreateOrConnectWithoutId_usuarioInput[]
    createMany?: JwtTokenCreateManyId_usuarioInputEnvelope
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
  }

  export type TemplatesUncheckedCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<TemplatesCreateWithoutId_usuarioInput, TemplatesUncheckedCreateWithoutId_usuarioInput> | TemplatesCreateWithoutId_usuarioInput[] | TemplatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: TemplatesCreateOrConnectWithoutId_usuarioInput | TemplatesCreateOrConnectWithoutId_usuarioInput[]
    createMany?: TemplatesCreateManyId_usuarioInputEnvelope
    connect?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
  }

  export type UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_usuarioInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput> | UsuariosOrganizacaoCreateWithoutId_usuarioInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput | UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_usuarioInputEnvelope
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChavesApiUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ChavesApiCreateWithoutUsuariosInput, ChavesApiUncheckedCreateWithoutUsuariosInput> | ChavesApiCreateWithoutUsuariosInput[] | ChavesApiUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutUsuariosInput | ChavesApiCreateOrConnectWithoutUsuariosInput[]
    upsert?: ChavesApiUpsertWithWhereUniqueWithoutUsuariosInput | ChavesApiUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ChavesApiCreateManyUsuariosInputEnvelope
    set?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    disconnect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    delete?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    update?: ChavesApiUpdateWithWhereUniqueWithoutUsuariosInput | ChavesApiUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ChavesApiUpdateManyWithWhereWithoutUsuariosInput | ChavesApiUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ChavesApiScalarWhereInput | ChavesApiScalarWhereInput[]
  }

  export type JwtTokenUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<JwtTokenCreateWithoutId_usuarioInput, JwtTokenUncheckedCreateWithoutId_usuarioInput> | JwtTokenCreateWithoutId_usuarioInput[] | JwtTokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutId_usuarioInput | JwtTokenCreateOrConnectWithoutId_usuarioInput[]
    upsert?: JwtTokenUpsertWithWhereUniqueWithoutId_usuarioInput | JwtTokenUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: JwtTokenCreateManyId_usuarioInputEnvelope
    set?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    disconnect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    delete?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    update?: JwtTokenUpdateWithWhereUniqueWithoutId_usuarioInput | JwtTokenUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: JwtTokenUpdateManyWithWhereWithoutId_usuarioInput | JwtTokenUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
  }

  export type TemplatesUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<TemplatesCreateWithoutId_usuarioInput, TemplatesUncheckedCreateWithoutId_usuarioInput> | TemplatesCreateWithoutId_usuarioInput[] | TemplatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: TemplatesCreateOrConnectWithoutId_usuarioInput | TemplatesCreateOrConnectWithoutId_usuarioInput[]
    upsert?: TemplatesUpsertWithWhereUniqueWithoutId_usuarioInput | TemplatesUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: TemplatesCreateManyId_usuarioInputEnvelope
    set?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    disconnect?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    delete?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    connect?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    update?: TemplatesUpdateWithWhereUniqueWithoutId_usuarioInput | TemplatesUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: TemplatesUpdateManyWithWhereWithoutId_usuarioInput | TemplatesUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: TemplatesScalarWhereInput | TemplatesScalarWhereInput[]
  }

  export type UsuariosOrganizacaoUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput> | UsuariosOrganizacaoCreateWithoutId_usuarioInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput | UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput[]
    upsert?: UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_usuarioInput | UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_usuarioInputEnvelope
    set?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    disconnect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    delete?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    update?: UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_usuarioInput | UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: UsuariosOrganizacaoUpdateManyWithWhereWithoutId_usuarioInput | UsuariosOrganizacaoUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: UsuariosOrganizacaoScalarWhereInput | UsuariosOrganizacaoScalarWhereInput[]
  }

  export type ChavesApiUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ChavesApiCreateWithoutUsuariosInput, ChavesApiUncheckedCreateWithoutUsuariosInput> | ChavesApiCreateWithoutUsuariosInput[] | ChavesApiUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChavesApiCreateOrConnectWithoutUsuariosInput | ChavesApiCreateOrConnectWithoutUsuariosInput[]
    upsert?: ChavesApiUpsertWithWhereUniqueWithoutUsuariosInput | ChavesApiUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ChavesApiCreateManyUsuariosInputEnvelope
    set?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    disconnect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    delete?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    connect?: ChavesApiWhereUniqueInput | ChavesApiWhereUniqueInput[]
    update?: ChavesApiUpdateWithWhereUniqueWithoutUsuariosInput | ChavesApiUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ChavesApiUpdateManyWithWhereWithoutUsuariosInput | ChavesApiUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ChavesApiScalarWhereInput | ChavesApiScalarWhereInput[]
  }

  export type JwtTokenUncheckedUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<JwtTokenCreateWithoutId_usuarioInput, JwtTokenUncheckedCreateWithoutId_usuarioInput> | JwtTokenCreateWithoutId_usuarioInput[] | JwtTokenUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutId_usuarioInput | JwtTokenCreateOrConnectWithoutId_usuarioInput[]
    upsert?: JwtTokenUpsertWithWhereUniqueWithoutId_usuarioInput | JwtTokenUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: JwtTokenCreateManyId_usuarioInputEnvelope
    set?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    disconnect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    delete?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    update?: JwtTokenUpdateWithWhereUniqueWithoutId_usuarioInput | JwtTokenUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: JwtTokenUpdateManyWithWhereWithoutId_usuarioInput | JwtTokenUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
  }

  export type TemplatesUncheckedUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<TemplatesCreateWithoutId_usuarioInput, TemplatesUncheckedCreateWithoutId_usuarioInput> | TemplatesCreateWithoutId_usuarioInput[] | TemplatesUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: TemplatesCreateOrConnectWithoutId_usuarioInput | TemplatesCreateOrConnectWithoutId_usuarioInput[]
    upsert?: TemplatesUpsertWithWhereUniqueWithoutId_usuarioInput | TemplatesUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: TemplatesCreateManyId_usuarioInputEnvelope
    set?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    disconnect?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    delete?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    connect?: TemplatesWhereUniqueInput | TemplatesWhereUniqueInput[]
    update?: TemplatesUpdateWithWhereUniqueWithoutId_usuarioInput | TemplatesUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: TemplatesUpdateManyWithWhereWithoutId_usuarioInput | TemplatesUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: TemplatesScalarWhereInput | TemplatesScalarWhereInput[]
  }

  export type UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput = {
    create?: XOR<UsuariosOrganizacaoCreateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput> | UsuariosOrganizacaoCreateWithoutId_usuarioInput[] | UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput[]
    connectOrCreate?: UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput | UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput[]
    upsert?: UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_usuarioInput | UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_usuarioInput[]
    createMany?: UsuariosOrganizacaoCreateManyId_usuarioInputEnvelope
    set?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    disconnect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    delete?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    connect?: UsuariosOrganizacaoWhereUniqueInput | UsuariosOrganizacaoWhereUniqueInput[]
    update?: UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_usuarioInput | UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_usuarioInput[]
    updateMany?: UsuariosOrganizacaoUpdateManyWithWhereWithoutId_usuarioInput | UsuariosOrganizacaoUpdateManyWithWhereWithoutId_usuarioInput[]
    deleteMany?: UsuariosOrganizacaoScalarWhereInput | UsuariosOrganizacaoScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutJwtTokenInput = {
    create?: XOR<UsuariosCreateWithoutJwtTokenInput, UsuariosUncheckedCreateWithoutJwtTokenInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutJwtTokenInput
    connect?: UsuariosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutJwtTokenNestedInput = {
    create?: XOR<UsuariosCreateWithoutJwtTokenInput, UsuariosUncheckedCreateWithoutJwtTokenInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutJwtTokenInput
    upsert?: UsuariosUpsertWithoutJwtTokenInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutJwtTokenInput, UsuariosUpdateWithoutJwtTokenInput>, UsuariosUncheckedUpdateWithoutJwtTokenInput>
  }

  export type UsuariosCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UsuariosCreateWithoutTemplatesInput, UsuariosUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutTemplatesInput
    connect?: UsuariosWhereUniqueInput
  }

  export type VariaveisTemplateCreateNestedManyWithoutId_templateInput = {
    create?: XOR<VariaveisTemplateCreateWithoutId_templateInput, VariaveisTemplateUncheckedCreateWithoutId_templateInput> | VariaveisTemplateCreateWithoutId_templateInput[] | VariaveisTemplateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: VariaveisTemplateCreateOrConnectWithoutId_templateInput | VariaveisTemplateCreateOrConnectWithoutId_templateInput[]
    createMany?: VariaveisTemplateCreateManyId_templateInputEnvelope
    connect?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
  }

  export type VariaveisTemplateUncheckedCreateNestedManyWithoutId_templateInput = {
    create?: XOR<VariaveisTemplateCreateWithoutId_templateInput, VariaveisTemplateUncheckedCreateWithoutId_templateInput> | VariaveisTemplateCreateWithoutId_templateInput[] | VariaveisTemplateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: VariaveisTemplateCreateOrConnectWithoutId_templateInput | VariaveisTemplateCreateOrConnectWithoutId_templateInput[]
    createMany?: VariaveisTemplateCreateManyId_templateInputEnvelope
    connect?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
  }

  export type UsuariosUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UsuariosCreateWithoutTemplatesInput, UsuariosUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutTemplatesInput
    upsert?: UsuariosUpsertWithoutTemplatesInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutTemplatesInput, UsuariosUpdateWithoutTemplatesInput>, UsuariosUncheckedUpdateWithoutTemplatesInput>
  }

  export type VariaveisTemplateUpdateManyWithoutId_templateNestedInput = {
    create?: XOR<VariaveisTemplateCreateWithoutId_templateInput, VariaveisTemplateUncheckedCreateWithoutId_templateInput> | VariaveisTemplateCreateWithoutId_templateInput[] | VariaveisTemplateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: VariaveisTemplateCreateOrConnectWithoutId_templateInput | VariaveisTemplateCreateOrConnectWithoutId_templateInput[]
    upsert?: VariaveisTemplateUpsertWithWhereUniqueWithoutId_templateInput | VariaveisTemplateUpsertWithWhereUniqueWithoutId_templateInput[]
    createMany?: VariaveisTemplateCreateManyId_templateInputEnvelope
    set?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    disconnect?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    delete?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    connect?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    update?: VariaveisTemplateUpdateWithWhereUniqueWithoutId_templateInput | VariaveisTemplateUpdateWithWhereUniqueWithoutId_templateInput[]
    updateMany?: VariaveisTemplateUpdateManyWithWhereWithoutId_templateInput | VariaveisTemplateUpdateManyWithWhereWithoutId_templateInput[]
    deleteMany?: VariaveisTemplateScalarWhereInput | VariaveisTemplateScalarWhereInput[]
  }

  export type VariaveisTemplateUncheckedUpdateManyWithoutId_templateNestedInput = {
    create?: XOR<VariaveisTemplateCreateWithoutId_templateInput, VariaveisTemplateUncheckedCreateWithoutId_templateInput> | VariaveisTemplateCreateWithoutId_templateInput[] | VariaveisTemplateUncheckedCreateWithoutId_templateInput[]
    connectOrCreate?: VariaveisTemplateCreateOrConnectWithoutId_templateInput | VariaveisTemplateCreateOrConnectWithoutId_templateInput[]
    upsert?: VariaveisTemplateUpsertWithWhereUniqueWithoutId_templateInput | VariaveisTemplateUpsertWithWhereUniqueWithoutId_templateInput[]
    createMany?: VariaveisTemplateCreateManyId_templateInputEnvelope
    set?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    disconnect?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    delete?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    connect?: VariaveisTemplateWhereUniqueInput | VariaveisTemplateWhereUniqueInput[]
    update?: VariaveisTemplateUpdateWithWhereUniqueWithoutId_templateInput | VariaveisTemplateUpdateWithWhereUniqueWithoutId_templateInput[]
    updateMany?: VariaveisTemplateUpdateManyWithWhereWithoutId_templateInput | VariaveisTemplateUpdateManyWithWhereWithoutId_templateInput[]
    deleteMany?: VariaveisTemplateScalarWhereInput | VariaveisTemplateScalarWhereInput[]
  }

  export type TemplatesCreateNestedOneWithoutVariaveisTemplateInput = {
    create?: XOR<TemplatesCreateWithoutVariaveisTemplateInput, TemplatesUncheckedCreateWithoutVariaveisTemplateInput>
    connectOrCreate?: TemplatesCreateOrConnectWithoutVariaveisTemplateInput
    connect?: TemplatesWhereUniqueInput
  }

  export type TemplatesUpdateOneRequiredWithoutVariaveisTemplateNestedInput = {
    create?: XOR<TemplatesCreateWithoutVariaveisTemplateInput, TemplatesUncheckedCreateWithoutVariaveisTemplateInput>
    connectOrCreate?: TemplatesCreateOrConnectWithoutVariaveisTemplateInput
    upsert?: TemplatesUpsertWithoutVariaveisTemplateInput
    connect?: TemplatesWhereUniqueInput
    update?: XOR<XOR<TemplatesUpdateToOneWithWhereWithoutVariaveisTemplateInput, TemplatesUpdateWithoutVariaveisTemplateInput>, TemplatesUncheckedUpdateWithoutVariaveisTemplateInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ChavesApiCreateWithoutId_organizacaoInput = {
    chave_api: string
    is_ativo?: boolean
    Usuarios?: UsuariosCreateNestedOneWithoutChavesApiInput
  }

  export type ChavesApiUncheckedCreateWithoutId_organizacaoInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    usuariosId?: number | null
  }

  export type ChavesApiCreateOrConnectWithoutId_organizacaoInput = {
    where: ChavesApiWhereUniqueInput
    create: XOR<ChavesApiCreateWithoutId_organizacaoInput, ChavesApiUncheckedCreateWithoutId_organizacaoInput>
  }

  export type ChavesApiCreateManyId_organizacaoInputEnvelope = {
    data: ChavesApiCreateManyId_organizacaoInput | ChavesApiCreateManyId_organizacaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosOrganizacaoCreateWithoutId_organizacaoInput = {
    id_usuario: UsuariosCreateNestedOneWithoutUsuariosOrganizacaoInput
  }

  export type UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput = {
    id?: number
    usuariosId: number
  }

  export type UsuariosOrganizacaoCreateOrConnectWithoutId_organizacaoInput = {
    where: UsuariosOrganizacaoWhereUniqueInput
    create: XOR<UsuariosOrganizacaoCreateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput>
  }

  export type UsuariosOrganizacaoCreateManyId_organizacaoInputEnvelope = {
    data: UsuariosOrganizacaoCreateManyId_organizacaoInput | UsuariosOrganizacaoCreateManyId_organizacaoInput[]
    skipDuplicates?: boolean
  }

  export type ChavesApiUpsertWithWhereUniqueWithoutId_organizacaoInput = {
    where: ChavesApiWhereUniqueInput
    update: XOR<ChavesApiUpdateWithoutId_organizacaoInput, ChavesApiUncheckedUpdateWithoutId_organizacaoInput>
    create: XOR<ChavesApiCreateWithoutId_organizacaoInput, ChavesApiUncheckedCreateWithoutId_organizacaoInput>
  }

  export type ChavesApiUpdateWithWhereUniqueWithoutId_organizacaoInput = {
    where: ChavesApiWhereUniqueInput
    data: XOR<ChavesApiUpdateWithoutId_organizacaoInput, ChavesApiUncheckedUpdateWithoutId_organizacaoInput>
  }

  export type ChavesApiUpdateManyWithWhereWithoutId_organizacaoInput = {
    where: ChavesApiScalarWhereInput
    data: XOR<ChavesApiUpdateManyMutationInput, ChavesApiUncheckedUpdateManyWithoutId_organizacaoInput>
  }

  export type ChavesApiScalarWhereInput = {
    AND?: ChavesApiScalarWhereInput | ChavesApiScalarWhereInput[]
    OR?: ChavesApiScalarWhereInput[]
    NOT?: ChavesApiScalarWhereInput | ChavesApiScalarWhereInput[]
    id?: IntFilter<"ChavesApi"> | number
    chave_api?: StringFilter<"ChavesApi"> | string
    is_ativo?: BoolFilter<"ChavesApi"> | boolean
    organizacaoId?: IntFilter<"ChavesApi"> | number
    usuariosId?: IntNullableFilter<"ChavesApi"> | number | null
  }

  export type UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_organizacaoInput = {
    where: UsuariosOrganizacaoWhereUniqueInput
    update: XOR<UsuariosOrganizacaoUpdateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedUpdateWithoutId_organizacaoInput>
    create: XOR<UsuariosOrganizacaoCreateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedCreateWithoutId_organizacaoInput>
  }

  export type UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_organizacaoInput = {
    where: UsuariosOrganizacaoWhereUniqueInput
    data: XOR<UsuariosOrganizacaoUpdateWithoutId_organizacaoInput, UsuariosOrganizacaoUncheckedUpdateWithoutId_organizacaoInput>
  }

  export type UsuariosOrganizacaoUpdateManyWithWhereWithoutId_organizacaoInput = {
    where: UsuariosOrganizacaoScalarWhereInput
    data: XOR<UsuariosOrganizacaoUpdateManyMutationInput, UsuariosOrganizacaoUncheckedUpdateManyWithoutId_organizacaoInput>
  }

  export type UsuariosOrganizacaoScalarWhereInput = {
    AND?: UsuariosOrganizacaoScalarWhereInput | UsuariosOrganizacaoScalarWhereInput[]
    OR?: UsuariosOrganizacaoScalarWhereInput[]
    NOT?: UsuariosOrganizacaoScalarWhereInput | UsuariosOrganizacaoScalarWhereInput[]
    id?: IntFilter<"UsuariosOrganizacao"> | number
    organizacaoId?: IntFilter<"UsuariosOrganizacao"> | number
    usuariosId?: IntFilter<"UsuariosOrganizacao"> | number
  }

  export type UsuariosCreateWithoutUsuariosOrganizacaoInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiCreateNestedManyWithoutUsuariosInput
    JwtToken?: JwtTokenCreateNestedManyWithoutId_usuarioInput
    Templates?: TemplatesCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosUncheckedCreateWithoutUsuariosOrganizacaoInput = {
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
    ChavesApi?: ChavesApiUncheckedCreateNestedManyWithoutUsuariosInput
    JwtToken?: JwtTokenUncheckedCreateNestedManyWithoutId_usuarioInput
    Templates?: TemplatesUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosCreateOrConnectWithoutUsuariosOrganizacaoInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUsuariosOrganizacaoInput, UsuariosUncheckedCreateWithoutUsuariosOrganizacaoInput>
  }

  export type OrganizacaoCreateWithoutUsuariosOrganizacaoInput = {
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiCreateNestedManyWithoutId_organizacaoInput
  }

  export type OrganizacaoUncheckedCreateWithoutUsuariosOrganizacaoInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiUncheckedCreateNestedManyWithoutId_organizacaoInput
  }

  export type OrganizacaoCreateOrConnectWithoutUsuariosOrganizacaoInput = {
    where: OrganizacaoWhereUniqueInput
    create: XOR<OrganizacaoCreateWithoutUsuariosOrganizacaoInput, OrganizacaoUncheckedCreateWithoutUsuariosOrganizacaoInput>
  }

  export type UsuariosUpsertWithoutUsuariosOrganizacaoInput = {
    update: XOR<UsuariosUpdateWithoutUsuariosOrganizacaoInput, UsuariosUncheckedUpdateWithoutUsuariosOrganizacaoInput>
    create: XOR<UsuariosCreateWithoutUsuariosOrganizacaoInput, UsuariosUncheckedCreateWithoutUsuariosOrganizacaoInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUsuariosOrganizacaoInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUsuariosOrganizacaoInput, UsuariosUncheckedUpdateWithoutUsuariosOrganizacaoInput>
  }

  export type UsuariosUpdateWithoutUsuariosOrganizacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUpdateManyWithoutUsuariosNestedInput
    JwtToken?: JwtTokenUpdateManyWithoutId_usuarioNestedInput
    Templates?: TemplatesUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUsuariosOrganizacaoInput = {
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
    ChavesApi?: ChavesApiUncheckedUpdateManyWithoutUsuariosNestedInput
    JwtToken?: JwtTokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    Templates?: TemplatesUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type OrganizacaoUpsertWithoutUsuariosOrganizacaoInput = {
    update: XOR<OrganizacaoUpdateWithoutUsuariosOrganizacaoInput, OrganizacaoUncheckedUpdateWithoutUsuariosOrganizacaoInput>
    create: XOR<OrganizacaoCreateWithoutUsuariosOrganizacaoInput, OrganizacaoUncheckedCreateWithoutUsuariosOrganizacaoInput>
    where?: OrganizacaoWhereInput
  }

  export type OrganizacaoUpdateToOneWithWhereWithoutUsuariosOrganizacaoInput = {
    where?: OrganizacaoWhereInput
    data: XOR<OrganizacaoUpdateWithoutUsuariosOrganizacaoInput, OrganizacaoUncheckedUpdateWithoutUsuariosOrganizacaoInput>
  }

  export type OrganizacaoUpdateWithoutUsuariosOrganizacaoInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUpdateManyWithoutId_organizacaoNestedInput
  }

  export type OrganizacaoUncheckedUpdateWithoutUsuariosOrganizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUncheckedUpdateManyWithoutId_organizacaoNestedInput
  }

  export type OrganizacaoCreateWithoutChavesApiInput = {
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    UsuariosOrganizacao?: UsuariosOrganizacaoCreateNestedManyWithoutId_organizacaoInput
  }

  export type OrganizacaoUncheckedCreateWithoutChavesApiInput = {
    id?: number
    nome_organizacao: string
    usuario_criacao: string
    is_ativo?: boolean
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_organizacaoInput
  }

  export type OrganizacaoCreateOrConnectWithoutChavesApiInput = {
    where: OrganizacaoWhereUniqueInput
    create: XOR<OrganizacaoCreateWithoutChavesApiInput, OrganizacaoUncheckedCreateWithoutChavesApiInput>
  }

  export type UsuariosCreateWithoutChavesApiInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    JwtToken?: JwtTokenCreateNestedManyWithoutId_usuarioInput
    Templates?: TemplatesCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosUncheckedCreateWithoutChavesApiInput = {
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
    JwtToken?: JwtTokenUncheckedCreateNestedManyWithoutId_usuarioInput
    Templates?: TemplatesUncheckedCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosCreateOrConnectWithoutChavesApiInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutChavesApiInput, UsuariosUncheckedCreateWithoutChavesApiInput>
  }

  export type OrganizacaoUpsertWithoutChavesApiInput = {
    update: XOR<OrganizacaoUpdateWithoutChavesApiInput, OrganizacaoUncheckedUpdateWithoutChavesApiInput>
    create: XOR<OrganizacaoCreateWithoutChavesApiInput, OrganizacaoUncheckedCreateWithoutChavesApiInput>
    where?: OrganizacaoWhereInput
  }

  export type OrganizacaoUpdateToOneWithWhereWithoutChavesApiInput = {
    where?: OrganizacaoWhereInput
    data: XOR<OrganizacaoUpdateWithoutChavesApiInput, OrganizacaoUncheckedUpdateWithoutChavesApiInput>
  }

  export type OrganizacaoUpdateWithoutChavesApiInput = {
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    UsuariosOrganizacao?: UsuariosOrganizacaoUpdateManyWithoutId_organizacaoNestedInput
  }

  export type OrganizacaoUncheckedUpdateWithoutChavesApiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_organizacao?: StringFieldUpdateOperationsInput | string
    usuario_criacao?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedUpdateManyWithoutId_organizacaoNestedInput
  }

  export type UsuariosUpsertWithoutChavesApiInput = {
    update: XOR<UsuariosUpdateWithoutChavesApiInput, UsuariosUncheckedUpdateWithoutChavesApiInput>
    create: XOR<UsuariosCreateWithoutChavesApiInput, UsuariosUncheckedCreateWithoutChavesApiInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutChavesApiInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutChavesApiInput, UsuariosUncheckedUpdateWithoutChavesApiInput>
  }

  export type UsuariosUpdateWithoutChavesApiInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    JwtToken?: JwtTokenUpdateManyWithoutId_usuarioNestedInput
    Templates?: TemplatesUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutChavesApiInput = {
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
    JwtToken?: JwtTokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    Templates?: TemplatesUncheckedUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type ChavesApiCreateWithoutUsuariosInput = {
    chave_api: string
    is_ativo?: boolean
    id_organizacao: OrganizacaoCreateNestedOneWithoutChavesApiInput
  }

  export type ChavesApiUncheckedCreateWithoutUsuariosInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    organizacaoId: number
  }

  export type ChavesApiCreateOrConnectWithoutUsuariosInput = {
    where: ChavesApiWhereUniqueInput
    create: XOR<ChavesApiCreateWithoutUsuariosInput, ChavesApiUncheckedCreateWithoutUsuariosInput>
  }

  export type ChavesApiCreateManyUsuariosInputEnvelope = {
    data: ChavesApiCreateManyUsuariosInput | ChavesApiCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type JwtTokenCreateWithoutId_usuarioInput = {
    jwt_token: string
  }

  export type JwtTokenUncheckedCreateWithoutId_usuarioInput = {
    id?: number
    jwt_token: string
  }

  export type JwtTokenCreateOrConnectWithoutId_usuarioInput = {
    where: JwtTokenWhereUniqueInput
    create: XOR<JwtTokenCreateWithoutId_usuarioInput, JwtTokenUncheckedCreateWithoutId_usuarioInput>
  }

  export type JwtTokenCreateManyId_usuarioInputEnvelope = {
    data: JwtTokenCreateManyId_usuarioInput | JwtTokenCreateManyId_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type TemplatesCreateWithoutId_usuarioInput = {
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    VariaveisTemplate?: VariaveisTemplateCreateNestedManyWithoutId_templateInput
  }

  export type TemplatesUncheckedCreateWithoutId_usuarioInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    VariaveisTemplate?: VariaveisTemplateUncheckedCreateNestedManyWithoutId_templateInput
  }

  export type TemplatesCreateOrConnectWithoutId_usuarioInput = {
    where: TemplatesWhereUniqueInput
    create: XOR<TemplatesCreateWithoutId_usuarioInput, TemplatesUncheckedCreateWithoutId_usuarioInput>
  }

  export type TemplatesCreateManyId_usuarioInputEnvelope = {
    data: TemplatesCreateManyId_usuarioInput | TemplatesCreateManyId_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosOrganizacaoCreateWithoutId_usuarioInput = {
    id_organizacao: OrganizacaoCreateNestedOneWithoutUsuariosOrganizacaoInput
  }

  export type UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput = {
    id?: number
    organizacaoId: number
  }

  export type UsuariosOrganizacaoCreateOrConnectWithoutId_usuarioInput = {
    where: UsuariosOrganizacaoWhereUniqueInput
    create: XOR<UsuariosOrganizacaoCreateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput>
  }

  export type UsuariosOrganizacaoCreateManyId_usuarioInputEnvelope = {
    data: UsuariosOrganizacaoCreateManyId_usuarioInput | UsuariosOrganizacaoCreateManyId_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type ChavesApiUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ChavesApiWhereUniqueInput
    update: XOR<ChavesApiUpdateWithoutUsuariosInput, ChavesApiUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ChavesApiCreateWithoutUsuariosInput, ChavesApiUncheckedCreateWithoutUsuariosInput>
  }

  export type ChavesApiUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ChavesApiWhereUniqueInput
    data: XOR<ChavesApiUpdateWithoutUsuariosInput, ChavesApiUncheckedUpdateWithoutUsuariosInput>
  }

  export type ChavesApiUpdateManyWithWhereWithoutUsuariosInput = {
    where: ChavesApiScalarWhereInput
    data: XOR<ChavesApiUpdateManyMutationInput, ChavesApiUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type JwtTokenUpsertWithWhereUniqueWithoutId_usuarioInput = {
    where: JwtTokenWhereUniqueInput
    update: XOR<JwtTokenUpdateWithoutId_usuarioInput, JwtTokenUncheckedUpdateWithoutId_usuarioInput>
    create: XOR<JwtTokenCreateWithoutId_usuarioInput, JwtTokenUncheckedCreateWithoutId_usuarioInput>
  }

  export type JwtTokenUpdateWithWhereUniqueWithoutId_usuarioInput = {
    where: JwtTokenWhereUniqueInput
    data: XOR<JwtTokenUpdateWithoutId_usuarioInput, JwtTokenUncheckedUpdateWithoutId_usuarioInput>
  }

  export type JwtTokenUpdateManyWithWhereWithoutId_usuarioInput = {
    where: JwtTokenScalarWhereInput
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyWithoutId_usuarioInput>
  }

  export type JwtTokenScalarWhereInput = {
    AND?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
    OR?: JwtTokenScalarWhereInput[]
    NOT?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
    id?: IntFilter<"JwtToken"> | number
    jwt_token?: StringFilter<"JwtToken"> | string
    usuariosId?: IntFilter<"JwtToken"> | number
  }

  export type TemplatesUpsertWithWhereUniqueWithoutId_usuarioInput = {
    where: TemplatesWhereUniqueInput
    update: XOR<TemplatesUpdateWithoutId_usuarioInput, TemplatesUncheckedUpdateWithoutId_usuarioInput>
    create: XOR<TemplatesCreateWithoutId_usuarioInput, TemplatesUncheckedCreateWithoutId_usuarioInput>
  }

  export type TemplatesUpdateWithWhereUniqueWithoutId_usuarioInput = {
    where: TemplatesWhereUniqueInput
    data: XOR<TemplatesUpdateWithoutId_usuarioInput, TemplatesUncheckedUpdateWithoutId_usuarioInput>
  }

  export type TemplatesUpdateManyWithWhereWithoutId_usuarioInput = {
    where: TemplatesScalarWhereInput
    data: XOR<TemplatesUpdateManyMutationInput, TemplatesUncheckedUpdateManyWithoutId_usuarioInput>
  }

  export type TemplatesScalarWhereInput = {
    AND?: TemplatesScalarWhereInput | TemplatesScalarWhereInput[]
    OR?: TemplatesScalarWhereInput[]
    NOT?: TemplatesScalarWhereInput | TemplatesScalarWhereInput[]
    id?: IntFilter<"Templates"> | number
    nome_template?: StringFilter<"Templates"> | string
    diretorio_arquivo?: StringFilter<"Templates"> | string
    token_template?: StringFilter<"Templates"> | string
    created_at?: DateTimeFilter<"Templates"> | Date | string
    is_ativo?: BoolFilter<"Templates"> | boolean
    usuariosId?: IntFilter<"Templates"> | number
  }

  export type UsuariosOrganizacaoUpsertWithWhereUniqueWithoutId_usuarioInput = {
    where: UsuariosOrganizacaoWhereUniqueInput
    update: XOR<UsuariosOrganizacaoUpdateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedUpdateWithoutId_usuarioInput>
    create: XOR<UsuariosOrganizacaoCreateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedCreateWithoutId_usuarioInput>
  }

  export type UsuariosOrganizacaoUpdateWithWhereUniqueWithoutId_usuarioInput = {
    where: UsuariosOrganizacaoWhereUniqueInput
    data: XOR<UsuariosOrganizacaoUpdateWithoutId_usuarioInput, UsuariosOrganizacaoUncheckedUpdateWithoutId_usuarioInput>
  }

  export type UsuariosOrganizacaoUpdateManyWithWhereWithoutId_usuarioInput = {
    where: UsuariosOrganizacaoScalarWhereInput
    data: XOR<UsuariosOrganizacaoUpdateManyMutationInput, UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioInput>
  }

  export type UsuariosCreateWithoutJwtTokenInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiCreateNestedManyWithoutUsuariosInput
    Templates?: TemplatesCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosUncheckedCreateWithoutJwtTokenInput = {
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
    ChavesApi?: ChavesApiUncheckedCreateNestedManyWithoutUsuariosInput
    Templates?: TemplatesUncheckedCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosCreateOrConnectWithoutJwtTokenInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutJwtTokenInput, UsuariosUncheckedCreateWithoutJwtTokenInput>
  }

  export type UsuariosUpsertWithoutJwtTokenInput = {
    update: XOR<UsuariosUpdateWithoutJwtTokenInput, UsuariosUncheckedUpdateWithoutJwtTokenInput>
    create: XOR<UsuariosCreateWithoutJwtTokenInput, UsuariosUncheckedCreateWithoutJwtTokenInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutJwtTokenInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutJwtTokenInput, UsuariosUncheckedUpdateWithoutJwtTokenInput>
  }

  export type UsuariosUpdateWithoutJwtTokenInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUpdateManyWithoutUsuariosNestedInput
    Templates?: TemplatesUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutJwtTokenInput = {
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
    ChavesApi?: ChavesApiUncheckedUpdateManyWithoutUsuariosNestedInput
    Templates?: TemplatesUncheckedUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosCreateWithoutTemplatesInput = {
    nome: string
    email: string
    nascimento: Date | string
    senha: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
    tipo_acesso: string
    is_ativo?: boolean
    ChavesApi?: ChavesApiCreateNestedManyWithoutUsuariosInput
    JwtToken?: JwtTokenCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosUncheckedCreateWithoutTemplatesInput = {
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
    ChavesApi?: ChavesApiUncheckedCreateNestedManyWithoutUsuariosInput
    JwtToken?: JwtTokenUncheckedCreateNestedManyWithoutId_usuarioInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedCreateNestedManyWithoutId_usuarioInput
  }

  export type UsuariosCreateOrConnectWithoutTemplatesInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutTemplatesInput, UsuariosUncheckedCreateWithoutTemplatesInput>
  }

  export type VariaveisTemplateCreateWithoutId_templateInput = {

  }

  export type VariaveisTemplateUncheckedCreateWithoutId_templateInput = {
    id?: number
  }

  export type VariaveisTemplateCreateOrConnectWithoutId_templateInput = {
    where: VariaveisTemplateWhereUniqueInput
    create: XOR<VariaveisTemplateCreateWithoutId_templateInput, VariaveisTemplateUncheckedCreateWithoutId_templateInput>
  }

  export type VariaveisTemplateCreateManyId_templateInputEnvelope = {
    data: VariaveisTemplateCreateManyId_templateInput | VariaveisTemplateCreateManyId_templateInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithoutTemplatesInput = {
    update: XOR<UsuariosUpdateWithoutTemplatesInput, UsuariosUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UsuariosCreateWithoutTemplatesInput, UsuariosUncheckedCreateWithoutTemplatesInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutTemplatesInput, UsuariosUncheckedUpdateWithoutTemplatesInput>
  }

  export type UsuariosUpdateWithoutTemplatesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_acesso?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    ChavesApi?: ChavesApiUpdateManyWithoutUsuariosNestedInput
    JwtToken?: JwtTokenUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUpdateManyWithoutId_usuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutTemplatesInput = {
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
    ChavesApi?: ChavesApiUncheckedUpdateManyWithoutUsuariosNestedInput
    JwtToken?: JwtTokenUncheckedUpdateManyWithoutId_usuarioNestedInput
    UsuariosOrganizacao?: UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioNestedInput
  }

  export type VariaveisTemplateUpsertWithWhereUniqueWithoutId_templateInput = {
    where: VariaveisTemplateWhereUniqueInput
    update: XOR<VariaveisTemplateUpdateWithoutId_templateInput, VariaveisTemplateUncheckedUpdateWithoutId_templateInput>
    create: XOR<VariaveisTemplateCreateWithoutId_templateInput, VariaveisTemplateUncheckedCreateWithoutId_templateInput>
  }

  export type VariaveisTemplateUpdateWithWhereUniqueWithoutId_templateInput = {
    where: VariaveisTemplateWhereUniqueInput
    data: XOR<VariaveisTemplateUpdateWithoutId_templateInput, VariaveisTemplateUncheckedUpdateWithoutId_templateInput>
  }

  export type VariaveisTemplateUpdateManyWithWhereWithoutId_templateInput = {
    where: VariaveisTemplateScalarWhereInput
    data: XOR<VariaveisTemplateUpdateManyMutationInput, VariaveisTemplateUncheckedUpdateManyWithoutId_templateInput>
  }

  export type VariaveisTemplateScalarWhereInput = {
    AND?: VariaveisTemplateScalarWhereInput | VariaveisTemplateScalarWhereInput[]
    OR?: VariaveisTemplateScalarWhereInput[]
    NOT?: VariaveisTemplateScalarWhereInput | VariaveisTemplateScalarWhereInput[]
    id?: IntFilter<"VariaveisTemplate"> | number
    templatesId?: IntFilter<"VariaveisTemplate"> | number
  }

  export type TemplatesCreateWithoutVariaveisTemplateInput = {
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    id_usuario: UsuariosCreateNestedOneWithoutTemplatesInput
  }

  export type TemplatesUncheckedCreateWithoutVariaveisTemplateInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
    usuariosId: number
  }

  export type TemplatesCreateOrConnectWithoutVariaveisTemplateInput = {
    where: TemplatesWhereUniqueInput
    create: XOR<TemplatesCreateWithoutVariaveisTemplateInput, TemplatesUncheckedCreateWithoutVariaveisTemplateInput>
  }

  export type TemplatesUpsertWithoutVariaveisTemplateInput = {
    update: XOR<TemplatesUpdateWithoutVariaveisTemplateInput, TemplatesUncheckedUpdateWithoutVariaveisTemplateInput>
    create: XOR<TemplatesCreateWithoutVariaveisTemplateInput, TemplatesUncheckedCreateWithoutVariaveisTemplateInput>
    where?: TemplatesWhereInput
  }

  export type TemplatesUpdateToOneWithWhereWithoutVariaveisTemplateInput = {
    where?: TemplatesWhereInput
    data: XOR<TemplatesUpdateWithoutVariaveisTemplateInput, TemplatesUncheckedUpdateWithoutVariaveisTemplateInput>
  }

  export type TemplatesUpdateWithoutVariaveisTemplateInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: UsuariosUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplatesUncheckedUpdateWithoutVariaveisTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type ChavesApiCreateManyId_organizacaoInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    usuariosId?: number | null
  }

  export type UsuariosOrganizacaoCreateManyId_organizacaoInput = {
    id?: number
    usuariosId: number
  }

  export type ChavesApiUpdateWithoutId_organizacaoInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    Usuarios?: UsuariosUpdateOneWithoutChavesApiNestedInput
  }

  export type ChavesApiUncheckedUpdateWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChavesApiUncheckedUpdateManyWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    usuariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosOrganizacaoUpdateWithoutId_organizacaoInput = {
    id_usuario?: UsuariosUpdateOneRequiredWithoutUsuariosOrganizacaoNestedInput
  }

  export type UsuariosOrganizacaoUncheckedUpdateWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosOrganizacaoUncheckedUpdateManyWithoutId_organizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuariosId?: IntFieldUpdateOperationsInput | number
  }

  export type ChavesApiCreateManyUsuariosInput = {
    id?: number
    chave_api: string
    is_ativo?: boolean
    organizacaoId: number
  }

  export type JwtTokenCreateManyId_usuarioInput = {
    id?: number
    jwt_token: string
  }

  export type TemplatesCreateManyId_usuarioInput = {
    id?: number
    nome_template: string
    diretorio_arquivo: string
    token_template: string
    created_at?: Date | string
    is_ativo?: boolean
  }

  export type UsuariosOrganizacaoCreateManyId_usuarioInput = {
    id?: number
    organizacaoId: number
  }

  export type ChavesApiUpdateWithoutUsuariosInput = {
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    id_organizacao?: OrganizacaoUpdateOneRequiredWithoutChavesApiNestedInput
  }

  export type ChavesApiUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    organizacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ChavesApiUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave_api?: StringFieldUpdateOperationsInput | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    organizacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type JwtTokenUpdateWithoutId_usuarioInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type JwtTokenUncheckedUpdateWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type JwtTokenUncheckedUpdateManyWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
  }

  export type TemplatesUpdateWithoutId_usuarioInput = {
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    VariaveisTemplate?: VariaveisTemplateUpdateManyWithoutId_templateNestedInput
  }

  export type TemplatesUncheckedUpdateWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    VariaveisTemplate?: VariaveisTemplateUncheckedUpdateManyWithoutId_templateNestedInput
  }

  export type TemplatesUncheckedUpdateManyWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_template?: StringFieldUpdateOperationsInput | string
    diretorio_arquivo?: StringFieldUpdateOperationsInput | string
    token_template?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariosOrganizacaoUpdateWithoutId_usuarioInput = {
    id_organizacao?: OrganizacaoUpdateOneRequiredWithoutUsuariosOrganizacaoNestedInput
  }

  export type UsuariosOrganizacaoUncheckedUpdateWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosOrganizacaoUncheckedUpdateManyWithoutId_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type VariaveisTemplateCreateManyId_templateInput = {
    id?: number
  }

  export type VariaveisTemplateUpdateWithoutId_templateInput = {

  }

  export type VariaveisTemplateUncheckedUpdateWithoutId_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type VariaveisTemplateUncheckedUpdateManyWithoutId_templateInput = {
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