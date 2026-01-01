
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
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model DistressEvent
 * 
 */
export type DistressEvent = $Result.DefaultSelection<Prisma.$DistressEventPayload>
/**
 * Model Interaction
 * 
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>
/**
 * Model AiInsight
 * 
 */
export type AiInsight = $Result.DefaultSelection<Prisma.$AiInsightPayload>
/**
 * Model AutomationWorkflow
 * 
 */
export type AutomationWorkflow = $Result.DefaultSelection<Prisma.$AutomationWorkflowPayload>
/**
 * Model AutomationStep
 * 
 */
export type AutomationStep = $Result.DefaultSelection<Prisma.$AutomationStepPayload>
/**
 * Model AutomationExecution
 * 
 */
export type AutomationExecution = $Result.DefaultSelection<Prisma.$AutomationExecutionPayload>
/**
 * Model AutomationStepResult
 * 
 */
export type AutomationStepResult = $Result.DefaultSelection<Prisma.$AutomationStepResultPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  ACQUISITION_MANAGER: 'ACQUISITION_MANAGER',
  VIRTUAL_ASSISTANT: 'VIRTUAL_ASSISTANT',
  AUDITOR: 'AUDITOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const LeadStatus: {
  NEW: 'NEW',
  QUALIFIED: 'QUALIFIED',
  NURTURE: 'NURTURE',
  OFFER_MADE: 'OFFER_MADE',
  UNDER_CONTRACT: 'UNDER_CONTRACT',
  CLOSED_WON: 'CLOSED_WON',
  CLOSED_LOST: 'CLOSED_LOST'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const LeadSource: {
  DIRECT: 'DIRECT',
  ZILLOW: 'ZILLOW',
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  MANUAL: 'MANUAL',
  OTHER: 'OTHER'
};

export type LeadSource = (typeof LeadSource)[keyof typeof LeadSource]


export const InteractionChannel: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PHONE: 'PHONE',
  SOCIAL: 'SOCIAL'
};

export type InteractionChannel = (typeof InteractionChannel)[keyof typeof InteractionChannel]


export const InteractionDirection: {
  INBOUND: 'INBOUND',
  OUTBOUND: 'OUTBOUND'
};

export type InteractionDirection = (typeof InteractionDirection)[keyof typeof InteractionDirection]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type LeadSource = $Enums.LeadSource

export const LeadSource: typeof $Enums.LeadSource

export type InteractionChannel = $Enums.InteractionChannel

export const InteractionChannel: typeof $Enums.InteractionChannel

export type InteractionDirection = $Enums.InteractionDirection

export const InteractionDirection: typeof $Enums.InteractionDirection

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distressEvent`: Exposes CRUD operations for the **DistressEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistressEvents
    * const distressEvents = await prisma.distressEvent.findMany()
    * ```
    */
  get distressEvent(): Prisma.DistressEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interaction.findMany()
    * ```
    */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiInsight`: Exposes CRUD operations for the **AiInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiInsights
    * const aiInsights = await prisma.aiInsight.findMany()
    * ```
    */
  get aiInsight(): Prisma.AiInsightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automationWorkflow`: Exposes CRUD operations for the **AutomationWorkflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationWorkflows
    * const automationWorkflows = await prisma.automationWorkflow.findMany()
    * ```
    */
  get automationWorkflow(): Prisma.AutomationWorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automationStep`: Exposes CRUD operations for the **AutomationStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationSteps
    * const automationSteps = await prisma.automationStep.findMany()
    * ```
    */
  get automationStep(): Prisma.AutomationStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automationExecution`: Exposes CRUD operations for the **AutomationExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationExecutions
    * const automationExecutions = await prisma.automationExecution.findMany()
    * ```
    */
  get automationExecution(): Prisma.AutomationExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automationStepResult`: Exposes CRUD operations for the **AutomationStepResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationStepResults
    * const automationStepResults = await prisma.automationStepResult.findMany()
    * ```
    */
  get automationStepResult(): Prisma.AutomationStepResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Lead: 'Lead',
    Property: 'Property',
    DistressEvent: 'DistressEvent',
    Interaction: 'Interaction',
    AiInsight: 'AiInsight',
    AutomationWorkflow: 'AutomationWorkflow',
    AutomationStep: 'AutomationStep',
    AutomationExecution: 'AutomationExecution',
    AutomationStepResult: 'AutomationStepResult',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "lead" | "property" | "distressEvent" | "interaction" | "aiInsight" | "automationWorkflow" | "automationStep" | "automationExecution" | "automationStepResult" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      DistressEvent: {
        payload: Prisma.$DistressEventPayload<ExtArgs>
        fields: Prisma.DistressEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistressEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistressEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>
          }
          findFirst: {
            args: Prisma.DistressEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistressEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>
          }
          findMany: {
            args: Prisma.DistressEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>[]
          }
          create: {
            args: Prisma.DistressEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>
          }
          createMany: {
            args: Prisma.DistressEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistressEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>[]
          }
          delete: {
            args: Prisma.DistressEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>
          }
          update: {
            args: Prisma.DistressEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>
          }
          deleteMany: {
            args: Prisma.DistressEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistressEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistressEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>[]
          }
          upsert: {
            args: Prisma.DistressEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistressEventPayload>
          }
          aggregate: {
            args: Prisma.DistressEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistressEvent>
          }
          groupBy: {
            args: Prisma.DistressEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistressEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistressEventCountArgs<ExtArgs>
            result: $Utils.Optional<DistressEventCountAggregateOutputType> | number
          }
        }
      }
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>
        fields: Prisma.InteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction>
          }
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionCountAggregateOutputType> | number
          }
        }
      }
      AiInsight: {
        payload: Prisma.$AiInsightPayload<ExtArgs>
        fields: Prisma.AiInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          findFirst: {
            args: Prisma.AiInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          findMany: {
            args: Prisma.AiInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>[]
          }
          create: {
            args: Prisma.AiInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          createMany: {
            args: Prisma.AiInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>[]
          }
          delete: {
            args: Prisma.AiInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          update: {
            args: Prisma.AiInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          deleteMany: {
            args: Prisma.AiInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiInsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>[]
          }
          upsert: {
            args: Prisma.AiInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          aggregate: {
            args: Prisma.AiInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiInsight>
          }
          groupBy: {
            args: Prisma.AiInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiInsightCountArgs<ExtArgs>
            result: $Utils.Optional<AiInsightCountAggregateOutputType> | number
          }
        }
      }
      AutomationWorkflow: {
        payload: Prisma.$AutomationWorkflowPayload<ExtArgs>
        fields: Prisma.AutomationWorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationWorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationWorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>
          }
          findFirst: {
            args: Prisma.AutomationWorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationWorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>
          }
          findMany: {
            args: Prisma.AutomationWorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>[]
          }
          create: {
            args: Prisma.AutomationWorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>
          }
          createMany: {
            args: Prisma.AutomationWorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationWorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>[]
          }
          delete: {
            args: Prisma.AutomationWorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>
          }
          update: {
            args: Prisma.AutomationWorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>
          }
          deleteMany: {
            args: Prisma.AutomationWorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationWorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationWorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>[]
          }
          upsert: {
            args: Prisma.AutomationWorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationWorkflowPayload>
          }
          aggregate: {
            args: Prisma.AutomationWorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationWorkflow>
          }
          groupBy: {
            args: Prisma.AutomationWorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationWorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationWorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationWorkflowCountAggregateOutputType> | number
          }
        }
      }
      AutomationStep: {
        payload: Prisma.$AutomationStepPayload<ExtArgs>
        fields: Prisma.AutomationStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>
          }
          findFirst: {
            args: Prisma.AutomationStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>
          }
          findMany: {
            args: Prisma.AutomationStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>[]
          }
          create: {
            args: Prisma.AutomationStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>
          }
          createMany: {
            args: Prisma.AutomationStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>[]
          }
          delete: {
            args: Prisma.AutomationStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>
          }
          update: {
            args: Prisma.AutomationStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>
          }
          deleteMany: {
            args: Prisma.AutomationStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>[]
          }
          upsert: {
            args: Prisma.AutomationStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepPayload>
          }
          aggregate: {
            args: Prisma.AutomationStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationStep>
          }
          groupBy: {
            args: Prisma.AutomationStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationStepCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationStepCountAggregateOutputType> | number
          }
        }
      }
      AutomationExecution: {
        payload: Prisma.$AutomationExecutionPayload<ExtArgs>
        fields: Prisma.AutomationExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>
          }
          findFirst: {
            args: Prisma.AutomationExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>
          }
          findMany: {
            args: Prisma.AutomationExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>[]
          }
          create: {
            args: Prisma.AutomationExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>
          }
          createMany: {
            args: Prisma.AutomationExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>[]
          }
          delete: {
            args: Prisma.AutomationExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>
          }
          update: {
            args: Prisma.AutomationExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>
          }
          deleteMany: {
            args: Prisma.AutomationExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>[]
          }
          upsert: {
            args: Prisma.AutomationExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationExecutionPayload>
          }
          aggregate: {
            args: Prisma.AutomationExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationExecution>
          }
          groupBy: {
            args: Prisma.AutomationExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationExecutionCountAggregateOutputType> | number
          }
        }
      }
      AutomationStepResult: {
        payload: Prisma.$AutomationStepResultPayload<ExtArgs>
        fields: Prisma.AutomationStepResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationStepResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationStepResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>
          }
          findFirst: {
            args: Prisma.AutomationStepResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationStepResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>
          }
          findMany: {
            args: Prisma.AutomationStepResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>[]
          }
          create: {
            args: Prisma.AutomationStepResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>
          }
          createMany: {
            args: Prisma.AutomationStepResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationStepResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>[]
          }
          delete: {
            args: Prisma.AutomationStepResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>
          }
          update: {
            args: Prisma.AutomationStepResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>
          }
          deleteMany: {
            args: Prisma.AutomationStepResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationStepResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationStepResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>[]
          }
          upsert: {
            args: Prisma.AutomationStepResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationStepResultPayload>
          }
          aggregate: {
            args: Prisma.AutomationStepResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationStepResult>
          }
          groupBy: {
            args: Prisma.AutomationStepResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationStepResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationStepResultCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationStepResultCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
    user?: UserOmit
    lead?: LeadOmit
    property?: PropertyOmit
    distressEvent?: DistressEventOmit
    interaction?: InteractionOmit
    aiInsight?: AiInsightOmit
    automationWorkflow?: AutomationWorkflowOmit
    automationStep?: AutomationStepOmit
    automationExecution?: AutomationExecutionOmit
    automationStepResult?: AutomationStepResultOmit
    auditLog?: AuditLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leads: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | UserCountOutputTypeCountLeadsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    interactions: number
    aiInsights: number
    executions: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | LeadCountOutputTypeCountInteractionsArgs
    aiInsights?: boolean | LeadCountOutputTypeCountAiInsightsArgs
    executions?: boolean | LeadCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountAiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInsightWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationExecutionWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    distressEvents: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distressEvents?: boolean | PropertyCountOutputTypeCountDistressEventsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountDistressEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistressEventWhereInput
  }


  /**
   * Count Type AutomationWorkflowCountOutputType
   */

  export type AutomationWorkflowCountOutputType = {
    steps: number
    executions: number
  }

  export type AutomationWorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | AutomationWorkflowCountOutputTypeCountStepsArgs
    executions?: boolean | AutomationWorkflowCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * AutomationWorkflowCountOutputType without action
   */
  export type AutomationWorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflowCountOutputType
     */
    select?: AutomationWorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomationWorkflowCountOutputType without action
   */
  export type AutomationWorkflowCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationStepWhereInput
  }

  /**
   * AutomationWorkflowCountOutputType without action
   */
  export type AutomationWorkflowCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationExecutionWhereInput
  }


  /**
   * Count Type AutomationStepCountOutputType
   */

  export type AutomationStepCountOutputType = {
    results: number
  }

  export type AutomationStepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | AutomationStepCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * AutomationStepCountOutputType without action
   */
  export type AutomationStepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepCountOutputType
     */
    select?: AutomationStepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomationStepCountOutputType without action
   */
  export type AutomationStepCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationStepResultWhereInput
  }


  /**
   * Count Type AutomationExecutionCountOutputType
   */

  export type AutomationExecutionCountOutputType = {
    results: number
  }

  export type AutomationExecutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | AutomationExecutionCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * AutomationExecutionCountOutputType without action
   */
  export type AutomationExecutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecutionCountOutputType
     */
    select?: AutomationExecutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomationExecutionCountOutputType without action
   */
  export type AutomationExecutionCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationStepResultWhereInput
  }


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
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    status: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    status: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    status: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    status?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    status?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    status?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string
    name: string | null
    role: $Enums.UserRole
    status: string
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | User$leadsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "status" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | User$leadsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.UserRole
      status: string
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends User$leadsArgs<ExtArgs> = {}>(args?: Subset<T, User$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'String'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.leads
   */
  export type User$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    score: number | null
  }

  export type LeadSumAggregateOutputType = {
    score: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    source: $Enums.LeadSource | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    score: number | null
    status: $Enums.LeadStatus | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    source: $Enums.LeadSource | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    score: number | null
    status: $Enums.LeadStatus | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    source: number
    name: number
    email: number
    phone: number
    address: number
    city: number
    state: number
    zip: number
    score: number
    status: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    score?: true
  }

  export type LeadSumAggregateInputType = {
    score?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    source?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    score?: true
    status?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    source?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    score?: true
    status?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    source?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    score?: true
    status?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    source: $Enums.LeadSource
    name: string
    email: string | null
    phone: string | null
    address: string
    city: string
    state: string
    zip: string
    score: number
    status: $Enums.LeadStatus
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    score?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Lead$ownerArgs<ExtArgs>
    property?: boolean | Lead$propertyArgs<ExtArgs>
    interactions?: boolean | Lead$interactionsArgs<ExtArgs>
    aiInsights?: boolean | Lead$aiInsightsArgs<ExtArgs>
    executions?: boolean | Lead$executionsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    score?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Lead$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    score?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Lead$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    source?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    score?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "name" | "email" | "phone" | "address" | "city" | "state" | "zip" | "score" | "status" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Lead$ownerArgs<ExtArgs>
    property?: boolean | Lead$propertyArgs<ExtArgs>
    interactions?: boolean | Lead$interactionsArgs<ExtArgs>
    aiInsights?: boolean | Lead$aiInsightsArgs<ExtArgs>
    executions?: boolean | Lead$executionsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Lead$ownerArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Lead$ownerArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      property: Prisma.$PropertyPayload<ExtArgs> | null
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      aiInsights: Prisma.$AiInsightPayload<ExtArgs>[]
      executions: Prisma.$AutomationExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: $Enums.LeadSource
      name: string
      email: string | null
      phone: string | null
      address: string
      city: string
      state: string
      zip: string
      score: number
      status: $Enums.LeadStatus
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Lead$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Lead$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    property<T extends Lead$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Lead$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    interactions<T extends Lead$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    aiInsights<T extends Lead$aiInsightsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$aiInsightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    executions<T extends Lead$executionsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Lead model
   */ 
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'LeadSource'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly address: FieldRef<"Lead", 'String'>
    readonly city: FieldRef<"Lead", 'String'>
    readonly state: FieldRef<"Lead", 'String'>
    readonly zip: FieldRef<"Lead", 'String'>
    readonly score: FieldRef<"Lead", 'Int'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly ownerId: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.owner
   */
  export type Lead$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lead.property
   */
  export type Lead$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * Lead.interactions
   */
  export type Lead$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Lead.aiInsights
   */
  export type Lead$aiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    where?: AiInsightWhereInput
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    cursor?: AiInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * Lead.executions
   */
  export type Lead$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    where?: AutomationExecutionWhereInput
    orderBy?: AutomationExecutionOrderByWithRelationInput | AutomationExecutionOrderByWithRelationInput[]
    cursor?: AutomationExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationExecutionScalarFieldEnum | AutomationExecutionScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    bed: number | null
    bath: number | null
    sqft: number | null
    estimatedValue: number | null
    lastSalePrice: number | null
    taxAssessedValue: number | null
  }

  export type PropertySumAggregateOutputType = {
    lat: number | null
    lng: number | null
    bed: number | null
    bath: number | null
    sqft: number | null
    estimatedValue: number | null
    lastSalePrice: number | null
    taxAssessedValue: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    address: string | null
    lat: number | null
    lng: number | null
    bed: number | null
    bath: number | null
    sqft: number | null
    estimatedValue: number | null
    lastSaleDate: Date | null
    lastSalePrice: number | null
    taxAssessedValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    address: string | null
    lat: number | null
    lng: number | null
    bed: number | null
    bath: number | null
    sqft: number | null
    estimatedValue: number | null
    lastSaleDate: Date | null
    lastSalePrice: number | null
    taxAssessedValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    leadId: number
    address: number
    lat: number
    lng: number
    bed: number
    bath: number
    sqft: number
    estimatedValue: number
    lastSaleDate: number
    lastSalePrice: number
    taxAssessedValue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    lat?: true
    lng?: true
    bed?: true
    bath?: true
    sqft?: true
    estimatedValue?: true
    lastSalePrice?: true
    taxAssessedValue?: true
  }

  export type PropertySumAggregateInputType = {
    lat?: true
    lng?: true
    bed?: true
    bath?: true
    sqft?: true
    estimatedValue?: true
    lastSalePrice?: true
    taxAssessedValue?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    leadId?: true
    address?: true
    lat?: true
    lng?: true
    bed?: true
    bath?: true
    sqft?: true
    estimatedValue?: true
    lastSaleDate?: true
    lastSalePrice?: true
    taxAssessedValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    leadId?: true
    address?: true
    lat?: true
    lng?: true
    bed?: true
    bath?: true
    sqft?: true
    estimatedValue?: true
    lastSaleDate?: true
    lastSalePrice?: true
    taxAssessedValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    leadId?: true
    address?: true
    lat?: true
    lng?: true
    bed?: true
    bath?: true
    sqft?: true
    estimatedValue?: true
    lastSaleDate?: true
    lastSalePrice?: true
    taxAssessedValue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    leadId: string
    address: string | null
    lat: number | null
    lng: number | null
    bed: number | null
    bath: number | null
    sqft: number | null
    estimatedValue: number | null
    lastSaleDate: Date | null
    lastSalePrice: number | null
    taxAssessedValue: number | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    bed?: boolean
    bath?: boolean
    sqft?: boolean
    estimatedValue?: boolean
    lastSaleDate?: boolean
    lastSalePrice?: boolean
    taxAssessedValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    distressEvents?: boolean | Property$distressEventsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    bed?: boolean
    bath?: boolean
    sqft?: boolean
    estimatedValue?: boolean
    lastSaleDate?: boolean
    lastSalePrice?: boolean
    taxAssessedValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    bed?: boolean
    bath?: boolean
    sqft?: boolean
    estimatedValue?: boolean
    lastSaleDate?: boolean
    lastSalePrice?: boolean
    taxAssessedValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    leadId?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    bed?: boolean
    bath?: boolean
    sqft?: boolean
    estimatedValue?: boolean
    lastSaleDate?: boolean
    lastSalePrice?: boolean
    taxAssessedValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "address" | "lat" | "lng" | "bed" | "bath" | "sqft" | "estimatedValue" | "lastSaleDate" | "lastSalePrice" | "taxAssessedValue" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    distressEvents?: boolean | Property$distressEventsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      distressEvents: Prisma.$DistressEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      address: string | null
      lat: number | null
      lng: number | null
      bed: number | null
      bath: number | null
      sqft: number | null
      estimatedValue: number | null
      lastSaleDate: Date | null
      lastSalePrice: number | null
      taxAssessedValue: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    distressEvents<T extends Property$distressEventsArgs<ExtArgs> = {}>(args?: Subset<T, Property$distressEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly leadId: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly lat: FieldRef<"Property", 'Float'>
    readonly lng: FieldRef<"Property", 'Float'>
    readonly bed: FieldRef<"Property", 'Int'>
    readonly bath: FieldRef<"Property", 'Float'>
    readonly sqft: FieldRef<"Property", 'Int'>
    readonly estimatedValue: FieldRef<"Property", 'Float'>
    readonly lastSaleDate: FieldRef<"Property", 'DateTime'>
    readonly lastSalePrice: FieldRef<"Property", 'Float'>
    readonly taxAssessedValue: FieldRef<"Property", 'Float'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.distressEvents
   */
  export type Property$distressEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    where?: DistressEventWhereInput
    orderBy?: DistressEventOrderByWithRelationInput | DistressEventOrderByWithRelationInput[]
    cursor?: DistressEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistressEventScalarFieldEnum | DistressEventScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model DistressEvent
   */

  export type AggregateDistressEvent = {
    _count: DistressEventCountAggregateOutputType | null
    _min: DistressEventMinAggregateOutputType | null
    _max: DistressEventMaxAggregateOutputType | null
  }

  export type DistressEventMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    type: string | null
    source: string | null
    recordedDate: Date | null
    createdAt: Date | null
  }

  export type DistressEventMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    type: string | null
    source: string | null
    recordedDate: Date | null
    createdAt: Date | null
  }

  export type DistressEventCountAggregateOutputType = {
    id: number
    propertyId: number
    type: number
    source: number
    recordedDate: number
    details: number
    createdAt: number
    _all: number
  }


  export type DistressEventMinAggregateInputType = {
    id?: true
    propertyId?: true
    type?: true
    source?: true
    recordedDate?: true
    createdAt?: true
  }

  export type DistressEventMaxAggregateInputType = {
    id?: true
    propertyId?: true
    type?: true
    source?: true
    recordedDate?: true
    createdAt?: true
  }

  export type DistressEventCountAggregateInputType = {
    id?: true
    propertyId?: true
    type?: true
    source?: true
    recordedDate?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type DistressEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistressEvent to aggregate.
     */
    where?: DistressEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistressEvents to fetch.
     */
    orderBy?: DistressEventOrderByWithRelationInput | DistressEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistressEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistressEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistressEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistressEvents
    **/
    _count?: true | DistressEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistressEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistressEventMaxAggregateInputType
  }

  export type GetDistressEventAggregateType<T extends DistressEventAggregateArgs> = {
        [P in keyof T & keyof AggregateDistressEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistressEvent[P]>
      : GetScalarType<T[P], AggregateDistressEvent[P]>
  }




  export type DistressEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistressEventWhereInput
    orderBy?: DistressEventOrderByWithAggregationInput | DistressEventOrderByWithAggregationInput[]
    by: DistressEventScalarFieldEnum[] | DistressEventScalarFieldEnum
    having?: DistressEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistressEventCountAggregateInputType | true
    _min?: DistressEventMinAggregateInputType
    _max?: DistressEventMaxAggregateInputType
  }

  export type DistressEventGroupByOutputType = {
    id: string
    propertyId: string
    type: string
    source: string
    recordedDate: Date
    details: JsonValue | null
    createdAt: Date
    _count: DistressEventCountAggregateOutputType | null
    _min: DistressEventMinAggregateOutputType | null
    _max: DistressEventMaxAggregateOutputType | null
  }

  type GetDistressEventGroupByPayload<T extends DistressEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistressEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistressEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistressEventGroupByOutputType[P]>
            : GetScalarType<T[P], DistressEventGroupByOutputType[P]>
        }
      >
    >


  export type DistressEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    type?: boolean
    source?: boolean
    recordedDate?: boolean
    details?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distressEvent"]>

  export type DistressEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    type?: boolean
    source?: boolean
    recordedDate?: boolean
    details?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distressEvent"]>

  export type DistressEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    type?: boolean
    source?: boolean
    recordedDate?: boolean
    details?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distressEvent"]>

  export type DistressEventSelectScalar = {
    id?: boolean
    propertyId?: boolean
    type?: boolean
    source?: boolean
    recordedDate?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type DistressEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "type" | "source" | "recordedDate" | "details" | "createdAt", ExtArgs["result"]["distressEvent"]>
  export type DistressEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type DistressEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type DistressEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $DistressEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistressEvent"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      type: string
      source: string
      recordedDate: Date
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["distressEvent"]>
    composites: {}
  }

  type DistressEventGetPayload<S extends boolean | null | undefined | DistressEventDefaultArgs> = $Result.GetResult<Prisma.$DistressEventPayload, S>

  type DistressEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistressEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistressEventCountAggregateInputType | true
    }

  export interface DistressEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistressEvent'], meta: { name: 'DistressEvent' } }
    /**
     * Find zero or one DistressEvent that matches the filter.
     * @param {DistressEventFindUniqueArgs} args - Arguments to find a DistressEvent
     * @example
     * // Get one DistressEvent
     * const distressEvent = await prisma.distressEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistressEventFindUniqueArgs>(args: SelectSubset<T, DistressEventFindUniqueArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DistressEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistressEventFindUniqueOrThrowArgs} args - Arguments to find a DistressEvent
     * @example
     * // Get one DistressEvent
     * const distressEvent = await prisma.distressEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistressEventFindUniqueOrThrowArgs>(args: SelectSubset<T, DistressEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DistressEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventFindFirstArgs} args - Arguments to find a DistressEvent
     * @example
     * // Get one DistressEvent
     * const distressEvent = await prisma.distressEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistressEventFindFirstArgs>(args?: SelectSubset<T, DistressEventFindFirstArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DistressEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventFindFirstOrThrowArgs} args - Arguments to find a DistressEvent
     * @example
     * // Get one DistressEvent
     * const distressEvent = await prisma.distressEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistressEventFindFirstOrThrowArgs>(args?: SelectSubset<T, DistressEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DistressEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistressEvents
     * const distressEvents = await prisma.distressEvent.findMany()
     * 
     * // Get first 10 DistressEvents
     * const distressEvents = await prisma.distressEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distressEventWithIdOnly = await prisma.distressEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistressEventFindManyArgs>(args?: SelectSubset<T, DistressEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DistressEvent.
     * @param {DistressEventCreateArgs} args - Arguments to create a DistressEvent.
     * @example
     * // Create one DistressEvent
     * const DistressEvent = await prisma.distressEvent.create({
     *   data: {
     *     // ... data to create a DistressEvent
     *   }
     * })
     * 
     */
    create<T extends DistressEventCreateArgs>(args: SelectSubset<T, DistressEventCreateArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DistressEvents.
     * @param {DistressEventCreateManyArgs} args - Arguments to create many DistressEvents.
     * @example
     * // Create many DistressEvents
     * const distressEvent = await prisma.distressEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistressEventCreateManyArgs>(args?: SelectSubset<T, DistressEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistressEvents and returns the data saved in the database.
     * @param {DistressEventCreateManyAndReturnArgs} args - Arguments to create many DistressEvents.
     * @example
     * // Create many DistressEvents
     * const distressEvent = await prisma.distressEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistressEvents and only return the `id`
     * const distressEventWithIdOnly = await prisma.distressEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistressEventCreateManyAndReturnArgs>(args?: SelectSubset<T, DistressEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a DistressEvent.
     * @param {DistressEventDeleteArgs} args - Arguments to delete one DistressEvent.
     * @example
     * // Delete one DistressEvent
     * const DistressEvent = await prisma.distressEvent.delete({
     *   where: {
     *     // ... filter to delete one DistressEvent
     *   }
     * })
     * 
     */
    delete<T extends DistressEventDeleteArgs>(args: SelectSubset<T, DistressEventDeleteArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DistressEvent.
     * @param {DistressEventUpdateArgs} args - Arguments to update one DistressEvent.
     * @example
     * // Update one DistressEvent
     * const distressEvent = await prisma.distressEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistressEventUpdateArgs>(args: SelectSubset<T, DistressEventUpdateArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DistressEvents.
     * @param {DistressEventDeleteManyArgs} args - Arguments to filter DistressEvents to delete.
     * @example
     * // Delete a few DistressEvents
     * const { count } = await prisma.distressEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistressEventDeleteManyArgs>(args?: SelectSubset<T, DistressEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistressEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistressEvents
     * const distressEvent = await prisma.distressEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistressEventUpdateManyArgs>(args: SelectSubset<T, DistressEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistressEvents and returns the data updated in the database.
     * @param {DistressEventUpdateManyAndReturnArgs} args - Arguments to update many DistressEvents.
     * @example
     * // Update many DistressEvents
     * const distressEvent = await prisma.distressEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistressEvents and only return the `id`
     * const distressEventWithIdOnly = await prisma.distressEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistressEventUpdateManyAndReturnArgs>(args: SelectSubset<T, DistressEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one DistressEvent.
     * @param {DistressEventUpsertArgs} args - Arguments to update or create a DistressEvent.
     * @example
     * // Update or create a DistressEvent
     * const distressEvent = await prisma.distressEvent.upsert({
     *   create: {
     *     // ... data to create a DistressEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistressEvent we want to update
     *   }
     * })
     */
    upsert<T extends DistressEventUpsertArgs>(args: SelectSubset<T, DistressEventUpsertArgs<ExtArgs>>): Prisma__DistressEventClient<$Result.GetResult<Prisma.$DistressEventPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DistressEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventCountArgs} args - Arguments to filter DistressEvents to count.
     * @example
     * // Count the number of DistressEvents
     * const count = await prisma.distressEvent.count({
     *   where: {
     *     // ... the filter for the DistressEvents we want to count
     *   }
     * })
    **/
    count<T extends DistressEventCountArgs>(
      args?: Subset<T, DistressEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistressEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistressEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistressEventAggregateArgs>(args: Subset<T, DistressEventAggregateArgs>): Prisma.PrismaPromise<GetDistressEventAggregateType<T>>

    /**
     * Group by DistressEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistressEventGroupByArgs} args - Group by arguments.
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
      T extends DistressEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistressEventGroupByArgs['orderBy'] }
        : { orderBy?: DistressEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistressEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistressEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistressEvent model
   */
  readonly fields: DistressEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistressEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistressEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the DistressEvent model
   */ 
  interface DistressEventFieldRefs {
    readonly id: FieldRef<"DistressEvent", 'String'>
    readonly propertyId: FieldRef<"DistressEvent", 'String'>
    readonly type: FieldRef<"DistressEvent", 'String'>
    readonly source: FieldRef<"DistressEvent", 'String'>
    readonly recordedDate: FieldRef<"DistressEvent", 'DateTime'>
    readonly details: FieldRef<"DistressEvent", 'Json'>
    readonly createdAt: FieldRef<"DistressEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DistressEvent findUnique
   */
  export type DistressEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * Filter, which DistressEvent to fetch.
     */
    where: DistressEventWhereUniqueInput
  }

  /**
   * DistressEvent findUniqueOrThrow
   */
  export type DistressEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * Filter, which DistressEvent to fetch.
     */
    where: DistressEventWhereUniqueInput
  }

  /**
   * DistressEvent findFirst
   */
  export type DistressEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * Filter, which DistressEvent to fetch.
     */
    where?: DistressEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistressEvents to fetch.
     */
    orderBy?: DistressEventOrderByWithRelationInput | DistressEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistressEvents.
     */
    cursor?: DistressEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistressEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistressEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistressEvents.
     */
    distinct?: DistressEventScalarFieldEnum | DistressEventScalarFieldEnum[]
  }

  /**
   * DistressEvent findFirstOrThrow
   */
  export type DistressEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * Filter, which DistressEvent to fetch.
     */
    where?: DistressEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistressEvents to fetch.
     */
    orderBy?: DistressEventOrderByWithRelationInput | DistressEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistressEvents.
     */
    cursor?: DistressEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistressEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistressEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistressEvents.
     */
    distinct?: DistressEventScalarFieldEnum | DistressEventScalarFieldEnum[]
  }

  /**
   * DistressEvent findMany
   */
  export type DistressEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * Filter, which DistressEvents to fetch.
     */
    where?: DistressEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistressEvents to fetch.
     */
    orderBy?: DistressEventOrderByWithRelationInput | DistressEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistressEvents.
     */
    cursor?: DistressEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistressEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistressEvents.
     */
    skip?: number
    distinct?: DistressEventScalarFieldEnum | DistressEventScalarFieldEnum[]
  }

  /**
   * DistressEvent create
   */
  export type DistressEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * The data needed to create a DistressEvent.
     */
    data: XOR<DistressEventCreateInput, DistressEventUncheckedCreateInput>
  }

  /**
   * DistressEvent createMany
   */
  export type DistressEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistressEvents.
     */
    data: DistressEventCreateManyInput | DistressEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistressEvent createManyAndReturn
   */
  export type DistressEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * The data used to create many DistressEvents.
     */
    data: DistressEventCreateManyInput | DistressEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistressEvent update
   */
  export type DistressEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * The data needed to update a DistressEvent.
     */
    data: XOR<DistressEventUpdateInput, DistressEventUncheckedUpdateInput>
    /**
     * Choose, which DistressEvent to update.
     */
    where: DistressEventWhereUniqueInput
  }

  /**
   * DistressEvent updateMany
   */
  export type DistressEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistressEvents.
     */
    data: XOR<DistressEventUpdateManyMutationInput, DistressEventUncheckedUpdateManyInput>
    /**
     * Filter which DistressEvents to update
     */
    where?: DistressEventWhereInput
    /**
     * Limit how many DistressEvents to update.
     */
    limit?: number
  }

  /**
   * DistressEvent updateManyAndReturn
   */
  export type DistressEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * The data used to update DistressEvents.
     */
    data: XOR<DistressEventUpdateManyMutationInput, DistressEventUncheckedUpdateManyInput>
    /**
     * Filter which DistressEvents to update
     */
    where?: DistressEventWhereInput
    /**
     * Limit how many DistressEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistressEvent upsert
   */
  export type DistressEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * The filter to search for the DistressEvent to update in case it exists.
     */
    where: DistressEventWhereUniqueInput
    /**
     * In case the DistressEvent found by the `where` argument doesn't exist, create a new DistressEvent with this data.
     */
    create: XOR<DistressEventCreateInput, DistressEventUncheckedCreateInput>
    /**
     * In case the DistressEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistressEventUpdateInput, DistressEventUncheckedUpdateInput>
  }

  /**
   * DistressEvent delete
   */
  export type DistressEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
    /**
     * Filter which DistressEvent to delete.
     */
    where: DistressEventWhereUniqueInput
  }

  /**
   * DistressEvent deleteMany
   */
  export type DistressEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistressEvents to delete
     */
    where?: DistressEventWhereInput
    /**
     * Limit how many DistressEvents to delete.
     */
    limit?: number
  }

  /**
   * DistressEvent without action
   */
  export type DistressEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistressEvent
     */
    select?: DistressEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistressEvent
     */
    omit?: DistressEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistressEventInclude<ExtArgs> | null
  }


  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  export type InteractionMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    channel: $Enums.InteractionChannel | null
    direction: $Enums.InteractionDirection | null
    content: string | null
    status: string | null
    sentAt: Date | null
  }

  export type InteractionMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    channel: $Enums.InteractionChannel | null
    direction: $Enums.InteractionDirection | null
    content: string | null
    status: string | null
    sentAt: Date | null
  }

  export type InteractionCountAggregateOutputType = {
    id: number
    leadId: number
    channel: number
    direction: number
    content: number
    status: number
    sentAt: number
    metadata: number
    _all: number
  }


  export type InteractionMinAggregateInputType = {
    id?: true
    leadId?: true
    channel?: true
    direction?: true
    content?: true
    status?: true
    sentAt?: true
  }

  export type InteractionMaxAggregateInputType = {
    id?: true
    leadId?: true
    channel?: true
    direction?: true
    content?: true
    status?: true
    sentAt?: true
  }

  export type InteractionCountAggregateInputType = {
    id?: true
    leadId?: true
    channel?: true
    direction?: true
    content?: true
    status?: true
    sentAt?: true
    metadata?: true
    _all?: true
  }

  export type InteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interactions
    **/
    _count?: true | InteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionMaxAggregateInputType
  }

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction[P]>
      : GetScalarType<T[P], AggregateInteraction[P]>
  }




  export type InteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithAggregationInput | InteractionOrderByWithAggregationInput[]
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum
    having?: InteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionCountAggregateInputType | true
    _min?: InteractionMinAggregateInputType
    _max?: InteractionMaxAggregateInputType
  }

  export type InteractionGroupByOutputType = {
    id: string
    leadId: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status: string
    sentAt: Date
    metadata: JsonValue | null
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>
        }
      >
    >


  export type InteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    channel?: boolean
    direction?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    metadata?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    channel?: boolean
    direction?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    metadata?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    channel?: boolean
    direction?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    metadata?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectScalar = {
    id?: boolean
    leadId?: boolean
    channel?: boolean
    direction?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    metadata?: boolean
  }

  export type InteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "channel" | "direction" | "content" | "status" | "sentAt" | "metadata", ExtArgs["result"]["interaction"]>
  export type InteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $InteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interaction"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      channel: $Enums.InteractionChannel
      direction: $Enums.InteractionDirection
      content: string
      status: string
      sentAt: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["interaction"]>
    composites: {}
  }

  type InteractionGetPayload<S extends boolean | null | undefined | InteractionDefaultArgs> = $Result.GetResult<Prisma.$InteractionPayload, S>

  type InteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionCountAggregateInputType | true
    }

  export interface InteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interaction'], meta: { name: 'Interaction' } }
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractionFindManyArgs>(args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     * 
     */
    create<T extends InteractionCreateArgs>(args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractionCreateManyArgs>(args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, InteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     * 
     */
    delete<T extends InteractionDeleteArgs>(args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractionUpdateArgs>(args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractionDeleteManyArgs>(args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractionUpdateManyArgs>(args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, InteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionAggregateArgs>(args: Subset<T, InteractionAggregateArgs>): Prisma.PrismaPromise<GetInteractionAggregateType<T>>

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
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
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs['orderBy'] }
        : { orderBy?: InteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interaction model
   */
  readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Interaction model
   */ 
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", 'String'>
    readonly leadId: FieldRef<"Interaction", 'String'>
    readonly channel: FieldRef<"Interaction", 'InteractionChannel'>
    readonly direction: FieldRef<"Interaction", 'InteractionDirection'>
    readonly content: FieldRef<"Interaction", 'String'>
    readonly status: FieldRef<"Interaction", 'String'>
    readonly sentAt: FieldRef<"Interaction", 'DateTime'>
    readonly metadata: FieldRef<"Interaction", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
  }

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interaction createManyAndReturn
   */
  export type InteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
  }

  /**
   * Interaction updateManyAndReturn
   */
  export type InteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
  }

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number
  }

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
  }


  /**
   * Model AiInsight
   */

  export type AggregateAiInsight = {
    _count: AiInsightCountAggregateOutputType | null
    _min: AiInsightMinAggregateOutputType | null
    _max: AiInsightMaxAggregateOutputType | null
  }

  export type AiInsightMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    summary: string | null
    sentiment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiInsightMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    summary: string | null
    sentiment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiInsightCountAggregateOutputType = {
    id: number
    leadId: number
    summary: number
    sentiment: number
    keyTakeaways: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiInsightMinAggregateInputType = {
    id?: true
    leadId?: true
    summary?: true
    sentiment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiInsightMaxAggregateInputType = {
    id?: true
    leadId?: true
    summary?: true
    sentiment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiInsightCountAggregateInputType = {
    id?: true
    leadId?: true
    summary?: true
    sentiment?: true
    keyTakeaways?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInsight to aggregate.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiInsights
    **/
    _count?: true | AiInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiInsightMaxAggregateInputType
  }

  export type GetAiInsightAggregateType<T extends AiInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateAiInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiInsight[P]>
      : GetScalarType<T[P], AggregateAiInsight[P]>
  }




  export type AiInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInsightWhereInput
    orderBy?: AiInsightOrderByWithAggregationInput | AiInsightOrderByWithAggregationInput[]
    by: AiInsightScalarFieldEnum[] | AiInsightScalarFieldEnum
    having?: AiInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiInsightCountAggregateInputType | true
    _min?: AiInsightMinAggregateInputType
    _max?: AiInsightMaxAggregateInputType
  }

  export type AiInsightGroupByOutputType = {
    id: string
    leadId: string
    summary: string
    sentiment: string
    keyTakeaways: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: AiInsightCountAggregateOutputType | null
    _min: AiInsightMinAggregateOutputType | null
    _max: AiInsightMaxAggregateOutputType | null
  }

  type GetAiInsightGroupByPayload<T extends AiInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiInsightGroupByOutputType[P]>
            : GetScalarType<T[P], AiInsightGroupByOutputType[P]>
        }
      >
    >


  export type AiInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    summary?: boolean
    sentiment?: boolean
    keyTakeaways?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInsight"]>

  export type AiInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    summary?: boolean
    sentiment?: boolean
    keyTakeaways?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInsight"]>

  export type AiInsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    summary?: boolean
    sentiment?: boolean
    keyTakeaways?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInsight"]>

  export type AiInsightSelectScalar = {
    id?: boolean
    leadId?: boolean
    summary?: boolean
    sentiment?: boolean
    keyTakeaways?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "summary" | "sentiment" | "keyTakeaways" | "createdAt" | "updatedAt", ExtArgs["result"]["aiInsight"]>
  export type AiInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type AiInsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type AiInsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $AiInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiInsight"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      summary: string
      sentiment: string
      keyTakeaways: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiInsight"]>
    composites: {}
  }

  type AiInsightGetPayload<S extends boolean | null | undefined | AiInsightDefaultArgs> = $Result.GetResult<Prisma.$AiInsightPayload, S>

  type AiInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiInsightCountAggregateInputType | true
    }

  export interface AiInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiInsight'], meta: { name: 'AiInsight' } }
    /**
     * Find zero or one AiInsight that matches the filter.
     * @param {AiInsightFindUniqueArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiInsightFindUniqueArgs>(args: SelectSubset<T, AiInsightFindUniqueArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AiInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiInsightFindUniqueOrThrowArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, AiInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AiInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindFirstArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiInsightFindFirstArgs>(args?: SelectSubset<T, AiInsightFindFirstArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AiInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindFirstOrThrowArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, AiInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AiInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiInsights
     * const aiInsights = await prisma.aiInsight.findMany()
     * 
     * // Get first 10 AiInsights
     * const aiInsights = await prisma.aiInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiInsightWithIdOnly = await prisma.aiInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiInsightFindManyArgs>(args?: SelectSubset<T, AiInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AiInsight.
     * @param {AiInsightCreateArgs} args - Arguments to create a AiInsight.
     * @example
     * // Create one AiInsight
     * const AiInsight = await prisma.aiInsight.create({
     *   data: {
     *     // ... data to create a AiInsight
     *   }
     * })
     * 
     */
    create<T extends AiInsightCreateArgs>(args: SelectSubset<T, AiInsightCreateArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AiInsights.
     * @param {AiInsightCreateManyArgs} args - Arguments to create many AiInsights.
     * @example
     * // Create many AiInsights
     * const aiInsight = await prisma.aiInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiInsightCreateManyArgs>(args?: SelectSubset<T, AiInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiInsights and returns the data saved in the database.
     * @param {AiInsightCreateManyAndReturnArgs} args - Arguments to create many AiInsights.
     * @example
     * // Create many AiInsights
     * const aiInsight = await prisma.aiInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiInsights and only return the `id`
     * const aiInsightWithIdOnly = await prisma.aiInsight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, AiInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AiInsight.
     * @param {AiInsightDeleteArgs} args - Arguments to delete one AiInsight.
     * @example
     * // Delete one AiInsight
     * const AiInsight = await prisma.aiInsight.delete({
     *   where: {
     *     // ... filter to delete one AiInsight
     *   }
     * })
     * 
     */
    delete<T extends AiInsightDeleteArgs>(args: SelectSubset<T, AiInsightDeleteArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AiInsight.
     * @param {AiInsightUpdateArgs} args - Arguments to update one AiInsight.
     * @example
     * // Update one AiInsight
     * const aiInsight = await prisma.aiInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiInsightUpdateArgs>(args: SelectSubset<T, AiInsightUpdateArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AiInsights.
     * @param {AiInsightDeleteManyArgs} args - Arguments to filter AiInsights to delete.
     * @example
     * // Delete a few AiInsights
     * const { count } = await prisma.aiInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiInsightDeleteManyArgs>(args?: SelectSubset<T, AiInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiInsights
     * const aiInsight = await prisma.aiInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiInsightUpdateManyArgs>(args: SelectSubset<T, AiInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiInsights and returns the data updated in the database.
     * @param {AiInsightUpdateManyAndReturnArgs} args - Arguments to update many AiInsights.
     * @example
     * // Update many AiInsights
     * const aiInsight = await prisma.aiInsight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiInsights and only return the `id`
     * const aiInsightWithIdOnly = await prisma.aiInsight.updateManyAndReturn({
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
    updateManyAndReturn<T extends AiInsightUpdateManyAndReturnArgs>(args: SelectSubset<T, AiInsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AiInsight.
     * @param {AiInsightUpsertArgs} args - Arguments to update or create a AiInsight.
     * @example
     * // Update or create a AiInsight
     * const aiInsight = await prisma.aiInsight.upsert({
     *   create: {
     *     // ... data to create a AiInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiInsight we want to update
     *   }
     * })
     */
    upsert<T extends AiInsightUpsertArgs>(args: SelectSubset<T, AiInsightUpsertArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AiInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightCountArgs} args - Arguments to filter AiInsights to count.
     * @example
     * // Count the number of AiInsights
     * const count = await prisma.aiInsight.count({
     *   where: {
     *     // ... the filter for the AiInsights we want to count
     *   }
     * })
    **/
    count<T extends AiInsightCountArgs>(
      args?: Subset<T, AiInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiInsightAggregateArgs>(args: Subset<T, AiInsightAggregateArgs>): Prisma.PrismaPromise<GetAiInsightAggregateType<T>>

    /**
     * Group by AiInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightGroupByArgs} args - Group by arguments.
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
      T extends AiInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiInsightGroupByArgs['orderBy'] }
        : { orderBy?: AiInsightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiInsight model
   */
  readonly fields: AiInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the AiInsight model
   */ 
  interface AiInsightFieldRefs {
    readonly id: FieldRef<"AiInsight", 'String'>
    readonly leadId: FieldRef<"AiInsight", 'String'>
    readonly summary: FieldRef<"AiInsight", 'String'>
    readonly sentiment: FieldRef<"AiInsight", 'String'>
    readonly keyTakeaways: FieldRef<"AiInsight", 'Json'>
    readonly createdAt: FieldRef<"AiInsight", 'DateTime'>
    readonly updatedAt: FieldRef<"AiInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiInsight findUnique
   */
  export type AiInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight findUniqueOrThrow
   */
  export type AiInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight findFirst
   */
  export type AiInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInsights.
     */
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight findFirstOrThrow
   */
  export type AiInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInsights.
     */
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight findMany
   */
  export type AiInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsights to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight create
   */
  export type AiInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a AiInsight.
     */
    data: XOR<AiInsightCreateInput, AiInsightUncheckedCreateInput>
  }

  /**
   * AiInsight createMany
   */
  export type AiInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiInsights.
     */
    data: AiInsightCreateManyInput | AiInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiInsight createManyAndReturn
   */
  export type AiInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * The data used to create many AiInsights.
     */
    data: AiInsightCreateManyInput | AiInsightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiInsight update
   */
  export type AiInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a AiInsight.
     */
    data: XOR<AiInsightUpdateInput, AiInsightUncheckedUpdateInput>
    /**
     * Choose, which AiInsight to update.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight updateMany
   */
  export type AiInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiInsights.
     */
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyInput>
    /**
     * Filter which AiInsights to update
     */
    where?: AiInsightWhereInput
    /**
     * Limit how many AiInsights to update.
     */
    limit?: number
  }

  /**
   * AiInsight updateManyAndReturn
   */
  export type AiInsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * The data used to update AiInsights.
     */
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyInput>
    /**
     * Filter which AiInsights to update
     */
    where?: AiInsightWhereInput
    /**
     * Limit how many AiInsights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiInsight upsert
   */
  export type AiInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the AiInsight to update in case it exists.
     */
    where: AiInsightWhereUniqueInput
    /**
     * In case the AiInsight found by the `where` argument doesn't exist, create a new AiInsight with this data.
     */
    create: XOR<AiInsightCreateInput, AiInsightUncheckedCreateInput>
    /**
     * In case the AiInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiInsightUpdateInput, AiInsightUncheckedUpdateInput>
  }

  /**
   * AiInsight delete
   */
  export type AiInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter which AiInsight to delete.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight deleteMany
   */
  export type AiInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInsights to delete
     */
    where?: AiInsightWhereInput
    /**
     * Limit how many AiInsights to delete.
     */
    limit?: number
  }

  /**
   * AiInsight without action
   */
  export type AiInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiInsight
     */
    omit?: AiInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
  }


  /**
   * Model AutomationWorkflow
   */

  export type AggregateAutomationWorkflow = {
    _count: AutomationWorkflowCountAggregateOutputType | null
    _min: AutomationWorkflowMinAggregateOutputType | null
    _max: AutomationWorkflowMaxAggregateOutputType | null
  }

  export type AutomationWorkflowMinAggregateOutputType = {
    id: string | null
    name: string | null
    triggerType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationWorkflowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    triggerType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationWorkflowCountAggregateOutputType = {
    id: number
    name: number
    triggerType: number
    config: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutomationWorkflowMinAggregateInputType = {
    id?: true
    name?: true
    triggerType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationWorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    triggerType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationWorkflowCountAggregateInputType = {
    id?: true
    name?: true
    triggerType?: true
    config?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutomationWorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationWorkflow to aggregate.
     */
    where?: AutomationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationWorkflows to fetch.
     */
    orderBy?: AutomationWorkflowOrderByWithRelationInput | AutomationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationWorkflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationWorkflows
    **/
    _count?: true | AutomationWorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationWorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationWorkflowMaxAggregateInputType
  }

  export type GetAutomationWorkflowAggregateType<T extends AutomationWorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationWorkflow[P]>
      : GetScalarType<T[P], AggregateAutomationWorkflow[P]>
  }




  export type AutomationWorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWorkflowWhereInput
    orderBy?: AutomationWorkflowOrderByWithAggregationInput | AutomationWorkflowOrderByWithAggregationInput[]
    by: AutomationWorkflowScalarFieldEnum[] | AutomationWorkflowScalarFieldEnum
    having?: AutomationWorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationWorkflowCountAggregateInputType | true
    _min?: AutomationWorkflowMinAggregateInputType
    _max?: AutomationWorkflowMaxAggregateInputType
  }

  export type AutomationWorkflowGroupByOutputType = {
    id: string
    name: string
    triggerType: string
    config: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AutomationWorkflowCountAggregateOutputType | null
    _min: AutomationWorkflowMinAggregateOutputType | null
    _max: AutomationWorkflowMaxAggregateOutputType | null
  }

  type GetAutomationWorkflowGroupByPayload<T extends AutomationWorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationWorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationWorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationWorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationWorkflowGroupByOutputType[P]>
        }
      >
    >


  export type AutomationWorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    triggerType?: boolean
    config?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    steps?: boolean | AutomationWorkflow$stepsArgs<ExtArgs>
    executions?: boolean | AutomationWorkflow$executionsArgs<ExtArgs>
    _count?: boolean | AutomationWorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationWorkflow"]>

  export type AutomationWorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    triggerType?: boolean
    config?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automationWorkflow"]>

  export type AutomationWorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    triggerType?: boolean
    config?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automationWorkflow"]>

  export type AutomationWorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    triggerType?: boolean
    config?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutomationWorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "triggerType" | "config" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["automationWorkflow"]>
  export type AutomationWorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | AutomationWorkflow$stepsArgs<ExtArgs>
    executions?: boolean | AutomationWorkflow$executionsArgs<ExtArgs>
    _count?: boolean | AutomationWorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutomationWorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutomationWorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutomationWorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationWorkflow"
    objects: {
      steps: Prisma.$AutomationStepPayload<ExtArgs>[]
      executions: Prisma.$AutomationExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      triggerType: string
      config: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["automationWorkflow"]>
    composites: {}
  }

  type AutomationWorkflowGetPayload<S extends boolean | null | undefined | AutomationWorkflowDefaultArgs> = $Result.GetResult<Prisma.$AutomationWorkflowPayload, S>

  type AutomationWorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationWorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationWorkflowCountAggregateInputType | true
    }

  export interface AutomationWorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationWorkflow'], meta: { name: 'AutomationWorkflow' } }
    /**
     * Find zero or one AutomationWorkflow that matches the filter.
     * @param {AutomationWorkflowFindUniqueArgs} args - Arguments to find a AutomationWorkflow
     * @example
     * // Get one AutomationWorkflow
     * const automationWorkflow = await prisma.automationWorkflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationWorkflowFindUniqueArgs>(args: SelectSubset<T, AutomationWorkflowFindUniqueArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AutomationWorkflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationWorkflowFindUniqueOrThrowArgs} args - Arguments to find a AutomationWorkflow
     * @example
     * // Get one AutomationWorkflow
     * const automationWorkflow = await prisma.automationWorkflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationWorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationWorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationWorkflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowFindFirstArgs} args - Arguments to find a AutomationWorkflow
     * @example
     * // Get one AutomationWorkflow
     * const automationWorkflow = await prisma.automationWorkflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationWorkflowFindFirstArgs>(args?: SelectSubset<T, AutomationWorkflowFindFirstArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationWorkflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowFindFirstOrThrowArgs} args - Arguments to find a AutomationWorkflow
     * @example
     * // Get one AutomationWorkflow
     * const automationWorkflow = await prisma.automationWorkflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationWorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationWorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AutomationWorkflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationWorkflows
     * const automationWorkflows = await prisma.automationWorkflow.findMany()
     * 
     * // Get first 10 AutomationWorkflows
     * const automationWorkflows = await prisma.automationWorkflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationWorkflowWithIdOnly = await prisma.automationWorkflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationWorkflowFindManyArgs>(args?: SelectSubset<T, AutomationWorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AutomationWorkflow.
     * @param {AutomationWorkflowCreateArgs} args - Arguments to create a AutomationWorkflow.
     * @example
     * // Create one AutomationWorkflow
     * const AutomationWorkflow = await prisma.automationWorkflow.create({
     *   data: {
     *     // ... data to create a AutomationWorkflow
     *   }
     * })
     * 
     */
    create<T extends AutomationWorkflowCreateArgs>(args: SelectSubset<T, AutomationWorkflowCreateArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AutomationWorkflows.
     * @param {AutomationWorkflowCreateManyArgs} args - Arguments to create many AutomationWorkflows.
     * @example
     * // Create many AutomationWorkflows
     * const automationWorkflow = await prisma.automationWorkflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationWorkflowCreateManyArgs>(args?: SelectSubset<T, AutomationWorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationWorkflows and returns the data saved in the database.
     * @param {AutomationWorkflowCreateManyAndReturnArgs} args - Arguments to create many AutomationWorkflows.
     * @example
     * // Create many AutomationWorkflows
     * const automationWorkflow = await prisma.automationWorkflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationWorkflows and only return the `id`
     * const automationWorkflowWithIdOnly = await prisma.automationWorkflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationWorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationWorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AutomationWorkflow.
     * @param {AutomationWorkflowDeleteArgs} args - Arguments to delete one AutomationWorkflow.
     * @example
     * // Delete one AutomationWorkflow
     * const AutomationWorkflow = await prisma.automationWorkflow.delete({
     *   where: {
     *     // ... filter to delete one AutomationWorkflow
     *   }
     * })
     * 
     */
    delete<T extends AutomationWorkflowDeleteArgs>(args: SelectSubset<T, AutomationWorkflowDeleteArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AutomationWorkflow.
     * @param {AutomationWorkflowUpdateArgs} args - Arguments to update one AutomationWorkflow.
     * @example
     * // Update one AutomationWorkflow
     * const automationWorkflow = await prisma.automationWorkflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationWorkflowUpdateArgs>(args: SelectSubset<T, AutomationWorkflowUpdateArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AutomationWorkflows.
     * @param {AutomationWorkflowDeleteManyArgs} args - Arguments to filter AutomationWorkflows to delete.
     * @example
     * // Delete a few AutomationWorkflows
     * const { count } = await prisma.automationWorkflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationWorkflowDeleteManyArgs>(args?: SelectSubset<T, AutomationWorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationWorkflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationWorkflows
     * const automationWorkflow = await prisma.automationWorkflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationWorkflowUpdateManyArgs>(args: SelectSubset<T, AutomationWorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationWorkflows and returns the data updated in the database.
     * @param {AutomationWorkflowUpdateManyAndReturnArgs} args - Arguments to update many AutomationWorkflows.
     * @example
     * // Update many AutomationWorkflows
     * const automationWorkflow = await prisma.automationWorkflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomationWorkflows and only return the `id`
     * const automationWorkflowWithIdOnly = await prisma.automationWorkflow.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutomationWorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationWorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AutomationWorkflow.
     * @param {AutomationWorkflowUpsertArgs} args - Arguments to update or create a AutomationWorkflow.
     * @example
     * // Update or create a AutomationWorkflow
     * const automationWorkflow = await prisma.automationWorkflow.upsert({
     *   create: {
     *     // ... data to create a AutomationWorkflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationWorkflow we want to update
     *   }
     * })
     */
    upsert<T extends AutomationWorkflowUpsertArgs>(args: SelectSubset<T, AutomationWorkflowUpsertArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AutomationWorkflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowCountArgs} args - Arguments to filter AutomationWorkflows to count.
     * @example
     * // Count the number of AutomationWorkflows
     * const count = await prisma.automationWorkflow.count({
     *   where: {
     *     // ... the filter for the AutomationWorkflows we want to count
     *   }
     * })
    **/
    count<T extends AutomationWorkflowCountArgs>(
      args?: Subset<T, AutomationWorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationWorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationWorkflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationWorkflowAggregateArgs>(args: Subset<T, AutomationWorkflowAggregateArgs>): Prisma.PrismaPromise<GetAutomationWorkflowAggregateType<T>>

    /**
     * Group by AutomationWorkflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationWorkflowGroupByArgs} args - Group by arguments.
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
      T extends AutomationWorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationWorkflowGroupByArgs['orderBy'] }
        : { orderBy?: AutomationWorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationWorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationWorkflow model
   */
  readonly fields: AutomationWorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationWorkflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationWorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steps<T extends AutomationWorkflow$stepsArgs<ExtArgs> = {}>(args?: Subset<T, AutomationWorkflow$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    executions<T extends AutomationWorkflow$executionsArgs<ExtArgs> = {}>(args?: Subset<T, AutomationWorkflow$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the AutomationWorkflow model
   */ 
  interface AutomationWorkflowFieldRefs {
    readonly id: FieldRef<"AutomationWorkflow", 'String'>
    readonly name: FieldRef<"AutomationWorkflow", 'String'>
    readonly triggerType: FieldRef<"AutomationWorkflow", 'String'>
    readonly config: FieldRef<"AutomationWorkflow", 'Json'>
    readonly isActive: FieldRef<"AutomationWorkflow", 'Boolean'>
    readonly createdAt: FieldRef<"AutomationWorkflow", 'DateTime'>
    readonly updatedAt: FieldRef<"AutomationWorkflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutomationWorkflow findUnique
   */
  export type AutomationWorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which AutomationWorkflow to fetch.
     */
    where: AutomationWorkflowWhereUniqueInput
  }

  /**
   * AutomationWorkflow findUniqueOrThrow
   */
  export type AutomationWorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which AutomationWorkflow to fetch.
     */
    where: AutomationWorkflowWhereUniqueInput
  }

  /**
   * AutomationWorkflow findFirst
   */
  export type AutomationWorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which AutomationWorkflow to fetch.
     */
    where?: AutomationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationWorkflows to fetch.
     */
    orderBy?: AutomationWorkflowOrderByWithRelationInput | AutomationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationWorkflows.
     */
    cursor?: AutomationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationWorkflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationWorkflows.
     */
    distinct?: AutomationWorkflowScalarFieldEnum | AutomationWorkflowScalarFieldEnum[]
  }

  /**
   * AutomationWorkflow findFirstOrThrow
   */
  export type AutomationWorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which AutomationWorkflow to fetch.
     */
    where?: AutomationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationWorkflows to fetch.
     */
    orderBy?: AutomationWorkflowOrderByWithRelationInput | AutomationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationWorkflows.
     */
    cursor?: AutomationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationWorkflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationWorkflows.
     */
    distinct?: AutomationWorkflowScalarFieldEnum | AutomationWorkflowScalarFieldEnum[]
  }

  /**
   * AutomationWorkflow findMany
   */
  export type AutomationWorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which AutomationWorkflows to fetch.
     */
    where?: AutomationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationWorkflows to fetch.
     */
    orderBy?: AutomationWorkflowOrderByWithRelationInput | AutomationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationWorkflows.
     */
    cursor?: AutomationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationWorkflows.
     */
    skip?: number
    distinct?: AutomationWorkflowScalarFieldEnum | AutomationWorkflowScalarFieldEnum[]
  }

  /**
   * AutomationWorkflow create
   */
  export type AutomationWorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationWorkflow.
     */
    data: XOR<AutomationWorkflowCreateInput, AutomationWorkflowUncheckedCreateInput>
  }

  /**
   * AutomationWorkflow createMany
   */
  export type AutomationWorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationWorkflows.
     */
    data: AutomationWorkflowCreateManyInput | AutomationWorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationWorkflow createManyAndReturn
   */
  export type AutomationWorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many AutomationWorkflows.
     */
    data: AutomationWorkflowCreateManyInput | AutomationWorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationWorkflow update
   */
  export type AutomationWorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationWorkflow.
     */
    data: XOR<AutomationWorkflowUpdateInput, AutomationWorkflowUncheckedUpdateInput>
    /**
     * Choose, which AutomationWorkflow to update.
     */
    where: AutomationWorkflowWhereUniqueInput
  }

  /**
   * AutomationWorkflow updateMany
   */
  export type AutomationWorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationWorkflows.
     */
    data: XOR<AutomationWorkflowUpdateManyMutationInput, AutomationWorkflowUncheckedUpdateManyInput>
    /**
     * Filter which AutomationWorkflows to update
     */
    where?: AutomationWorkflowWhereInput
    /**
     * Limit how many AutomationWorkflows to update.
     */
    limit?: number
  }

  /**
   * AutomationWorkflow updateManyAndReturn
   */
  export type AutomationWorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * The data used to update AutomationWorkflows.
     */
    data: XOR<AutomationWorkflowUpdateManyMutationInput, AutomationWorkflowUncheckedUpdateManyInput>
    /**
     * Filter which AutomationWorkflows to update
     */
    where?: AutomationWorkflowWhereInput
    /**
     * Limit how many AutomationWorkflows to update.
     */
    limit?: number
  }

  /**
   * AutomationWorkflow upsert
   */
  export type AutomationWorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationWorkflow to update in case it exists.
     */
    where: AutomationWorkflowWhereUniqueInput
    /**
     * In case the AutomationWorkflow found by the `where` argument doesn't exist, create a new AutomationWorkflow with this data.
     */
    create: XOR<AutomationWorkflowCreateInput, AutomationWorkflowUncheckedCreateInput>
    /**
     * In case the AutomationWorkflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationWorkflowUpdateInput, AutomationWorkflowUncheckedUpdateInput>
  }

  /**
   * AutomationWorkflow delete
   */
  export type AutomationWorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
    /**
     * Filter which AutomationWorkflow to delete.
     */
    where: AutomationWorkflowWhereUniqueInput
  }

  /**
   * AutomationWorkflow deleteMany
   */
  export type AutomationWorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationWorkflows to delete
     */
    where?: AutomationWorkflowWhereInput
    /**
     * Limit how many AutomationWorkflows to delete.
     */
    limit?: number
  }

  /**
   * AutomationWorkflow.steps
   */
  export type AutomationWorkflow$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    where?: AutomationStepWhereInput
    orderBy?: AutomationStepOrderByWithRelationInput | AutomationStepOrderByWithRelationInput[]
    cursor?: AutomationStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationStepScalarFieldEnum | AutomationStepScalarFieldEnum[]
  }

  /**
   * AutomationWorkflow.executions
   */
  export type AutomationWorkflow$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    where?: AutomationExecutionWhereInput
    orderBy?: AutomationExecutionOrderByWithRelationInput | AutomationExecutionOrderByWithRelationInput[]
    cursor?: AutomationExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationExecutionScalarFieldEnum | AutomationExecutionScalarFieldEnum[]
  }

  /**
   * AutomationWorkflow without action
   */
  export type AutomationWorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationWorkflow
     */
    select?: AutomationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationWorkflow
     */
    omit?: AutomationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationWorkflowInclude<ExtArgs> | null
  }


  /**
   * Model AutomationStep
   */

  export type AggregateAutomationStep = {
    _count: AutomationStepCountAggregateOutputType | null
    _avg: AutomationStepAvgAggregateOutputType | null
    _sum: AutomationStepSumAggregateOutputType | null
    _min: AutomationStepMinAggregateOutputType | null
    _max: AutomationStepMaxAggregateOutputType | null
  }

  export type AutomationStepAvgAggregateOutputType = {
    order: number | null
  }

  export type AutomationStepSumAggregateOutputType = {
    order: number | null
  }

  export type AutomationStepMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    stepType: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationStepMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    stepType: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationStepCountAggregateOutputType = {
    id: number
    workflowId: number
    stepType: number
    order: number
    config: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutomationStepAvgAggregateInputType = {
    order?: true
  }

  export type AutomationStepSumAggregateInputType = {
    order?: true
  }

  export type AutomationStepMinAggregateInputType = {
    id?: true
    workflowId?: true
    stepType?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationStepMaxAggregateInputType = {
    id?: true
    workflowId?: true
    stepType?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationStepCountAggregateInputType = {
    id?: true
    workflowId?: true
    stepType?: true
    order?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutomationStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationStep to aggregate.
     */
    where?: AutomationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationSteps to fetch.
     */
    orderBy?: AutomationStepOrderByWithRelationInput | AutomationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationSteps
    **/
    _count?: true | AutomationStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutomationStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutomationStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationStepMaxAggregateInputType
  }

  export type GetAutomationStepAggregateType<T extends AutomationStepAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationStep[P]>
      : GetScalarType<T[P], AggregateAutomationStep[P]>
  }




  export type AutomationStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationStepWhereInput
    orderBy?: AutomationStepOrderByWithAggregationInput | AutomationStepOrderByWithAggregationInput[]
    by: AutomationStepScalarFieldEnum[] | AutomationStepScalarFieldEnum
    having?: AutomationStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationStepCountAggregateInputType | true
    _avg?: AutomationStepAvgAggregateInputType
    _sum?: AutomationStepSumAggregateInputType
    _min?: AutomationStepMinAggregateInputType
    _max?: AutomationStepMaxAggregateInputType
  }

  export type AutomationStepGroupByOutputType = {
    id: string
    workflowId: string
    stepType: string
    order: number
    config: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: AutomationStepCountAggregateOutputType | null
    _avg: AutomationStepAvgAggregateOutputType | null
    _sum: AutomationStepSumAggregateOutputType | null
    _min: AutomationStepMinAggregateOutputType | null
    _max: AutomationStepMaxAggregateOutputType | null
  }

  type GetAutomationStepGroupByPayload<T extends AutomationStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationStepGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationStepGroupByOutputType[P]>
        }
      >
    >


  export type AutomationStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    stepType?: boolean
    order?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    results?: boolean | AutomationStep$resultsArgs<ExtArgs>
    _count?: boolean | AutomationStepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationStep"]>

  export type AutomationStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    stepType?: boolean
    order?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationStep"]>

  export type AutomationStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    stepType?: boolean
    order?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationStep"]>

  export type AutomationStepSelectScalar = {
    id?: boolean
    workflowId?: boolean
    stepType?: boolean
    order?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutomationStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "stepType" | "order" | "config" | "createdAt" | "updatedAt", ExtArgs["result"]["automationStep"]>
  export type AutomationStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    results?: boolean | AutomationStep$resultsArgs<ExtArgs>
    _count?: boolean | AutomationStepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutomationStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
  }
  export type AutomationStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
  }

  export type $AutomationStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationStep"
    objects: {
      workflow: Prisma.$AutomationWorkflowPayload<ExtArgs>
      results: Prisma.$AutomationStepResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      stepType: string
      order: number
      config: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["automationStep"]>
    composites: {}
  }

  type AutomationStepGetPayload<S extends boolean | null | undefined | AutomationStepDefaultArgs> = $Result.GetResult<Prisma.$AutomationStepPayload, S>

  type AutomationStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationStepCountAggregateInputType | true
    }

  export interface AutomationStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationStep'], meta: { name: 'AutomationStep' } }
    /**
     * Find zero or one AutomationStep that matches the filter.
     * @param {AutomationStepFindUniqueArgs} args - Arguments to find a AutomationStep
     * @example
     * // Get one AutomationStep
     * const automationStep = await prisma.automationStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationStepFindUniqueArgs>(args: SelectSubset<T, AutomationStepFindUniqueArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AutomationStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationStepFindUniqueOrThrowArgs} args - Arguments to find a AutomationStep
     * @example
     * // Get one AutomationStep
     * const automationStep = await prisma.automationStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationStepFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepFindFirstArgs} args - Arguments to find a AutomationStep
     * @example
     * // Get one AutomationStep
     * const automationStep = await prisma.automationStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationStepFindFirstArgs>(args?: SelectSubset<T, AutomationStepFindFirstArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepFindFirstOrThrowArgs} args - Arguments to find a AutomationStep
     * @example
     * // Get one AutomationStep
     * const automationStep = await prisma.automationStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationStepFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AutomationSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationSteps
     * const automationSteps = await prisma.automationStep.findMany()
     * 
     * // Get first 10 AutomationSteps
     * const automationSteps = await prisma.automationStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationStepWithIdOnly = await prisma.automationStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationStepFindManyArgs>(args?: SelectSubset<T, AutomationStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AutomationStep.
     * @param {AutomationStepCreateArgs} args - Arguments to create a AutomationStep.
     * @example
     * // Create one AutomationStep
     * const AutomationStep = await prisma.automationStep.create({
     *   data: {
     *     // ... data to create a AutomationStep
     *   }
     * })
     * 
     */
    create<T extends AutomationStepCreateArgs>(args: SelectSubset<T, AutomationStepCreateArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AutomationSteps.
     * @param {AutomationStepCreateManyArgs} args - Arguments to create many AutomationSteps.
     * @example
     * // Create many AutomationSteps
     * const automationStep = await prisma.automationStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationStepCreateManyArgs>(args?: SelectSubset<T, AutomationStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationSteps and returns the data saved in the database.
     * @param {AutomationStepCreateManyAndReturnArgs} args - Arguments to create many AutomationSteps.
     * @example
     * // Create many AutomationSteps
     * const automationStep = await prisma.automationStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationSteps and only return the `id`
     * const automationStepWithIdOnly = await prisma.automationStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationStepCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AutomationStep.
     * @param {AutomationStepDeleteArgs} args - Arguments to delete one AutomationStep.
     * @example
     * // Delete one AutomationStep
     * const AutomationStep = await prisma.automationStep.delete({
     *   where: {
     *     // ... filter to delete one AutomationStep
     *   }
     * })
     * 
     */
    delete<T extends AutomationStepDeleteArgs>(args: SelectSubset<T, AutomationStepDeleteArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AutomationStep.
     * @param {AutomationStepUpdateArgs} args - Arguments to update one AutomationStep.
     * @example
     * // Update one AutomationStep
     * const automationStep = await prisma.automationStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationStepUpdateArgs>(args: SelectSubset<T, AutomationStepUpdateArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AutomationSteps.
     * @param {AutomationStepDeleteManyArgs} args - Arguments to filter AutomationSteps to delete.
     * @example
     * // Delete a few AutomationSteps
     * const { count } = await prisma.automationStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationStepDeleteManyArgs>(args?: SelectSubset<T, AutomationStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationSteps
     * const automationStep = await prisma.automationStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationStepUpdateManyArgs>(args: SelectSubset<T, AutomationStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationSteps and returns the data updated in the database.
     * @param {AutomationStepUpdateManyAndReturnArgs} args - Arguments to update many AutomationSteps.
     * @example
     * // Update many AutomationSteps
     * const automationStep = await prisma.automationStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomationSteps and only return the `id`
     * const automationStepWithIdOnly = await prisma.automationStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutomationStepUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AutomationStep.
     * @param {AutomationStepUpsertArgs} args - Arguments to update or create a AutomationStep.
     * @example
     * // Update or create a AutomationStep
     * const automationStep = await prisma.automationStep.upsert({
     *   create: {
     *     // ... data to create a AutomationStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationStep we want to update
     *   }
     * })
     */
    upsert<T extends AutomationStepUpsertArgs>(args: SelectSubset<T, AutomationStepUpsertArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AutomationSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepCountArgs} args - Arguments to filter AutomationSteps to count.
     * @example
     * // Count the number of AutomationSteps
     * const count = await prisma.automationStep.count({
     *   where: {
     *     // ... the filter for the AutomationSteps we want to count
     *   }
     * })
    **/
    count<T extends AutomationStepCountArgs>(
      args?: Subset<T, AutomationStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationStepAggregateArgs>(args: Subset<T, AutomationStepAggregateArgs>): Prisma.PrismaPromise<GetAutomationStepAggregateType<T>>

    /**
     * Group by AutomationStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepGroupByArgs} args - Group by arguments.
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
      T extends AutomationStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationStepGroupByArgs['orderBy'] }
        : { orderBy?: AutomationStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationStep model
   */
  readonly fields: AutomationStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends AutomationWorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationWorkflowDefaultArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    results<T extends AutomationStep$resultsArgs<ExtArgs> = {}>(args?: Subset<T, AutomationStep$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the AutomationStep model
   */ 
  interface AutomationStepFieldRefs {
    readonly id: FieldRef<"AutomationStep", 'String'>
    readonly workflowId: FieldRef<"AutomationStep", 'String'>
    readonly stepType: FieldRef<"AutomationStep", 'String'>
    readonly order: FieldRef<"AutomationStep", 'Int'>
    readonly config: FieldRef<"AutomationStep", 'Json'>
    readonly createdAt: FieldRef<"AutomationStep", 'DateTime'>
    readonly updatedAt: FieldRef<"AutomationStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutomationStep findUnique
   */
  export type AutomationStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStep to fetch.
     */
    where: AutomationStepWhereUniqueInput
  }

  /**
   * AutomationStep findUniqueOrThrow
   */
  export type AutomationStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStep to fetch.
     */
    where: AutomationStepWhereUniqueInput
  }

  /**
   * AutomationStep findFirst
   */
  export type AutomationStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStep to fetch.
     */
    where?: AutomationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationSteps to fetch.
     */
    orderBy?: AutomationStepOrderByWithRelationInput | AutomationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationSteps.
     */
    cursor?: AutomationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationSteps.
     */
    distinct?: AutomationStepScalarFieldEnum | AutomationStepScalarFieldEnum[]
  }

  /**
   * AutomationStep findFirstOrThrow
   */
  export type AutomationStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStep to fetch.
     */
    where?: AutomationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationSteps to fetch.
     */
    orderBy?: AutomationStepOrderByWithRelationInput | AutomationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationSteps.
     */
    cursor?: AutomationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationSteps.
     */
    distinct?: AutomationStepScalarFieldEnum | AutomationStepScalarFieldEnum[]
  }

  /**
   * AutomationStep findMany
   */
  export type AutomationStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * Filter, which AutomationSteps to fetch.
     */
    where?: AutomationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationSteps to fetch.
     */
    orderBy?: AutomationStepOrderByWithRelationInput | AutomationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationSteps.
     */
    cursor?: AutomationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationSteps.
     */
    skip?: number
    distinct?: AutomationStepScalarFieldEnum | AutomationStepScalarFieldEnum[]
  }

  /**
   * AutomationStep create
   */
  export type AutomationStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationStep.
     */
    data: XOR<AutomationStepCreateInput, AutomationStepUncheckedCreateInput>
  }

  /**
   * AutomationStep createMany
   */
  export type AutomationStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationSteps.
     */
    data: AutomationStepCreateManyInput | AutomationStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationStep createManyAndReturn
   */
  export type AutomationStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * The data used to create many AutomationSteps.
     */
    data: AutomationStepCreateManyInput | AutomationStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationStep update
   */
  export type AutomationStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationStep.
     */
    data: XOR<AutomationStepUpdateInput, AutomationStepUncheckedUpdateInput>
    /**
     * Choose, which AutomationStep to update.
     */
    where: AutomationStepWhereUniqueInput
  }

  /**
   * AutomationStep updateMany
   */
  export type AutomationStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationSteps.
     */
    data: XOR<AutomationStepUpdateManyMutationInput, AutomationStepUncheckedUpdateManyInput>
    /**
     * Filter which AutomationSteps to update
     */
    where?: AutomationStepWhereInput
    /**
     * Limit how many AutomationSteps to update.
     */
    limit?: number
  }

  /**
   * AutomationStep updateManyAndReturn
   */
  export type AutomationStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * The data used to update AutomationSteps.
     */
    data: XOR<AutomationStepUpdateManyMutationInput, AutomationStepUncheckedUpdateManyInput>
    /**
     * Filter which AutomationSteps to update
     */
    where?: AutomationStepWhereInput
    /**
     * Limit how many AutomationSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationStep upsert
   */
  export type AutomationStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationStep to update in case it exists.
     */
    where: AutomationStepWhereUniqueInput
    /**
     * In case the AutomationStep found by the `where` argument doesn't exist, create a new AutomationStep with this data.
     */
    create: XOR<AutomationStepCreateInput, AutomationStepUncheckedCreateInput>
    /**
     * In case the AutomationStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationStepUpdateInput, AutomationStepUncheckedUpdateInput>
  }

  /**
   * AutomationStep delete
   */
  export type AutomationStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
    /**
     * Filter which AutomationStep to delete.
     */
    where: AutomationStepWhereUniqueInput
  }

  /**
   * AutomationStep deleteMany
   */
  export type AutomationStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationSteps to delete
     */
    where?: AutomationStepWhereInput
    /**
     * Limit how many AutomationSteps to delete.
     */
    limit?: number
  }

  /**
   * AutomationStep.results
   */
  export type AutomationStep$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    where?: AutomationStepResultWhereInput
    orderBy?: AutomationStepResultOrderByWithRelationInput | AutomationStepResultOrderByWithRelationInput[]
    cursor?: AutomationStepResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationStepResultScalarFieldEnum | AutomationStepResultScalarFieldEnum[]
  }

  /**
   * AutomationStep without action
   */
  export type AutomationStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStep
     */
    select?: AutomationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStep
     */
    omit?: AutomationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepInclude<ExtArgs> | null
  }


  /**
   * Model AutomationExecution
   */

  export type AggregateAutomationExecution = {
    _count: AutomationExecutionCountAggregateOutputType | null
    _min: AutomationExecutionMinAggregateOutputType | null
    _max: AutomationExecutionMaxAggregateOutputType | null
  }

  export type AutomationExecutionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    leadId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationExecutionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    leadId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationExecutionCountAggregateOutputType = {
    id: number
    workflowId: number
    leadId: number
    status: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutomationExecutionMinAggregateInputType = {
    id?: true
    workflowId?: true
    leadId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationExecutionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    leadId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationExecutionCountAggregateInputType = {
    id?: true
    workflowId?: true
    leadId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutomationExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationExecution to aggregate.
     */
    where?: AutomationExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationExecutions to fetch.
     */
    orderBy?: AutomationExecutionOrderByWithRelationInput | AutomationExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationExecutions
    **/
    _count?: true | AutomationExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationExecutionMaxAggregateInputType
  }

  export type GetAutomationExecutionAggregateType<T extends AutomationExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationExecution[P]>
      : GetScalarType<T[P], AggregateAutomationExecution[P]>
  }




  export type AutomationExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationExecutionWhereInput
    orderBy?: AutomationExecutionOrderByWithAggregationInput | AutomationExecutionOrderByWithAggregationInput[]
    by: AutomationExecutionScalarFieldEnum[] | AutomationExecutionScalarFieldEnum
    having?: AutomationExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationExecutionCountAggregateInputType | true
    _min?: AutomationExecutionMinAggregateInputType
    _max?: AutomationExecutionMaxAggregateInputType
  }

  export type AutomationExecutionGroupByOutputType = {
    id: string
    workflowId: string
    leadId: string
    status: string
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AutomationExecutionCountAggregateOutputType | null
    _min: AutomationExecutionMinAggregateOutputType | null
    _max: AutomationExecutionMaxAggregateOutputType | null
  }

  type GetAutomationExecutionGroupByPayload<T extends AutomationExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationExecutionGroupByOutputType[P]>
        }
      >
    >


  export type AutomationExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    leadId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    results?: boolean | AutomationExecution$resultsArgs<ExtArgs>
    _count?: boolean | AutomationExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationExecution"]>

  export type AutomationExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    leadId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationExecution"]>

  export type AutomationExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    leadId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationExecution"]>

  export type AutomationExecutionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    leadId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutomationExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "leadId" | "status" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["automationExecution"]>
  export type AutomationExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    results?: boolean | AutomationExecution$resultsArgs<ExtArgs>
    _count?: boolean | AutomationExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutomationExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type AutomationExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | AutomationWorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $AutomationExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationExecution"
    objects: {
      workflow: Prisma.$AutomationWorkflowPayload<ExtArgs>
      lead: Prisma.$LeadPayload<ExtArgs>
      results: Prisma.$AutomationStepResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      leadId: string
      status: string
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["automationExecution"]>
    composites: {}
  }

  type AutomationExecutionGetPayload<S extends boolean | null | undefined | AutomationExecutionDefaultArgs> = $Result.GetResult<Prisma.$AutomationExecutionPayload, S>

  type AutomationExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationExecutionCountAggregateInputType | true
    }

  export interface AutomationExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationExecution'], meta: { name: 'AutomationExecution' } }
    /**
     * Find zero or one AutomationExecution that matches the filter.
     * @param {AutomationExecutionFindUniqueArgs} args - Arguments to find a AutomationExecution
     * @example
     * // Get one AutomationExecution
     * const automationExecution = await prisma.automationExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationExecutionFindUniqueArgs>(args: SelectSubset<T, AutomationExecutionFindUniqueArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AutomationExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationExecutionFindUniqueOrThrowArgs} args - Arguments to find a AutomationExecution
     * @example
     * // Get one AutomationExecution
     * const automationExecution = await prisma.automationExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionFindFirstArgs} args - Arguments to find a AutomationExecution
     * @example
     * // Get one AutomationExecution
     * const automationExecution = await prisma.automationExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationExecutionFindFirstArgs>(args?: SelectSubset<T, AutomationExecutionFindFirstArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionFindFirstOrThrowArgs} args - Arguments to find a AutomationExecution
     * @example
     * // Get one AutomationExecution
     * const automationExecution = await prisma.automationExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AutomationExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationExecutions
     * const automationExecutions = await prisma.automationExecution.findMany()
     * 
     * // Get first 10 AutomationExecutions
     * const automationExecutions = await prisma.automationExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationExecutionWithIdOnly = await prisma.automationExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationExecutionFindManyArgs>(args?: SelectSubset<T, AutomationExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AutomationExecution.
     * @param {AutomationExecutionCreateArgs} args - Arguments to create a AutomationExecution.
     * @example
     * // Create one AutomationExecution
     * const AutomationExecution = await prisma.automationExecution.create({
     *   data: {
     *     // ... data to create a AutomationExecution
     *   }
     * })
     * 
     */
    create<T extends AutomationExecutionCreateArgs>(args: SelectSubset<T, AutomationExecutionCreateArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AutomationExecutions.
     * @param {AutomationExecutionCreateManyArgs} args - Arguments to create many AutomationExecutions.
     * @example
     * // Create many AutomationExecutions
     * const automationExecution = await prisma.automationExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationExecutionCreateManyArgs>(args?: SelectSubset<T, AutomationExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationExecutions and returns the data saved in the database.
     * @param {AutomationExecutionCreateManyAndReturnArgs} args - Arguments to create many AutomationExecutions.
     * @example
     * // Create many AutomationExecutions
     * const automationExecution = await prisma.automationExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationExecutions and only return the `id`
     * const automationExecutionWithIdOnly = await prisma.automationExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AutomationExecution.
     * @param {AutomationExecutionDeleteArgs} args - Arguments to delete one AutomationExecution.
     * @example
     * // Delete one AutomationExecution
     * const AutomationExecution = await prisma.automationExecution.delete({
     *   where: {
     *     // ... filter to delete one AutomationExecution
     *   }
     * })
     * 
     */
    delete<T extends AutomationExecutionDeleteArgs>(args: SelectSubset<T, AutomationExecutionDeleteArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AutomationExecution.
     * @param {AutomationExecutionUpdateArgs} args - Arguments to update one AutomationExecution.
     * @example
     * // Update one AutomationExecution
     * const automationExecution = await prisma.automationExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationExecutionUpdateArgs>(args: SelectSubset<T, AutomationExecutionUpdateArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AutomationExecutions.
     * @param {AutomationExecutionDeleteManyArgs} args - Arguments to filter AutomationExecutions to delete.
     * @example
     * // Delete a few AutomationExecutions
     * const { count } = await prisma.automationExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationExecutionDeleteManyArgs>(args?: SelectSubset<T, AutomationExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationExecutions
     * const automationExecution = await prisma.automationExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationExecutionUpdateManyArgs>(args: SelectSubset<T, AutomationExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationExecutions and returns the data updated in the database.
     * @param {AutomationExecutionUpdateManyAndReturnArgs} args - Arguments to update many AutomationExecutions.
     * @example
     * // Update many AutomationExecutions
     * const automationExecution = await prisma.automationExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomationExecutions and only return the `id`
     * const automationExecutionWithIdOnly = await prisma.automationExecution.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutomationExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AutomationExecution.
     * @param {AutomationExecutionUpsertArgs} args - Arguments to update or create a AutomationExecution.
     * @example
     * // Update or create a AutomationExecution
     * const automationExecution = await prisma.automationExecution.upsert({
     *   create: {
     *     // ... data to create a AutomationExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationExecution we want to update
     *   }
     * })
     */
    upsert<T extends AutomationExecutionUpsertArgs>(args: SelectSubset<T, AutomationExecutionUpsertArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AutomationExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionCountArgs} args - Arguments to filter AutomationExecutions to count.
     * @example
     * // Count the number of AutomationExecutions
     * const count = await prisma.automationExecution.count({
     *   where: {
     *     // ... the filter for the AutomationExecutions we want to count
     *   }
     * })
    **/
    count<T extends AutomationExecutionCountArgs>(
      args?: Subset<T, AutomationExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationExecutionAggregateArgs>(args: Subset<T, AutomationExecutionAggregateArgs>): Prisma.PrismaPromise<GetAutomationExecutionAggregateType<T>>

    /**
     * Group by AutomationExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationExecutionGroupByArgs} args - Group by arguments.
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
      T extends AutomationExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationExecutionGroupByArgs['orderBy'] }
        : { orderBy?: AutomationExecutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationExecution model
   */
  readonly fields: AutomationExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends AutomationWorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationWorkflowDefaultArgs<ExtArgs>>): Prisma__AutomationWorkflowClient<$Result.GetResult<Prisma.$AutomationWorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    results<T extends AutomationExecution$resultsArgs<ExtArgs> = {}>(args?: Subset<T, AutomationExecution$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the AutomationExecution model
   */ 
  interface AutomationExecutionFieldRefs {
    readonly id: FieldRef<"AutomationExecution", 'String'>
    readonly workflowId: FieldRef<"AutomationExecution", 'String'>
    readonly leadId: FieldRef<"AutomationExecution", 'String'>
    readonly status: FieldRef<"AutomationExecution", 'String'>
    readonly startedAt: FieldRef<"AutomationExecution", 'DateTime'>
    readonly completedAt: FieldRef<"AutomationExecution", 'DateTime'>
    readonly createdAt: FieldRef<"AutomationExecution", 'DateTime'>
    readonly updatedAt: FieldRef<"AutomationExecution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutomationExecution findUnique
   */
  export type AutomationExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * Filter, which AutomationExecution to fetch.
     */
    where: AutomationExecutionWhereUniqueInput
  }

  /**
   * AutomationExecution findUniqueOrThrow
   */
  export type AutomationExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * Filter, which AutomationExecution to fetch.
     */
    where: AutomationExecutionWhereUniqueInput
  }

  /**
   * AutomationExecution findFirst
   */
  export type AutomationExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * Filter, which AutomationExecution to fetch.
     */
    where?: AutomationExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationExecutions to fetch.
     */
    orderBy?: AutomationExecutionOrderByWithRelationInput | AutomationExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationExecutions.
     */
    cursor?: AutomationExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationExecutions.
     */
    distinct?: AutomationExecutionScalarFieldEnum | AutomationExecutionScalarFieldEnum[]
  }

  /**
   * AutomationExecution findFirstOrThrow
   */
  export type AutomationExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * Filter, which AutomationExecution to fetch.
     */
    where?: AutomationExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationExecutions to fetch.
     */
    orderBy?: AutomationExecutionOrderByWithRelationInput | AutomationExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationExecutions.
     */
    cursor?: AutomationExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationExecutions.
     */
    distinct?: AutomationExecutionScalarFieldEnum | AutomationExecutionScalarFieldEnum[]
  }

  /**
   * AutomationExecution findMany
   */
  export type AutomationExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * Filter, which AutomationExecutions to fetch.
     */
    where?: AutomationExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationExecutions to fetch.
     */
    orderBy?: AutomationExecutionOrderByWithRelationInput | AutomationExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationExecutions.
     */
    cursor?: AutomationExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationExecutions.
     */
    skip?: number
    distinct?: AutomationExecutionScalarFieldEnum | AutomationExecutionScalarFieldEnum[]
  }

  /**
   * AutomationExecution create
   */
  export type AutomationExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationExecution.
     */
    data: XOR<AutomationExecutionCreateInput, AutomationExecutionUncheckedCreateInput>
  }

  /**
   * AutomationExecution createMany
   */
  export type AutomationExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationExecutions.
     */
    data: AutomationExecutionCreateManyInput | AutomationExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationExecution createManyAndReturn
   */
  export type AutomationExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many AutomationExecutions.
     */
    data: AutomationExecutionCreateManyInput | AutomationExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationExecution update
   */
  export type AutomationExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationExecution.
     */
    data: XOR<AutomationExecutionUpdateInput, AutomationExecutionUncheckedUpdateInput>
    /**
     * Choose, which AutomationExecution to update.
     */
    where: AutomationExecutionWhereUniqueInput
  }

  /**
   * AutomationExecution updateMany
   */
  export type AutomationExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationExecutions.
     */
    data: XOR<AutomationExecutionUpdateManyMutationInput, AutomationExecutionUncheckedUpdateManyInput>
    /**
     * Filter which AutomationExecutions to update
     */
    where?: AutomationExecutionWhereInput
    /**
     * Limit how many AutomationExecutions to update.
     */
    limit?: number
  }

  /**
   * AutomationExecution updateManyAndReturn
   */
  export type AutomationExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * The data used to update AutomationExecutions.
     */
    data: XOR<AutomationExecutionUpdateManyMutationInput, AutomationExecutionUncheckedUpdateManyInput>
    /**
     * Filter which AutomationExecutions to update
     */
    where?: AutomationExecutionWhereInput
    /**
     * Limit how many AutomationExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationExecution upsert
   */
  export type AutomationExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationExecution to update in case it exists.
     */
    where: AutomationExecutionWhereUniqueInput
    /**
     * In case the AutomationExecution found by the `where` argument doesn't exist, create a new AutomationExecution with this data.
     */
    create: XOR<AutomationExecutionCreateInput, AutomationExecutionUncheckedCreateInput>
    /**
     * In case the AutomationExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationExecutionUpdateInput, AutomationExecutionUncheckedUpdateInput>
  }

  /**
   * AutomationExecution delete
   */
  export type AutomationExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
    /**
     * Filter which AutomationExecution to delete.
     */
    where: AutomationExecutionWhereUniqueInput
  }

  /**
   * AutomationExecution deleteMany
   */
  export type AutomationExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationExecutions to delete
     */
    where?: AutomationExecutionWhereInput
    /**
     * Limit how many AutomationExecutions to delete.
     */
    limit?: number
  }

  /**
   * AutomationExecution.results
   */
  export type AutomationExecution$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    where?: AutomationStepResultWhereInput
    orderBy?: AutomationStepResultOrderByWithRelationInput | AutomationStepResultOrderByWithRelationInput[]
    cursor?: AutomationStepResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationStepResultScalarFieldEnum | AutomationStepResultScalarFieldEnum[]
  }

  /**
   * AutomationExecution without action
   */
  export type AutomationExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationExecution
     */
    select?: AutomationExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationExecution
     */
    omit?: AutomationExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationExecutionInclude<ExtArgs> | null
  }


  /**
   * Model AutomationStepResult
   */

  export type AggregateAutomationStepResult = {
    _count: AutomationStepResultCountAggregateOutputType | null
    _min: AutomationStepResultMinAggregateOutputType | null
    _max: AutomationStepResultMaxAggregateOutputType | null
  }

  export type AutomationStepResultMinAggregateOutputType = {
    id: string | null
    executionId: string | null
    stepId: string | null
    status: string | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type AutomationStepResultMaxAggregateOutputType = {
    id: string | null
    executionId: string | null
    stepId: string | null
    status: string | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type AutomationStepResultCountAggregateOutputType = {
    id: number
    executionId: number
    stepId: number
    status: number
    output: number
    error: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type AutomationStepResultMinAggregateInputType = {
    id?: true
    executionId?: true
    stepId?: true
    status?: true
    error?: true
    startedAt?: true
    completedAt?: true
  }

  export type AutomationStepResultMaxAggregateInputType = {
    id?: true
    executionId?: true
    stepId?: true
    status?: true
    error?: true
    startedAt?: true
    completedAt?: true
  }

  export type AutomationStepResultCountAggregateInputType = {
    id?: true
    executionId?: true
    stepId?: true
    status?: true
    output?: true
    error?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type AutomationStepResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationStepResult to aggregate.
     */
    where?: AutomationStepResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationStepResults to fetch.
     */
    orderBy?: AutomationStepResultOrderByWithRelationInput | AutomationStepResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationStepResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationStepResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationStepResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationStepResults
    **/
    _count?: true | AutomationStepResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationStepResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationStepResultMaxAggregateInputType
  }

  export type GetAutomationStepResultAggregateType<T extends AutomationStepResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationStepResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationStepResult[P]>
      : GetScalarType<T[P], AggregateAutomationStepResult[P]>
  }




  export type AutomationStepResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationStepResultWhereInput
    orderBy?: AutomationStepResultOrderByWithAggregationInput | AutomationStepResultOrderByWithAggregationInput[]
    by: AutomationStepResultScalarFieldEnum[] | AutomationStepResultScalarFieldEnum
    having?: AutomationStepResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationStepResultCountAggregateInputType | true
    _min?: AutomationStepResultMinAggregateInputType
    _max?: AutomationStepResultMaxAggregateInputType
  }

  export type AutomationStepResultGroupByOutputType = {
    id: string
    executionId: string
    stepId: string
    status: string
    output: JsonValue | null
    error: string | null
    startedAt: Date
    completedAt: Date | null
    _count: AutomationStepResultCountAggregateOutputType | null
    _min: AutomationStepResultMinAggregateOutputType | null
    _max: AutomationStepResultMaxAggregateOutputType | null
  }

  type GetAutomationStepResultGroupByPayload<T extends AutomationStepResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationStepResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationStepResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationStepResultGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationStepResultGroupByOutputType[P]>
        }
      >
    >


  export type AutomationStepResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionId?: boolean
    stepId?: boolean
    status?: boolean
    output?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    execution?: boolean | AutomationExecutionDefaultArgs<ExtArgs>
    step?: boolean | AutomationStepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationStepResult"]>

  export type AutomationStepResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionId?: boolean
    stepId?: boolean
    status?: boolean
    output?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    execution?: boolean | AutomationExecutionDefaultArgs<ExtArgs>
    step?: boolean | AutomationStepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationStepResult"]>

  export type AutomationStepResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionId?: boolean
    stepId?: boolean
    status?: boolean
    output?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    execution?: boolean | AutomationExecutionDefaultArgs<ExtArgs>
    step?: boolean | AutomationStepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationStepResult"]>

  export type AutomationStepResultSelectScalar = {
    id?: boolean
    executionId?: boolean
    stepId?: boolean
    status?: boolean
    output?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type AutomationStepResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "executionId" | "stepId" | "status" | "output" | "error" | "startedAt" | "completedAt", ExtArgs["result"]["automationStepResult"]>
  export type AutomationStepResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | AutomationExecutionDefaultArgs<ExtArgs>
    step?: boolean | AutomationStepDefaultArgs<ExtArgs>
  }
  export type AutomationStepResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | AutomationExecutionDefaultArgs<ExtArgs>
    step?: boolean | AutomationStepDefaultArgs<ExtArgs>
  }
  export type AutomationStepResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | AutomationExecutionDefaultArgs<ExtArgs>
    step?: boolean | AutomationStepDefaultArgs<ExtArgs>
  }

  export type $AutomationStepResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationStepResult"
    objects: {
      execution: Prisma.$AutomationExecutionPayload<ExtArgs>
      step: Prisma.$AutomationStepPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      executionId: string
      stepId: string
      status: string
      output: Prisma.JsonValue | null
      error: string | null
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["automationStepResult"]>
    composites: {}
  }

  type AutomationStepResultGetPayload<S extends boolean | null | undefined | AutomationStepResultDefaultArgs> = $Result.GetResult<Prisma.$AutomationStepResultPayload, S>

  type AutomationStepResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationStepResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationStepResultCountAggregateInputType | true
    }

  export interface AutomationStepResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationStepResult'], meta: { name: 'AutomationStepResult' } }
    /**
     * Find zero or one AutomationStepResult that matches the filter.
     * @param {AutomationStepResultFindUniqueArgs} args - Arguments to find a AutomationStepResult
     * @example
     * // Get one AutomationStepResult
     * const automationStepResult = await prisma.automationStepResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationStepResultFindUniqueArgs>(args: SelectSubset<T, AutomationStepResultFindUniqueArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AutomationStepResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationStepResultFindUniqueOrThrowArgs} args - Arguments to find a AutomationStepResult
     * @example
     * // Get one AutomationStepResult
     * const automationStepResult = await prisma.automationStepResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationStepResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationStepResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationStepResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultFindFirstArgs} args - Arguments to find a AutomationStepResult
     * @example
     * // Get one AutomationStepResult
     * const automationStepResult = await prisma.automationStepResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationStepResultFindFirstArgs>(args?: SelectSubset<T, AutomationStepResultFindFirstArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AutomationStepResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultFindFirstOrThrowArgs} args - Arguments to find a AutomationStepResult
     * @example
     * // Get one AutomationStepResult
     * const automationStepResult = await prisma.automationStepResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationStepResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationStepResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AutomationStepResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationStepResults
     * const automationStepResults = await prisma.automationStepResult.findMany()
     * 
     * // Get first 10 AutomationStepResults
     * const automationStepResults = await prisma.automationStepResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationStepResultWithIdOnly = await prisma.automationStepResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationStepResultFindManyArgs>(args?: SelectSubset<T, AutomationStepResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AutomationStepResult.
     * @param {AutomationStepResultCreateArgs} args - Arguments to create a AutomationStepResult.
     * @example
     * // Create one AutomationStepResult
     * const AutomationStepResult = await prisma.automationStepResult.create({
     *   data: {
     *     // ... data to create a AutomationStepResult
     *   }
     * })
     * 
     */
    create<T extends AutomationStepResultCreateArgs>(args: SelectSubset<T, AutomationStepResultCreateArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AutomationStepResults.
     * @param {AutomationStepResultCreateManyArgs} args - Arguments to create many AutomationStepResults.
     * @example
     * // Create many AutomationStepResults
     * const automationStepResult = await prisma.automationStepResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationStepResultCreateManyArgs>(args?: SelectSubset<T, AutomationStepResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationStepResults and returns the data saved in the database.
     * @param {AutomationStepResultCreateManyAndReturnArgs} args - Arguments to create many AutomationStepResults.
     * @example
     * // Create many AutomationStepResults
     * const automationStepResult = await prisma.automationStepResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationStepResults and only return the `id`
     * const automationStepResultWithIdOnly = await prisma.automationStepResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationStepResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationStepResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AutomationStepResult.
     * @param {AutomationStepResultDeleteArgs} args - Arguments to delete one AutomationStepResult.
     * @example
     * // Delete one AutomationStepResult
     * const AutomationStepResult = await prisma.automationStepResult.delete({
     *   where: {
     *     // ... filter to delete one AutomationStepResult
     *   }
     * })
     * 
     */
    delete<T extends AutomationStepResultDeleteArgs>(args: SelectSubset<T, AutomationStepResultDeleteArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AutomationStepResult.
     * @param {AutomationStepResultUpdateArgs} args - Arguments to update one AutomationStepResult.
     * @example
     * // Update one AutomationStepResult
     * const automationStepResult = await prisma.automationStepResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationStepResultUpdateArgs>(args: SelectSubset<T, AutomationStepResultUpdateArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AutomationStepResults.
     * @param {AutomationStepResultDeleteManyArgs} args - Arguments to filter AutomationStepResults to delete.
     * @example
     * // Delete a few AutomationStepResults
     * const { count } = await prisma.automationStepResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationStepResultDeleteManyArgs>(args?: SelectSubset<T, AutomationStepResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationStepResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationStepResults
     * const automationStepResult = await prisma.automationStepResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationStepResultUpdateManyArgs>(args: SelectSubset<T, AutomationStepResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationStepResults and returns the data updated in the database.
     * @param {AutomationStepResultUpdateManyAndReturnArgs} args - Arguments to update many AutomationStepResults.
     * @example
     * // Update many AutomationStepResults
     * const automationStepResult = await prisma.automationStepResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomationStepResults and only return the `id`
     * const automationStepResultWithIdOnly = await prisma.automationStepResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutomationStepResultUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationStepResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AutomationStepResult.
     * @param {AutomationStepResultUpsertArgs} args - Arguments to update or create a AutomationStepResult.
     * @example
     * // Update or create a AutomationStepResult
     * const automationStepResult = await prisma.automationStepResult.upsert({
     *   create: {
     *     // ... data to create a AutomationStepResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationStepResult we want to update
     *   }
     * })
     */
    upsert<T extends AutomationStepResultUpsertArgs>(args: SelectSubset<T, AutomationStepResultUpsertArgs<ExtArgs>>): Prisma__AutomationStepResultClient<$Result.GetResult<Prisma.$AutomationStepResultPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AutomationStepResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultCountArgs} args - Arguments to filter AutomationStepResults to count.
     * @example
     * // Count the number of AutomationStepResults
     * const count = await prisma.automationStepResult.count({
     *   where: {
     *     // ... the filter for the AutomationStepResults we want to count
     *   }
     * })
    **/
    count<T extends AutomationStepResultCountArgs>(
      args?: Subset<T, AutomationStepResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationStepResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationStepResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationStepResultAggregateArgs>(args: Subset<T, AutomationStepResultAggregateArgs>): Prisma.PrismaPromise<GetAutomationStepResultAggregateType<T>>

    /**
     * Group by AutomationStepResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationStepResultGroupByArgs} args - Group by arguments.
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
      T extends AutomationStepResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationStepResultGroupByArgs['orderBy'] }
        : { orderBy?: AutomationStepResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationStepResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationStepResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationStepResult model
   */
  readonly fields: AutomationStepResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationStepResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationStepResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    execution<T extends AutomationExecutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationExecutionDefaultArgs<ExtArgs>>): Prisma__AutomationExecutionClient<$Result.GetResult<Prisma.$AutomationExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    step<T extends AutomationStepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationStepDefaultArgs<ExtArgs>>): Prisma__AutomationStepClient<$Result.GetResult<Prisma.$AutomationStepPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the AutomationStepResult model
   */ 
  interface AutomationStepResultFieldRefs {
    readonly id: FieldRef<"AutomationStepResult", 'String'>
    readonly executionId: FieldRef<"AutomationStepResult", 'String'>
    readonly stepId: FieldRef<"AutomationStepResult", 'String'>
    readonly status: FieldRef<"AutomationStepResult", 'String'>
    readonly output: FieldRef<"AutomationStepResult", 'Json'>
    readonly error: FieldRef<"AutomationStepResult", 'String'>
    readonly startedAt: FieldRef<"AutomationStepResult", 'DateTime'>
    readonly completedAt: FieldRef<"AutomationStepResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutomationStepResult findUnique
   */
  export type AutomationStepResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStepResult to fetch.
     */
    where: AutomationStepResultWhereUniqueInput
  }

  /**
   * AutomationStepResult findUniqueOrThrow
   */
  export type AutomationStepResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStepResult to fetch.
     */
    where: AutomationStepResultWhereUniqueInput
  }

  /**
   * AutomationStepResult findFirst
   */
  export type AutomationStepResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStepResult to fetch.
     */
    where?: AutomationStepResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationStepResults to fetch.
     */
    orderBy?: AutomationStepResultOrderByWithRelationInput | AutomationStepResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationStepResults.
     */
    cursor?: AutomationStepResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationStepResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationStepResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationStepResults.
     */
    distinct?: AutomationStepResultScalarFieldEnum | AutomationStepResultScalarFieldEnum[]
  }

  /**
   * AutomationStepResult findFirstOrThrow
   */
  export type AutomationStepResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStepResult to fetch.
     */
    where?: AutomationStepResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationStepResults to fetch.
     */
    orderBy?: AutomationStepResultOrderByWithRelationInput | AutomationStepResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationStepResults.
     */
    cursor?: AutomationStepResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationStepResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationStepResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationStepResults.
     */
    distinct?: AutomationStepResultScalarFieldEnum | AutomationStepResultScalarFieldEnum[]
  }

  /**
   * AutomationStepResult findMany
   */
  export type AutomationStepResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * Filter, which AutomationStepResults to fetch.
     */
    where?: AutomationStepResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationStepResults to fetch.
     */
    orderBy?: AutomationStepResultOrderByWithRelationInput | AutomationStepResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationStepResults.
     */
    cursor?: AutomationStepResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationStepResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationStepResults.
     */
    skip?: number
    distinct?: AutomationStepResultScalarFieldEnum | AutomationStepResultScalarFieldEnum[]
  }

  /**
   * AutomationStepResult create
   */
  export type AutomationStepResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationStepResult.
     */
    data: XOR<AutomationStepResultCreateInput, AutomationStepResultUncheckedCreateInput>
  }

  /**
   * AutomationStepResult createMany
   */
  export type AutomationStepResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationStepResults.
     */
    data: AutomationStepResultCreateManyInput | AutomationStepResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationStepResult createManyAndReturn
   */
  export type AutomationStepResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * The data used to create many AutomationStepResults.
     */
    data: AutomationStepResultCreateManyInput | AutomationStepResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationStepResult update
   */
  export type AutomationStepResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationStepResult.
     */
    data: XOR<AutomationStepResultUpdateInput, AutomationStepResultUncheckedUpdateInput>
    /**
     * Choose, which AutomationStepResult to update.
     */
    where: AutomationStepResultWhereUniqueInput
  }

  /**
   * AutomationStepResult updateMany
   */
  export type AutomationStepResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationStepResults.
     */
    data: XOR<AutomationStepResultUpdateManyMutationInput, AutomationStepResultUncheckedUpdateManyInput>
    /**
     * Filter which AutomationStepResults to update
     */
    where?: AutomationStepResultWhereInput
    /**
     * Limit how many AutomationStepResults to update.
     */
    limit?: number
  }

  /**
   * AutomationStepResult updateManyAndReturn
   */
  export type AutomationStepResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * The data used to update AutomationStepResults.
     */
    data: XOR<AutomationStepResultUpdateManyMutationInput, AutomationStepResultUncheckedUpdateManyInput>
    /**
     * Filter which AutomationStepResults to update
     */
    where?: AutomationStepResultWhereInput
    /**
     * Limit how many AutomationStepResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationStepResult upsert
   */
  export type AutomationStepResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationStepResult to update in case it exists.
     */
    where: AutomationStepResultWhereUniqueInput
    /**
     * In case the AutomationStepResult found by the `where` argument doesn't exist, create a new AutomationStepResult with this data.
     */
    create: XOR<AutomationStepResultCreateInput, AutomationStepResultUncheckedCreateInput>
    /**
     * In case the AutomationStepResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationStepResultUpdateInput, AutomationStepResultUncheckedUpdateInput>
  }

  /**
   * AutomationStepResult delete
   */
  export type AutomationStepResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
    /**
     * Filter which AutomationStepResult to delete.
     */
    where: AutomationStepResultWhereUniqueInput
  }

  /**
   * AutomationStepResult deleteMany
   */
  export type AutomationStepResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationStepResults to delete
     */
    where?: AutomationStepResultWhereInput
    /**
     * Limit how many AutomationStepResults to delete.
     */
    limit?: number
  }

  /**
   * AutomationStepResult without action
   */
  export type AutomationStepResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationStepResult
     */
    select?: AutomationStepResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationStepResult
     */
    omit?: AutomationStepResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationStepResultInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    entityType: number
    entityId: number
    action: number
    before: number
    after: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    entityType?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    entityType?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    entityType?: true
    entityId?: true
    action?: true
    before?: true
    after?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    entityType: string
    entityId: string
    action: string
    before: JsonValue | null
    after: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "entityType" | "entityId" | "action" | "before" | "after" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      entityType: string
      entityId: string
      action: string
      before: Prisma.JsonValue | null
      after: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly before: FieldRef<"AuditLog", 'Json'>
    readonly after: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    status: 'status',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    source: 'source',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    score: 'score',
    status: 'status',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    bed: 'bed',
    bath: 'bath',
    sqft: 'sqft',
    estimatedValue: 'estimatedValue',
    lastSaleDate: 'lastSaleDate',
    lastSalePrice: 'lastSalePrice',
    taxAssessedValue: 'taxAssessedValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const DistressEventScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    type: 'type',
    source: 'source',
    recordedDate: 'recordedDate',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type DistressEventScalarFieldEnum = (typeof DistressEventScalarFieldEnum)[keyof typeof DistressEventScalarFieldEnum]


  export const InteractionScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    channel: 'channel',
    direction: 'direction',
    content: 'content',
    status: 'status',
    sentAt: 'sentAt',
    metadata: 'metadata'
  };

  export type InteractionScalarFieldEnum = (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum]


  export const AiInsightScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    summary: 'summary',
    sentiment: 'sentiment',
    keyTakeaways: 'keyTakeaways',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiInsightScalarFieldEnum = (typeof AiInsightScalarFieldEnum)[keyof typeof AiInsightScalarFieldEnum]


  export const AutomationWorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    triggerType: 'triggerType',
    config: 'config',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutomationWorkflowScalarFieldEnum = (typeof AutomationWorkflowScalarFieldEnum)[keyof typeof AutomationWorkflowScalarFieldEnum]


  export const AutomationStepScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    stepType: 'stepType',
    order: 'order',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutomationStepScalarFieldEnum = (typeof AutomationStepScalarFieldEnum)[keyof typeof AutomationStepScalarFieldEnum]


  export const AutomationExecutionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    leadId: 'leadId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutomationExecutionScalarFieldEnum = (typeof AutomationExecutionScalarFieldEnum)[keyof typeof AutomationExecutionScalarFieldEnum]


  export const AutomationStepResultScalarFieldEnum: {
    id: 'id',
    executionId: 'executionId',
    stepId: 'stepId',
    status: 'status',
    output: 'output',
    error: 'error',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type AutomationStepResultScalarFieldEnum = (typeof AutomationStepResultScalarFieldEnum)[keyof typeof AutomationStepResultScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    before: 'before',
    after: 'after',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LeadSource'
   */
  export type EnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource'>
    


  /**
   * Reference to a field of type 'LeadSource[]'
   */
  export type ListEnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'InteractionChannel'
   */
  export type EnumInteractionChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionChannel'>
    


  /**
   * Reference to a field of type 'InteractionChannel[]'
   */
  export type ListEnumInteractionChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionChannel[]'>
    


  /**
   * Reference to a field of type 'InteractionDirection'
   */
  export type EnumInteractionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionDirection'>
    


  /**
   * Reference to a field of type 'InteractionDirection[]'
   */
  export type ListEnumInteractionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionDirection[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: StringFilter<"User"> | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leads?: LeadListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: StringFilter<"User"> | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leads?: LeadListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: StringWithAggregatesFilter<"User"> | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    name?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    address?: StringFilter<"Lead"> | string
    city?: StringFilter<"Lead"> | string
    state?: StringFilter<"Lead"> | string
    zip?: StringFilter<"Lead"> | string
    score?: IntFilter<"Lead"> | number
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    ownerId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    interactions?: InteractionListRelationFilter
    aiInsights?: AiInsightListRelationFilter
    executions?: AutomationExecutionListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    score?: SortOrder
    status?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    interactions?: InteractionOrderByRelationAggregateInput
    aiInsights?: AiInsightOrderByRelationAggregateInput
    executions?: AutomationExecutionOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    name?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    address?: StringFilter<"Lead"> | string
    city?: StringFilter<"Lead"> | string
    state?: StringFilter<"Lead"> | string
    zip?: StringFilter<"Lead"> | string
    score?: IntFilter<"Lead"> | number
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    ownerId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    interactions?: InteractionListRelationFilter
    aiInsights?: AiInsightListRelationFilter
    executions?: AutomationExecutionListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    score?: SortOrder
    status?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    source?: EnumLeadSourceWithAggregatesFilter<"Lead"> | $Enums.LeadSource
    name?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    address?: StringWithAggregatesFilter<"Lead"> | string
    city?: StringWithAggregatesFilter<"Lead"> | string
    state?: StringWithAggregatesFilter<"Lead"> | string
    zip?: StringWithAggregatesFilter<"Lead"> | string
    score?: IntWithAggregatesFilter<"Lead"> | number
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    ownerId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    leadId?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    lat?: FloatNullableFilter<"Property"> | number | null
    lng?: FloatNullableFilter<"Property"> | number | null
    bed?: IntNullableFilter<"Property"> | number | null
    bath?: FloatNullableFilter<"Property"> | number | null
    sqft?: IntNullableFilter<"Property"> | number | null
    estimatedValue?: FloatNullableFilter<"Property"> | number | null
    lastSaleDate?: DateTimeNullableFilter<"Property"> | Date | string | null
    lastSalePrice?: FloatNullableFilter<"Property"> | number | null
    taxAssessedValue?: FloatNullableFilter<"Property"> | number | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    distressEvents?: DistressEventListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    address?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    bed?: SortOrderInput | SortOrder
    bath?: SortOrderInput | SortOrder
    sqft?: SortOrderInput | SortOrder
    estimatedValue?: SortOrderInput | SortOrder
    lastSaleDate?: SortOrderInput | SortOrder
    lastSalePrice?: SortOrderInput | SortOrder
    taxAssessedValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
    distressEvents?: DistressEventOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leadId?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    address?: StringNullableFilter<"Property"> | string | null
    lat?: FloatNullableFilter<"Property"> | number | null
    lng?: FloatNullableFilter<"Property"> | number | null
    bed?: IntNullableFilter<"Property"> | number | null
    bath?: FloatNullableFilter<"Property"> | number | null
    sqft?: IntNullableFilter<"Property"> | number | null
    estimatedValue?: FloatNullableFilter<"Property"> | number | null
    lastSaleDate?: DateTimeNullableFilter<"Property"> | Date | string | null
    lastSalePrice?: FloatNullableFilter<"Property"> | number | null
    taxAssessedValue?: FloatNullableFilter<"Property"> | number | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    distressEvents?: DistressEventListRelationFilter
  }, "id" | "leadId">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    address?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    bed?: SortOrderInput | SortOrder
    bath?: SortOrderInput | SortOrder
    sqft?: SortOrderInput | SortOrder
    estimatedValue?: SortOrderInput | SortOrder
    lastSaleDate?: SortOrderInput | SortOrder
    lastSalePrice?: SortOrderInput | SortOrder
    taxAssessedValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    leadId?: StringWithAggregatesFilter<"Property"> | string
    address?: StringNullableWithAggregatesFilter<"Property"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    bed?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bath?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    sqft?: IntNullableWithAggregatesFilter<"Property"> | number | null
    estimatedValue?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    lastSaleDate?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    lastSalePrice?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    taxAssessedValue?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type DistressEventWhereInput = {
    AND?: DistressEventWhereInput | DistressEventWhereInput[]
    OR?: DistressEventWhereInput[]
    NOT?: DistressEventWhereInput | DistressEventWhereInput[]
    id?: StringFilter<"DistressEvent"> | string
    propertyId?: StringFilter<"DistressEvent"> | string
    type?: StringFilter<"DistressEvent"> | string
    source?: StringFilter<"DistressEvent"> | string
    recordedDate?: DateTimeFilter<"DistressEvent"> | Date | string
    details?: JsonNullableFilter<"DistressEvent">
    createdAt?: DateTimeFilter<"DistressEvent"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type DistressEventOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    recordedDate?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type DistressEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistressEventWhereInput | DistressEventWhereInput[]
    OR?: DistressEventWhereInput[]
    NOT?: DistressEventWhereInput | DistressEventWhereInput[]
    propertyId?: StringFilter<"DistressEvent"> | string
    type?: StringFilter<"DistressEvent"> | string
    source?: StringFilter<"DistressEvent"> | string
    recordedDate?: DateTimeFilter<"DistressEvent"> | Date | string
    details?: JsonNullableFilter<"DistressEvent">
    createdAt?: DateTimeFilter<"DistressEvent"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type DistressEventOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    recordedDate?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DistressEventCountOrderByAggregateInput
    _max?: DistressEventMaxOrderByAggregateInput
    _min?: DistressEventMinOrderByAggregateInput
  }

  export type DistressEventScalarWhereWithAggregatesInput = {
    AND?: DistressEventScalarWhereWithAggregatesInput | DistressEventScalarWhereWithAggregatesInput[]
    OR?: DistressEventScalarWhereWithAggregatesInput[]
    NOT?: DistressEventScalarWhereWithAggregatesInput | DistressEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistressEvent"> | string
    propertyId?: StringWithAggregatesFilter<"DistressEvent"> | string
    type?: StringWithAggregatesFilter<"DistressEvent"> | string
    source?: StringWithAggregatesFilter<"DistressEvent"> | string
    recordedDate?: DateTimeWithAggregatesFilter<"DistressEvent"> | Date | string
    details?: JsonNullableWithAggregatesFilter<"DistressEvent">
    createdAt?: DateTimeWithAggregatesFilter<"DistressEvent"> | Date | string
  }

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    id?: StringFilter<"Interaction"> | string
    leadId?: StringFilter<"Interaction"> | string
    channel?: EnumInteractionChannelFilter<"Interaction"> | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFilter<"Interaction"> | $Enums.InteractionDirection
    content?: StringFilter<"Interaction"> | string
    status?: StringFilter<"Interaction"> | string
    sentAt?: DateTimeFilter<"Interaction"> | Date | string
    metadata?: JsonNullableFilter<"Interaction">
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    channel?: SortOrder
    direction?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type InteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    leadId?: StringFilter<"Interaction"> | string
    channel?: EnumInteractionChannelFilter<"Interaction"> | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFilter<"Interaction"> | $Enums.InteractionDirection
    content?: StringFilter<"Interaction"> | string
    status?: StringFilter<"Interaction"> | string
    sentAt?: DateTimeFilter<"Interaction"> | Date | string
    metadata?: JsonNullableFilter<"Interaction">
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    channel?: SortOrder
    direction?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: InteractionCountOrderByAggregateInput
    _max?: InteractionMaxOrderByAggregateInput
    _min?: InteractionMinOrderByAggregateInput
  }

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    OR?: InteractionScalarWhereWithAggregatesInput[]
    NOT?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interaction"> | string
    leadId?: StringWithAggregatesFilter<"Interaction"> | string
    channel?: EnumInteractionChannelWithAggregatesFilter<"Interaction"> | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionWithAggregatesFilter<"Interaction"> | $Enums.InteractionDirection
    content?: StringWithAggregatesFilter<"Interaction"> | string
    status?: StringWithAggregatesFilter<"Interaction"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"Interaction">
  }

  export type AiInsightWhereInput = {
    AND?: AiInsightWhereInput | AiInsightWhereInput[]
    OR?: AiInsightWhereInput[]
    NOT?: AiInsightWhereInput | AiInsightWhereInput[]
    id?: StringFilter<"AiInsight"> | string
    leadId?: StringFilter<"AiInsight"> | string
    summary?: StringFilter<"AiInsight"> | string
    sentiment?: StringFilter<"AiInsight"> | string
    keyTakeaways?: JsonFilter<"AiInsight">
    createdAt?: DateTimeFilter<"AiInsight"> | Date | string
    updatedAt?: DateTimeFilter<"AiInsight"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type AiInsightOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    summary?: SortOrder
    sentiment?: SortOrder
    keyTakeaways?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type AiInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiInsightWhereInput | AiInsightWhereInput[]
    OR?: AiInsightWhereInput[]
    NOT?: AiInsightWhereInput | AiInsightWhereInput[]
    leadId?: StringFilter<"AiInsight"> | string
    summary?: StringFilter<"AiInsight"> | string
    sentiment?: StringFilter<"AiInsight"> | string
    keyTakeaways?: JsonFilter<"AiInsight">
    createdAt?: DateTimeFilter<"AiInsight"> | Date | string
    updatedAt?: DateTimeFilter<"AiInsight"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type AiInsightOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    summary?: SortOrder
    sentiment?: SortOrder
    keyTakeaways?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiInsightCountOrderByAggregateInput
    _max?: AiInsightMaxOrderByAggregateInput
    _min?: AiInsightMinOrderByAggregateInput
  }

  export type AiInsightScalarWhereWithAggregatesInput = {
    AND?: AiInsightScalarWhereWithAggregatesInput | AiInsightScalarWhereWithAggregatesInput[]
    OR?: AiInsightScalarWhereWithAggregatesInput[]
    NOT?: AiInsightScalarWhereWithAggregatesInput | AiInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiInsight"> | string
    leadId?: StringWithAggregatesFilter<"AiInsight"> | string
    summary?: StringWithAggregatesFilter<"AiInsight"> | string
    sentiment?: StringWithAggregatesFilter<"AiInsight"> | string
    keyTakeaways?: JsonWithAggregatesFilter<"AiInsight">
    createdAt?: DateTimeWithAggregatesFilter<"AiInsight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiInsight"> | Date | string
  }

  export type AutomationWorkflowWhereInput = {
    AND?: AutomationWorkflowWhereInput | AutomationWorkflowWhereInput[]
    OR?: AutomationWorkflowWhereInput[]
    NOT?: AutomationWorkflowWhereInput | AutomationWorkflowWhereInput[]
    id?: StringFilter<"AutomationWorkflow"> | string
    name?: StringFilter<"AutomationWorkflow"> | string
    triggerType?: StringFilter<"AutomationWorkflow"> | string
    config?: JsonFilter<"AutomationWorkflow">
    isActive?: BoolFilter<"AutomationWorkflow"> | boolean
    createdAt?: DateTimeFilter<"AutomationWorkflow"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationWorkflow"> | Date | string
    steps?: AutomationStepListRelationFilter
    executions?: AutomationExecutionListRelationFilter
  }

  export type AutomationWorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    triggerType?: SortOrder
    config?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    steps?: AutomationStepOrderByRelationAggregateInput
    executions?: AutomationExecutionOrderByRelationAggregateInput
  }

  export type AutomationWorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationWorkflowWhereInput | AutomationWorkflowWhereInput[]
    OR?: AutomationWorkflowWhereInput[]
    NOT?: AutomationWorkflowWhereInput | AutomationWorkflowWhereInput[]
    name?: StringFilter<"AutomationWorkflow"> | string
    triggerType?: StringFilter<"AutomationWorkflow"> | string
    config?: JsonFilter<"AutomationWorkflow">
    isActive?: BoolFilter<"AutomationWorkflow"> | boolean
    createdAt?: DateTimeFilter<"AutomationWorkflow"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationWorkflow"> | Date | string
    steps?: AutomationStepListRelationFilter
    executions?: AutomationExecutionListRelationFilter
  }, "id">

  export type AutomationWorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    triggerType?: SortOrder
    config?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutomationWorkflowCountOrderByAggregateInput
    _max?: AutomationWorkflowMaxOrderByAggregateInput
    _min?: AutomationWorkflowMinOrderByAggregateInput
  }

  export type AutomationWorkflowScalarWhereWithAggregatesInput = {
    AND?: AutomationWorkflowScalarWhereWithAggregatesInput | AutomationWorkflowScalarWhereWithAggregatesInput[]
    OR?: AutomationWorkflowScalarWhereWithAggregatesInput[]
    NOT?: AutomationWorkflowScalarWhereWithAggregatesInput | AutomationWorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationWorkflow"> | string
    name?: StringWithAggregatesFilter<"AutomationWorkflow"> | string
    triggerType?: StringWithAggregatesFilter<"AutomationWorkflow"> | string
    config?: JsonWithAggregatesFilter<"AutomationWorkflow">
    isActive?: BoolWithAggregatesFilter<"AutomationWorkflow"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AutomationWorkflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutomationWorkflow"> | Date | string
  }

  export type AutomationStepWhereInput = {
    AND?: AutomationStepWhereInput | AutomationStepWhereInput[]
    OR?: AutomationStepWhereInput[]
    NOT?: AutomationStepWhereInput | AutomationStepWhereInput[]
    id?: StringFilter<"AutomationStep"> | string
    workflowId?: StringFilter<"AutomationStep"> | string
    stepType?: StringFilter<"AutomationStep"> | string
    order?: IntFilter<"AutomationStep"> | number
    config?: JsonFilter<"AutomationStep">
    createdAt?: DateTimeFilter<"AutomationStep"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationStep"> | Date | string
    workflow?: XOR<AutomationWorkflowScalarRelationFilter, AutomationWorkflowWhereInput>
    results?: AutomationStepResultListRelationFilter
  }

  export type AutomationStepOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepType?: SortOrder
    order?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflow?: AutomationWorkflowOrderByWithRelationInput
    results?: AutomationStepResultOrderByRelationAggregateInput
  }

  export type AutomationStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationStepWhereInput | AutomationStepWhereInput[]
    OR?: AutomationStepWhereInput[]
    NOT?: AutomationStepWhereInput | AutomationStepWhereInput[]
    workflowId?: StringFilter<"AutomationStep"> | string
    stepType?: StringFilter<"AutomationStep"> | string
    order?: IntFilter<"AutomationStep"> | number
    config?: JsonFilter<"AutomationStep">
    createdAt?: DateTimeFilter<"AutomationStep"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationStep"> | Date | string
    workflow?: XOR<AutomationWorkflowScalarRelationFilter, AutomationWorkflowWhereInput>
    results?: AutomationStepResultListRelationFilter
  }, "id">

  export type AutomationStepOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepType?: SortOrder
    order?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutomationStepCountOrderByAggregateInput
    _avg?: AutomationStepAvgOrderByAggregateInput
    _max?: AutomationStepMaxOrderByAggregateInput
    _min?: AutomationStepMinOrderByAggregateInput
    _sum?: AutomationStepSumOrderByAggregateInput
  }

  export type AutomationStepScalarWhereWithAggregatesInput = {
    AND?: AutomationStepScalarWhereWithAggregatesInput | AutomationStepScalarWhereWithAggregatesInput[]
    OR?: AutomationStepScalarWhereWithAggregatesInput[]
    NOT?: AutomationStepScalarWhereWithAggregatesInput | AutomationStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationStep"> | string
    workflowId?: StringWithAggregatesFilter<"AutomationStep"> | string
    stepType?: StringWithAggregatesFilter<"AutomationStep"> | string
    order?: IntWithAggregatesFilter<"AutomationStep"> | number
    config?: JsonWithAggregatesFilter<"AutomationStep">
    createdAt?: DateTimeWithAggregatesFilter<"AutomationStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutomationStep"> | Date | string
  }

  export type AutomationExecutionWhereInput = {
    AND?: AutomationExecutionWhereInput | AutomationExecutionWhereInput[]
    OR?: AutomationExecutionWhereInput[]
    NOT?: AutomationExecutionWhereInput | AutomationExecutionWhereInput[]
    id?: StringFilter<"AutomationExecution"> | string
    workflowId?: StringFilter<"AutomationExecution"> | string
    leadId?: StringFilter<"AutomationExecution"> | string
    status?: StringFilter<"AutomationExecution"> | string
    startedAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"AutomationExecution"> | Date | string | null
    createdAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    workflow?: XOR<AutomationWorkflowScalarRelationFilter, AutomationWorkflowWhereInput>
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    results?: AutomationStepResultListRelationFilter
  }

  export type AutomationExecutionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflow?: AutomationWorkflowOrderByWithRelationInput
    lead?: LeadOrderByWithRelationInput
    results?: AutomationStepResultOrderByRelationAggregateInput
  }

  export type AutomationExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationExecutionWhereInput | AutomationExecutionWhereInput[]
    OR?: AutomationExecutionWhereInput[]
    NOT?: AutomationExecutionWhereInput | AutomationExecutionWhereInput[]
    workflowId?: StringFilter<"AutomationExecution"> | string
    leadId?: StringFilter<"AutomationExecution"> | string
    status?: StringFilter<"AutomationExecution"> | string
    startedAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"AutomationExecution"> | Date | string | null
    createdAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    workflow?: XOR<AutomationWorkflowScalarRelationFilter, AutomationWorkflowWhereInput>
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    results?: AutomationStepResultListRelationFilter
  }, "id">

  export type AutomationExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutomationExecutionCountOrderByAggregateInput
    _max?: AutomationExecutionMaxOrderByAggregateInput
    _min?: AutomationExecutionMinOrderByAggregateInput
  }

  export type AutomationExecutionScalarWhereWithAggregatesInput = {
    AND?: AutomationExecutionScalarWhereWithAggregatesInput | AutomationExecutionScalarWhereWithAggregatesInput[]
    OR?: AutomationExecutionScalarWhereWithAggregatesInput[]
    NOT?: AutomationExecutionScalarWhereWithAggregatesInput | AutomationExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationExecution"> | string
    workflowId?: StringWithAggregatesFilter<"AutomationExecution"> | string
    leadId?: StringWithAggregatesFilter<"AutomationExecution"> | string
    status?: StringWithAggregatesFilter<"AutomationExecution"> | string
    startedAt?: DateTimeWithAggregatesFilter<"AutomationExecution"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AutomationExecution"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AutomationExecution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutomationExecution"> | Date | string
  }

  export type AutomationStepResultWhereInput = {
    AND?: AutomationStepResultWhereInput | AutomationStepResultWhereInput[]
    OR?: AutomationStepResultWhereInput[]
    NOT?: AutomationStepResultWhereInput | AutomationStepResultWhereInput[]
    id?: StringFilter<"AutomationStepResult"> | string
    executionId?: StringFilter<"AutomationStepResult"> | string
    stepId?: StringFilter<"AutomationStepResult"> | string
    status?: StringFilter<"AutomationStepResult"> | string
    output?: JsonNullableFilter<"AutomationStepResult">
    error?: StringNullableFilter<"AutomationStepResult"> | string | null
    startedAt?: DateTimeFilter<"AutomationStepResult"> | Date | string
    completedAt?: DateTimeNullableFilter<"AutomationStepResult"> | Date | string | null
    execution?: XOR<AutomationExecutionScalarRelationFilter, AutomationExecutionWhereInput>
    step?: XOR<AutomationStepScalarRelationFilter, AutomationStepWhereInput>
  }

  export type AutomationStepResultOrderByWithRelationInput = {
    id?: SortOrder
    executionId?: SortOrder
    stepId?: SortOrder
    status?: SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    execution?: AutomationExecutionOrderByWithRelationInput
    step?: AutomationStepOrderByWithRelationInput
  }

  export type AutomationStepResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationStepResultWhereInput | AutomationStepResultWhereInput[]
    OR?: AutomationStepResultWhereInput[]
    NOT?: AutomationStepResultWhereInput | AutomationStepResultWhereInput[]
    executionId?: StringFilter<"AutomationStepResult"> | string
    stepId?: StringFilter<"AutomationStepResult"> | string
    status?: StringFilter<"AutomationStepResult"> | string
    output?: JsonNullableFilter<"AutomationStepResult">
    error?: StringNullableFilter<"AutomationStepResult"> | string | null
    startedAt?: DateTimeFilter<"AutomationStepResult"> | Date | string
    completedAt?: DateTimeNullableFilter<"AutomationStepResult"> | Date | string | null
    execution?: XOR<AutomationExecutionScalarRelationFilter, AutomationExecutionWhereInput>
    step?: XOR<AutomationStepScalarRelationFilter, AutomationStepWhereInput>
  }, "id">

  export type AutomationStepResultOrderByWithAggregationInput = {
    id?: SortOrder
    executionId?: SortOrder
    stepId?: SortOrder
    status?: SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: AutomationStepResultCountOrderByAggregateInput
    _max?: AutomationStepResultMaxOrderByAggregateInput
    _min?: AutomationStepResultMinOrderByAggregateInput
  }

  export type AutomationStepResultScalarWhereWithAggregatesInput = {
    AND?: AutomationStepResultScalarWhereWithAggregatesInput | AutomationStepResultScalarWhereWithAggregatesInput[]
    OR?: AutomationStepResultScalarWhereWithAggregatesInput[]
    NOT?: AutomationStepResultScalarWhereWithAggregatesInput | AutomationStepResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationStepResult"> | string
    executionId?: StringWithAggregatesFilter<"AutomationStepResult"> | string
    stepId?: StringWithAggregatesFilter<"AutomationStepResult"> | string
    status?: StringWithAggregatesFilter<"AutomationStepResult"> | string
    output?: JsonNullableWithAggregatesFilter<"AutomationStepResult">
    error?: StringNullableWithAggregatesFilter<"AutomationStepResult"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"AutomationStepResult"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AutomationStepResult"> | Date | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    before?: JsonNullableWithAggregatesFilter<"AuditLog">
    after?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutLeadsInput
    property?: PropertyCreateNestedOneWithoutLeadInput
    interactions?: InteractionCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedOneWithoutLeadInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutLeadsNestedInput
    property?: PropertyUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutPropertyInput
    distressEvents?: DistressEventCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    leadId: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distressEvents?: DistressEventUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutPropertyNestedInput
    distressEvents?: DistressEventUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distressEvents?: DistressEventUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    leadId: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistressEventCreateInput = {
    id?: string
    type: string
    source: string
    recordedDate: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutDistressEventsInput
  }

  export type DistressEventUncheckedCreateInput = {
    id?: string
    propertyId: string
    type: string
    source: string
    recordedDate: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DistressEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutDistressEventsNestedInput
  }

  export type DistressEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistressEventCreateManyInput = {
    id?: string
    propertyId: string
    type: string
    source: string
    recordedDate: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DistressEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistressEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateInput = {
    id?: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status?: string
    sentAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lead: LeadCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateInput = {
    id?: string
    leadId: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status?: string
    sentAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lead?: LeadUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionCreateManyInput = {
    id?: string
    leadId: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status?: string
    sentAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AiInsightCreateInput = {
    id?: string
    summary: string
    sentiment: string
    keyTakeaways: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutAiInsightsInput
  }

  export type AiInsightUncheckedCreateInput = {
    id?: string
    leadId: string
    summary: string
    sentiment: string
    keyTakeaways: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutAiInsightsNestedInput
  }

  export type AiInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInsightCreateManyInput = {
    id?: string
    leadId: string
    summary: string
    sentiment: string
    keyTakeaways: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationWorkflowCreateInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: AutomationStepCreateNestedManyWithoutWorkflowInput
    executions?: AutomationExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type AutomationWorkflowUncheckedCreateInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: AutomationStepUncheckedCreateNestedManyWithoutWorkflowInput
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type AutomationWorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AutomationStepUpdateManyWithoutWorkflowNestedInput
    executions?: AutomationExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type AutomationWorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AutomationStepUncheckedUpdateManyWithoutWorkflowNestedInput
    executions?: AutomationExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type AutomationWorkflowCreateManyInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationWorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationWorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationStepCreateInput = {
    id?: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: AutomationWorkflowCreateNestedOneWithoutStepsInput
    results?: AutomationStepResultCreateNestedManyWithoutStepInput
  }

  export type AutomationStepUncheckedCreateInput = {
    id?: string
    workflowId: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: AutomationStepResultUncheckedCreateNestedManyWithoutStepInput
  }

  export type AutomationStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: AutomationWorkflowUpdateOneRequiredWithoutStepsNestedInput
    results?: AutomationStepResultUpdateManyWithoutStepNestedInput
  }

  export type AutomationStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: AutomationStepResultUncheckedUpdateManyWithoutStepNestedInput
  }

  export type AutomationStepCreateManyInput = {
    id?: string
    workflowId: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationExecutionCreateInput = {
    id?: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: AutomationWorkflowCreateNestedOneWithoutExecutionsInput
    lead: LeadCreateNestedOneWithoutExecutionsInput
    results?: AutomationStepResultCreateNestedManyWithoutExecutionInput
  }

  export type AutomationExecutionUncheckedCreateInput = {
    id?: string
    workflowId: string
    leadId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: AutomationStepResultUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type AutomationExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: AutomationWorkflowUpdateOneRequiredWithoutExecutionsNestedInput
    lead?: LeadUpdateOneRequiredWithoutExecutionsNestedInput
    results?: AutomationStepResultUpdateManyWithoutExecutionNestedInput
  }

  export type AutomationExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: AutomationStepResultUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type AutomationExecutionCreateManyInput = {
    id?: string
    workflowId: string
    leadId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationStepResultCreateInput = {
    id?: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    execution: AutomationExecutionCreateNestedOneWithoutResultsInput
    step: AutomationStepCreateNestedOneWithoutResultsInput
  }

  export type AutomationStepResultUncheckedCreateInput = {
    id?: string
    executionId: string
    stepId: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AutomationStepResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution?: AutomationExecutionUpdateOneRequiredWithoutResultsNestedInput
    step?: AutomationStepUpdateOneRequiredWithoutResultsNestedInput
  }

  export type AutomationStepResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationStepResultCreateManyInput = {
    id?: string
    executionId: string
    stepId: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AutomationStepResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationStepResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
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

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PropertyNullableScalarRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput
    some?: InteractionWhereInput
    none?: InteractionWhereInput
  }

  export type AiInsightListRelationFilter = {
    every?: AiInsightWhereInput
    some?: AiInsightWhereInput
    none?: AiInsightWhereInput
  }

  export type AutomationExecutionListRelationFilter = {
    every?: AutomationExecutionWhereInput
    some?: AutomationExecutionWhereInput
    none?: AutomationExecutionWhereInput
  }

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    score?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    score?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    score?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
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

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type DistressEventListRelationFilter = {
    every?: DistressEventWhereInput
    some?: DistressEventWhereInput
    none?: DistressEventWhereInput
  }

  export type DistressEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    bed?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    estimatedValue?: SortOrder
    lastSaleDate?: SortOrder
    lastSalePrice?: SortOrder
    taxAssessedValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    bed?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    estimatedValue?: SortOrder
    lastSalePrice?: SortOrder
    taxAssessedValue?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    bed?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    estimatedValue?: SortOrder
    lastSaleDate?: SortOrder
    lastSalePrice?: SortOrder
    taxAssessedValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    bed?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    estimatedValue?: SortOrder
    lastSaleDate?: SortOrder
    lastSalePrice?: SortOrder
    taxAssessedValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    bed?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    estimatedValue?: SortOrder
    lastSalePrice?: SortOrder
    taxAssessedValue?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type DistressEventCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    recordedDate?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type DistressEventMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    recordedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type DistressEventMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    recordedDate?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumInteractionChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionChannel | EnumInteractionChannelFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionChannelFilter<$PrismaModel> | $Enums.InteractionChannel
  }

  export type EnumInteractionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionDirection | EnumInteractionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionDirectionFilter<$PrismaModel> | $Enums.InteractionDirection
  }

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    channel?: SortOrder
    direction?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    metadata?: SortOrder
  }

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    channel?: SortOrder
    direction?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
  }

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    channel?: SortOrder
    direction?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
  }

  export type EnumInteractionChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionChannel | EnumInteractionChannelFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionChannelWithAggregatesFilter<$PrismaModel> | $Enums.InteractionChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionChannelFilter<$PrismaModel>
    _max?: NestedEnumInteractionChannelFilter<$PrismaModel>
  }

  export type EnumInteractionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionDirection | EnumInteractionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.InteractionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionDirectionFilter<$PrismaModel>
    _max?: NestedEnumInteractionDirectionFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AiInsightCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    summary?: SortOrder
    sentiment?: SortOrder
    keyTakeaways?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    summary?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInsightMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    summary?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AutomationStepListRelationFilter = {
    every?: AutomationStepWhereInput
    some?: AutomationStepWhereInput
    none?: AutomationStepWhereInput
  }

  export type AutomationStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationWorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    triggerType?: SortOrder
    config?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationWorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    triggerType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationWorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    triggerType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AutomationWorkflowScalarRelationFilter = {
    is?: AutomationWorkflowWhereInput
    isNot?: AutomationWorkflowWhereInput
  }

  export type AutomationStepResultListRelationFilter = {
    every?: AutomationStepResultWhereInput
    some?: AutomationStepResultWhereInput
    none?: AutomationStepResultWhereInput
  }

  export type AutomationStepResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationStepCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepType?: SortOrder
    order?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationStepAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AutomationStepMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepType?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationStepMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepType?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationStepSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AutomationExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationExecutionScalarRelationFilter = {
    is?: AutomationExecutionWhereInput
    isNot?: AutomationExecutionWhereInput
  }

  export type AutomationStepScalarRelationFilter = {
    is?: AutomationStepWhereInput
    isNot?: AutomationStepWhereInput
  }

  export type AutomationStepResultCountOrderByAggregateInput = {
    id?: SortOrder
    executionId?: SortOrder
    stepId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type AutomationStepResultMaxOrderByAggregateInput = {
    id?: SortOrder
    executionId?: SortOrder
    stepId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type AutomationStepResultMinOrderByAggregateInput = {
    id?: SortOrder
    executionId?: SortOrder
    stepId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrder
    after?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LeadCreateWithoutOwnerInput, LeadUncheckedCreateWithoutOwnerInput> | LeadCreateWithoutOwnerInput[] | LeadUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutOwnerInput | LeadCreateOrConnectWithoutOwnerInput[]
    createMany?: LeadCreateManyOwnerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LeadCreateWithoutOwnerInput, LeadUncheckedCreateWithoutOwnerInput> | LeadCreateWithoutOwnerInput[] | LeadUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutOwnerInput | LeadCreateOrConnectWithoutOwnerInput[]
    createMany?: LeadCreateManyOwnerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeadUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LeadCreateWithoutOwnerInput, LeadUncheckedCreateWithoutOwnerInput> | LeadCreateWithoutOwnerInput[] | LeadUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutOwnerInput | LeadCreateOrConnectWithoutOwnerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutOwnerInput | LeadUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LeadCreateManyOwnerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutOwnerInput | LeadUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutOwnerInput | LeadUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LeadCreateWithoutOwnerInput, LeadUncheckedCreateWithoutOwnerInput> | LeadCreateWithoutOwnerInput[] | LeadUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutOwnerInput | LeadCreateOrConnectWithoutOwnerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutOwnerInput | LeadUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LeadCreateManyOwnerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutOwnerInput | LeadUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutOwnerInput | LeadUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLeadsInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutLeadInput = {
    create?: XOR<PropertyCreateWithoutLeadInput, PropertyUncheckedCreateWithoutLeadInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutLeadInput
    connect?: PropertyWhereUniqueInput
  }

  export type InteractionCreateNestedManyWithoutLeadInput = {
    create?: XOR<InteractionCreateWithoutLeadInput, InteractionUncheckedCreateWithoutLeadInput> | InteractionCreateWithoutLeadInput[] | InteractionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutLeadInput | InteractionCreateOrConnectWithoutLeadInput[]
    createMany?: InteractionCreateManyLeadInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type AiInsightCreateNestedManyWithoutLeadInput = {
    create?: XOR<AiInsightCreateWithoutLeadInput, AiInsightUncheckedCreateWithoutLeadInput> | AiInsightCreateWithoutLeadInput[] | AiInsightUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutLeadInput | AiInsightCreateOrConnectWithoutLeadInput[]
    createMany?: AiInsightCreateManyLeadInputEnvelope
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
  }

  export type AutomationExecutionCreateNestedManyWithoutLeadInput = {
    create?: XOR<AutomationExecutionCreateWithoutLeadInput, AutomationExecutionUncheckedCreateWithoutLeadInput> | AutomationExecutionCreateWithoutLeadInput[] | AutomationExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutLeadInput | AutomationExecutionCreateOrConnectWithoutLeadInput[]
    createMany?: AutomationExecutionCreateManyLeadInputEnvelope
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedOneWithoutLeadInput = {
    create?: XOR<PropertyCreateWithoutLeadInput, PropertyUncheckedCreateWithoutLeadInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutLeadInput
    connect?: PropertyWhereUniqueInput
  }

  export type InteractionUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<InteractionCreateWithoutLeadInput, InteractionUncheckedCreateWithoutLeadInput> | InteractionCreateWithoutLeadInput[] | InteractionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutLeadInput | InteractionCreateOrConnectWithoutLeadInput[]
    createMany?: InteractionCreateManyLeadInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type AiInsightUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<AiInsightCreateWithoutLeadInput, AiInsightUncheckedCreateWithoutLeadInput> | AiInsightCreateWithoutLeadInput[] | AiInsightUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutLeadInput | AiInsightCreateOrConnectWithoutLeadInput[]
    createMany?: AiInsightCreateManyLeadInputEnvelope
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
  }

  export type AutomationExecutionUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<AutomationExecutionCreateWithoutLeadInput, AutomationExecutionUncheckedCreateWithoutLeadInput> | AutomationExecutionCreateWithoutLeadInput[] | AutomationExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutLeadInput | AutomationExecutionCreateOrConnectWithoutLeadInput[]
    createMany?: AutomationExecutionCreateManyLeadInputEnvelope
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
  }

  export type EnumLeadSourceFieldUpdateOperationsInput = {
    set?: $Enums.LeadSource
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type UserUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    upsert?: UserUpsertWithoutLeadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadsInput, UserUpdateWithoutLeadsInput>, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type PropertyUpdateOneWithoutLeadNestedInput = {
    create?: XOR<PropertyCreateWithoutLeadInput, PropertyUncheckedCreateWithoutLeadInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutLeadInput
    upsert?: PropertyUpsertWithoutLeadInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutLeadInput, PropertyUpdateWithoutLeadInput>, PropertyUncheckedUpdateWithoutLeadInput>
  }

  export type InteractionUpdateManyWithoutLeadNestedInput = {
    create?: XOR<InteractionCreateWithoutLeadInput, InteractionUncheckedCreateWithoutLeadInput> | InteractionCreateWithoutLeadInput[] | InteractionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutLeadInput | InteractionCreateOrConnectWithoutLeadInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutLeadInput | InteractionUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: InteractionCreateManyLeadInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutLeadInput | InteractionUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutLeadInput | InteractionUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type AiInsightUpdateManyWithoutLeadNestedInput = {
    create?: XOR<AiInsightCreateWithoutLeadInput, AiInsightUncheckedCreateWithoutLeadInput> | AiInsightCreateWithoutLeadInput[] | AiInsightUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutLeadInput | AiInsightCreateOrConnectWithoutLeadInput[]
    upsert?: AiInsightUpsertWithWhereUniqueWithoutLeadInput | AiInsightUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: AiInsightCreateManyLeadInputEnvelope
    set?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    disconnect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    delete?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    update?: AiInsightUpdateWithWhereUniqueWithoutLeadInput | AiInsightUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: AiInsightUpdateManyWithWhereWithoutLeadInput | AiInsightUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
  }

  export type AutomationExecutionUpdateManyWithoutLeadNestedInput = {
    create?: XOR<AutomationExecutionCreateWithoutLeadInput, AutomationExecutionUncheckedCreateWithoutLeadInput> | AutomationExecutionCreateWithoutLeadInput[] | AutomationExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutLeadInput | AutomationExecutionCreateOrConnectWithoutLeadInput[]
    upsert?: AutomationExecutionUpsertWithWhereUniqueWithoutLeadInput | AutomationExecutionUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: AutomationExecutionCreateManyLeadInputEnvelope
    set?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    disconnect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    delete?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    update?: AutomationExecutionUpdateWithWhereUniqueWithoutLeadInput | AutomationExecutionUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: AutomationExecutionUpdateManyWithWhereWithoutLeadInput | AutomationExecutionUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: AutomationExecutionScalarWhereInput | AutomationExecutionScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateOneWithoutLeadNestedInput = {
    create?: XOR<PropertyCreateWithoutLeadInput, PropertyUncheckedCreateWithoutLeadInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutLeadInput
    upsert?: PropertyUpsertWithoutLeadInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutLeadInput, PropertyUpdateWithoutLeadInput>, PropertyUncheckedUpdateWithoutLeadInput>
  }

  export type InteractionUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<InteractionCreateWithoutLeadInput, InteractionUncheckedCreateWithoutLeadInput> | InteractionCreateWithoutLeadInput[] | InteractionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutLeadInput | InteractionCreateOrConnectWithoutLeadInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutLeadInput | InteractionUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: InteractionCreateManyLeadInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutLeadInput | InteractionUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutLeadInput | InteractionUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type AiInsightUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<AiInsightCreateWithoutLeadInput, AiInsightUncheckedCreateWithoutLeadInput> | AiInsightCreateWithoutLeadInput[] | AiInsightUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutLeadInput | AiInsightCreateOrConnectWithoutLeadInput[]
    upsert?: AiInsightUpsertWithWhereUniqueWithoutLeadInput | AiInsightUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: AiInsightCreateManyLeadInputEnvelope
    set?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    disconnect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    delete?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    update?: AiInsightUpdateWithWhereUniqueWithoutLeadInput | AiInsightUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: AiInsightUpdateManyWithWhereWithoutLeadInput | AiInsightUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
  }

  export type AutomationExecutionUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<AutomationExecutionCreateWithoutLeadInput, AutomationExecutionUncheckedCreateWithoutLeadInput> | AutomationExecutionCreateWithoutLeadInput[] | AutomationExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutLeadInput | AutomationExecutionCreateOrConnectWithoutLeadInput[]
    upsert?: AutomationExecutionUpsertWithWhereUniqueWithoutLeadInput | AutomationExecutionUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: AutomationExecutionCreateManyLeadInputEnvelope
    set?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    disconnect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    delete?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    update?: AutomationExecutionUpdateWithWhereUniqueWithoutLeadInput | AutomationExecutionUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: AutomationExecutionUpdateManyWithWhereWithoutLeadInput | AutomationExecutionUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: AutomationExecutionScalarWhereInput | AutomationExecutionScalarWhereInput[]
  }

  export type LeadCreateNestedOneWithoutPropertyInput = {
    create?: XOR<LeadCreateWithoutPropertyInput, LeadUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: LeadCreateOrConnectWithoutPropertyInput
    connect?: LeadWhereUniqueInput
  }

  export type DistressEventCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DistressEventCreateWithoutPropertyInput, DistressEventUncheckedCreateWithoutPropertyInput> | DistressEventCreateWithoutPropertyInput[] | DistressEventUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DistressEventCreateOrConnectWithoutPropertyInput | DistressEventCreateOrConnectWithoutPropertyInput[]
    createMany?: DistressEventCreateManyPropertyInputEnvelope
    connect?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
  }

  export type DistressEventUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DistressEventCreateWithoutPropertyInput, DistressEventUncheckedCreateWithoutPropertyInput> | DistressEventCreateWithoutPropertyInput[] | DistressEventUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DistressEventCreateOrConnectWithoutPropertyInput | DistressEventCreateOrConnectWithoutPropertyInput[]
    createMany?: DistressEventCreateManyPropertyInputEnvelope
    connect?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeadUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<LeadCreateWithoutPropertyInput, LeadUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: LeadCreateOrConnectWithoutPropertyInput
    upsert?: LeadUpsertWithoutPropertyInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutPropertyInput, LeadUpdateWithoutPropertyInput>, LeadUncheckedUpdateWithoutPropertyInput>
  }

  export type DistressEventUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DistressEventCreateWithoutPropertyInput, DistressEventUncheckedCreateWithoutPropertyInput> | DistressEventCreateWithoutPropertyInput[] | DistressEventUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DistressEventCreateOrConnectWithoutPropertyInput | DistressEventCreateOrConnectWithoutPropertyInput[]
    upsert?: DistressEventUpsertWithWhereUniqueWithoutPropertyInput | DistressEventUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DistressEventCreateManyPropertyInputEnvelope
    set?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    disconnect?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    delete?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    connect?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    update?: DistressEventUpdateWithWhereUniqueWithoutPropertyInput | DistressEventUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DistressEventUpdateManyWithWhereWithoutPropertyInput | DistressEventUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DistressEventScalarWhereInput | DistressEventScalarWhereInput[]
  }

  export type DistressEventUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DistressEventCreateWithoutPropertyInput, DistressEventUncheckedCreateWithoutPropertyInput> | DistressEventCreateWithoutPropertyInput[] | DistressEventUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DistressEventCreateOrConnectWithoutPropertyInput | DistressEventCreateOrConnectWithoutPropertyInput[]
    upsert?: DistressEventUpsertWithWhereUniqueWithoutPropertyInput | DistressEventUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DistressEventCreateManyPropertyInputEnvelope
    set?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    disconnect?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    delete?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    connect?: DistressEventWhereUniqueInput | DistressEventWhereUniqueInput[]
    update?: DistressEventUpdateWithWhereUniqueWithoutPropertyInput | DistressEventUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DistressEventUpdateManyWithWhereWithoutPropertyInput | DistressEventUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DistressEventScalarWhereInput | DistressEventScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutDistressEventsInput = {
    create?: XOR<PropertyCreateWithoutDistressEventsInput, PropertyUncheckedCreateWithoutDistressEventsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDistressEventsInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutDistressEventsNestedInput = {
    create?: XOR<PropertyCreateWithoutDistressEventsInput, PropertyUncheckedCreateWithoutDistressEventsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDistressEventsInput
    upsert?: PropertyUpsertWithoutDistressEventsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutDistressEventsInput, PropertyUpdateWithoutDistressEventsInput>, PropertyUncheckedUpdateWithoutDistressEventsInput>
  }

  export type LeadCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<LeadCreateWithoutInteractionsInput, LeadUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutInteractionsInput
    connect?: LeadWhereUniqueInput
  }

  export type EnumInteractionChannelFieldUpdateOperationsInput = {
    set?: $Enums.InteractionChannel
  }

  export type EnumInteractionDirectionFieldUpdateOperationsInput = {
    set?: $Enums.InteractionDirection
  }

  export type LeadUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<LeadCreateWithoutInteractionsInput, LeadUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutInteractionsInput
    upsert?: LeadUpsertWithoutInteractionsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutInteractionsInput, LeadUpdateWithoutInteractionsInput>, LeadUncheckedUpdateWithoutInteractionsInput>
  }

  export type LeadCreateNestedOneWithoutAiInsightsInput = {
    create?: XOR<LeadCreateWithoutAiInsightsInput, LeadUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutAiInsightsInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutAiInsightsNestedInput = {
    create?: XOR<LeadCreateWithoutAiInsightsInput, LeadUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutAiInsightsInput
    upsert?: LeadUpsertWithoutAiInsightsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutAiInsightsInput, LeadUpdateWithoutAiInsightsInput>, LeadUncheckedUpdateWithoutAiInsightsInput>
  }

  export type AutomationStepCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<AutomationStepCreateWithoutWorkflowInput, AutomationStepUncheckedCreateWithoutWorkflowInput> | AutomationStepCreateWithoutWorkflowInput[] | AutomationStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationStepCreateOrConnectWithoutWorkflowInput | AutomationStepCreateOrConnectWithoutWorkflowInput[]
    createMany?: AutomationStepCreateManyWorkflowInputEnvelope
    connect?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
  }

  export type AutomationExecutionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<AutomationExecutionCreateWithoutWorkflowInput, AutomationExecutionUncheckedCreateWithoutWorkflowInput> | AutomationExecutionCreateWithoutWorkflowInput[] | AutomationExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutWorkflowInput | AutomationExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: AutomationExecutionCreateManyWorkflowInputEnvelope
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
  }

  export type AutomationStepUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<AutomationStepCreateWithoutWorkflowInput, AutomationStepUncheckedCreateWithoutWorkflowInput> | AutomationStepCreateWithoutWorkflowInput[] | AutomationStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationStepCreateOrConnectWithoutWorkflowInput | AutomationStepCreateOrConnectWithoutWorkflowInput[]
    createMany?: AutomationStepCreateManyWorkflowInputEnvelope
    connect?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
  }

  export type AutomationExecutionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<AutomationExecutionCreateWithoutWorkflowInput, AutomationExecutionUncheckedCreateWithoutWorkflowInput> | AutomationExecutionCreateWithoutWorkflowInput[] | AutomationExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutWorkflowInput | AutomationExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: AutomationExecutionCreateManyWorkflowInputEnvelope
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AutomationStepUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<AutomationStepCreateWithoutWorkflowInput, AutomationStepUncheckedCreateWithoutWorkflowInput> | AutomationStepCreateWithoutWorkflowInput[] | AutomationStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationStepCreateOrConnectWithoutWorkflowInput | AutomationStepCreateOrConnectWithoutWorkflowInput[]
    upsert?: AutomationStepUpsertWithWhereUniqueWithoutWorkflowInput | AutomationStepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: AutomationStepCreateManyWorkflowInputEnvelope
    set?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    disconnect?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    delete?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    connect?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    update?: AutomationStepUpdateWithWhereUniqueWithoutWorkflowInput | AutomationStepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: AutomationStepUpdateManyWithWhereWithoutWorkflowInput | AutomationStepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: AutomationStepScalarWhereInput | AutomationStepScalarWhereInput[]
  }

  export type AutomationExecutionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<AutomationExecutionCreateWithoutWorkflowInput, AutomationExecutionUncheckedCreateWithoutWorkflowInput> | AutomationExecutionCreateWithoutWorkflowInput[] | AutomationExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutWorkflowInput | AutomationExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: AutomationExecutionUpsertWithWhereUniqueWithoutWorkflowInput | AutomationExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: AutomationExecutionCreateManyWorkflowInputEnvelope
    set?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    disconnect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    delete?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    update?: AutomationExecutionUpdateWithWhereUniqueWithoutWorkflowInput | AutomationExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: AutomationExecutionUpdateManyWithWhereWithoutWorkflowInput | AutomationExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: AutomationExecutionScalarWhereInput | AutomationExecutionScalarWhereInput[]
  }

  export type AutomationStepUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<AutomationStepCreateWithoutWorkflowInput, AutomationStepUncheckedCreateWithoutWorkflowInput> | AutomationStepCreateWithoutWorkflowInput[] | AutomationStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationStepCreateOrConnectWithoutWorkflowInput | AutomationStepCreateOrConnectWithoutWorkflowInput[]
    upsert?: AutomationStepUpsertWithWhereUniqueWithoutWorkflowInput | AutomationStepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: AutomationStepCreateManyWorkflowInputEnvelope
    set?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    disconnect?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    delete?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    connect?: AutomationStepWhereUniqueInput | AutomationStepWhereUniqueInput[]
    update?: AutomationStepUpdateWithWhereUniqueWithoutWorkflowInput | AutomationStepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: AutomationStepUpdateManyWithWhereWithoutWorkflowInput | AutomationStepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: AutomationStepScalarWhereInput | AutomationStepScalarWhereInput[]
  }

  export type AutomationExecutionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<AutomationExecutionCreateWithoutWorkflowInput, AutomationExecutionUncheckedCreateWithoutWorkflowInput> | AutomationExecutionCreateWithoutWorkflowInput[] | AutomationExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutWorkflowInput | AutomationExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: AutomationExecutionUpsertWithWhereUniqueWithoutWorkflowInput | AutomationExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: AutomationExecutionCreateManyWorkflowInputEnvelope
    set?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    disconnect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    delete?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    connect?: AutomationExecutionWhereUniqueInput | AutomationExecutionWhereUniqueInput[]
    update?: AutomationExecutionUpdateWithWhereUniqueWithoutWorkflowInput | AutomationExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: AutomationExecutionUpdateManyWithWhereWithoutWorkflowInput | AutomationExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: AutomationExecutionScalarWhereInput | AutomationExecutionScalarWhereInput[]
  }

  export type AutomationWorkflowCreateNestedOneWithoutStepsInput = {
    create?: XOR<AutomationWorkflowCreateWithoutStepsInput, AutomationWorkflowUncheckedCreateWithoutStepsInput>
    connectOrCreate?: AutomationWorkflowCreateOrConnectWithoutStepsInput
    connect?: AutomationWorkflowWhereUniqueInput
  }

  export type AutomationStepResultCreateNestedManyWithoutStepInput = {
    create?: XOR<AutomationStepResultCreateWithoutStepInput, AutomationStepResultUncheckedCreateWithoutStepInput> | AutomationStepResultCreateWithoutStepInput[] | AutomationStepResultUncheckedCreateWithoutStepInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutStepInput | AutomationStepResultCreateOrConnectWithoutStepInput[]
    createMany?: AutomationStepResultCreateManyStepInputEnvelope
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
  }

  export type AutomationStepResultUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<AutomationStepResultCreateWithoutStepInput, AutomationStepResultUncheckedCreateWithoutStepInput> | AutomationStepResultCreateWithoutStepInput[] | AutomationStepResultUncheckedCreateWithoutStepInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutStepInput | AutomationStepResultCreateOrConnectWithoutStepInput[]
    createMany?: AutomationStepResultCreateManyStepInputEnvelope
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
  }

  export type AutomationWorkflowUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<AutomationWorkflowCreateWithoutStepsInput, AutomationWorkflowUncheckedCreateWithoutStepsInput>
    connectOrCreate?: AutomationWorkflowCreateOrConnectWithoutStepsInput
    upsert?: AutomationWorkflowUpsertWithoutStepsInput
    connect?: AutomationWorkflowWhereUniqueInput
    update?: XOR<XOR<AutomationWorkflowUpdateToOneWithWhereWithoutStepsInput, AutomationWorkflowUpdateWithoutStepsInput>, AutomationWorkflowUncheckedUpdateWithoutStepsInput>
  }

  export type AutomationStepResultUpdateManyWithoutStepNestedInput = {
    create?: XOR<AutomationStepResultCreateWithoutStepInput, AutomationStepResultUncheckedCreateWithoutStepInput> | AutomationStepResultCreateWithoutStepInput[] | AutomationStepResultUncheckedCreateWithoutStepInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutStepInput | AutomationStepResultCreateOrConnectWithoutStepInput[]
    upsert?: AutomationStepResultUpsertWithWhereUniqueWithoutStepInput | AutomationStepResultUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: AutomationStepResultCreateManyStepInputEnvelope
    set?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    disconnect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    delete?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    update?: AutomationStepResultUpdateWithWhereUniqueWithoutStepInput | AutomationStepResultUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: AutomationStepResultUpdateManyWithWhereWithoutStepInput | AutomationStepResultUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: AutomationStepResultScalarWhereInput | AutomationStepResultScalarWhereInput[]
  }

  export type AutomationStepResultUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<AutomationStepResultCreateWithoutStepInput, AutomationStepResultUncheckedCreateWithoutStepInput> | AutomationStepResultCreateWithoutStepInput[] | AutomationStepResultUncheckedCreateWithoutStepInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutStepInput | AutomationStepResultCreateOrConnectWithoutStepInput[]
    upsert?: AutomationStepResultUpsertWithWhereUniqueWithoutStepInput | AutomationStepResultUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: AutomationStepResultCreateManyStepInputEnvelope
    set?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    disconnect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    delete?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    update?: AutomationStepResultUpdateWithWhereUniqueWithoutStepInput | AutomationStepResultUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: AutomationStepResultUpdateManyWithWhereWithoutStepInput | AutomationStepResultUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: AutomationStepResultScalarWhereInput | AutomationStepResultScalarWhereInput[]
  }

  export type AutomationWorkflowCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<AutomationWorkflowCreateWithoutExecutionsInput, AutomationWorkflowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: AutomationWorkflowCreateOrConnectWithoutExecutionsInput
    connect?: AutomationWorkflowWhereUniqueInput
  }

  export type LeadCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<LeadCreateWithoutExecutionsInput, LeadUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutExecutionsInput
    connect?: LeadWhereUniqueInput
  }

  export type AutomationStepResultCreateNestedManyWithoutExecutionInput = {
    create?: XOR<AutomationStepResultCreateWithoutExecutionInput, AutomationStepResultUncheckedCreateWithoutExecutionInput> | AutomationStepResultCreateWithoutExecutionInput[] | AutomationStepResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutExecutionInput | AutomationStepResultCreateOrConnectWithoutExecutionInput[]
    createMany?: AutomationStepResultCreateManyExecutionInputEnvelope
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
  }

  export type AutomationStepResultUncheckedCreateNestedManyWithoutExecutionInput = {
    create?: XOR<AutomationStepResultCreateWithoutExecutionInput, AutomationStepResultUncheckedCreateWithoutExecutionInput> | AutomationStepResultCreateWithoutExecutionInput[] | AutomationStepResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutExecutionInput | AutomationStepResultCreateOrConnectWithoutExecutionInput[]
    createMany?: AutomationStepResultCreateManyExecutionInputEnvelope
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
  }

  export type AutomationWorkflowUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<AutomationWorkflowCreateWithoutExecutionsInput, AutomationWorkflowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: AutomationWorkflowCreateOrConnectWithoutExecutionsInput
    upsert?: AutomationWorkflowUpsertWithoutExecutionsInput
    connect?: AutomationWorkflowWhereUniqueInput
    update?: XOR<XOR<AutomationWorkflowUpdateToOneWithWhereWithoutExecutionsInput, AutomationWorkflowUpdateWithoutExecutionsInput>, AutomationWorkflowUncheckedUpdateWithoutExecutionsInput>
  }

  export type LeadUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<LeadCreateWithoutExecutionsInput, LeadUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutExecutionsInput
    upsert?: LeadUpsertWithoutExecutionsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutExecutionsInput, LeadUpdateWithoutExecutionsInput>, LeadUncheckedUpdateWithoutExecutionsInput>
  }

  export type AutomationStepResultUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<AutomationStepResultCreateWithoutExecutionInput, AutomationStepResultUncheckedCreateWithoutExecutionInput> | AutomationStepResultCreateWithoutExecutionInput[] | AutomationStepResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutExecutionInput | AutomationStepResultCreateOrConnectWithoutExecutionInput[]
    upsert?: AutomationStepResultUpsertWithWhereUniqueWithoutExecutionInput | AutomationStepResultUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: AutomationStepResultCreateManyExecutionInputEnvelope
    set?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    disconnect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    delete?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    update?: AutomationStepResultUpdateWithWhereUniqueWithoutExecutionInput | AutomationStepResultUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: AutomationStepResultUpdateManyWithWhereWithoutExecutionInput | AutomationStepResultUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: AutomationStepResultScalarWhereInput | AutomationStepResultScalarWhereInput[]
  }

  export type AutomationStepResultUncheckedUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<AutomationStepResultCreateWithoutExecutionInput, AutomationStepResultUncheckedCreateWithoutExecutionInput> | AutomationStepResultCreateWithoutExecutionInput[] | AutomationStepResultUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: AutomationStepResultCreateOrConnectWithoutExecutionInput | AutomationStepResultCreateOrConnectWithoutExecutionInput[]
    upsert?: AutomationStepResultUpsertWithWhereUniqueWithoutExecutionInput | AutomationStepResultUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: AutomationStepResultCreateManyExecutionInputEnvelope
    set?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    disconnect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    delete?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    connect?: AutomationStepResultWhereUniqueInput | AutomationStepResultWhereUniqueInput[]
    update?: AutomationStepResultUpdateWithWhereUniqueWithoutExecutionInput | AutomationStepResultUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: AutomationStepResultUpdateManyWithWhereWithoutExecutionInput | AutomationStepResultUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: AutomationStepResultScalarWhereInput | AutomationStepResultScalarWhereInput[]
  }

  export type AutomationExecutionCreateNestedOneWithoutResultsInput = {
    create?: XOR<AutomationExecutionCreateWithoutResultsInput, AutomationExecutionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutResultsInput
    connect?: AutomationExecutionWhereUniqueInput
  }

  export type AutomationStepCreateNestedOneWithoutResultsInput = {
    create?: XOR<AutomationStepCreateWithoutResultsInput, AutomationStepUncheckedCreateWithoutResultsInput>
    connectOrCreate?: AutomationStepCreateOrConnectWithoutResultsInput
    connect?: AutomationStepWhereUniqueInput
  }

  export type AutomationExecutionUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<AutomationExecutionCreateWithoutResultsInput, AutomationExecutionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: AutomationExecutionCreateOrConnectWithoutResultsInput
    upsert?: AutomationExecutionUpsertWithoutResultsInput
    connect?: AutomationExecutionWhereUniqueInput
    update?: XOR<XOR<AutomationExecutionUpdateToOneWithWhereWithoutResultsInput, AutomationExecutionUpdateWithoutResultsInput>, AutomationExecutionUncheckedUpdateWithoutResultsInput>
  }

  export type AutomationStepUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<AutomationStepCreateWithoutResultsInput, AutomationStepUncheckedCreateWithoutResultsInput>
    connectOrCreate?: AutomationStepCreateOrConnectWithoutResultsInput
    upsert?: AutomationStepUpsertWithoutResultsInput
    connect?: AutomationStepWhereUniqueInput
    update?: XOR<XOR<AutomationStepUpdateToOneWithWhereWithoutResultsInput, AutomationStepUpdateWithoutResultsInput>, AutomationStepUncheckedUpdateWithoutResultsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
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

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumInteractionChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionChannel | EnumInteractionChannelFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionChannelFilter<$PrismaModel> | $Enums.InteractionChannel
  }

  export type NestedEnumInteractionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionDirection | EnumInteractionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionDirectionFilter<$PrismaModel> | $Enums.InteractionDirection
  }

  export type NestedEnumInteractionChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionChannel | EnumInteractionChannelFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionChannel[] | ListEnumInteractionChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionChannelWithAggregatesFilter<$PrismaModel> | $Enums.InteractionChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionChannelFilter<$PrismaModel>
    _max?: NestedEnumInteractionChannelFilter<$PrismaModel>
  }

  export type NestedEnumInteractionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionDirection | EnumInteractionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionDirection[] | ListEnumInteractionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.InteractionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionDirectionFilter<$PrismaModel>
    _max?: NestedEnumInteractionDirectionFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type LeadCreateWithoutOwnerInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutLeadInput
    interactions?: InteractionCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutOwnerInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedOneWithoutLeadInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutOwnerInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutOwnerInput, LeadUncheckedCreateWithoutOwnerInput>
  }

  export type LeadCreateManyOwnerInputEnvelope = {
    data: LeadCreateManyOwnerInput | LeadCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutOwnerInput, LeadUncheckedUpdateWithoutOwnerInput>
    create: XOR<LeadCreateWithoutOwnerInput, LeadUncheckedCreateWithoutOwnerInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutOwnerInput, LeadUncheckedUpdateWithoutOwnerInput>
  }

  export type LeadUpdateManyWithWhereWithoutOwnerInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutOwnerInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    name?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    address?: StringFilter<"Lead"> | string
    city?: StringFilter<"Lead"> | string
    state?: StringFilter<"Lead"> | string
    zip?: StringFilter<"Lead"> | string
    score?: IntFilter<"Lead"> | number
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    ownerId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutLeadsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeadsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
  }

  export type PropertyCreateWithoutLeadInput = {
    id?: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distressEvents?: DistressEventCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutLeadInput = {
    id?: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distressEvents?: DistressEventUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutLeadInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutLeadInput, PropertyUncheckedCreateWithoutLeadInput>
  }

  export type InteractionCreateWithoutLeadInput = {
    id?: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status?: string
    sentAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedCreateWithoutLeadInput = {
    id?: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status?: string
    sentAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionCreateOrConnectWithoutLeadInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutLeadInput, InteractionUncheckedCreateWithoutLeadInput>
  }

  export type InteractionCreateManyLeadInputEnvelope = {
    data: InteractionCreateManyLeadInput | InteractionCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type AiInsightCreateWithoutLeadInput = {
    id?: string
    summary: string
    sentiment: string
    keyTakeaways: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInsightUncheckedCreateWithoutLeadInput = {
    id?: string
    summary: string
    sentiment: string
    keyTakeaways: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInsightCreateOrConnectWithoutLeadInput = {
    where: AiInsightWhereUniqueInput
    create: XOR<AiInsightCreateWithoutLeadInput, AiInsightUncheckedCreateWithoutLeadInput>
  }

  export type AiInsightCreateManyLeadInputEnvelope = {
    data: AiInsightCreateManyLeadInput | AiInsightCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type AutomationExecutionCreateWithoutLeadInput = {
    id?: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: AutomationWorkflowCreateNestedOneWithoutExecutionsInput
    results?: AutomationStepResultCreateNestedManyWithoutExecutionInput
  }

  export type AutomationExecutionUncheckedCreateWithoutLeadInput = {
    id?: string
    workflowId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: AutomationStepResultUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type AutomationExecutionCreateOrConnectWithoutLeadInput = {
    where: AutomationExecutionWhereUniqueInput
    create: XOR<AutomationExecutionCreateWithoutLeadInput, AutomationExecutionUncheckedCreateWithoutLeadInput>
  }

  export type AutomationExecutionCreateManyLeadInputEnvelope = {
    data: AutomationExecutionCreateManyLeadInput | AutomationExecutionCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLeadsInput = {
    update: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutLeadInput = {
    update: XOR<PropertyUpdateWithoutLeadInput, PropertyUncheckedUpdateWithoutLeadInput>
    create: XOR<PropertyCreateWithoutLeadInput, PropertyUncheckedCreateWithoutLeadInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutLeadInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutLeadInput, PropertyUncheckedUpdateWithoutLeadInput>
  }

  export type PropertyUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distressEvents?: DistressEventUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distressEvents?: DistressEventUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type InteractionUpsertWithWhereUniqueWithoutLeadInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutLeadInput, InteractionUncheckedUpdateWithoutLeadInput>
    create: XOR<InteractionCreateWithoutLeadInput, InteractionUncheckedCreateWithoutLeadInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutLeadInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutLeadInput, InteractionUncheckedUpdateWithoutLeadInput>
  }

  export type InteractionUpdateManyWithWhereWithoutLeadInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutLeadInput>
  }

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    OR?: InteractionScalarWhereInput[]
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    id?: StringFilter<"Interaction"> | string
    leadId?: StringFilter<"Interaction"> | string
    channel?: EnumInteractionChannelFilter<"Interaction"> | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFilter<"Interaction"> | $Enums.InteractionDirection
    content?: StringFilter<"Interaction"> | string
    status?: StringFilter<"Interaction"> | string
    sentAt?: DateTimeFilter<"Interaction"> | Date | string
    metadata?: JsonNullableFilter<"Interaction">
  }

  export type AiInsightUpsertWithWhereUniqueWithoutLeadInput = {
    where: AiInsightWhereUniqueInput
    update: XOR<AiInsightUpdateWithoutLeadInput, AiInsightUncheckedUpdateWithoutLeadInput>
    create: XOR<AiInsightCreateWithoutLeadInput, AiInsightUncheckedCreateWithoutLeadInput>
  }

  export type AiInsightUpdateWithWhereUniqueWithoutLeadInput = {
    where: AiInsightWhereUniqueInput
    data: XOR<AiInsightUpdateWithoutLeadInput, AiInsightUncheckedUpdateWithoutLeadInput>
  }

  export type AiInsightUpdateManyWithWhereWithoutLeadInput = {
    where: AiInsightScalarWhereInput
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyWithoutLeadInput>
  }

  export type AiInsightScalarWhereInput = {
    AND?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
    OR?: AiInsightScalarWhereInput[]
    NOT?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
    id?: StringFilter<"AiInsight"> | string
    leadId?: StringFilter<"AiInsight"> | string
    summary?: StringFilter<"AiInsight"> | string
    sentiment?: StringFilter<"AiInsight"> | string
    keyTakeaways?: JsonFilter<"AiInsight">
    createdAt?: DateTimeFilter<"AiInsight"> | Date | string
    updatedAt?: DateTimeFilter<"AiInsight"> | Date | string
  }

  export type AutomationExecutionUpsertWithWhereUniqueWithoutLeadInput = {
    where: AutomationExecutionWhereUniqueInput
    update: XOR<AutomationExecutionUpdateWithoutLeadInput, AutomationExecutionUncheckedUpdateWithoutLeadInput>
    create: XOR<AutomationExecutionCreateWithoutLeadInput, AutomationExecutionUncheckedCreateWithoutLeadInput>
  }

  export type AutomationExecutionUpdateWithWhereUniqueWithoutLeadInput = {
    where: AutomationExecutionWhereUniqueInput
    data: XOR<AutomationExecutionUpdateWithoutLeadInput, AutomationExecutionUncheckedUpdateWithoutLeadInput>
  }

  export type AutomationExecutionUpdateManyWithWhereWithoutLeadInput = {
    where: AutomationExecutionScalarWhereInput
    data: XOR<AutomationExecutionUpdateManyMutationInput, AutomationExecutionUncheckedUpdateManyWithoutLeadInput>
  }

  export type AutomationExecutionScalarWhereInput = {
    AND?: AutomationExecutionScalarWhereInput | AutomationExecutionScalarWhereInput[]
    OR?: AutomationExecutionScalarWhereInput[]
    NOT?: AutomationExecutionScalarWhereInput | AutomationExecutionScalarWhereInput[]
    id?: StringFilter<"AutomationExecution"> | string
    workflowId?: StringFilter<"AutomationExecution"> | string
    leadId?: StringFilter<"AutomationExecution"> | string
    status?: StringFilter<"AutomationExecution"> | string
    startedAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"AutomationExecution"> | Date | string | null
    createdAt?: DateTimeFilter<"AutomationExecution"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationExecution"> | Date | string
  }

  export type LeadCreateWithoutPropertyInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutLeadsInput
    interactions?: InteractionCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutPropertyInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interactions?: InteractionUncheckedCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutPropertyInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutPropertyInput, LeadUncheckedCreateWithoutPropertyInput>
  }

  export type DistressEventCreateWithoutPropertyInput = {
    id?: string
    type: string
    source: string
    recordedDate: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DistressEventUncheckedCreateWithoutPropertyInput = {
    id?: string
    type: string
    source: string
    recordedDate: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DistressEventCreateOrConnectWithoutPropertyInput = {
    where: DistressEventWhereUniqueInput
    create: XOR<DistressEventCreateWithoutPropertyInput, DistressEventUncheckedCreateWithoutPropertyInput>
  }

  export type DistressEventCreateManyPropertyInputEnvelope = {
    data: DistressEventCreateManyPropertyInput | DistressEventCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithoutPropertyInput = {
    update: XOR<LeadUpdateWithoutPropertyInput, LeadUncheckedUpdateWithoutPropertyInput>
    create: XOR<LeadCreateWithoutPropertyInput, LeadUncheckedCreateWithoutPropertyInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutPropertyInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutPropertyInput, LeadUncheckedUpdateWithoutPropertyInput>
  }

  export type LeadUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutLeadsNestedInput
    interactions?: InteractionUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: InteractionUncheckedUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type DistressEventUpsertWithWhereUniqueWithoutPropertyInput = {
    where: DistressEventWhereUniqueInput
    update: XOR<DistressEventUpdateWithoutPropertyInput, DistressEventUncheckedUpdateWithoutPropertyInput>
    create: XOR<DistressEventCreateWithoutPropertyInput, DistressEventUncheckedCreateWithoutPropertyInput>
  }

  export type DistressEventUpdateWithWhereUniqueWithoutPropertyInput = {
    where: DistressEventWhereUniqueInput
    data: XOR<DistressEventUpdateWithoutPropertyInput, DistressEventUncheckedUpdateWithoutPropertyInput>
  }

  export type DistressEventUpdateManyWithWhereWithoutPropertyInput = {
    where: DistressEventScalarWhereInput
    data: XOR<DistressEventUpdateManyMutationInput, DistressEventUncheckedUpdateManyWithoutPropertyInput>
  }

  export type DistressEventScalarWhereInput = {
    AND?: DistressEventScalarWhereInput | DistressEventScalarWhereInput[]
    OR?: DistressEventScalarWhereInput[]
    NOT?: DistressEventScalarWhereInput | DistressEventScalarWhereInput[]
    id?: StringFilter<"DistressEvent"> | string
    propertyId?: StringFilter<"DistressEvent"> | string
    type?: StringFilter<"DistressEvent"> | string
    source?: StringFilter<"DistressEvent"> | string
    recordedDate?: DateTimeFilter<"DistressEvent"> | Date | string
    details?: JsonNullableFilter<"DistressEvent">
    createdAt?: DateTimeFilter<"DistressEvent"> | Date | string
  }

  export type PropertyCreateWithoutDistressEventsInput = {
    id?: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutDistressEventsInput = {
    id?: string
    leadId: string
    address?: string | null
    lat?: number | null
    lng?: number | null
    bed?: number | null
    bath?: number | null
    sqft?: number | null
    estimatedValue?: number | null
    lastSaleDate?: Date | string | null
    lastSalePrice?: number | null
    taxAssessedValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCreateOrConnectWithoutDistressEventsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutDistressEventsInput, PropertyUncheckedCreateWithoutDistressEventsInput>
  }

  export type PropertyUpsertWithoutDistressEventsInput = {
    update: XOR<PropertyUpdateWithoutDistressEventsInput, PropertyUncheckedUpdateWithoutDistressEventsInput>
    create: XOR<PropertyCreateWithoutDistressEventsInput, PropertyUncheckedCreateWithoutDistressEventsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutDistressEventsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutDistressEventsInput, PropertyUncheckedUpdateWithoutDistressEventsInput>
  }

  export type PropertyUpdateWithoutDistressEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutDistressEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    bed?: NullableIntFieldUpdateOperationsInput | number | null
    bath?: NullableFloatFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSaleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSalePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAssessedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateWithoutInteractionsInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutLeadsInput
    property?: PropertyCreateNestedOneWithoutLeadInput
    aiInsights?: AiInsightCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutInteractionsInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedOneWithoutLeadInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutInteractionsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutInteractionsInput, LeadUncheckedCreateWithoutInteractionsInput>
  }

  export type LeadUpsertWithoutInteractionsInput = {
    update: XOR<LeadUpdateWithoutInteractionsInput, LeadUncheckedUpdateWithoutInteractionsInput>
    create: XOR<LeadCreateWithoutInteractionsInput, LeadUncheckedCreateWithoutInteractionsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutInteractionsInput, LeadUncheckedUpdateWithoutInteractionsInput>
  }

  export type LeadUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutLeadsNestedInput
    property?: PropertyUpdateOneWithoutLeadNestedInput
    aiInsights?: AiInsightUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateOneWithoutLeadNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutAiInsightsInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutLeadsInput
    property?: PropertyCreateNestedOneWithoutLeadInput
    interactions?: InteractionCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutAiInsightsInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedOneWithoutLeadInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutLeadInput
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutAiInsightsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutAiInsightsInput, LeadUncheckedCreateWithoutAiInsightsInput>
  }

  export type LeadUpsertWithoutAiInsightsInput = {
    update: XOR<LeadUpdateWithoutAiInsightsInput, LeadUncheckedUpdateWithoutAiInsightsInput>
    create: XOR<LeadCreateWithoutAiInsightsInput, LeadUncheckedCreateWithoutAiInsightsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutAiInsightsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutAiInsightsInput, LeadUncheckedUpdateWithoutAiInsightsInput>
  }

  export type LeadUpdateWithoutAiInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutLeadsNestedInput
    property?: PropertyUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutAiInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type AutomationStepCreateWithoutWorkflowInput = {
    id?: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: AutomationStepResultCreateNestedManyWithoutStepInput
  }

  export type AutomationStepUncheckedCreateWithoutWorkflowInput = {
    id?: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: AutomationStepResultUncheckedCreateNestedManyWithoutStepInput
  }

  export type AutomationStepCreateOrConnectWithoutWorkflowInput = {
    where: AutomationStepWhereUniqueInput
    create: XOR<AutomationStepCreateWithoutWorkflowInput, AutomationStepUncheckedCreateWithoutWorkflowInput>
  }

  export type AutomationStepCreateManyWorkflowInputEnvelope = {
    data: AutomationStepCreateManyWorkflowInput | AutomationStepCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type AutomationExecutionCreateWithoutWorkflowInput = {
    id?: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutExecutionsInput
    results?: AutomationStepResultCreateNestedManyWithoutExecutionInput
  }

  export type AutomationExecutionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    leadId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: AutomationStepResultUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type AutomationExecutionCreateOrConnectWithoutWorkflowInput = {
    where: AutomationExecutionWhereUniqueInput
    create: XOR<AutomationExecutionCreateWithoutWorkflowInput, AutomationExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type AutomationExecutionCreateManyWorkflowInputEnvelope = {
    data: AutomationExecutionCreateManyWorkflowInput | AutomationExecutionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type AutomationStepUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: AutomationStepWhereUniqueInput
    update: XOR<AutomationStepUpdateWithoutWorkflowInput, AutomationStepUncheckedUpdateWithoutWorkflowInput>
    create: XOR<AutomationStepCreateWithoutWorkflowInput, AutomationStepUncheckedCreateWithoutWorkflowInput>
  }

  export type AutomationStepUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: AutomationStepWhereUniqueInput
    data: XOR<AutomationStepUpdateWithoutWorkflowInput, AutomationStepUncheckedUpdateWithoutWorkflowInput>
  }

  export type AutomationStepUpdateManyWithWhereWithoutWorkflowInput = {
    where: AutomationStepScalarWhereInput
    data: XOR<AutomationStepUpdateManyMutationInput, AutomationStepUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type AutomationStepScalarWhereInput = {
    AND?: AutomationStepScalarWhereInput | AutomationStepScalarWhereInput[]
    OR?: AutomationStepScalarWhereInput[]
    NOT?: AutomationStepScalarWhereInput | AutomationStepScalarWhereInput[]
    id?: StringFilter<"AutomationStep"> | string
    workflowId?: StringFilter<"AutomationStep"> | string
    stepType?: StringFilter<"AutomationStep"> | string
    order?: IntFilter<"AutomationStep"> | number
    config?: JsonFilter<"AutomationStep">
    createdAt?: DateTimeFilter<"AutomationStep"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationStep"> | Date | string
  }

  export type AutomationExecutionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: AutomationExecutionWhereUniqueInput
    update: XOR<AutomationExecutionUpdateWithoutWorkflowInput, AutomationExecutionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<AutomationExecutionCreateWithoutWorkflowInput, AutomationExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type AutomationExecutionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: AutomationExecutionWhereUniqueInput
    data: XOR<AutomationExecutionUpdateWithoutWorkflowInput, AutomationExecutionUncheckedUpdateWithoutWorkflowInput>
  }

  export type AutomationExecutionUpdateManyWithWhereWithoutWorkflowInput = {
    where: AutomationExecutionScalarWhereInput
    data: XOR<AutomationExecutionUpdateManyMutationInput, AutomationExecutionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type AutomationWorkflowCreateWithoutStepsInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: AutomationExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type AutomationWorkflowUncheckedCreateWithoutStepsInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: AutomationExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type AutomationWorkflowCreateOrConnectWithoutStepsInput = {
    where: AutomationWorkflowWhereUniqueInput
    create: XOR<AutomationWorkflowCreateWithoutStepsInput, AutomationWorkflowUncheckedCreateWithoutStepsInput>
  }

  export type AutomationStepResultCreateWithoutStepInput = {
    id?: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    execution: AutomationExecutionCreateNestedOneWithoutResultsInput
  }

  export type AutomationStepResultUncheckedCreateWithoutStepInput = {
    id?: string
    executionId: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AutomationStepResultCreateOrConnectWithoutStepInput = {
    where: AutomationStepResultWhereUniqueInput
    create: XOR<AutomationStepResultCreateWithoutStepInput, AutomationStepResultUncheckedCreateWithoutStepInput>
  }

  export type AutomationStepResultCreateManyStepInputEnvelope = {
    data: AutomationStepResultCreateManyStepInput | AutomationStepResultCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type AutomationWorkflowUpsertWithoutStepsInput = {
    update: XOR<AutomationWorkflowUpdateWithoutStepsInput, AutomationWorkflowUncheckedUpdateWithoutStepsInput>
    create: XOR<AutomationWorkflowCreateWithoutStepsInput, AutomationWorkflowUncheckedCreateWithoutStepsInput>
    where?: AutomationWorkflowWhereInput
  }

  export type AutomationWorkflowUpdateToOneWithWhereWithoutStepsInput = {
    where?: AutomationWorkflowWhereInput
    data: XOR<AutomationWorkflowUpdateWithoutStepsInput, AutomationWorkflowUncheckedUpdateWithoutStepsInput>
  }

  export type AutomationWorkflowUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: AutomationExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type AutomationWorkflowUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: AutomationExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type AutomationStepResultUpsertWithWhereUniqueWithoutStepInput = {
    where: AutomationStepResultWhereUniqueInput
    update: XOR<AutomationStepResultUpdateWithoutStepInput, AutomationStepResultUncheckedUpdateWithoutStepInput>
    create: XOR<AutomationStepResultCreateWithoutStepInput, AutomationStepResultUncheckedCreateWithoutStepInput>
  }

  export type AutomationStepResultUpdateWithWhereUniqueWithoutStepInput = {
    where: AutomationStepResultWhereUniqueInput
    data: XOR<AutomationStepResultUpdateWithoutStepInput, AutomationStepResultUncheckedUpdateWithoutStepInput>
  }

  export type AutomationStepResultUpdateManyWithWhereWithoutStepInput = {
    where: AutomationStepResultScalarWhereInput
    data: XOR<AutomationStepResultUpdateManyMutationInput, AutomationStepResultUncheckedUpdateManyWithoutStepInput>
  }

  export type AutomationStepResultScalarWhereInput = {
    AND?: AutomationStepResultScalarWhereInput | AutomationStepResultScalarWhereInput[]
    OR?: AutomationStepResultScalarWhereInput[]
    NOT?: AutomationStepResultScalarWhereInput | AutomationStepResultScalarWhereInput[]
    id?: StringFilter<"AutomationStepResult"> | string
    executionId?: StringFilter<"AutomationStepResult"> | string
    stepId?: StringFilter<"AutomationStepResult"> | string
    status?: StringFilter<"AutomationStepResult"> | string
    output?: JsonNullableFilter<"AutomationStepResult">
    error?: StringNullableFilter<"AutomationStepResult"> | string | null
    startedAt?: DateTimeFilter<"AutomationStepResult"> | Date | string
    completedAt?: DateTimeNullableFilter<"AutomationStepResult"> | Date | string | null
  }

  export type AutomationWorkflowCreateWithoutExecutionsInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: AutomationStepCreateNestedManyWithoutWorkflowInput
  }

  export type AutomationWorkflowUncheckedCreateWithoutExecutionsInput = {
    id?: string
    name: string
    triggerType: string
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: AutomationStepUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type AutomationWorkflowCreateOrConnectWithoutExecutionsInput = {
    where: AutomationWorkflowWhereUniqueInput
    create: XOR<AutomationWorkflowCreateWithoutExecutionsInput, AutomationWorkflowUncheckedCreateWithoutExecutionsInput>
  }

  export type LeadCreateWithoutExecutionsInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutLeadsInput
    property?: PropertyCreateNestedOneWithoutLeadInput
    interactions?: InteractionCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutExecutionsInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedOneWithoutLeadInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutLeadInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutExecutionsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutExecutionsInput, LeadUncheckedCreateWithoutExecutionsInput>
  }

  export type AutomationStepResultCreateWithoutExecutionInput = {
    id?: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    step: AutomationStepCreateNestedOneWithoutResultsInput
  }

  export type AutomationStepResultUncheckedCreateWithoutExecutionInput = {
    id?: string
    stepId: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AutomationStepResultCreateOrConnectWithoutExecutionInput = {
    where: AutomationStepResultWhereUniqueInput
    create: XOR<AutomationStepResultCreateWithoutExecutionInput, AutomationStepResultUncheckedCreateWithoutExecutionInput>
  }

  export type AutomationStepResultCreateManyExecutionInputEnvelope = {
    data: AutomationStepResultCreateManyExecutionInput | AutomationStepResultCreateManyExecutionInput[]
    skipDuplicates?: boolean
  }

  export type AutomationWorkflowUpsertWithoutExecutionsInput = {
    update: XOR<AutomationWorkflowUpdateWithoutExecutionsInput, AutomationWorkflowUncheckedUpdateWithoutExecutionsInput>
    create: XOR<AutomationWorkflowCreateWithoutExecutionsInput, AutomationWorkflowUncheckedCreateWithoutExecutionsInput>
    where?: AutomationWorkflowWhereInput
  }

  export type AutomationWorkflowUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: AutomationWorkflowWhereInput
    data: XOR<AutomationWorkflowUpdateWithoutExecutionsInput, AutomationWorkflowUncheckedUpdateWithoutExecutionsInput>
  }

  export type AutomationWorkflowUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AutomationStepUpdateManyWithoutWorkflowNestedInput
  }

  export type AutomationWorkflowUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AutomationStepUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type LeadUpsertWithoutExecutionsInput = {
    update: XOR<LeadUpdateWithoutExecutionsInput, LeadUncheckedUpdateWithoutExecutionsInput>
    create: XOR<LeadCreateWithoutExecutionsInput, LeadUncheckedCreateWithoutExecutionsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutExecutionsInput, LeadUncheckedUpdateWithoutExecutionsInput>
  }

  export type LeadUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutLeadsNestedInput
    property?: PropertyUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type AutomationStepResultUpsertWithWhereUniqueWithoutExecutionInput = {
    where: AutomationStepResultWhereUniqueInput
    update: XOR<AutomationStepResultUpdateWithoutExecutionInput, AutomationStepResultUncheckedUpdateWithoutExecutionInput>
    create: XOR<AutomationStepResultCreateWithoutExecutionInput, AutomationStepResultUncheckedCreateWithoutExecutionInput>
  }

  export type AutomationStepResultUpdateWithWhereUniqueWithoutExecutionInput = {
    where: AutomationStepResultWhereUniqueInput
    data: XOR<AutomationStepResultUpdateWithoutExecutionInput, AutomationStepResultUncheckedUpdateWithoutExecutionInput>
  }

  export type AutomationStepResultUpdateManyWithWhereWithoutExecutionInput = {
    where: AutomationStepResultScalarWhereInput
    data: XOR<AutomationStepResultUpdateManyMutationInput, AutomationStepResultUncheckedUpdateManyWithoutExecutionInput>
  }

  export type AutomationExecutionCreateWithoutResultsInput = {
    id?: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: AutomationWorkflowCreateNestedOneWithoutExecutionsInput
    lead: LeadCreateNestedOneWithoutExecutionsInput
  }

  export type AutomationExecutionUncheckedCreateWithoutResultsInput = {
    id?: string
    workflowId: string
    leadId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationExecutionCreateOrConnectWithoutResultsInput = {
    where: AutomationExecutionWhereUniqueInput
    create: XOR<AutomationExecutionCreateWithoutResultsInput, AutomationExecutionUncheckedCreateWithoutResultsInput>
  }

  export type AutomationStepCreateWithoutResultsInput = {
    id?: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: AutomationWorkflowCreateNestedOneWithoutStepsInput
  }

  export type AutomationStepUncheckedCreateWithoutResultsInput = {
    id?: string
    workflowId: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationStepCreateOrConnectWithoutResultsInput = {
    where: AutomationStepWhereUniqueInput
    create: XOR<AutomationStepCreateWithoutResultsInput, AutomationStepUncheckedCreateWithoutResultsInput>
  }

  export type AutomationExecutionUpsertWithoutResultsInput = {
    update: XOR<AutomationExecutionUpdateWithoutResultsInput, AutomationExecutionUncheckedUpdateWithoutResultsInput>
    create: XOR<AutomationExecutionCreateWithoutResultsInput, AutomationExecutionUncheckedCreateWithoutResultsInput>
    where?: AutomationExecutionWhereInput
  }

  export type AutomationExecutionUpdateToOneWithWhereWithoutResultsInput = {
    where?: AutomationExecutionWhereInput
    data: XOR<AutomationExecutionUpdateWithoutResultsInput, AutomationExecutionUncheckedUpdateWithoutResultsInput>
  }

  export type AutomationExecutionUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: AutomationWorkflowUpdateOneRequiredWithoutExecutionsNestedInput
    lead?: LeadUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type AutomationExecutionUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationStepUpsertWithoutResultsInput = {
    update: XOR<AutomationStepUpdateWithoutResultsInput, AutomationStepUncheckedUpdateWithoutResultsInput>
    create: XOR<AutomationStepCreateWithoutResultsInput, AutomationStepUncheckedCreateWithoutResultsInput>
    where?: AutomationStepWhereInput
  }

  export type AutomationStepUpdateToOneWithWhereWithoutResultsInput = {
    where?: AutomationStepWhereInput
    data: XOR<AutomationStepUpdateWithoutResultsInput, AutomationStepUncheckedUpdateWithoutResultsInput>
  }

  export type AutomationStepUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: AutomationWorkflowUpdateOneRequiredWithoutStepsNestedInput
  }

  export type AutomationStepUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: string
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type LeadCreateManyOwnerInput = {
    id?: string
    source?: $Enums.LeadSource
    name: string
    email?: string | null
    phone?: string | null
    address: string
    city: string
    state: string
    zip: string
    score?: number
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateOneWithoutLeadNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutLeadNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutLeadNestedInput
    executions?: AutomationExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateManyLeadInput = {
    id?: string
    channel: $Enums.InteractionChannel
    direction: $Enums.InteractionDirection
    content: string
    status?: string
    sentAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AiInsightCreateManyLeadInput = {
    id?: string
    summary: string
    sentiment: string
    keyTakeaways: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationExecutionCreateManyLeadInput = {
    id?: string
    workflowId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumInteractionChannelFieldUpdateOperationsInput | $Enums.InteractionChannel
    direction?: EnumInteractionDirectionFieldUpdateOperationsInput | $Enums.InteractionDirection
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AiInsightUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInsightUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInsightUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    keyTakeaways?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationExecutionUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: AutomationWorkflowUpdateOneRequiredWithoutExecutionsNestedInput
    results?: AutomationStepResultUpdateManyWithoutExecutionNestedInput
  }

  export type AutomationExecutionUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: AutomationStepResultUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type AutomationExecutionUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistressEventCreateManyPropertyInput = {
    id?: string
    type: string
    source: string
    recordedDate: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DistressEventUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistressEventUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistressEventUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    recordedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationStepCreateManyWorkflowInput = {
    id?: string
    stepType: string
    order: number
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationExecutionCreateManyWorkflowInput = {
    id?: string
    leadId: string
    status?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationStepUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: AutomationStepResultUpdateManyWithoutStepNestedInput
  }

  export type AutomationStepUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: AutomationStepResultUncheckedUpdateManyWithoutStepNestedInput
  }

  export type AutomationStepUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepType?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationExecutionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutExecutionsNestedInput
    results?: AutomationStepResultUpdateManyWithoutExecutionNestedInput
  }

  export type AutomationExecutionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: AutomationStepResultUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type AutomationExecutionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationStepResultCreateManyStepInput = {
    id?: string
    executionId: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AutomationStepResultUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution?: AutomationExecutionUpdateOneRequiredWithoutResultsNestedInput
  }

  export type AutomationStepResultUncheckedUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationStepResultUncheckedUpdateManyWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationStepResultCreateManyExecutionInput = {
    id?: string
    stepId: string
    status: string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AutomationStepResultUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    step?: AutomationStepUpdateOneRequiredWithoutResultsNestedInput
  }

  export type AutomationStepResultUncheckedUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationStepResultUncheckedUpdateManyWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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