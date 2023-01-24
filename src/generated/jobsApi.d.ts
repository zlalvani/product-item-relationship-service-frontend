/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdministrativeInformation {
  revision?: string;
  version?: string;
}

/** AAS shells. */
export interface AssetAdministrationShellDescriptor {
  administration?: AdministrativeInformation;
  /** @maxItems 2147483647 */
  description?: LangString[];
  globalAssetId?: Reference;
  idShort?: string;
  identification?: string;
  /** @maxItems 2147483647 */
  specificAssetIds?: IdentifierKeyValuePair[];
  /** @maxItems 2147483647 */
  submodelDescriptors?: SubmodelDescriptor[];
}

/** Statistics of job execution. */
export interface AsyncFetchedItems {
  /**
   * Number of completed item transfers.
   * @format int32
   * @min 0
   * @max 2147483647
   */
  completed?: number;
  /**
   * Number of failed item transfers.
   * @format int32
   * @min 0
   * @max 2147483647
   */
  failed?: number;
  /**
   * Number of running item transfers.
   * @format int32
   * @min 0
   * @max 2147483647
   */
  running?: number;
}

/** Business partner id with name */
export interface Bpn {
  manufacturerId?: string;
  manufacturerName?: string;
}

export interface Endpoint {
  interface?: string;
  protocolInformation?: ProtocolInformation;
}

/** Error response. */
export interface ErrorResponse {
  /** Error. */
  error?: string;
  /**
   * List of error messages.
   * @maxItems 2147483647
   */
  messages?: string[];
  /** Error code. */
  statusCode?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";
}

/** CATENA-X global asset id in the format urn:uuid:uuid4. */
export interface GlobalAssetIdentification {
  /**
   * CATENA-X global asset id in the format urn:uuid:uuid4.
   * @minLength 45
   * @maxLength 45
   * @pattern ^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
   * @example "urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0"
   */
  globalAssetId?: string;
}

export interface IdentifierKeyValuePair {
  key?: string;
  semanticId?: Reference;
  subjectId?: Reference;
  value?: string;
}

/** Executable unit with meta information and item graph result. */
export interface Job {
  /** @format date-time */
  completedOn?: string;
  /** @format date-time */
  createdOn?: string;
  /** Job error details. */
  exception?: JobErrorDetails;
  /** CATENA-X global asset id in the format urn:uuid:uuid4. */
  globalAssetId: GlobalAssetIdentification;
  /**
   * Id of the job.
   * @format uuid
   * @minLength 36
   * @maxLength 36
   * @pattern /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
   */
  id: string;
  /** @format date-time */
  lastModifiedOn?: string;
  /** The IRS api consumer. */
  owner?: string;
  /** Job parameter of job processing. */
  parameter?: JobParameter;
  /** @format date-time */
  startedOn?: string;
  state: "UNSAVED" | "INITIAL" | "RUNNING" | "TRANSFERS_FINISHED" | "COMPLETED" | "CANCELED" | "ERROR";
  /** Summary of the job with statistics of the job processing. */
  summary?: Summary;
}

/** Job error details. */
export interface JobErrorDetails {
  /**
   * Detailed exception information.
   * @maxLength 4000
   */
  errorDetail?: string;
  /**
   * Exception name.
   * @maxLength 100
   */
  exception?: string;
  /**
   * Datetime error occurs.
   * @format date-time
   */
  exceptionDate?: string;
}

export interface JobHandle {
  /**
   * Id of the job.
   * @format uuid
   * @minLength 36
   * @maxLength 36
   * @pattern /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
   */
  id?: string;
}

/** Job parameter of job processing. */
export interface JobParameter {
  aspects?:
    | "AddressAspect"
    | "AssemblyPartRelationship"
    | "Batch"
    | "BatteryPass"
    | "CertificateOfDestruction"
    | "CertificateOfDismantler"
    | "ChargingProcess"
    | "ClaimData"
    | "DiagnosticData"
    | "EndOfLife"
    | "EsrCertificate"
    | "EsrCertificateStateStatistic"
    | "IdConversion"
    | "MarketplaceOffer"
    | "MaterialForHomologation"
    | "MaterialForRecycling"
    | "PartAsPlanned"
    | "PhysicalDimension"
    | "ProductDescription"
    | "ReturnRequest"
    | "SerialPartTypization"
    | "SingleLevelBomAsPlanned"
    | "SingleLevelUsageAsBuilt";
  /** The lifecycle context in which the child part was assembled into the parent part. */
  bomLifecycle?: "asBuilt" | "asPlanned";
  callbackUrl?: string;
  collectAspects?: boolean;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  depth?: number;
  /** Item graph traversal direction. */
  direction?: "upward" | "downward";
  lookupBPNs?: boolean;
}

export interface JobStatusResult {
  /** @format date-time */
  completedOn?: string;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  startedOn?: string;
  state?: "UNSAVED" | "INITIAL" | "RUNNING" | "TRANSFERS_FINISHED" | "COMPLETED" | "CANCELED" | "ERROR";
}

/** Container for a job with item graph. */
export interface Jobs {
  /**
   * Collection of bpn mappings
   * @maxItems 2147483647
   * @uniqueItems true
   */
  bpns?: Bpn[];
  /** Executable unit with meta information and item graph result. */
  job?: Job;
  /**
   * Relationships between parent and child items.
   * @maxItems 2147483647
   */
  relationships?: Relationship[];
  /**
   * AAS shells.
   * @maxItems 2147483647
   */
  shells?: AssetAdministrationShellDescriptor[];
  /**
   * Collection of requested Submodels
   * @maxItems 2147483647
   */
  submodels?: Submodel[];
  /**
   * Collection of not resolvable endpoints as tombstones. Including cause of error and endpoint URL.
   * @maxItems 2147483647
   */
  tombstones?: Tombstone[];
}

export interface LangString {
  language?: string;
  text?: string;
}

/** Set of child parts the parent object is assembled by (one structural level down). */
export interface LinkedItem {
  /**
   * Datetime of assembly.
   * @format date-time
   */
  assembledOn?: string;
  /** CATENA-X global asset id in the format urn:uuid:uuid4. */
  childCatenaXId?: GlobalAssetIdentification;
  /**
   * Last datetime item was modified.
   * @format date-time
   */
  lastModifiedOn?: string;
  /** The lifecycle context in which the child part was assembled into the parent part. */
  lifecycleContext?: "asBuilt" | "asPlanned";
  /** Quantity component. */
  quantity?: Quantity;
}

export interface MeasurementUnit {
  datatypeURI?: string;
  lexicalValue?: string;
}

export interface PageResult {
  content?: JobStatusResult[];
  /** @format int32 */
  pageCount?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalElements?: number;
}

export interface ProcessingError {
  errorDetail?: string;
  /** @format date-time */
  lastAttempt?: string;
  processStep?:
    | "SUBMODEL_REQUEST"
    | "DIGITAL_TWIN_REQUEST"
    | "SCHEMA_VALIDATION"
    | "SCHEMA_REQUEST"
    | "BPDM_REQUEST"
    | "BPDM_VALIDATION";
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  retryCounter?: number;
}

export interface ProtocolInformation {
  endpointAddress?: string;
  endpointProtocol?: string;
  endpointProtocolVersion?: string;
  subprotocol?: string;
  subprotocolBody?: string;
  subprotocolBodyEncoding?: string;
}

/** Quantity component. */
export interface Quantity {
  measurementUnit?: MeasurementUnit;
  /**
   * @format double
   * @min 0
   * @max 2147483647
   */
  quantityNumber?: number;
}

export interface Reference {
  /** @maxItems 2147483647 */
  value?: string[];
}

/** The requested job definition. */
export interface RegisterJob {
  /** @maxItems 2147483647 */
  aspects?: (
    | "AddressAspect"
    | "AssemblyPartRelationship"
    | "Batch"
    | "BatteryPass"
    | "CertificateOfDestruction"
    | "CertificateOfDismantler"
    | "ChargingProcess"
    | "ClaimData"
    | "DiagnosticData"
    | "EndOfLife"
    | "EsrCertificate"
    | "EsrCertificateStateStatistic"
    | "IdConversion"
    | "MarketplaceOffer"
    | "MaterialForHomologation"
    | "MaterialForRecycling"
    | "PartAsPlanned"
    | "PhysicalDimension"
    | "ProductDescription"
    | "ReturnRequest"
    | "SerialPartTypization"
    | "SingleLevelBomAsPlanned"
    | "SingleLevelUsageAsBuilt"
  )[];
  /** The lifecycle context in which the child part was assembled into the parent part. */
  bomLifecycle?: "asBuilt" | "asPlanned";
  /**
   * Callback url to notify requestor when job processing is finished. There are two uri variable placeholders that can be used: jobId and jobState.
   * @example "https://hostname.com/callback?jobId={jobId}&jobState={jobState}"
   */
  callbackUrl?: string;
  /** Flag to specify whether aspects should be requested and collected. Default is false. */
  collectAspects?: boolean;
  /**
   * Max depth of the item graph returned. If no depth is set item graph with max depth is returned.
   * @format int32
   * @min 1
   * @max 100
   */
  depth?: number;
  /**
   * Item graph traversal direction.
   * @default "downward"
   */
  direction?: "upward" | "downward";
  /**
   * Id of global asset.
   * @minLength 45
   * @maxLength 45
   * @pattern ^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
   * @example "urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0"
   */
  globalAssetId: string;
  /** Flag to specify whether BPNs should be collected and resolved via the configured BPDM URL. Default is false. */
  lookupBPNs?: boolean;
}

/** Relationships between parent and child items. */
export interface Relationship {
  aspectType?: string;
  /** CATENA-X global asset id in the format urn:uuid:uuid4. */
  catenaXId?: GlobalAssetIdentification;
  /** Set of child parts the parent object is assembled by (one structural level down). */
  linkedItem?: LinkedItem;
}

/** Submodel with identification of SubmodelDescriptor, aspect type and payload as String */
export interface Submodel {
  aspectType?: string;
  identification?: string;
  payload?: Record<string, object>;
}

export interface SubmodelDescriptor {
  administration?: AdministrativeInformation;
  /** @maxItems 2147483647 */
  description?: LangString[];
  /** @maxItems 2147483647 */
  endpoints?: Endpoint[];
  idShort?: string;
  identification?: string;
  semanticId?: Reference;
}

/** Summary of the job with statistics of the job processing. */
export interface Summary {
  /** Statistics of job execution. */
  asyncFetchedItems?: AsyncFetchedItems;
  /** Statistics of job execution. */
  bpnLookups?: AsyncFetchedItems;
}

/** Tombstone with information about request failure */
export interface Tombstone {
  /**
   * CATENA-X global asset id in the format urn:uuid:uuid4.
   * @minLength 45
   * @maxLength 45
   * @pattern ^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
   * @example "urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0"
   */
  catenaXId?: string;
  endpointURL?: string;
  processingError?: ProcessingError;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://irs.int.demo.catena-x.net";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title IRS API
 * @version 2.0
 * @baseUrl https://irs.int.demo.catena-x.net
 *
 * The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  irs = {
    /**
     * @description Returns paginated jobs with state and execution times.
     *
     * @tags Item Relationship Service
     * @name GetJobsByJobStates
     * @summary Returns paginated jobs with state and execution times.
     * @request GET:/irs/jobs
     * @secure
     */
    getJobsByJobStates: (
      query?: {
        /**
         * Requested job states.
         * @maxItems 2147483647
         */
        states?: ("UNSAVED" | "INITIAL" | "RUNNING" | "TRANSFERS_FINISHED" | "COMPLETED" | "CANCELED" | "ERROR")[];
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PageResult, ErrorResponse>({
        path: `/irs/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Register an IRS job to retrieve an item graph for given {globalAssetId}.
     *
     * @tags Item Relationship Service
     * @name RegisterJobForGlobalAssetId
     * @summary Register an IRS job to retrieve an item graph for given {globalAssetId}.
     * @request POST:/irs/jobs
     * @secure
     */
    registerJobForGlobalAssetId: (data: RegisterJob, params: RequestParams = {}) =>
      this.request<JobHandle, ErrorResponse>({
        path: `/irs/jobs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return job with optional item graph result for requested id.
     *
     * @tags Item Relationship Service
     * @name GetJobForJobId
     * @summary Return job with optional item graph result for requested id.
     * @request GET:/irs/jobs/{id}
     * @secure
     */
    getJobForJobId: (
      id: string,
      query?: {
        /**
         * <true> Return job with current processed item graph. <false> Return job with item graph if job is in state <COMPLETED>, otherwise job.
         * @default true
         */
        returnUncompletedJob?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Jobs, ErrorResponse>({
        path: `/irs/jobs/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel job for requested jobId.
     *
     * @tags Item Relationship Service
     * @name CancelJobByJobId
     * @summary Cancel job for requested jobId.
     * @request PUT:/irs/jobs/{id}
     * @secure
     */
    cancelJobByJobId: (id: string, params: RequestParams = {}) =>
      this.request<Job, ErrorResponse>({
        path: `/irs/jobs/${id}`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
}
