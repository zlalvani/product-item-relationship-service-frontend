import { JobAPI } from "../JobAPI";

it("tests creating a job", async () => {
  const resp = await JobAPI.createJob({
    globalAssetId: "",
  });
  expect(resp).toBeUndefined();
});
