import { IRSRequestBody, JobListResponse, JobResponse } from "../../types/jobs";
import { HttpClient } from "../../utils/HttpClient";
import { IJobAPI } from "./jobs.api";

/**
 * Swagger API https://irs-pen.int.demo.catena-x.net/api/swagger-ui/index.html?configUrl=/api/api-docs/swagger-config#/Item%20Relationship%20Service/cancelJobByJobId
 */
export class JobAPI implements IJobAPI {
  async fetchJobs(page: number): Promise<JobListResponse> {
    const requestParams = {
      page,
      size: 20,
      sort: "completedOn,desc",
    };
    return await HttpClient.get("jobs", requestParams);
  }
  async cancelJob(jobId: string): Promise<void> {
    return await HttpClient.put(`jobs/${jobId}`);
  }
  async createJob(data: IRSRequestBody): Promise<unknown> {
    return await HttpClient.post(`jobs`, data);
  }
  async fetchJobById(jobId: string): Promise<JobResponse> {
    return await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`);
  }
}
