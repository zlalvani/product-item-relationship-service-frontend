import { ServerEnvironment } from "../../constants/serverConfig";
import { IRSRequestBody, JobListResponse, JobResponse } from "../../types/jobs";
import { DemoJobAPI } from "./DemoJobAPI";
import { JobAPI } from "./JobAPI";

export interface IJobAPI {
  fetchJobById(jobId: string): Promise<JobResponse>;
  fetchJobs(page: number): Promise<JobListResponse>;
  cancelJob(jobId: string): Promise<void>;
  createJob(data: IRSRequestBody): Promise<unknown>;
}

const demoJobAPI = new DemoJobAPI();
const jobAPI = new JobAPI();

export const selectAPI = (serverEnv: ServerEnvironment): IJobAPI => {
  if (serverEnv === "DEMO") {
    return demoJobAPI;
  } else {
    return jobAPI;
  }
};
