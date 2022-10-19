export interface JobErrorResponse {
  errors: string[];
  message: string;
  statusCode: string;
}

export interface Bpn {
  manufacturerId: string;
  manufacturerName: string;
}

export interface Exception {
  errorDetail: string;
  exception: string;
  exceptionDate: Date | string;
}

export interface JobParameter {
  aspects: string[];
  bomLifecycle: string;
  collectAspects: boolean;
  depth: number;
  direction: string;
}

export interface AsyncFetchedItems {
  completed: number;
  failed: number;
  running: number;
}

export interface Summary {
  asyncFetchedItems: AsyncFetchedItems;
}

export interface Job {
  createdOn: Date | string;
  exception: Exception;
  globalAssetId: string;
  jobCompleted: Date | string;
  jobId: string;
  jobParameter: JobParameter;
  jobState: string;
  lastModifiedOn: Date | string;
  owner: string;
  startedOn: Date | string;
  summary: Summary;
}

export interface MeasurementUnit {
  datatypeURI: string;
  lexicalValue: string;
}

export interface Quantity {
  measurementUnit: MeasurementUnit;
  quantityNumber: number;
}

export interface LinkedItem {
  assembledOn: Date | string;
  childCatenaXId: string;
  lastModifiedOn: Date | string;
  lifecycleContext: string;
  quantity: Quantity;
}

export interface Relationship {
  catenaXId: string;
  linkedItem: LinkedItem;
}

export interface Description {
  language: string;
  text: string;
}

export interface GlobalAssetId {
  value: string[];
}

export interface SpecificAssetId {
  key: string;
  value: string;
}

export interface Description2 {
  language: string;
  text: string;
}

export interface ProtocolInformation {
  endpointAddress: string;
  endpointProtocol: string;
  endpointProtocolVersion: string;
}

export interface Endpoint {
  interface: string;
  protocolInformation: ProtocolInformation;
}

export interface SemanticId {
  value: string[];
}

export interface SubmodelDescriptor {
  description: Description2[];
  endpoints: Endpoint[];
  idShort: string;
  identification: string;
  semanticId: SemanticId;
}

export interface Shell {
  description: Description[];
  globalAssetId: GlobalAssetId;
  idShort: string;
  identification: string;
  specificAssetIds: SpecificAssetId[];
  submodelDescriptors: SubmodelDescriptor[];
}

export interface MeasurementUnit2 {
  datatypeURI: string;
  lexicalValue: string;
}

export interface Quantity2 {
  measurementUnit: MeasurementUnit2;
  quantityNumber: number;
}

export interface ChildPart {
  assembledOn: Date | string;
  childCatenaXId: string;
  lastModifiedOn: Date | string;
  lifecycleContext: string;
  quantity: Quantity2;
}

export interface Payload {
  catenaXId: string;
  childParts: ChildPart[];
}

export interface Submodel {
  aspectType: string;
  identification: string;
  payload: Payload;
}

export interface ProcessingError {
  errorDetail: string;
  lastAttempt: Date | string;
  retryCounter: number;
}

export interface Tombstone {
  catenaXId: string;
  endpointURL: string;
  processingError: ProcessingError;
}

export interface JobResponse {
  bpns: Bpn[];
  job: Job;
  relationships: Relationship[];
  shells: Shell[];
  submodels: Submodel[];
  tombstones: Tombstone[];
}
