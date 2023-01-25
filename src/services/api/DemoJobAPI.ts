import { Jobs, PageResult, RegisterJob } from "../../generated/jobsApi";
import { IJobAPI } from "./jobs.api";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobListResponseSuccess } from "./__test__/jobStatusResult.example";

export class DemoJobAPI implements IJobAPI {
  async fetchJobs(page: number): Promise<PageResult> {
    console.log("fetchJobs requested", { page });
    return JobListResponseSuccess;
  }
  async cancelJob(jobId: string): Promise<void> {
    console.log("cancelJob id", { jobId });
    return undefined;
  }
  async createJob(data: RegisterJob): Promise<unknown> {
    console.log("createJob requestData", { data });
    return undefined;
  }
  async fetchJobById(jobId: string): Promise<Jobs> {
    console.log("fetchJobById", { jobId });
    return JobsDemoDataSuccess;
  }
}
