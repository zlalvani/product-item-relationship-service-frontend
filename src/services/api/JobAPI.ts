import { IRSRequestBody, JobListResponse, JobResponse } from "../../types/jobs";
import { HttpClient } from "../../utils/HttpClient";
import { IJobAPI } from "./jobs.api";

export class JobAPI implements IJobAPI {
  async fetchJobs(page: number): Promise<JobListResponse> {
    const requestParams = {
      page,
      size: 20,
      sort: "completedOn, asc",
    };
    return await HttpClient.get("jobs", requestParams);
  }
  async cancelJob(jobId: string): Promise<void> {
    console.error("implement cancel Job endpoint", { jobId });
  }
  async createJob(data: IRSRequestBody): Promise<unknown> {
    return await HttpClient.post(`jobs`, data);
  }
  async fetchJobById(jobId: string): Promise<JobResponse> {
    return await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`);
  }
}
