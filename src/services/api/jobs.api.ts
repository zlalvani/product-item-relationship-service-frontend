import { ServerEnvironment } from "../../constants/serverConfig";
import { IRSRequestBody, JobListResponse, JobResponse } from "../../types/jobs";
import { HttpClient } from "../../utils/HttpClient";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobListResponseSuccess } from "./__test__/jobStatusResult.example";

export const fetchJobById = async (jobId: string, serverEnv: ServerEnvironment): Promise<JobResponse> => {
  if (serverEnv === "DEMO") {
    return JobsDemoDataSuccess;
  }
  return await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`, undefined, serverEnv);
};

export const fetchJobs = async (page: number, serverEnv?: ServerEnvironment): Promise<JobListResponse> => {
  if (serverEnv === "DEMO") {
    return JobListResponseSuccess;
  }

  const requestParams = {
    page,
    size: 20,
    sort: "completedOn, asc",
  };
  return await HttpClient.get("jobs", requestParams, serverEnv);
};

export const cancelJob = async (jobId: string) => {
  console.error("implement cancel Job endpoint", { jobId });
};

export const createJob = async (data: IRSRequestBody, serverEnv?: ServerEnvironment) => {
  return await HttpClient.post(`jobs`, data, serverEnv);
};
