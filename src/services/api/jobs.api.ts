import { AvailableServerEnvironments } from "../../store/serverEnvironment";
import { IRSRequestBody, JobListResponse, JobResponse } from "../../types/jobs";
import { HttpClient } from "../../utils/HttpClient";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobListResponseSuccess } from "./__test__/jobStatusResult.example";

export const fetchJobById = async (jobId: string, serverEnv: AvailableServerEnvironments): Promise<JobResponse> => {
  if (serverEnv === "DEMO") {
    return JobsDemoDataSuccess;
  }
  const data = await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`, undefined, serverEnv);
  console.log(JSON.stringify(data));
  return await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`, undefined, serverEnv);
};

export const fetchJobs = async (serverEnv?: AvailableServerEnvironments): Promise<JobListResponse> => {
  if (serverEnv === "DEMO") {
    return JobListResponseSuccess;
  }
  return await HttpClient.get("jobs", undefined, serverEnv);
};

export const cancelJob = async (jobId: string) => {
  console.error("implement cancel Job endpoint", { jobId });
};

export const createJob = async (data: IRSRequestBody, serverEnv?: AvailableServerEnvironments) => {
  return await HttpClient.post(`jobs`, data, serverEnv);
};
