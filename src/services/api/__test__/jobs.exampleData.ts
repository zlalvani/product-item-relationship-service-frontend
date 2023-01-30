import { ErrorResponse, Jobs } from "../../../generated/jobsApi";

export const JobsDemoDataSuccess: Jobs = {
  bpns: [
    {
      manufacturerId: "BPNL00000003AYRE",
      manufacturerName: "OEM A",
    },
  ],
  job: {
    createdOn: "2022-02-03T14:48:54.709Z",
    exception: {
      errorDetail: "Timeout while requesting Digital Registry",
      exception: "IrsTimeoutException",
      exceptionDate: "2022-02-03T14:48:54.709Z",
    },
    globalAssetId: "urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0",
    completedOn: "2022-02-03T14:48:54.709Z",
    id: "e5347c88-a921-11ec-b909-0242ac120002",
    parameter: {
      aspects: "AddressAspect",
      bomLifecycle: "asBuilt",
      collectAspects: false,
      depth: 4,
      direction: "downward",
    },
    state: "COMPLETED",
    lastModifiedOn: "2022-02-03T14:48:54.709Z",
    owner: "",
    startedOn: "2022-02-03T14:48:54.709Z",
    summary: {
      asyncFetchedItems: {
        completed: 0,
        failed: 0,
        running: 0,
      },
    },
  },
  relationships: [
    {
      catenaXId: { globalAssetId: "urn:uuid:d9bec1c6-e47c-4d18-ba41-0a5fe8b7f447" },
      linkedItem: {
        assembledOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: { globalAssetId: "urn:uuid:a45a2246-f6e1-42da-b47d-5c3b58ed62e9" },
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        lifecycleContext: "asBuilt",
        quantity: {
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#piece",
            lexicalValue: "piece",
          },
          quantityNumber: 1,
        },
      },
    },
  ],
  shells: [
    {
      description: [
        {
          language: "en",
          text: "The shell for a vehicle",
        },
      ],
      globalAssetId: {
        value: ["urn:uuid:a45a2246-f6e1-42da-b47d-5c3b58ed62e9"],
      },
      idShort: "future concept x",
      identification: "882fc530-b69b-4707-95f6-5dbc5e9baaa8",
      specificAssetIds: [
        {
          key: "engineserialid",
          value: "12309481209312",
        },
      ],
      submodelDescriptors: [
        {
          description: [
            {
              language: "en",
              text: "Provides base vehicle information",
            },
          ],
          endpoints: [
            {
              interface: "HTTP",
              protocolInformation: {
                endpointAddress: "https://catena-x.net/vehicle/basedetails/",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
              },
            },
          ],
          idShort: "vehicle base details",
          identification: "4a738a24-b7d8-4989-9cd6-387772f40565",
          semanticId: {
            value: ["urn:bamm:com.catenax.vehicle:0.1.1"],
          },
        },
        {
          description: [
            {
              language: "en",
              text: "Provides base vehicle information",
            },
          ],
          endpoints: [
            {
              interface: "HTTP",
              protocolInformation: {
                endpointAddress: "https://catena-x.net/vehicle/partdetails/",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
              },
            },
          ],
          idShort: "vehicle part details",
          identification: "dae4d249-6d66-4818-b576-bf52f3b9ae90",
          semanticId: {
            value: ["urn:bamm:com.catenax.vehicle:0.1.1#PartDetails"],
          },
        },
      ],
    },
  ],
  submodels: [
    {
      aspectType: "urn:bamm:io.catenax.assembly_part_relationship:1.0.0",
      identification: "urn:uuid:fc784d2a-5506-4e61-8e34-21600f8cdeff",
      payload: {
        catenaXId: { globalAssetId: "urn:uuid:d9bec1c6-e47c-4d18-ba41-0a5fe8b7f447" },
        childParts: [
          {
            assembledOn: "2022-02-03T14:48:54.709Z",
            childCatenaXId: "urn:uuid:d9bec1c6-e47c-4d18-ba41-0a5fe8b7f447",
            lastModifiedOn: "2022-02-03T14:48:54.709Z",
            lifecycleContext: "AsBuilt",
            quantity: {
              measurementUnit: {
                datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#piece",
                lexicalValue: "piece",
              },
              quantityNumber: 1,
            },
          },
        ],
      },
    },
  ],
  tombstones: [
    {
      catenaXId: "urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0",
      endpointURL: "https://catena-x.net/vehicle/partdetails/",
      processingError: {
        errorDetail: "Details to reason of Failure",
        lastAttempt: "2022-02-03T14:48:54.709Z",
        retryCounter: 0,
      },
    },
  ],
} as Jobs;

export const jobsDemoDataError404: ErrorResponse = {
  messages: ["NotFoundException"],
  error: "Not found",
  statusCode: "404 NOT_FOUND",
};
