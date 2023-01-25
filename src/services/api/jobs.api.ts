import { Jobs, PageResult, RegisterJob } from "../../generated/jobsApi";
import { ServerEnvironment } from "../../utils/serverConfig";
import { DemoJobAPI } from "./DemoJobAPI";
import { JobAPI } from "./JobAPI";

export interface IJobAPI {
  fetchJobById(jobId: string): Promise<Jobs>;
  fetchJobs(page: number): Promise<PageResult>;
  cancelJob(jobId: string): Promise<void>;
  createJob(data: RegisterJob): Promise<unknown>;
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
