import { queryClient } from "../../../lib/react-query";
import { renderCustomHook, waitFor } from "../../../testing/test-utils";
import { getCurrentEnvironment } from "../../../utils/sessionStorageHandling";
import { JobsDemoDataSuccess } from "../../api/__test__/jobs.exampleData";
import { JobListResponseSuccess } from "../../api/__test__/jobStatusResult.example";
import { useCancelJobs, useFetchJobById, useFetchJobs } from "../jobs";

it("fetches a job by id", async () => {
  const testId = "test-id";

  const { result } = renderCustomHook(() => useFetchJobById({ id: testId }));
  await waitFor(() => {
    return expect(result.current.isSuccess).toBe(true);
  });

  expect(result.current.data).toEqual(JobsDemoDataSuccess);
});

it("fetches a jobs", async () => {
  const { result } = renderCustomHook(() => useFetchJobs(0, false));
  await waitFor(() => {
    return expect(result.current.isSuccess).toBe(true);
  });

  expect(result.current.data).toEqual(JobListResponseSuccess);
});

it("cancels a job", async () => {
  const { result: cancelResult } = renderCustomHook(() => {
    return useCancelJobs(0);
  });
  queryClient.setQueryData(["jobs", getCurrentEnvironment(), 0], JobListResponseSuccess);
  await waitFor(() => {
    cancelResult.current.mutate((JobListResponseSuccess.content ?? [])[0].id ?? "");
    return expect(cancelResult.current.isSuccess).toBe(true);
  });
  const cacheData = (queryClient.getQueriesData(["jobs", getCurrentEnvironment(), 0])[0][1] as { content: number[] })
    .content.length;
  expect(cacheData).toBe((JobListResponseSuccess.content ?? []).length - 1);
});
