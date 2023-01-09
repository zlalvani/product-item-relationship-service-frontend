import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { serverConfig } from "../../../constants/serverConfig";
import { renderHook, waitFor } from "../../../testing/test-utils";
import { JobStatusResultSuccess } from "../../api/__test__/jobStatusResult.example";
import { useCancelJobs, useFetchJobById, useFetchJobs } from "../jobs";
import { expect, it } from "vitest";

const mock = new MockAdapter(axios);

it("tests the use fetchjob by id", async () => {
  const dummyId = "dummyId";
  mock.onGet(serverConfig.DEV.value + `jobs/${dummyId}?returnUncompletedJob=true`).reply(200, JobStatusResultSuccess);
  const { result } = renderHook(() => useFetchJobById({ id: dummyId, serverEnv: "DEV" }));
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});

it("tests the use fetch jobs", async () => {
  mock.onGet(serverConfig.DEV.value + "jobs").reply(200, JobStatusResultSuccess);
  const { result } = renderHook(() => useFetchJobs(0, 0));
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});

it("tests the use cancel job", async () => {
  const dummyId = "dummyId";
  const { result } = renderHook(() => useCancelJobs());
  result.current.mutate(dummyId);
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});
