import { ErrorResponse, HttpResponse, Jobs, PageResult, RegisterJob } from "../../generated/jobsApi";
import { getJobsApi } from "../../utils/HttpClient";
import { getCurrentEnvironment } from "../../utils/sessionStorageHandling";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobListResponseSuccess } from "./__test__/jobStatusResult.example";

export const selectJobsAPI = () => {
  const serverEnv = getCurrentEnvironment();
  if (serverEnv === "DEMO") {
    return {
      getJobsByJobStates: (requestParams: unknown) => {
        console.log("fetchJobs requested", { requestParams });
        return { data: JobListResponseSuccess } as HttpResponse<PageResult, ErrorResponse>;
      },
      cancelJobByJobId: (jobId: string) => {
        console.log("cancelJob id", { jobId });
        return undefined;
      },
      registerJobForGlobalAssetId: (data: RegisterJob) => {
        console.log("createJob requestData", { data });
        return { data: undefined };
      },
      getJobForJobId: async (
        jobId: string,
        options: { returnUncompletedJob: boolean },
      ): Promise<HttpResponse<Jobs, ErrorResponse>> => {
        console.log("fetchJobById", { jobId, options });
        return { data: JobsDemoDataSuccess } as HttpResponse<Jobs, ErrorResponse>;
      },
    };
  } else {
    return getJobsApi();
  }
};
