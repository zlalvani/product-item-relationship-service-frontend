import { AvailableServerEnvironments } from "../../store/serverEnvironment";
import { JobResponse, JobStatusResult } from "../../types/jobs";
import { HttpClient } from "../../utils/HttpClient";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobStatusResultSuccess } from "./__test__/jobStatusResult.example";

export const fetchJobById = async (jobId: string, serverEnv: AvailableServerEnvironments): Promise<JobResponse> => {
  if (serverEnv === "DEMO") {
    return JobsDemoDataSuccess;
  }
  return await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`, undefined, serverEnv);
};

export const fetchJobs = async (serverEnv?: AvailableServerEnvironments): Promise<JobStatusResult[]> => {
  if (serverEnv === "DEMO") {
    return JobStatusResultSuccess;
  }
  return await HttpClient.get("jobs", undefined, serverEnv);
};

export const cancelJob = async (jobId: string) => {
  console.error("implement cancel Job endpoint", { jobId });
};
