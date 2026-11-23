
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Especialidad
 * 
 */
export type Especialidad = $Result.DefaultSelection<Prisma.$EspecialidadPayload>
/**
 * Model Medico
 * 
 */
export type Medico = $Result.DefaultSelection<Prisma.$MedicoPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Cita
 * 
 */
export type Cita = $Result.DefaultSelection<Prisma.$CitaPayload>
/**
 * Model HistoriaClinica
 * 
 */
export type HistoriaClinica = $Result.DefaultSelection<Prisma.$HistoriaClinicaPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Especialidads
 * const especialidads = await prisma.especialidad.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Especialidads
   * const especialidads = await prisma.especialidad.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.especialidad`: Exposes CRUD operations for the **Especialidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidads
    * const especialidads = await prisma.especialidad.findMany()
    * ```
    */
  get especialidad(): Prisma.EspecialidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico`: Exposes CRUD operations for the **Medico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medico.findMany()
    * ```
    */
  get medico(): Prisma.MedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cita`: Exposes CRUD operations for the **Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.cita.findMany()
    * ```
    */
  get cita(): Prisma.CitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historiaClinica`: Exposes CRUD operations for the **HistoriaClinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriaClinicas
    * const historiaClinicas = await prisma.historiaClinica.findMany()
    * ```
    */
  get historiaClinica(): Prisma.HistoriaClinicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Especialidad: 'Especialidad',
    Medico: 'Medico',
    Paciente: 'Paciente',
    Cita: 'Cita',
    HistoriaClinica: 'HistoriaClinica',
    Factura: 'Factura',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "especialidad" | "medico" | "paciente" | "cita" | "historiaClinica" | "factura" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Especialidad: {
        payload: Prisma.$EspecialidadPayload<ExtArgs>
        fields: Prisma.EspecialidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findFirst: {
            args: Prisma.EspecialidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findMany: {
            args: Prisma.EspecialidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          create: {
            args: Prisma.EspecialidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          createMany: {
            args: Prisma.EspecialidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecialidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          delete: {
            args: Prisma.EspecialidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          update: {
            args: Prisma.EspecialidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecialidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          upsert: {
            args: Prisma.EspecialidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidad>
          }
          groupBy: {
            args: Prisma.EspecialidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadCountAggregateOutputType> | number
          }
        }
      }
      Medico: {
        payload: Prisma.$MedicoPayload<ExtArgs>
        fields: Prisma.MedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findFirst: {
            args: Prisma.MedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findMany: {
            args: Prisma.MedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          create: {
            args: Prisma.MedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          createMany: {
            args: Prisma.MedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          delete: {
            args: Prisma.MedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          update: {
            args: Prisma.MedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          deleteMany: {
            args: Prisma.MedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          upsert: {
            args: Prisma.MedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          aggregate: {
            args: Prisma.MedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico>
          }
          groupBy: {
            args: Prisma.MedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicoCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Cita: {
        payload: Prisma.$CitaPayload<ExtArgs>
        fields: Prisma.CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findFirst: {
            args: Prisma.CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findMany: {
            args: Prisma.CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          create: {
            args: Prisma.CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          createMany: {
            args: Prisma.CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          delete: {
            args: Prisma.CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          update: {
            args: Prisma.CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          deleteMany: {
            args: Prisma.CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          upsert: {
            args: Prisma.CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          aggregate: {
            args: Prisma.CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCita>
          }
          groupBy: {
            args: Prisma.CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitaCountArgs<ExtArgs>
            result: $Utils.Optional<CitaCountAggregateOutputType> | number
          }
        }
      }
      HistoriaClinica: {
        payload: Prisma.$HistoriaClinicaPayload<ExtArgs>
        fields: Prisma.HistoriaClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriaClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          findFirst: {
            args: Prisma.HistoriaClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          findMany: {
            args: Prisma.HistoriaClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          create: {
            args: Prisma.HistoriaClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          createMany: {
            args: Prisma.HistoriaClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoriaClinicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          delete: {
            args: Prisma.HistoriaClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          update: {
            args: Prisma.HistoriaClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          deleteMany: {
            args: Prisma.HistoriaClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriaClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          upsert: {
            args: Prisma.HistoriaClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          aggregate: {
            args: Prisma.HistoriaClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoriaClinica>
          }
          groupBy: {
            args: Prisma.HistoriaClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriaClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriaClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriaClinicaCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    especialidad?: EspecialidadOmit
    medico?: MedicoOmit
    paciente?: PacienteOmit
    cita?: CitaOmit
    historiaClinica?: HistoriaClinicaOmit
    factura?: FacturaOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EspecialidadCountOutputType
   */

  export type EspecialidadCountOutputType = {
    medicos: number
  }

  export type EspecialidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | EspecialidadCountOutputTypeCountMedicosArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: EspecialidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountMedicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
  }


  /**
   * Count Type MedicoCountOutputType
   */

  export type MedicoCountOutputType = {
    citas: number
    historiasClinicas: number
  }

  export type MedicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | MedicoCountOutputTypeCountCitasArgs
    historiasClinicas?: boolean | MedicoCountOutputTypeCountHistoriasClinicasArgs
  }

  // Custom InputTypes
  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicoCountOutputType
     */
    select?: MedicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountHistoriasClinicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    citas: number
    historiasClinicas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | PacienteCountOutputTypeCountCitasArgs
    historiasClinicas?: boolean | PacienteCountOutputTypeCountHistoriasClinicasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountHistoriasClinicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Especialidad
   */

  export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadSumAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type EspecialidadAvgAggregateInputType = {
    id?: true
  }

  export type EspecialidadSumAggregateInputType = {
    id?: true
  }

  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type EspecialidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType
  }

  export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidad[P]>
      : GetScalarType<T[P], AggregateEspecialidad[P]>
  }




  export type EspecialidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithAggregationInput | EspecialidadOrderByWithAggregationInput[]
    by: EspecialidadScalarFieldEnum[] | EspecialidadScalarFieldEnum
    having?: EspecialidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadCountAggregateInputType | true
    _avg?: EspecialidadAvgAggregateInputType
    _sum?: EspecialidadSumAggregateInputType
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    medicos?: boolean | Especialidad$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type EspecialidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["especialidad"]>
  export type EspecialidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | Especialidad$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecialidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspecialidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspecialidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidad"
    objects: {
      medicos: Prisma.$MedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["especialidad"]>
    composites: {}
  }

  type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadPayload, S>

  type EspecialidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadCountAggregateInputType | true
    }

  export interface EspecialidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'], meta: { name: 'Especialidad' } }
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     * 
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     * 
     */
    create<T extends EspecialidadCreateArgs>(args: SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especialidads and returns the data saved in the database.
     * @param {EspecialidadCreateManyAndReturnArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especialidads and only return the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecialidadCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecialidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadDeleteArgs>(args: SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadUpdateArgs>(args: SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads and returns the data updated in the database.
     * @param {EspecialidadUpdateManyAndReturnArgs} args - Arguments to update many Especialidads.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Especialidads and only return the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EspecialidadUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecialidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(
      args?: Subset<T, EspecialidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadAggregateArgs>(args: Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>

    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidad model
   */
  readonly fields: EspecialidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicos<T extends Especialidad$medicosArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$medicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especialidad model
   */
  interface EspecialidadFieldRefs {
    readonly id: FieldRef<"Especialidad", 'Int'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
    readonly descripcion: FieldRef<"Especialidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidad findUnique
   */
  export type EspecialidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findUniqueOrThrow
   */
  export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findFirst
   */
  export type EspecialidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findFirstOrThrow
   */
  export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findMany
   */
  export type EspecialidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad create
   */
  export type EspecialidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidad.
     */
    data: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
  }

  /**
   * Especialidad createMany
   */
  export type EspecialidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad createManyAndReturn
   */
  export type EspecialidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad update
   */
  export type EspecialidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidad.
     */
    data: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
    /**
     * Choose, which Especialidad to update.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad updateMany
   */
  export type EspecialidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad updateManyAndReturn
   */
  export type EspecialidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad upsert
   */
  export type EspecialidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: EspecialidadWhereUniqueInput
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
  }

  /**
   * Especialidad delete
   */
  export type EspecialidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter which Especialidad to delete.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad deleteMany
   */
  export type EspecialidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to delete.
     */
    limit?: number
  }

  /**
   * Especialidad.medicos
   */
  export type Especialidad$medicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    cursor?: MedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Especialidad without action
   */
  export type EspecialidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
  }


  /**
   * Model Medico
   */

  export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoAvgAggregateOutputType = {
    id: number | null
    especialidadId: number | null
  }

  export type MedicoSumAggregateOutputType = {
    id: number | null
    especialidadId: number | null
  }

  export type MedicoMinAggregateOutputType = {
    id: number | null
    documentoIdentidad: string | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    telefono: string | null
    estado: boolean | null
    especialidadId: number | null
  }

  export type MedicoMaxAggregateOutputType = {
    id: number | null
    documentoIdentidad: string | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    telefono: string | null
    estado: boolean | null
    especialidadId: number | null
  }

  export type MedicoCountAggregateOutputType = {
    id: number
    documentoIdentidad: number
    nombre: number
    apellido: number
    correo: number
    telefono: number
    estado: number
    especialidadId: number
    _all: number
  }


  export type MedicoAvgAggregateInputType = {
    id?: true
    especialidadId?: true
  }

  export type MedicoSumAggregateInputType = {
    id?: true
    especialidadId?: true
  }

  export type MedicoMinAggregateInputType = {
    id?: true
    documentoIdentidad?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    estado?: true
    especialidadId?: true
  }

  export type MedicoMaxAggregateInputType = {
    id?: true
    documentoIdentidad?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    estado?: true
    especialidadId?: true
  }

  export type MedicoCountAggregateInputType = {
    id?: true
    documentoIdentidad?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    estado?: true
    especialidadId?: true
    _all?: true
  }

  export type MedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType
  }

  export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico[P]>
      : GetScalarType<T[P], AggregateMedico[P]>
  }




  export type MedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithAggregationInput | MedicoOrderByWithAggregationInput[]
    by: MedicoScalarFieldEnum[] | MedicoScalarFieldEnum
    having?: MedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicoCountAggregateInputType | true
    _avg?: MedicoAvgAggregateInputType
    _sum?: MedicoSumAggregateInputType
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    id: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado: boolean
    especialidadId: number
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicoGroupByOutputType[P]>
        }
      >
    >


  export type MedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    estado?: boolean
    especialidadId?: boolean
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    citas?: boolean | Medico$citasArgs<ExtArgs>
    historiasClinicas?: boolean | Medico$historiasClinicasArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    estado?: boolean
    especialidadId?: boolean
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    estado?: boolean
    especialidadId?: boolean
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectScalar = {
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    estado?: boolean
    especialidadId?: boolean
  }

  export type MedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentoIdentidad" | "nombre" | "apellido" | "correo" | "telefono" | "estado" | "especialidadId", ExtArgs["result"]["medico"]>
  export type MedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    citas?: boolean | Medico$citasArgs<ExtArgs>
    historiasClinicas?: boolean | Medico$historiasClinicasArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
  }
  export type MedicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
  }

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {
      especialidad: Prisma.$EspecialidadPayload<ExtArgs>
      citas: Prisma.$CitaPayload<ExtArgs>[]
      historiasClinicas: Prisma.$HistoriaClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentoIdentidad: string
      nombre: string
      apellido: string
      correo: string
      telefono: string
      estado: boolean
      especialidadId: number
    }, ExtArgs["result"]["medico"]>
    composites: {}
  }

  type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = $Result.GetResult<Prisma.$MedicoPayload, S>

  type MedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicoCountAggregateInputType | true
    }

  export interface MedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico'], meta: { name: 'Medico' } }
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicoWithIdOnly = await prisma.medico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicoFindManyArgs>(args?: SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     * 
     */
    create<T extends MedicoCreateArgs>(args: SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicoCreateManyArgs>(args?: SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicos and returns the data saved in the database.
     * @param {MedicoCreateManyAndReturnArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicos and only return the `id`
     * const medicoWithIdOnly = await prisma.medico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     * 
     */
    delete<T extends MedicoDeleteArgs>(args: SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicoUpdateArgs>(args: SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos and returns the data updated in the database.
     * @param {MedicoUpdateManyAndReturnArgs} args - Arguments to update many Medicos.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicos and only return the `id`
     * const medicoWithIdOnly = await prisma.medico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicoUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(
      args?: Subset<T, MedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicoAggregateArgs>(args: Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>

    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
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
      T extends MedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicoGroupByArgs['orderBy'] }
        : { orderBy?: MedicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico model
   */
  readonly fields: MedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidad<T extends EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadDefaultArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    citas<T extends Medico$citasArgs<ExtArgs> = {}>(args?: Subset<T, Medico$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historiasClinicas<T extends Medico$historiasClinicasArgs<ExtArgs> = {}>(args?: Subset<T, Medico$historiasClinicasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medico model
   */
  interface MedicoFieldRefs {
    readonly id: FieldRef<"Medico", 'Int'>
    readonly documentoIdentidad: FieldRef<"Medico", 'String'>
    readonly nombre: FieldRef<"Medico", 'String'>
    readonly apellido: FieldRef<"Medico", 'String'>
    readonly correo: FieldRef<"Medico", 'String'>
    readonly telefono: FieldRef<"Medico", 'String'>
    readonly estado: FieldRef<"Medico", 'Boolean'>
    readonly especialidadId: FieldRef<"Medico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medico findUnique
   */
  export type MedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findUniqueOrThrow
   */
  export type MedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findFirst
   */
  export type MedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findFirstOrThrow
   */
  export type MedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findMany
   */
  export type MedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medicos to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico create
   */
  export type MedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico.
     */
    data: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
  }

  /**
   * Medico createMany
   */
  export type MedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico createManyAndReturn
   */
  export type MedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico update
   */
  export type MedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico.
     */
    data: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
    /**
     * Choose, which Medico to update.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico updateMany
   */
  export type MedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
  }

  /**
   * Medico updateManyAndReturn
   */
  export type MedicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico upsert
   */
  export type MedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: MedicoWhereUniqueInput
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
  }

  /**
   * Medico delete
   */
  export type MedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter which Medico to delete.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico deleteMany
   */
  export type MedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to delete.
     */
    limit?: number
  }

  /**
   * Medico.citas
   */
  export type Medico$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Medico.historiasClinicas
   */
  export type Medico$historiasClinicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    cursor?: HistoriaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Medico without action
   */
  export type MedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    documentoIdentidad: string | null
    nombre: string | null
    apellido: string | null
    fechaNacimiento: Date | null
    telefono: string | null
    direccion: string | null
    correo: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    documentoIdentidad: string | null
    nombre: string | null
    apellido: string | null
    fechaNacimiento: Date | null
    telefono: string | null
    direccion: string | null
    correo: string | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    documentoIdentidad: number
    nombre: number
    apellido: number
    fechaNacimiento: number
    telefono: number
    direccion: number
    correo: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    documentoIdentidad?: true
    nombre?: true
    apellido?: true
    fechaNacimiento?: true
    telefono?: true
    direccion?: true
    correo?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    documentoIdentidad?: true
    nombre?: true
    apellido?: true
    fechaNacimiento?: true
    telefono?: true
    direccion?: true
    correo?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    documentoIdentidad?: true
    nombre?: true
    apellido?: true
    fechaNacimiento?: true
    telefono?: true
    direccion?: true
    correo?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date
    telefono: string
    direccion: string
    correo: string
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    direccion?: boolean
    correo?: boolean
    citas?: boolean | Paciente$citasArgs<ExtArgs>
    historiasClinicas?: boolean | Paciente$historiasClinicasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    direccion?: boolean
    correo?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    direccion?: boolean
    correo?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    documentoIdentidad?: boolean
    nombre?: boolean
    apellido?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    direccion?: boolean
    correo?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentoIdentidad" | "nombre" | "apellido" | "fechaNacimiento" | "telefono" | "direccion" | "correo", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | Paciente$citasArgs<ExtArgs>
    historiasClinicas?: boolean | Paciente$historiasClinicasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      citas: Prisma.$CitaPayload<ExtArgs>[]
      historiasClinicas: Prisma.$HistoriaClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentoIdentidad: string
      nombre: string
      apellido: string
      fechaNacimiento: Date
      telefono: string
      direccion: string
      correo: string
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    citas<T extends Paciente$citasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historiasClinicas<T extends Paciente$historiasClinicasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$historiasClinicasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly documentoIdentidad: FieldRef<"Paciente", 'String'>
    readonly nombre: FieldRef<"Paciente", 'String'>
    readonly apellido: FieldRef<"Paciente", 'String'>
    readonly fechaNacimiento: FieldRef<"Paciente", 'DateTime'>
    readonly telefono: FieldRef<"Paciente", 'String'>
    readonly direccion: FieldRef<"Paciente", 'String'>
    readonly correo: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.citas
   */
  export type Paciente$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Paciente.historiasClinicas
   */
  export type Paciente$historiasClinicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    cursor?: HistoriaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Cita
   */

  export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaMinAggregateOutputType = {
    id: number | null
    fechaHora: Date | null
    estado: string | null
    motivo: string | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaMaxAggregateOutputType = {
    id: number | null
    fechaHora: Date | null
    estado: string | null
    motivo: string | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaCountAggregateOutputType = {
    id: number
    fechaHora: number
    estado: number
    motivo: number
    pacienteId: number
    medicoId: number
    _all: number
  }


  export type CitaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaSumAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaMinAggregateInputType = {
    id?: true
    fechaHora?: true
    estado?: true
    motivo?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaMaxAggregateInputType = {
    id?: true
    fechaHora?: true
    estado?: true
    motivo?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaCountAggregateInputType = {
    id?: true
    fechaHora?: true
    estado?: true
    motivo?: true
    pacienteId?: true
    medicoId?: true
    _all?: true
  }

  export type CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType
  }

  export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
        [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCita[P]>
      : GetScalarType<T[P], AggregateCita[P]>
  }




  export type CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithAggregationInput | CitaOrderByWithAggregationInput[]
    by: CitaScalarFieldEnum[] | CitaScalarFieldEnum
    having?: CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitaCountAggregateInputType | true
    _avg?: CitaAvgAggregateInputType
    _sum?: CitaSumAggregateInputType
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    id: number
    fechaHora: Date
    estado: string
    motivo: string
    pacienteId: number
    medicoId: number
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitaGroupByOutputType[P]>
            : GetScalarType<T[P], CitaGroupByOutputType[P]>
        }
      >
    >


  export type CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    estado?: boolean
    motivo?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    historiaClinica?: boolean | Cita$historiaClinicaArgs<ExtArgs>
    factura?: boolean | Cita$facturaArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    estado?: boolean
    motivo?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    estado?: boolean
    motivo?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectScalar = {
    id?: boolean
    fechaHora?: boolean
    estado?: boolean
    motivo?: boolean
    pacienteId?: boolean
    medicoId?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaHora" | "estado" | "motivo" | "pacienteId" | "medicoId", ExtArgs["result"]["cita"]>
  export type CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    historiaClinica?: boolean | Cita$historiaClinicaArgs<ExtArgs>
    factura?: boolean | Cita$facturaArgs<ExtArgs>
  }
  export type CitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }
  export type CitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cita"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
      historiaClinica: Prisma.$HistoriaClinicaPayload<ExtArgs> | null
      factura: Prisma.$FacturaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaHora: Date
      estado: string
      motivo: string
      pacienteId: number
      medicoId: number
    }, ExtArgs["result"]["cita"]>
    composites: {}
  }

  type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = $Result.GetResult<Prisma.$CitaPayload, S>

  type CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitaCountAggregateInputType | true
    }

  export interface CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cita'], meta: { name: 'Cita' } }
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citaWithIdOnly = await prisma.cita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitaFindManyArgs>(args?: SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     * 
     */
    create<T extends CitaCreateArgs>(args: SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitaCreateManyArgs>(args?: SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citas and returns the data saved in the database.
     * @param {CitaCreateManyAndReturnArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citas and only return the `id`
     * const citaWithIdOnly = await prisma.cita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitaCreateManyAndReturnArgs>(args?: SelectSubset<T, CitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     * 
     */
    delete<T extends CitaDeleteArgs>(args: SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitaUpdateArgs>(args: SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitaUpdateManyArgs>(args: SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas and returns the data updated in the database.
     * @param {CitaUpdateManyAndReturnArgs} args - Arguments to update many Citas.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citas and only return the `id`
     * const citaWithIdOnly = await prisma.cita.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CitaUpdateManyAndReturnArgs>(args: SelectSubset<T, CitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(
      args?: Subset<T, CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitaAggregateArgs>(args: Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>

    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
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
      T extends CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitaGroupByArgs['orderBy'] }
        : { orderBy?: CitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cita model
   */
  readonly fields: CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historiaClinica<T extends Cita$historiaClinicaArgs<ExtArgs> = {}>(args?: Subset<T, Cita$historiaClinicaArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    factura<T extends Cita$facturaArgs<ExtArgs> = {}>(args?: Subset<T, Cita$facturaArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cita model
   */
  interface CitaFieldRefs {
    readonly id: FieldRef<"Cita", 'Int'>
    readonly fechaHora: FieldRef<"Cita", 'DateTime'>
    readonly estado: FieldRef<"Cita", 'String'>
    readonly motivo: FieldRef<"Cita", 'String'>
    readonly pacienteId: FieldRef<"Cita", 'Int'>
    readonly medicoId: FieldRef<"Cita", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cita findUnique
   */
  export type CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findUniqueOrThrow
   */
  export type CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findFirst
   */
  export type CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findFirstOrThrow
   */
  export type CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findMany
   */
  export type CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita create
   */
  export type CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cita.
     */
    data: XOR<CitaCreateInput, CitaUncheckedCreateInput>
  }

  /**
   * Cita createMany
   */
  export type CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cita createManyAndReturn
   */
  export type CitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cita update
   */
  export type CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cita.
     */
    data: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
    /**
     * Choose, which Cita to update.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita updateMany
   */
  export type CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Cita updateManyAndReturn
   */
  export type CitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cita upsert
   */
  export type CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: CitaWhereUniqueInput
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: XOR<CitaCreateInput, CitaUncheckedCreateInput>
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
  }

  /**
   * Cita delete
   */
  export type CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter which Cita to delete.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita deleteMany
   */
  export type CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Cita.historiaClinica
   */
  export type Cita$historiaClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    where?: HistoriaClinicaWhereInput
  }

  /**
   * Cita.factura
   */
  export type Cita$facturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
  }

  /**
   * Cita without action
   */
  export type CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
  }


  /**
   * Model HistoriaClinica
   */

  export type AggregateHistoriaClinica = {
    _count: HistoriaClinicaCountAggregateOutputType | null
    _avg: HistoriaClinicaAvgAggregateOutputType | null
    _sum: HistoriaClinicaSumAggregateOutputType | null
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  export type HistoriaClinicaAvgAggregateOutputType = {
    id: number | null
    citaId: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type HistoriaClinicaSumAggregateOutputType = {
    id: number | null
    citaId: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type HistoriaClinicaMinAggregateOutputType = {
    id: number | null
    fechaCreacion: Date | null
    diagnostico: string | null
    tratamiento: string | null
    observaciones: string | null
    citaId: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type HistoriaClinicaMaxAggregateOutputType = {
    id: number | null
    fechaCreacion: Date | null
    diagnostico: string | null
    tratamiento: string | null
    observaciones: string | null
    citaId: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type HistoriaClinicaCountAggregateOutputType = {
    id: number
    fechaCreacion: number
    diagnostico: number
    tratamiento: number
    observaciones: number
    citaId: number
    pacienteId: number
    medicoId: number
    _all: number
  }


  export type HistoriaClinicaAvgAggregateInputType = {
    id?: true
    citaId?: true
    pacienteId?: true
    medicoId?: true
  }

  export type HistoriaClinicaSumAggregateInputType = {
    id?: true
    citaId?: true
    pacienteId?: true
    medicoId?: true
  }

  export type HistoriaClinicaMinAggregateInputType = {
    id?: true
    fechaCreacion?: true
    diagnostico?: true
    tratamiento?: true
    observaciones?: true
    citaId?: true
    pacienteId?: true
    medicoId?: true
  }

  export type HistoriaClinicaMaxAggregateInputType = {
    id?: true
    fechaCreacion?: true
    diagnostico?: true
    tratamiento?: true
    observaciones?: true
    citaId?: true
    pacienteId?: true
    medicoId?: true
  }

  export type HistoriaClinicaCountAggregateInputType = {
    id?: true
    fechaCreacion?: true
    diagnostico?: true
    tratamiento?: true
    observaciones?: true
    citaId?: true
    pacienteId?: true
    medicoId?: true
    _all?: true
  }

  export type HistoriaClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriaClinica to aggregate.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriaClinicas
    **/
    _count?: true | HistoriaClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoriaClinicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoriaClinicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriaClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type GetHistoriaClinicaAggregateType<T extends HistoriaClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriaClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriaClinica[P]>
      : GetScalarType<T[P], AggregateHistoriaClinica[P]>
  }




  export type HistoriaClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithAggregationInput | HistoriaClinicaOrderByWithAggregationInput[]
    by: HistoriaClinicaScalarFieldEnum[] | HistoriaClinicaScalarFieldEnum
    having?: HistoriaClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriaClinicaCountAggregateInputType | true
    _avg?: HistoriaClinicaAvgAggregateInputType
    _sum?: HistoriaClinicaSumAggregateInputType
    _min?: HistoriaClinicaMinAggregateInputType
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type HistoriaClinicaGroupByOutputType = {
    id: number
    fechaCreacion: Date
    diagnostico: string
    tratamiento: string
    observaciones: string | null
    citaId: number
    pacienteId: number
    medicoId: number
    _count: HistoriaClinicaCountAggregateOutputType | null
    _avg: HistoriaClinicaAvgAggregateOutputType | null
    _sum: HistoriaClinicaSumAggregateOutputType | null
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  type GetHistoriaClinicaGroupByPayload<T extends HistoriaClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriaClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriaClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriaClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriaClinicaGroupByOutputType[P]>
        }
      >
    >


  export type HistoriaClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaCreacion?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    observaciones?: boolean
    citaId?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    cita?: boolean | CitaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>

  export type HistoriaClinicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaCreacion?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    observaciones?: boolean
    citaId?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    cita?: boolean | CitaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>

  export type HistoriaClinicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaCreacion?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    observaciones?: boolean
    citaId?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    cita?: boolean | CitaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>

  export type HistoriaClinicaSelectScalar = {
    id?: boolean
    fechaCreacion?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    observaciones?: boolean
    citaId?: boolean
    pacienteId?: boolean
    medicoId?: boolean
  }

  export type HistoriaClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaCreacion" | "diagnostico" | "tratamiento" | "observaciones" | "citaId" | "pacienteId" | "medicoId", ExtArgs["result"]["historiaClinica"]>
  export type HistoriaClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cita?: boolean | CitaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }
  export type HistoriaClinicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cita?: boolean | CitaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }
  export type HistoriaClinicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cita?: boolean | CitaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $HistoriaClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoriaClinica"
    objects: {
      cita: Prisma.$CitaPayload<ExtArgs>
      paciente: Prisma.$PacientePayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaCreacion: Date
      diagnostico: string
      tratamiento: string
      observaciones: string | null
      citaId: number
      pacienteId: number
      medicoId: number
    }, ExtArgs["result"]["historiaClinica"]>
    composites: {}
  }

  type HistoriaClinicaGetPayload<S extends boolean | null | undefined | HistoriaClinicaDefaultArgs> = $Result.GetResult<Prisma.$HistoriaClinicaPayload, S>

  type HistoriaClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriaClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriaClinicaCountAggregateInputType | true
    }

  export interface HistoriaClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriaClinica'], meta: { name: 'HistoriaClinica' } }
    /**
     * Find zero or one HistoriaClinica that matches the filter.
     * @param {HistoriaClinicaFindUniqueArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriaClinicaFindUniqueArgs>(args: SelectSubset<T, HistoriaClinicaFindUniqueArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoriaClinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriaClinicaFindUniqueOrThrowArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriaClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriaClinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindFirstArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriaClinicaFindFirstArgs>(args?: SelectSubset<T, HistoriaClinicaFindFirstArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriaClinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindFirstOrThrowArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriaClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoriaClinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriaClinicas
     * const historiaClinicas = await prisma.historiaClinica.findMany()
     * 
     * // Get first 10 HistoriaClinicas
     * const historiaClinicas = await prisma.historiaClinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiaClinicaWithIdOnly = await prisma.historiaClinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoriaClinicaFindManyArgs>(args?: SelectSubset<T, HistoriaClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoriaClinica.
     * @param {HistoriaClinicaCreateArgs} args - Arguments to create a HistoriaClinica.
     * @example
     * // Create one HistoriaClinica
     * const HistoriaClinica = await prisma.historiaClinica.create({
     *   data: {
     *     // ... data to create a HistoriaClinica
     *   }
     * })
     * 
     */
    create<T extends HistoriaClinicaCreateArgs>(args: SelectSubset<T, HistoriaClinicaCreateArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoriaClinicas.
     * @param {HistoriaClinicaCreateManyArgs} args - Arguments to create many HistoriaClinicas.
     * @example
     * // Create many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriaClinicaCreateManyArgs>(args?: SelectSubset<T, HistoriaClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoriaClinicas and returns the data saved in the database.
     * @param {HistoriaClinicaCreateManyAndReturnArgs} args - Arguments to create many HistoriaClinicas.
     * @example
     * // Create many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoriaClinicas and only return the `id`
     * const historiaClinicaWithIdOnly = await prisma.historiaClinica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoriaClinicaCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoriaClinicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoriaClinica.
     * @param {HistoriaClinicaDeleteArgs} args - Arguments to delete one HistoriaClinica.
     * @example
     * // Delete one HistoriaClinica
     * const HistoriaClinica = await prisma.historiaClinica.delete({
     *   where: {
     *     // ... filter to delete one HistoriaClinica
     *   }
     * })
     * 
     */
    delete<T extends HistoriaClinicaDeleteArgs>(args: SelectSubset<T, HistoriaClinicaDeleteArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoriaClinica.
     * @param {HistoriaClinicaUpdateArgs} args - Arguments to update one HistoriaClinica.
     * @example
     * // Update one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriaClinicaUpdateArgs>(args: SelectSubset<T, HistoriaClinicaUpdateArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoriaClinicas.
     * @param {HistoriaClinicaDeleteManyArgs} args - Arguments to filter HistoriaClinicas to delete.
     * @example
     * // Delete a few HistoriaClinicas
     * const { count } = await prisma.historiaClinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriaClinicaDeleteManyArgs>(args?: SelectSubset<T, HistoriaClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriaClinicaUpdateManyArgs>(args: SelectSubset<T, HistoriaClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriaClinicas and returns the data updated in the database.
     * @param {HistoriaClinicaUpdateManyAndReturnArgs} args - Arguments to update many HistoriaClinicas.
     * @example
     * // Update many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoriaClinicas and only return the `id`
     * const historiaClinicaWithIdOnly = await prisma.historiaClinica.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoriaClinicaUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoriaClinica.
     * @param {HistoriaClinicaUpsertArgs} args - Arguments to update or create a HistoriaClinica.
     * @example
     * // Update or create a HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.upsert({
     *   create: {
     *     // ... data to create a HistoriaClinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriaClinica we want to update
     *   }
     * })
     */
    upsert<T extends HistoriaClinicaUpsertArgs>(args: SelectSubset<T, HistoriaClinicaUpsertArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaCountArgs} args - Arguments to filter HistoriaClinicas to count.
     * @example
     * // Count the number of HistoriaClinicas
     * const count = await prisma.historiaClinica.count({
     *   where: {
     *     // ... the filter for the HistoriaClinicas we want to count
     *   }
     * })
    **/
    count<T extends HistoriaClinicaCountArgs>(
      args?: Subset<T, HistoriaClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriaClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoriaClinicaAggregateArgs>(args: Subset<T, HistoriaClinicaAggregateArgs>): Prisma.PrismaPromise<GetHistoriaClinicaAggregateType<T>>

    /**
     * Group by HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaGroupByArgs} args - Group by arguments.
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
      T extends HistoriaClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriaClinicaGroupByArgs['orderBy'] }
        : { orderBy?: HistoriaClinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoriaClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriaClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriaClinica model
   */
  readonly fields: HistoriaClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriaClinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriaClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cita<T extends CitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitaDefaultArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoriaClinica model
   */
  interface HistoriaClinicaFieldRefs {
    readonly id: FieldRef<"HistoriaClinica", 'Int'>
    readonly fechaCreacion: FieldRef<"HistoriaClinica", 'DateTime'>
    readonly diagnostico: FieldRef<"HistoriaClinica", 'String'>
    readonly tratamiento: FieldRef<"HistoriaClinica", 'String'>
    readonly observaciones: FieldRef<"HistoriaClinica", 'String'>
    readonly citaId: FieldRef<"HistoriaClinica", 'Int'>
    readonly pacienteId: FieldRef<"HistoriaClinica", 'Int'>
    readonly medicoId: FieldRef<"HistoriaClinica", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HistoriaClinica findUnique
   */
  export type HistoriaClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica findUniqueOrThrow
   */
  export type HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica findFirst
   */
  export type HistoriaClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica findFirstOrThrow
   */
  export type HistoriaClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica findMany
   */
  export type HistoriaClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinicas to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica create
   */
  export type HistoriaClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriaClinica.
     */
    data: XOR<HistoriaClinicaCreateInput, HistoriaClinicaUncheckedCreateInput>
  }

  /**
   * HistoriaClinica createMany
   */
  export type HistoriaClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriaClinicas.
     */
    data: HistoriaClinicaCreateManyInput | HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoriaClinica createManyAndReturn
   */
  export type HistoriaClinicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * The data used to create many HistoriaClinicas.
     */
    data: HistoriaClinicaCreateManyInput | HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriaClinica update
   */
  export type HistoriaClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriaClinica.
     */
    data: XOR<HistoriaClinicaUpdateInput, HistoriaClinicaUncheckedUpdateInput>
    /**
     * Choose, which HistoriaClinica to update.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica updateMany
   */
  export type HistoriaClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriaClinicas.
     */
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which HistoriaClinicas to update
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to update.
     */
    limit?: number
  }

  /**
   * HistoriaClinica updateManyAndReturn
   */
  export type HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * The data used to update HistoriaClinicas.
     */
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which HistoriaClinicas to update
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriaClinica upsert
   */
  export type HistoriaClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriaClinica to update in case it exists.
     */
    where: HistoriaClinicaWhereUniqueInput
    /**
     * In case the HistoriaClinica found by the `where` argument doesn't exist, create a new HistoriaClinica with this data.
     */
    create: XOR<HistoriaClinicaCreateInput, HistoriaClinicaUncheckedCreateInput>
    /**
     * In case the HistoriaClinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriaClinicaUpdateInput, HistoriaClinicaUncheckedUpdateInput>
  }

  /**
   * HistoriaClinica delete
   */
  export type HistoriaClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter which HistoriaClinica to delete.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica deleteMany
   */
  export type HistoriaClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriaClinicas to delete
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to delete.
     */
    limit?: number
  }

  /**
   * HistoriaClinica without action
   */
  export type HistoriaClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    id: number | null
    valorTotal: Decimal | null
    citaId: number | null
  }

  export type FacturaSumAggregateOutputType = {
    id: number | null
    valorTotal: Decimal | null
    citaId: number | null
  }

  export type FacturaMinAggregateOutputType = {
    id: number | null
    fechaEmision: Date | null
    valorTotal: Decimal | null
    estado: string | null
    citaId: number | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: number | null
    fechaEmision: Date | null
    valorTotal: Decimal | null
    estado: string | null
    citaId: number | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    fechaEmision: number
    valorTotal: number
    estado: number
    citaId: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    id?: true
    valorTotal?: true
    citaId?: true
  }

  export type FacturaSumAggregateInputType = {
    id?: true
    valorTotal?: true
    citaId?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    fechaEmision?: true
    valorTotal?: true
    estado?: true
    citaId?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    fechaEmision?: true
    valorTotal?: true
    estado?: true
    citaId?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    fechaEmision?: true
    valorTotal?: true
    estado?: true
    citaId?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id: number
    fechaEmision: Date
    valorTotal: Decimal
    estado: string
    citaId: number
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaEmision?: boolean
    valorTotal?: boolean
    estado?: boolean
    citaId?: boolean
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaEmision?: boolean
    valorTotal?: boolean
    estado?: boolean
    citaId?: boolean
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaEmision?: boolean
    valorTotal?: boolean
    estado?: boolean
    citaId?: boolean
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id?: boolean
    fechaEmision?: boolean
    valorTotal?: boolean
    estado?: boolean
    citaId?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaEmision" | "valorTotal" | "estado" | "citaId", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      cita: Prisma.$CitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaEmision: Date
      valorTotal: Prisma.Decimal
      estado: string
      citaId: number
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaWithIdOnly = await prisma.factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
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
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cita<T extends CitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitaDefaultArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id: FieldRef<"Factura", 'Int'>
    readonly fechaEmision: FieldRef<"Factura", 'DateTime'>
    readonly valorTotal: FieldRef<"Factura", 'Decimal'>
    readonly estado: FieldRef<"Factura", 'String'>
    readonly citaId: FieldRef<"Factura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
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
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
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
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
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
    email: string
    password: string
    role: string
    createdAt: Date
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
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["usuarios"]>

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password: FieldRef<"usuarios", 'String'>
    readonly role: FieldRef<"usuarios", 'String'>
    readonly createdAt: FieldRef<"usuarios", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
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
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
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
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
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


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    id: 'id',
    documentoIdentidad: 'documentoIdentidad',
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    telefono: 'telefono',
    estado: 'estado',
    especialidadId: 'especialidadId'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    documentoIdentidad: 'documentoIdentidad',
    nombre: 'nombre',
    apellido: 'apellido',
    fechaNacimiento: 'fechaNacimiento',
    telefono: 'telefono',
    direccion: 'direccion',
    correo: 'correo'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    id: 'id',
    fechaHora: 'fechaHora',
    estado: 'estado',
    motivo: 'motivo',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const HistoriaClinicaScalarFieldEnum: {
    id: 'id',
    fechaCreacion: 'fechaCreacion',
    diagnostico: 'diagnostico',
    tratamiento: 'tratamiento',
    observaciones: 'observaciones',
    citaId: 'citaId',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId'
  };

  export type HistoriaClinicaScalarFieldEnum = (typeof HistoriaClinicaScalarFieldEnum)[keyof typeof HistoriaClinicaScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    fechaEmision: 'fechaEmision',
    valorTotal: 'valorTotal',
    estado: 'estado',
    citaId: 'citaId'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: IntFilter<"Especialidad"> | number
    nombre?: StringFilter<"Especialidad"> | string
    descripcion?: StringNullableFilter<"Especialidad"> | string | null
    medicos?: MedicoListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    medicos?: MedicoOrderByRelationAggregateInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    descripcion?: StringNullableFilter<"Especialidad"> | string | null
    medicos?: MedicoListRelationFilter
  }, "id" | "nombre">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _avg?: EspecialidadAvgOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
    _sum?: EspecialidadSumOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especialidad"> | number
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Especialidad"> | string | null
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    id?: IntFilter<"Medico"> | number
    documentoIdentidad?: StringFilter<"Medico"> | string
    nombre?: StringFilter<"Medico"> | string
    apellido?: StringFilter<"Medico"> | string
    correo?: StringFilter<"Medico"> | string
    telefono?: StringFilter<"Medico"> | string
    estado?: BoolFilter<"Medico"> | boolean
    especialidadId?: IntFilter<"Medico"> | number
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    citas?: CitaListRelationFilter
    historiasClinicas?: HistoriaClinicaListRelationFilter
  }

  export type MedicoOrderByWithRelationInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    especialidadId?: SortOrder
    especialidad?: EspecialidadOrderByWithRelationInput
    citas?: CitaOrderByRelationAggregateInput
    historiasClinicas?: HistoriaClinicaOrderByRelationAggregateInput
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentoIdentidad?: string
    correo?: string
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    nombre?: StringFilter<"Medico"> | string
    apellido?: StringFilter<"Medico"> | string
    telefono?: StringFilter<"Medico"> | string
    estado?: BoolFilter<"Medico"> | boolean
    especialidadId?: IntFilter<"Medico"> | number
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    citas?: CitaListRelationFilter
    historiasClinicas?: HistoriaClinicaListRelationFilter
  }, "id" | "documentoIdentidad" | "correo">

  export type MedicoOrderByWithAggregationInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    especialidadId?: SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _avg?: MedicoAvgOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
    _sum?: MedicoSumOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medico"> | number
    documentoIdentidad?: StringWithAggregatesFilter<"Medico"> | string
    nombre?: StringWithAggregatesFilter<"Medico"> | string
    apellido?: StringWithAggregatesFilter<"Medico"> | string
    correo?: StringWithAggregatesFilter<"Medico"> | string
    telefono?: StringWithAggregatesFilter<"Medico"> | string
    estado?: BoolWithAggregatesFilter<"Medico"> | boolean
    especialidadId?: IntWithAggregatesFilter<"Medico"> | number
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    documentoIdentidad?: StringFilter<"Paciente"> | string
    nombre?: StringFilter<"Paciente"> | string
    apellido?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    telefono?: StringFilter<"Paciente"> | string
    direccion?: StringFilter<"Paciente"> | string
    correo?: StringFilter<"Paciente"> | string
    citas?: CitaListRelationFilter
    historiasClinicas?: HistoriaClinicaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    correo?: SortOrder
    citas?: CitaOrderByRelationAggregateInput
    historiasClinicas?: HistoriaClinicaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentoIdentidad?: string
    correo?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nombre?: StringFilter<"Paciente"> | string
    apellido?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    telefono?: StringFilter<"Paciente"> | string
    direccion?: StringFilter<"Paciente"> | string
    citas?: CitaListRelationFilter
    historiasClinicas?: HistoriaClinicaListRelationFilter
  }, "id" | "documentoIdentidad" | "correo">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    correo?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    documentoIdentidad?: StringWithAggregatesFilter<"Paciente"> | string
    nombre?: StringWithAggregatesFilter<"Paciente"> | string
    apellido?: StringWithAggregatesFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    telefono?: StringWithAggregatesFilter<"Paciente"> | string
    direccion?: StringWithAggregatesFilter<"Paciente"> | string
    correo?: StringWithAggregatesFilter<"Paciente"> | string
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    id?: IntFilter<"Cita"> | number
    fechaHora?: DateTimeFilter<"Cita"> | Date | string
    estado?: StringFilter<"Cita"> | string
    motivo?: StringFilter<"Cita"> | string
    pacienteId?: IntFilter<"Cita"> | number
    medicoId?: IntFilter<"Cita"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    historiaClinica?: XOR<HistoriaClinicaNullableScalarRelationFilter, HistoriaClinicaWhereInput> | null
    factura?: XOR<FacturaNullableScalarRelationFilter, FacturaWhereInput> | null
  }

  export type CitaOrderByWithRelationInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    historiaClinica?: HistoriaClinicaOrderByWithRelationInput
    factura?: FacturaOrderByWithRelationInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    fechaHora?: DateTimeFilter<"Cita"> | Date | string
    estado?: StringFilter<"Cita"> | string
    motivo?: StringFilter<"Cita"> | string
    pacienteId?: IntFilter<"Cita"> | number
    medicoId?: IntFilter<"Cita"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    historiaClinica?: XOR<HistoriaClinicaNullableScalarRelationFilter, HistoriaClinicaWhereInput> | null
    factura?: XOR<FacturaNullableScalarRelationFilter, FacturaWhereInput> | null
  }, "id">

  export type CitaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _avg?: CitaAvgOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
    _sum?: CitaSumOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cita"> | number
    fechaHora?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    estado?: StringWithAggregatesFilter<"Cita"> | string
    motivo?: StringWithAggregatesFilter<"Cita"> | string
    pacienteId?: IntWithAggregatesFilter<"Cita"> | number
    medicoId?: IntWithAggregatesFilter<"Cita"> | number
  }

  export type HistoriaClinicaWhereInput = {
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    id?: IntFilter<"HistoriaClinica"> | number
    fechaCreacion?: DateTimeFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringFilter<"HistoriaClinica"> | string
    tratamiento?: StringFilter<"HistoriaClinica"> | string
    observaciones?: StringNullableFilter<"HistoriaClinica"> | string | null
    citaId?: IntFilter<"HistoriaClinica"> | number
    pacienteId?: IntFilter<"HistoriaClinica"> | number
    medicoId?: IntFilter<"HistoriaClinica"> | number
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type HistoriaClinicaOrderByWithRelationInput = {
    id?: SortOrder
    fechaCreacion?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    cita?: CitaOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
  }

  export type HistoriaClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    citaId?: number
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    fechaCreacion?: DateTimeFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringFilter<"HistoriaClinica"> | string
    tratamiento?: StringFilter<"HistoriaClinica"> | string
    observaciones?: StringNullableFilter<"HistoriaClinica"> | string | null
    pacienteId?: IntFilter<"HistoriaClinica"> | number
    medicoId?: IntFilter<"HistoriaClinica"> | number
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "id" | "citaId">

  export type HistoriaClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaCreacion?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    _count?: HistoriaClinicaCountOrderByAggregateInput
    _avg?: HistoriaClinicaAvgOrderByAggregateInput
    _max?: HistoriaClinicaMaxOrderByAggregateInput
    _min?: HistoriaClinicaMinOrderByAggregateInput
    _sum?: HistoriaClinicaSumOrderByAggregateInput
  }

  export type HistoriaClinicaScalarWhereWithAggregatesInput = {
    AND?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    OR?: HistoriaClinicaScalarWhereWithAggregatesInput[]
    NOT?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    fechaCreacion?: DateTimeWithAggregatesFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    tratamiento?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    observaciones?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    citaId?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    pacienteId?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    medicoId?: IntWithAggregatesFilter<"HistoriaClinica"> | number
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id?: IntFilter<"Factura"> | number
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    valorTotal?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Factura"> | string
    citaId?: IntFilter<"Factura"> | number
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }

  export type FacturaOrderByWithRelationInput = {
    id?: SortOrder
    fechaEmision?: SortOrder
    valorTotal?: SortOrder
    estado?: SortOrder
    citaId?: SortOrder
    cita?: CitaOrderByWithRelationInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    citaId?: number
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    valorTotal?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Factura"> | string
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }, "id" | "citaId">

  export type FacturaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaEmision?: SortOrder
    valorTotal?: SortOrder
    estado?: SortOrder
    citaId?: SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Factura"> | number
    fechaEmision?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    valorTotal?: DecimalWithAggregatesFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    estado?: StringWithAggregatesFilter<"Factura"> | string
    citaId?: IntWithAggregatesFilter<"Factura"> | number
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    email?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    role?: StringFilter<"usuarios"> | string
    createdAt?: DateTimeFilter<"usuarios"> | Date | string
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    password?: StringFilter<"usuarios"> | string
    role?: StringFilter<"usuarios"> | string
    createdAt?: DateTimeFilter<"usuarios"> | Date | string
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password?: StringWithAggregatesFilter<"usuarios"> | string
    role?: StringWithAggregatesFilter<"usuarios"> | string
    createdAt?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type EspecialidadCreateInput = {
    nombre: string
    descripcion?: string | null
    medicos?: MedicoCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    medicos?: MedicoUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    medicos?: MedicoUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    medicos?: MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type EspecialidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicoCreateInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historiasClinicas?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidadId: number
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historiasClinicas?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUpdateInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historiasClinicas?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historiasClinicas?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoCreateManyInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidadId: number
  }

  export type MedicoUpdateManyMutationInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
  }

  export type PacienteCreateInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historiasClinicas?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historiasClinicas?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historiasClinicas?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historiasClinicas?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
  }

  export type PacienteUpdateManyMutationInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type CitaCreateInput = {
    fechaHora: Date | string
    estado?: string
    motivo: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    medico: MedicoCreateNestedOneWithoutCitasInput
    historiaClinica?: HistoriaClinicaCreateNestedOneWithoutCitaInput
    factura?: FacturaCreateNestedOneWithoutCitaInput
  }

  export type CitaUncheckedCreateInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    pacienteId: number
    medicoId: number
    historiaClinica?: HistoriaClinicaUncheckedCreateNestedOneWithoutCitaInput
    factura?: FacturaUncheckedCreateNestedOneWithoutCitaInput
  }

  export type CitaUpdateInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
    historiaClinica?: HistoriaClinicaUpdateOneWithoutCitaNestedInput
    factura?: FacturaUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    historiaClinica?: HistoriaClinicaUncheckedUpdateOneWithoutCitaNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutCitaNestedInput
  }

  export type CitaCreateManyInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    pacienteId: number
    medicoId: number
  }

  export type CitaUpdateManyMutationInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type CitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaCreateInput = {
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    cita: CitaCreateNestedOneWithoutHistoriaClinicaInput
    paciente: PacienteCreateNestedOneWithoutHistoriasClinicasInput
    medico: MedicoCreateNestedOneWithoutHistoriasClinicasInput
  }

  export type HistoriaClinicaUncheckedCreateInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    citaId: number
    pacienteId: number
    medicoId: number
  }

  export type HistoriaClinicaUpdateInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    cita?: CitaUpdateOneRequiredWithoutHistoriaClinicaNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutHistoriasClinicasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutHistoriasClinicasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    citaId?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaCreateManyInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    citaId: number
    pacienteId: number
    medicoId: number
  }

  export type HistoriaClinicaUpdateManyMutationInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriaClinicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    citaId?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaCreateInput = {
    fechaEmision?: Date | string
    valorTotal: Decimal | DecimalJsLike | number | string
    estado?: string
    cita: CitaCreateNestedOneWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id?: number
    fechaEmision?: Date | string
    valorTotal: Decimal | DecimalJsLike | number | string
    estado?: string
    citaId: number
  }

  export type FacturaUpdateInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    cita?: CitaUpdateOneRequiredWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    citaId?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaCreateManyInput = {
    id?: number
    fechaEmision?: Date | string
    valorTotal: Decimal | DecimalJsLike | number | string
    estado?: string
    citaId: number
  }

  export type FacturaUpdateManyMutationInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    citaId?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosCreateInput = {
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type usuariosUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateManyInput = {
    id?: number
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MedicoListRelationFilter = {
    every?: MedicoWhereInput
    some?: MedicoWhereInput
    none?: MedicoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EspecialidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EspecialidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EspecialidadScalarRelationFilter = {
    is?: EspecialidadWhereInput
    isNot?: EspecialidadWhereInput
  }

  export type CitaListRelationFilter = {
    every?: CitaWhereInput
    some?: CitaWhereInput
    none?: CitaWhereInput
  }

  export type HistoriaClinicaListRelationFilter = {
    every?: HistoriaClinicaWhereInput
    some?: HistoriaClinicaWhereInput
    none?: HistoriaClinicaWhereInput
  }

  export type CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoriaClinicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicoCountOrderByAggregateInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoAvgOrderByAggregateInput = {
    id?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    estado?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoSumOrderByAggregateInput = {
    id?: SortOrder
    especialidadId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    correo?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    correo?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    documentoIdentidad?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    correo?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type MedicoScalarRelationFilter = {
    is?: MedicoWhereInput
    isNot?: MedicoWhereInput
  }

  export type HistoriaClinicaNullableScalarRelationFilter = {
    is?: HistoriaClinicaWhereInput | null
    isNot?: HistoriaClinicaWhereInput | null
  }

  export type FacturaNullableScalarRelationFilter = {
    is?: FacturaWhereInput | null
    isNot?: FacturaWhereInput | null
  }

  export type CitaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaScalarRelationFilter = {
    is?: CitaWhereInput
    isNot?: CitaWhereInput
  }

  export type HistoriaClinicaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaCreacion?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    observaciones?: SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type HistoriaClinicaAvgOrderByAggregateInput = {
    id?: SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type HistoriaClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaCreacion?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    observaciones?: SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type HistoriaClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaCreacion?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    observaciones?: SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type HistoriaClinicaSumOrderByAggregateInput = {
    id?: SortOrder
    citaId?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FacturaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaEmision?: SortOrder
    valorTotal?: SortOrder
    estado?: SortOrder
    citaId?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    citaId?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaEmision?: SortOrder
    valorTotal?: SortOrder
    estado?: SortOrder
    citaId?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaEmision?: SortOrder
    valorTotal?: SortOrder
    estado?: SortOrder
    citaId?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    citaId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicoCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type MedicoUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MedicoUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEspecialidadInput | MedicoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEspecialidadInput | MedicoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type EspecialidadCreateNestedOneWithoutMedicosInput = {
    create?: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutMedicosInput
    connect?: EspecialidadWhereUniqueInput
  }

  export type CitaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EspecialidadUpdateOneRequiredWithoutMedicosNestedInput = {
    create?: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutMedicosInput
    upsert?: EspecialidadUpsertWithoutMedicosInput
    connect?: EspecialidadWhereUniqueInput
    update?: XOR<XOR<EspecialidadUpdateToOneWithWhereWithoutMedicosInput, EspecialidadUpdateWithoutMedicosInput>, EspecialidadUncheckedUpdateWithoutMedicosInput>
  }

  export type CitaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutMedicoInput | CitaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutMedicoInput | CitaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutMedicoInput | CitaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput | HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutMedicoInput | CitaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutMedicoInput | CitaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutMedicoInput | CitaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput | HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type CitaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CitaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutPacienteInput | CitaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutPacienteInput | CitaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutPacienteInput | CitaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput | HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutPacienteInput | CitaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutPacienteInput | CitaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutPacienteInput | CitaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput | HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutCitasInput = {
    create?: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutCitasInput
    connect?: PacienteWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutCitasInput = {
    create?: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutCitasInput
    connect?: MedicoWhereUniqueInput
  }

  export type HistoriaClinicaCreateNestedOneWithoutCitaInput = {
    create?: XOR<HistoriaClinicaCreateWithoutCitaInput, HistoriaClinicaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutCitaInput
    connect?: HistoriaClinicaWhereUniqueInput
  }

  export type FacturaCreateNestedOneWithoutCitaInput = {
    create?: XOR<FacturaCreateWithoutCitaInput, FacturaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutCitaInput
    connect?: FacturaWhereUniqueInput
  }

  export type HistoriaClinicaUncheckedCreateNestedOneWithoutCitaInput = {
    create?: XOR<HistoriaClinicaCreateWithoutCitaInput, HistoriaClinicaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutCitaInput
    connect?: HistoriaClinicaWhereUniqueInput
  }

  export type FacturaUncheckedCreateNestedOneWithoutCitaInput = {
    create?: XOR<FacturaCreateWithoutCitaInput, FacturaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutCitaInput
    connect?: FacturaWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutCitasInput
    upsert?: PacienteUpsertWithoutCitasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutCitasInput, PacienteUpdateWithoutCitasInput>, PacienteUncheckedUpdateWithoutCitasInput>
  }

  export type MedicoUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutCitasInput
    upsert?: MedicoUpsertWithoutCitasInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutCitasInput, MedicoUpdateWithoutCitasInput>, MedicoUncheckedUpdateWithoutCitasInput>
  }

  export type HistoriaClinicaUpdateOneWithoutCitaNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutCitaInput, HistoriaClinicaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutCitaInput
    upsert?: HistoriaClinicaUpsertWithoutCitaInput
    disconnect?: HistoriaClinicaWhereInput | boolean
    delete?: HistoriaClinicaWhereInput | boolean
    connect?: HistoriaClinicaWhereUniqueInput
    update?: XOR<XOR<HistoriaClinicaUpdateToOneWithWhereWithoutCitaInput, HistoriaClinicaUpdateWithoutCitaInput>, HistoriaClinicaUncheckedUpdateWithoutCitaInput>
  }

  export type FacturaUpdateOneWithoutCitaNestedInput = {
    create?: XOR<FacturaCreateWithoutCitaInput, FacturaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutCitaInput
    upsert?: FacturaUpsertWithoutCitaInput
    disconnect?: FacturaWhereInput | boolean
    delete?: FacturaWhereInput | boolean
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutCitaInput, FacturaUpdateWithoutCitaInput>, FacturaUncheckedUpdateWithoutCitaInput>
  }

  export type HistoriaClinicaUncheckedUpdateOneWithoutCitaNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutCitaInput, HistoriaClinicaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutCitaInput
    upsert?: HistoriaClinicaUpsertWithoutCitaInput
    disconnect?: HistoriaClinicaWhereInput | boolean
    delete?: HistoriaClinicaWhereInput | boolean
    connect?: HistoriaClinicaWhereUniqueInput
    update?: XOR<XOR<HistoriaClinicaUpdateToOneWithWhereWithoutCitaInput, HistoriaClinicaUpdateWithoutCitaInput>, HistoriaClinicaUncheckedUpdateWithoutCitaInput>
  }

  export type FacturaUncheckedUpdateOneWithoutCitaNestedInput = {
    create?: XOR<FacturaCreateWithoutCitaInput, FacturaUncheckedCreateWithoutCitaInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutCitaInput
    upsert?: FacturaUpsertWithoutCitaInput
    disconnect?: FacturaWhereInput | boolean
    delete?: FacturaWhereInput | boolean
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutCitaInput, FacturaUpdateWithoutCitaInput>, FacturaUncheckedUpdateWithoutCitaInput>
  }

  export type CitaCreateNestedOneWithoutHistoriaClinicaInput = {
    create?: XOR<CitaCreateWithoutHistoriaClinicaInput, CitaUncheckedCreateWithoutHistoriaClinicaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutHistoriaClinicaInput
    connect?: CitaWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutHistoriasClinicasInput = {
    create?: XOR<PacienteCreateWithoutHistoriasClinicasInput, PacienteUncheckedCreateWithoutHistoriasClinicasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoriasClinicasInput
    connect?: PacienteWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutHistoriasClinicasInput = {
    create?: XOR<MedicoCreateWithoutHistoriasClinicasInput, MedicoUncheckedCreateWithoutHistoriasClinicasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutHistoriasClinicasInput
    connect?: MedicoWhereUniqueInput
  }

  export type CitaUpdateOneRequiredWithoutHistoriaClinicaNestedInput = {
    create?: XOR<CitaCreateWithoutHistoriaClinicaInput, CitaUncheckedCreateWithoutHistoriaClinicaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutHistoriaClinicaInput
    upsert?: CitaUpsertWithoutHistoriaClinicaInput
    connect?: CitaWhereUniqueInput
    update?: XOR<XOR<CitaUpdateToOneWithWhereWithoutHistoriaClinicaInput, CitaUpdateWithoutHistoriaClinicaInput>, CitaUncheckedUpdateWithoutHistoriaClinicaInput>
  }

  export type PacienteUpdateOneRequiredWithoutHistoriasClinicasNestedInput = {
    create?: XOR<PacienteCreateWithoutHistoriasClinicasInput, PacienteUncheckedCreateWithoutHistoriasClinicasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoriasClinicasInput
    upsert?: PacienteUpsertWithoutHistoriasClinicasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutHistoriasClinicasInput, PacienteUpdateWithoutHistoriasClinicasInput>, PacienteUncheckedUpdateWithoutHistoriasClinicasInput>
  }

  export type MedicoUpdateOneRequiredWithoutHistoriasClinicasNestedInput = {
    create?: XOR<MedicoCreateWithoutHistoriasClinicasInput, MedicoUncheckedCreateWithoutHistoriasClinicasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutHistoriasClinicasInput
    upsert?: MedicoUpsertWithoutHistoriasClinicasInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutHistoriasClinicasInput, MedicoUpdateWithoutHistoriasClinicasInput>, MedicoUncheckedUpdateWithoutHistoriasClinicasInput>
  }

  export type CitaCreateNestedOneWithoutFacturaInput = {
    create?: XOR<CitaCreateWithoutFacturaInput, CitaUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutFacturaInput
    connect?: CitaWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CitaUpdateOneRequiredWithoutFacturaNestedInput = {
    create?: XOR<CitaCreateWithoutFacturaInput, CitaUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutFacturaInput
    upsert?: CitaUpsertWithoutFacturaInput
    connect?: CitaWhereUniqueInput
    update?: XOR<XOR<CitaUpdateToOneWithWhereWithoutFacturaInput, CitaUpdateWithoutFacturaInput>, CitaUncheckedUpdateWithoutFacturaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type MedicoCreateWithoutEspecialidadInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historiasClinicas?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutEspecialidadInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historiasClinicas?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput>
  }

  export type MedicoCreateManyEspecialidadInputEnvelope = {
    data: MedicoCreateManyEspecialidadInput | MedicoCreateManyEspecialidadInput[]
    skipDuplicates?: boolean
  }

  export type MedicoUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    update: XOR<MedicoUpdateWithoutEspecialidadInput, MedicoUncheckedUpdateWithoutEspecialidadInput>
    create: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput>
  }

  export type MedicoUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    data: XOR<MedicoUpdateWithoutEspecialidadInput, MedicoUncheckedUpdateWithoutEspecialidadInput>
  }

  export type MedicoUpdateManyWithWhereWithoutEspecialidadInput = {
    where: MedicoScalarWhereInput
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyWithoutEspecialidadInput>
  }

  export type MedicoScalarWhereInput = {
    AND?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    OR?: MedicoScalarWhereInput[]
    NOT?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    id?: IntFilter<"Medico"> | number
    documentoIdentidad?: StringFilter<"Medico"> | string
    nombre?: StringFilter<"Medico"> | string
    apellido?: StringFilter<"Medico"> | string
    correo?: StringFilter<"Medico"> | string
    telefono?: StringFilter<"Medico"> | string
    estado?: BoolFilter<"Medico"> | boolean
    especialidadId?: IntFilter<"Medico"> | number
  }

  export type EspecialidadCreateWithoutMedicosInput = {
    nombre: string
    descripcion?: string | null
  }

  export type EspecialidadUncheckedCreateWithoutMedicosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type EspecialidadCreateOrConnectWithoutMedicosInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
  }

  export type CitaCreateWithoutMedicoInput = {
    fechaHora: Date | string
    estado?: string
    motivo: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    historiaClinica?: HistoriaClinicaCreateNestedOneWithoutCitaInput
    factura?: FacturaCreateNestedOneWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutMedicoInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    pacienteId: number
    historiaClinica?: HistoriaClinicaUncheckedCreateNestedOneWithoutCitaInput
    factura?: FacturaUncheckedCreateNestedOneWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput>
  }

  export type CitaCreateManyMedicoInputEnvelope = {
    data: CitaCreateManyMedicoInput | CitaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type HistoriaClinicaCreateWithoutMedicoInput = {
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    cita: CitaCreateNestedOneWithoutHistoriaClinicaInput
    paciente: PacienteCreateNestedOneWithoutHistoriasClinicasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutMedicoInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    citaId: number
    pacienteId: number
  }

  export type HistoriaClinicaCreateOrConnectWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type HistoriaClinicaCreateManyMedicoInputEnvelope = {
    data: HistoriaClinicaCreateManyMedicoInput | HistoriaClinicaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type EspecialidadUpsertWithoutMedicosInput = {
    update: XOR<EspecialidadUpdateWithoutMedicosInput, EspecialidadUncheckedUpdateWithoutMedicosInput>
    create: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
    where?: EspecialidadWhereInput
  }

  export type EspecialidadUpdateToOneWithWhereWithoutMedicosInput = {
    where?: EspecialidadWhereInput
    data: XOR<EspecialidadUpdateWithoutMedicosInput, EspecialidadUncheckedUpdateWithoutMedicosInput>
  }

  export type EspecialidadUpdateWithoutMedicosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspecialidadUncheckedUpdateWithoutMedicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutMedicoInput, CitaUncheckedUpdateWithoutMedicoInput>
    create: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutMedicoInput, CitaUncheckedUpdateWithoutMedicoInput>
  }

  export type CitaUpdateManyWithWhereWithoutMedicoInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type CitaScalarWhereInput = {
    AND?: CitaScalarWhereInput | CitaScalarWhereInput[]
    OR?: CitaScalarWhereInput[]
    NOT?: CitaScalarWhereInput | CitaScalarWhereInput[]
    id?: IntFilter<"Cita"> | number
    fechaHora?: DateTimeFilter<"Cita"> | Date | string
    estado?: StringFilter<"Cita"> | string
    motivo?: StringFilter<"Cita"> | string
    pacienteId?: IntFilter<"Cita"> | number
    medicoId?: IntFilter<"Cita"> | number
  }

  export type HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    update: XOR<HistoriaClinicaUpdateWithoutMedicoInput, HistoriaClinicaUncheckedUpdateWithoutMedicoInput>
    create: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    data: XOR<HistoriaClinicaUpdateWithoutMedicoInput, HistoriaClinicaUncheckedUpdateWithoutMedicoInput>
  }

  export type HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput = {
    where: HistoriaClinicaScalarWhereInput
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type HistoriaClinicaScalarWhereInput = {
    AND?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
    OR?: HistoriaClinicaScalarWhereInput[]
    NOT?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
    id?: IntFilter<"HistoriaClinica"> | number
    fechaCreacion?: DateTimeFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringFilter<"HistoriaClinica"> | string
    tratamiento?: StringFilter<"HistoriaClinica"> | string
    observaciones?: StringNullableFilter<"HistoriaClinica"> | string | null
    citaId?: IntFilter<"HistoriaClinica"> | number
    pacienteId?: IntFilter<"HistoriaClinica"> | number
    medicoId?: IntFilter<"HistoriaClinica"> | number
  }

  export type CitaCreateWithoutPacienteInput = {
    fechaHora: Date | string
    estado?: string
    motivo: string
    medico: MedicoCreateNestedOneWithoutCitasInput
    historiaClinica?: HistoriaClinicaCreateNestedOneWithoutCitaInput
    factura?: FacturaCreateNestedOneWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutPacienteInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    medicoId: number
    historiaClinica?: HistoriaClinicaUncheckedCreateNestedOneWithoutCitaInput
    factura?: FacturaUncheckedCreateNestedOneWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput>
  }

  export type CitaCreateManyPacienteInputEnvelope = {
    data: CitaCreateManyPacienteInput | CitaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type HistoriaClinicaCreateWithoutPacienteInput = {
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    cita: CitaCreateNestedOneWithoutHistoriaClinicaInput
    medico: MedicoCreateNestedOneWithoutHistoriasClinicasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutPacienteInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    citaId: number
    medicoId: number
  }

  export type HistoriaClinicaCreateOrConnectWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
  }

  export type HistoriaClinicaCreateManyPacienteInputEnvelope = {
    data: HistoriaClinicaCreateManyPacienteInput | HistoriaClinicaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type CitaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutPacienteInput, CitaUncheckedUpdateWithoutPacienteInput>
    create: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutPacienteInput, CitaUncheckedUpdateWithoutPacienteInput>
  }

  export type CitaUpdateManyWithWhereWithoutPacienteInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    update: XOR<HistoriaClinicaUpdateWithoutPacienteInput, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
    create: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
  }

  export type HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    data: XOR<HistoriaClinicaUpdateWithoutPacienteInput, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
  }

  export type HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput = {
    where: HistoriaClinicaScalarWhereInput
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type PacienteCreateWithoutCitasInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
    historiasClinicas?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutCitasInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
    historiasClinicas?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutCitasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
  }

  export type MedicoCreateWithoutCitasInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    historiasClinicas?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutCitasInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidadId: number
    historiasClinicas?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutCitasInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
  }

  export type HistoriaClinicaCreateWithoutCitaInput = {
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    paciente: PacienteCreateNestedOneWithoutHistoriasClinicasInput
    medico: MedicoCreateNestedOneWithoutHistoriasClinicasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutCitaInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    pacienteId: number
    medicoId: number
  }

  export type HistoriaClinicaCreateOrConnectWithoutCitaInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutCitaInput, HistoriaClinicaUncheckedCreateWithoutCitaInput>
  }

  export type FacturaCreateWithoutCitaInput = {
    fechaEmision?: Date | string
    valorTotal: Decimal | DecimalJsLike | number | string
    estado?: string
  }

  export type FacturaUncheckedCreateWithoutCitaInput = {
    id?: number
    fechaEmision?: Date | string
    valorTotal: Decimal | DecimalJsLike | number | string
    estado?: string
  }

  export type FacturaCreateOrConnectWithoutCitaInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutCitaInput, FacturaUncheckedCreateWithoutCitaInput>
  }

  export type PacienteUpsertWithoutCitasInput = {
    update: XOR<PacienteUpdateWithoutCitasInput, PacienteUncheckedUpdateWithoutCitasInput>
    create: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutCitasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutCitasInput, PacienteUncheckedUpdateWithoutCitasInput>
  }

  export type PacienteUpdateWithoutCitasInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historiasClinicas?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historiasClinicas?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type MedicoUpsertWithoutCitasInput = {
    update: XOR<MedicoUpdateWithoutCitasInput, MedicoUncheckedUpdateWithoutCitasInput>
    create: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutCitasInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutCitasInput, MedicoUncheckedUpdateWithoutCitasInput>
  }

  export type MedicoUpdateWithoutCitasInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    historiasClinicas?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    historiasClinicas?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type HistoriaClinicaUpsertWithoutCitaInput = {
    update: XOR<HistoriaClinicaUpdateWithoutCitaInput, HistoriaClinicaUncheckedUpdateWithoutCitaInput>
    create: XOR<HistoriaClinicaCreateWithoutCitaInput, HistoriaClinicaUncheckedCreateWithoutCitaInput>
    where?: HistoriaClinicaWhereInput
  }

  export type HistoriaClinicaUpdateToOneWithWhereWithoutCitaInput = {
    where?: HistoriaClinicaWhereInput
    data: XOR<HistoriaClinicaUpdateWithoutCitaInput, HistoriaClinicaUncheckedUpdateWithoutCitaInput>
  }

  export type HistoriaClinicaUpdateWithoutCitaInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    paciente?: PacienteUpdateOneRequiredWithoutHistoriasClinicasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutHistoriasClinicasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutCitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaUpsertWithoutCitaInput = {
    update: XOR<FacturaUpdateWithoutCitaInput, FacturaUncheckedUpdateWithoutCitaInput>
    create: XOR<FacturaCreateWithoutCitaInput, FacturaUncheckedCreateWithoutCitaInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutCitaInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutCitaInput, FacturaUncheckedUpdateWithoutCitaInput>
  }

  export type FacturaUpdateWithoutCitaInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaUncheckedUpdateWithoutCitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CitaCreateWithoutHistoriaClinicaInput = {
    fechaHora: Date | string
    estado?: string
    motivo: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    medico: MedicoCreateNestedOneWithoutCitasInput
    factura?: FacturaCreateNestedOneWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutHistoriaClinicaInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    pacienteId: number
    medicoId: number
    factura?: FacturaUncheckedCreateNestedOneWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutHistoriaClinicaInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutHistoriaClinicaInput, CitaUncheckedCreateWithoutHistoriaClinicaInput>
  }

  export type PacienteCreateWithoutHistoriasClinicasInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
    citas?: CitaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutHistoriasClinicasInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    fechaNacimiento: Date | string
    telefono: string
    direccion: string
    correo: string
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutHistoriasClinicasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutHistoriasClinicasInput, PacienteUncheckedCreateWithoutHistoriasClinicasInput>
  }

  export type MedicoCreateWithoutHistoriasClinicasInput = {
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutHistoriasClinicasInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
    especialidadId: number
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutHistoriasClinicasInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutHistoriasClinicasInput, MedicoUncheckedCreateWithoutHistoriasClinicasInput>
  }

  export type CitaUpsertWithoutHistoriaClinicaInput = {
    update: XOR<CitaUpdateWithoutHistoriaClinicaInput, CitaUncheckedUpdateWithoutHistoriaClinicaInput>
    create: XOR<CitaCreateWithoutHistoriaClinicaInput, CitaUncheckedCreateWithoutHistoriaClinicaInput>
    where?: CitaWhereInput
  }

  export type CitaUpdateToOneWithWhereWithoutHistoriaClinicaInput = {
    where?: CitaWhereInput
    data: XOR<CitaUpdateWithoutHistoriaClinicaInput, CitaUncheckedUpdateWithoutHistoriaClinicaInput>
  }

  export type CitaUpdateWithoutHistoriaClinicaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
    factura?: FacturaUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutHistoriaClinicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    factura?: FacturaUncheckedUpdateOneWithoutCitaNestedInput
  }

  export type PacienteUpsertWithoutHistoriasClinicasInput = {
    update: XOR<PacienteUpdateWithoutHistoriasClinicasInput, PacienteUncheckedUpdateWithoutHistoriasClinicasInput>
    create: XOR<PacienteCreateWithoutHistoriasClinicasInput, PacienteUncheckedCreateWithoutHistoriasClinicasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutHistoriasClinicasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutHistoriasClinicasInput, PacienteUncheckedUpdateWithoutHistoriasClinicasInput>
  }

  export type PacienteUpdateWithoutHistoriasClinicasInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    citas?: CitaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutHistoriasClinicasInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type MedicoUpsertWithoutHistoriasClinicasInput = {
    update: XOR<MedicoUpdateWithoutHistoriasClinicasInput, MedicoUncheckedUpdateWithoutHistoriasClinicasInput>
    create: XOR<MedicoCreateWithoutHistoriasClinicasInput, MedicoUncheckedCreateWithoutHistoriasClinicasInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutHistoriasClinicasInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutHistoriasClinicasInput, MedicoUncheckedUpdateWithoutHistoriasClinicasInput>
  }

  export type MedicoUpdateWithoutHistoriasClinicasInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutHistoriasClinicasInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type CitaCreateWithoutFacturaInput = {
    fechaHora: Date | string
    estado?: string
    motivo: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    medico: MedicoCreateNestedOneWithoutCitasInput
    historiaClinica?: HistoriaClinicaCreateNestedOneWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutFacturaInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    pacienteId: number
    medicoId: number
    historiaClinica?: HistoriaClinicaUncheckedCreateNestedOneWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutFacturaInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutFacturaInput, CitaUncheckedCreateWithoutFacturaInput>
  }

  export type CitaUpsertWithoutFacturaInput = {
    update: XOR<CitaUpdateWithoutFacturaInput, CitaUncheckedUpdateWithoutFacturaInput>
    create: XOR<CitaCreateWithoutFacturaInput, CitaUncheckedCreateWithoutFacturaInput>
    where?: CitaWhereInput
  }

  export type CitaUpdateToOneWithWhereWithoutFacturaInput = {
    where?: CitaWhereInput
    data: XOR<CitaUpdateWithoutFacturaInput, CitaUncheckedUpdateWithoutFacturaInput>
  }

  export type CitaUpdateWithoutFacturaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
    historiaClinica?: HistoriaClinicaUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    historiaClinica?: HistoriaClinicaUncheckedUpdateOneWithoutCitaNestedInput
  }

  export type MedicoCreateManyEspecialidadInput = {
    id?: number
    documentoIdentidad: string
    nombre: string
    apellido: string
    correo: string
    telefono: string
    estado?: boolean
  }

  export type MedicoUpdateWithoutEspecialidadInput = {
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historiasClinicas?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historiasClinicas?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CitaCreateManyMedicoInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    pacienteId: number
  }

  export type HistoriaClinicaCreateManyMedicoInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    citaId: number
    pacienteId: number
  }

  export type CitaUpdateWithoutMedicoInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    historiaClinica?: HistoriaClinicaUpdateOneWithoutCitaNestedInput
    factura?: FacturaUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    historiaClinica?: HistoriaClinicaUncheckedUpdateOneWithoutCitaNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaUpdateWithoutMedicoInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    cita?: CitaUpdateOneRequiredWithoutHistoriaClinicaNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutHistoriasClinicasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    citaId?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    citaId?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaCreateManyPacienteInput = {
    id?: number
    fechaHora: Date | string
    estado?: string
    motivo: string
    medicoId: number
  }

  export type HistoriaClinicaCreateManyPacienteInput = {
    id?: number
    fechaCreacion?: Date | string
    diagnostico: string
    tratamiento: string
    observaciones?: string | null
    citaId: number
    medicoId: number
  }

  export type CitaUpdateWithoutPacienteInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
    historiaClinica?: HistoriaClinicaUpdateOneWithoutCitaNestedInput
    factura?: FacturaUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    medicoId?: IntFieldUpdateOperationsInput | number
    historiaClinica?: HistoriaClinicaUncheckedUpdateOneWithoutCitaNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaUpdateWithoutPacienteInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    cita?: CitaUpdateOneRequiredWithoutHistoriaClinicaNestedInput
    medico?: MedicoUpdateOneRequiredWithoutHistoriasClinicasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    citaId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamiento?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    citaId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
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