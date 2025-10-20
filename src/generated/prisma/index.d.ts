
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model Cinema
 * 
 */
export type Cinema = $Result.DefaultSelection<Prisma.$CinemaPayload>
/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cinema`: Exposes CRUD operations for the **Cinema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cinemas
    * const cinemas = await prisma.cinema.findMany()
    * ```
    */
  get cinema(): Prisma.CinemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Movies: 'Movies',
    Cinema: 'Cinema',
    Sessions: 'Sessions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "movies" | "cinema" | "sessions"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MoviesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MoviesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      Cinema: {
        payload: Prisma.$CinemaPayload<ExtArgs>
        fields: Prisma.CinemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findFirst: {
            args: Prisma.CinemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findMany: {
            args: Prisma.CinemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          create: {
            args: Prisma.CinemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          createMany: {
            args: Prisma.CinemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CinemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          update: {
            args: Prisma.CinemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          deleteMany: {
            args: Prisma.CinemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CinemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinema>
          }
          groupBy: {
            args: Prisma.CinemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CinemaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CinemaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CinemaCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    movies?: MoviesOmit
    cinema?: CinemaOmit
    sessions?: SessionsOmit
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    duration: number | null
    ageRating: number | null
  }

  export type MoviesSumAggregateOutputType = {
    duration: number | null
    ageRating: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    posterURL: string | null
    trailerURL: string | null
    genre: string | null
    duration: number | null
    ageRating: number | null
    releaseDate: string | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    posterURL: string | null
    trailerURL: string | null
    genre: string | null
    duration: number | null
    ageRating: number | null
    releaseDate: string | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    synopsis: number
    posterURL: number
    trailerURL: number
    genre: number
    duration: number
    ageRating: number
    releaseDate: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    duration?: true
    ageRating?: true
  }

  export type MoviesSumAggregateInputType = {
    duration?: true
    ageRating?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    posterURL?: true
    trailerURL?: true
    genre?: true
    duration?: true
    ageRating?: true
    releaseDate?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    posterURL?: true
    trailerURL?: true
    genre?: true
    duration?: true
    ageRating?: true
    releaseDate?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    posterURL?: true
    trailerURL?: true
    genre?: true
    duration?: true
    ageRating?: true
    releaseDate?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: string
    title: string
    synopsis: string
    posterURL: string
    trailerURL: string
    genre: string
    duration: number
    ageRating: number
    releaseDate: string
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    posterURL?: boolean
    trailerURL?: boolean
    genre?: boolean
    duration?: boolean
    ageRating?: boolean
    releaseDate?: boolean
  }, ExtArgs["result"]["movies"]>



  export type MoviesSelectScalar = {
    id?: boolean
    title?: boolean
    synopsis?: boolean
    posterURL?: boolean
    trailerURL?: boolean
    genre?: boolean
    duration?: boolean
    ageRating?: boolean
    releaseDate?: boolean
  }

  export type MoviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "synopsis" | "posterURL" | "trailerURL" | "genre" | "duration" | "ageRating" | "releaseDate", ExtArgs["result"]["movies"]>

  export type $MoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      synopsis: string
      posterURL: string
      trailerURL: string
      genre: string
      duration: number
      ageRating: number
      releaseDate: string
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoviesFindUniqueArgs>(args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs>(args: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoviesFindFirstArgs>(args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs>(args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoviesFindManyArgs>(args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends MoviesCreateArgs>(args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoviesCreateManyArgs>(args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends MoviesDeleteArgs>(args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoviesUpdateArgs>(args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoviesDeleteManyArgs>(args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoviesUpdateManyArgs>(args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends MoviesUpsertArgs>(args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * @param {MoviesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movies = await prisma.movies.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MoviesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Movies.
     * @param {MoviesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movies = await prisma.movies.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MoviesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
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
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Movies model
   */
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'String'>
    readonly title: FieldRef<"Movies", 'String'>
    readonly synopsis: FieldRef<"Movies", 'String'>
    readonly posterURL: FieldRef<"Movies", 'String'>
    readonly trailerURL: FieldRef<"Movies", 'String'>
    readonly genre: FieldRef<"Movies", 'String'>
    readonly duration: FieldRef<"Movies", 'Int'>
    readonly ageRating: FieldRef<"Movies", 'Int'>
    readonly releaseDate: FieldRef<"Movies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }

  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
  }

  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }

  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movies findRaw
   */
  export type MoviesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Movies aggregateRaw
   */
  export type MoviesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
  }


  /**
   * Model Cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  export type CinemaMinAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    address: string | null
    isActive: boolean | null
  }

  export type CinemaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    address: string | null
    isActive: boolean | null
  }

  export type CinemaCountAggregateOutputType = {
    id: number
    name: number
    city: number
    address: number
    isActive: number
    _all: number
  }


  export type CinemaMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    isActive?: true
  }

  export type CinemaMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    isActive?: true
  }

  export type CinemaCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    isActive?: true
    _all?: true
  }

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinema to aggregate.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cinemas
    **/
    _count?: true | CinemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaMaxAggregateInputType
  }

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
        [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>
  }




  export type CinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithAggregationInput | CinemaOrderByWithAggregationInput[]
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum
    having?: CinemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaCountAggregateInputType | true
    _min?: CinemaMinAggregateInputType
    _max?: CinemaMaxAggregateInputType
  }

  export type CinemaGroupByOutputType = {
    id: string
    name: string
    city: string
    address: string
    isActive: boolean
    _count: CinemaCountAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
        }
      >
    >


  export type CinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["cinema"]>



  export type CinemaSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    isActive?: boolean
  }

  export type CinemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "address" | "isActive", ExtArgs["result"]["cinema"]>

  export type $CinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cinema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city: string
      address: string
      isActive: boolean
    }, ExtArgs["result"]["cinema"]>
    composites: {}
  }

  type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = $Result.GetResult<Prisma.$CinemaPayload, S>

  type CinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaCountAggregateInputType | true
    }

  export interface CinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cinema'], meta: { name: 'Cinema' } }
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {CinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaFindUniqueArgs>(args: SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cinema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaFindFirstArgs>(args?: SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     * 
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaFindManyArgs>(args?: SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cinema.
     * @param {CinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     * 
     */
    create<T extends CinemaCreateArgs>(args: SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cinemas.
     * @param {CinemaCreateManyArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaCreateManyArgs>(args?: SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cinema.
     * @param {CinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     * 
     */
    delete<T extends CinemaDeleteArgs>(args: SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cinema.
     * @param {CinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaUpdateArgs>(args: SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cinemas.
     * @param {CinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaDeleteManyArgs>(args?: SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaUpdateManyArgs>(args: SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cinema.
     * @param {CinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     */
    upsert<T extends CinemaUpsertArgs>(args: SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * @param {CinemaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cinema = await prisma.cinema.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CinemaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cinema.
     * @param {CinemaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cinema = await prisma.cinema.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CinemaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
    **/
    count<T extends CinemaCountArgs>(
      args?: Subset<T, CinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CinemaAggregateArgs>(args: Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaGroupByArgs} args - Group by arguments.
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
      T extends CinemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaGroupByArgs['orderBy'] }
        : { orderBy?: CinemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cinema model
   */
  readonly fields: CinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Cinema model
   */
  interface CinemaFieldRefs {
    readonly id: FieldRef<"Cinema", 'String'>
    readonly name: FieldRef<"Cinema", 'String'>
    readonly city: FieldRef<"Cinema", 'String'>
    readonly address: FieldRef<"Cinema", 'String'>
    readonly isActive: FieldRef<"Cinema", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cinema findUnique
   */
  export type CinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findUniqueOrThrow
   */
  export type CinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findFirst
   */
  export type CinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findFirstOrThrow
   */
  export type CinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findMany
   */
  export type CinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Filter, which Cinemas to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema create
   */
  export type CinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data needed to create a Cinema.
     */
    data: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
  }

  /**
   * Cinema createMany
   */
  export type CinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
  }

  /**
   * Cinema update
   */
  export type CinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data needed to update a Cinema.
     */
    data: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
    /**
     * Choose, which Cinema to update.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema updateMany
   */
  export type CinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema upsert
   */
  export type CinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The filter to search for the Cinema to update in case it exists.
     */
    where: CinemaWhereUniqueInput
    /**
     * In case the Cinema found by the `where` argument doesn't exist, create a new Cinema with this data.
     */
    create: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
    /**
     * In case the Cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
  }

  /**
   * Cinema delete
   */
  export type CinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Filter which Cinema to delete.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema deleteMany
   */
  export type CinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinemas to delete
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to delete.
     */
    limit?: number
  }

  /**
   * Cinema findRaw
   */
  export type CinemaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cinema aggregateRaw
   */
  export type CinemaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cinema without action
   */
  export type CinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type SessionsSelectScalar = {
    id?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["sessions"]>

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sessions = await prisma.sessions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sessions.
     * @param {SessionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sessions = await prisma.sessions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
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
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data?: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions findRaw
   */
  export type SessionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Sessions aggregateRaw
   */
  export type SessionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    synopsis: 'synopsis',
    posterURL: 'posterURL',
    trailerURL: 'trailerURL',
    genre: 'genre',
    duration: 'duration',
    ageRating: 'ageRating',
    releaseDate: 'releaseDate'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const CinemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    address: 'address',
    isActive: 'isActive'
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: StringFilter<"Movies"> | string
    title?: StringFilter<"Movies"> | string
    synopsis?: StringFilter<"Movies"> | string
    posterURL?: StringFilter<"Movies"> | string
    trailerURL?: StringFilter<"Movies"> | string
    genre?: StringFilter<"Movies"> | string
    duration?: IntFilter<"Movies"> | number
    ageRating?: IntFilter<"Movies"> | number
    releaseDate?: StringFilter<"Movies"> | string
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    posterURL?: SortOrder
    trailerURL?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    ageRating?: SortOrder
    releaseDate?: SortOrder
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    title?: StringFilter<"Movies"> | string
    synopsis?: StringFilter<"Movies"> | string
    posterURL?: StringFilter<"Movies"> | string
    trailerURL?: StringFilter<"Movies"> | string
    genre?: StringFilter<"Movies"> | string
    duration?: IntFilter<"Movies"> | number
    ageRating?: IntFilter<"Movies"> | number
    releaseDate?: StringFilter<"Movies"> | string
  }, "id">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    posterURL?: SortOrder
    trailerURL?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    ageRating?: SortOrder
    releaseDate?: SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movies"> | string
    title?: StringWithAggregatesFilter<"Movies"> | string
    synopsis?: StringWithAggregatesFilter<"Movies"> | string
    posterURL?: StringWithAggregatesFilter<"Movies"> | string
    trailerURL?: StringWithAggregatesFilter<"Movies"> | string
    genre?: StringWithAggregatesFilter<"Movies"> | string
    duration?: IntWithAggregatesFilter<"Movies"> | number
    ageRating?: IntWithAggregatesFilter<"Movies"> | number
    releaseDate?: StringWithAggregatesFilter<"Movies"> | string
  }

  export type CinemaWhereInput = {
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    id?: StringFilter<"Cinema"> | string
    name?: StringFilter<"Cinema"> | string
    city?: StringFilter<"Cinema"> | string
    address?: StringFilter<"Cinema"> | string
    isActive?: BoolFilter<"Cinema"> | boolean
  }

  export type CinemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }

  export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    name?: StringFilter<"Cinema"> | string
    city?: StringFilter<"Cinema"> | string
    address?: StringFilter<"Cinema"> | string
    isActive?: BoolFilter<"Cinema"> | boolean
  }, "id">

  export type CinemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    _count?: CinemaCountOrderByAggregateInput
    _max?: CinemaMaxOrderByAggregateInput
    _min?: CinemaMinOrderByAggregateInput
  }

  export type CinemaScalarWhereWithAggregatesInput = {
    AND?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    OR?: CinemaScalarWhereWithAggregatesInput[]
    NOT?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cinema"> | string
    name?: StringWithAggregatesFilter<"Cinema"> | string
    city?: StringWithAggregatesFilter<"Cinema"> | string
    address?: StringWithAggregatesFilter<"Cinema"> | string
    isActive?: BoolWithAggregatesFilter<"Cinema"> | boolean
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: StringFilter<"Sessions"> | string
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
  }, "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sessions"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesCreateInput = {
    id?: string
    title: string
    synopsis: string
    posterURL: string
    trailerURL: string
    genre: string
    duration: number
    ageRating: number
    releaseDate: string
  }

  export type MoviesUncheckedCreateInput = {
    id?: string
    title: string
    synopsis: string
    posterURL: string
    trailerURL: string
    genre: string
    duration: number
    ageRating: number
    releaseDate: string
  }

  export type MoviesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    ageRating?: IntFieldUpdateOperationsInput | number
    releaseDate?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    ageRating?: IntFieldUpdateOperationsInput | number
    releaseDate?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesCreateManyInput = {
    id?: string
    title: string
    synopsis: string
    posterURL: string
    trailerURL: string
    genre: string
    duration: number
    ageRating: number
    releaseDate: string
  }

  export type MoviesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    ageRating?: IntFieldUpdateOperationsInput | number
    releaseDate?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    ageRating?: IntFieldUpdateOperationsInput | number
    releaseDate?: StringFieldUpdateOperationsInput | string
  }

  export type CinemaCreateInput = {
    id?: string
    name: string
    city: string
    address: string
    isActive: boolean
  }

  export type CinemaUncheckedCreateInput = {
    id?: string
    name: string
    city: string
    address: string
    isActive: boolean
  }

  export type CinemaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CinemaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CinemaCreateManyInput = {
    id?: string
    name: string
    city: string
    address: string
    isActive: boolean
  }

  export type CinemaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CinemaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionsCreateInput = {
    id?: string
  }

  export type SessionsUncheckedCreateInput = {
    id?: string
  }

  export type SessionsUpdateInput = {

  }

  export type SessionsUncheckedUpdateInput = {

  }

  export type SessionsCreateManyInput = {
    id?: string
  }

  export type SessionsUpdateManyMutationInput = {

  }

  export type SessionsUncheckedUpdateManyInput = {

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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    posterURL?: SortOrder
    trailerURL?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    ageRating?: SortOrder
    releaseDate?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    duration?: SortOrder
    ageRating?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    posterURL?: SortOrder
    trailerURL?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    ageRating?: SortOrder
    releaseDate?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    posterURL?: SortOrder
    trailerURL?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    ageRating?: SortOrder
    releaseDate?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    duration?: SortOrder
    ageRating?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CinemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }

  export type CinemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }

  export type CinemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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