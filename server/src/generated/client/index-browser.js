
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

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.LeadScalarFieldEnum = {
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

exports.Prisma.PropertyScalarFieldEnum = {
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

exports.Prisma.DistressEventScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  type: 'type',
  source: 'source',
  recordedDate: 'recordedDate',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.InteractionScalarFieldEnum = {
  id: 'id',
  leadId: 'leadId',
  channel: 'channel',
  direction: 'direction',
  content: 'content',
  status: 'status',
  sentAt: 'sentAt',
  metadata: 'metadata'
};

exports.Prisma.AiInsightScalarFieldEnum = {
  id: 'id',
  leadId: 'leadId',
  summary: 'summary',
  sentiment: 'sentiment',
  keyTakeaways: 'keyTakeaways',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AutomationWorkflowScalarFieldEnum = {
  id: 'id',
  name: 'name',
  triggerType: 'triggerType',
  config: 'config',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AutomationStepScalarFieldEnum = {
  id: 'id',
  workflowId: 'workflowId',
  stepType: 'stepType',
  order: 'order',
  config: 'config',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AutomationExecutionScalarFieldEnum = {
  id: 'id',
  workflowId: 'workflowId',
  leadId: 'leadId',
  status: 'status',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AutomationStepResultScalarFieldEnum = {
  id: 'id',
  executionId: 'executionId',
  stepId: 'stepId',
  status: 'status',
  output: 'output',
  error: 'error',
  startedAt: 'startedAt',
  completedAt: 'completedAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  entityType: 'entityType',
  entityId: 'entityId',
  action: 'action',
  before: 'before',
  after: 'after',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  ACQUISITION_MANAGER: 'ACQUISITION_MANAGER',
  VIRTUAL_ASSISTANT: 'VIRTUAL_ASSISTANT',
  AUDITOR: 'AUDITOR'
};

exports.LeadSource = exports.$Enums.LeadSource = {
  DIRECT: 'DIRECT',
  ZILLOW: 'ZILLOW',
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  MANUAL: 'MANUAL',
  OTHER: 'OTHER'
};

exports.LeadStatus = exports.$Enums.LeadStatus = {
  NEW: 'NEW',
  QUALIFIED: 'QUALIFIED',
  NURTURE: 'NURTURE',
  OFFER_MADE: 'OFFER_MADE',
  UNDER_CONTRACT: 'UNDER_CONTRACT',
  CLOSED_WON: 'CLOSED_WON',
  CLOSED_LOST: 'CLOSED_LOST'
};

exports.InteractionChannel = exports.$Enums.InteractionChannel = {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PHONE: 'PHONE',
  SOCIAL: 'SOCIAL'
};

exports.InteractionDirection = exports.$Enums.InteractionDirection = {
  INBOUND: 'INBOUND',
  OUTBOUND: 'OUTBOUND'
};

exports.Prisma.ModelName = {
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
