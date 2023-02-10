import { getJobsApi } from "../HttpClient";

it("creates a configured instance of the http client", () => {
  const client = getJobsApi();
  expect(client.cancelJobByJobId).toBeDefined();
  expect(client.getJobForJobId).toBeDefined();
  expect(client.registerJobForGlobalAssetId).toBeDefined();
});
