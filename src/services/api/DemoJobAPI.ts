import { IRSRequestBody, JobListResponse, JobResponse } from "../../types/jobs";
import { IJobAPI } from "./jobs.api";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobListResponseSuccess } from "./__test__/jobStatusResult.example";

export class DemoJobAPI implements IJobAPI {
  async fetchJobs(page: number): Promise<JobListResponse> {
    console.log("fetchJobs requested", { page });
    return JobListResponseSuccess;
  }
  async cancelJob(jobId: string): Promise<void> {
    console.error("implement cancel Job endpoint", { jobId });
  }
  async createJob(data: IRSRequestBody): Promise<unknown> {
    console.log("createJob requestData", { data });
    return undefined;
  }
  async fetchJobById(jobId: string): Promise<JobResponse> {
    console.log("fetchJobById", { jobId });
    return JobsDemoDataSuccess;
  }
}
