import { Jobs, PageResult, RegisterJob } from "../../generated/jobsApi";
import { getJobsApi } from "../../utils/HttpClient";
import { IJobAPI } from "./jobs.api";

/**
 * Swagger API https://irs-pen.int.demo.catena-x.net/api/swagger-ui/index.html?configUrl=/api/api-docs/swagger-config#/Item%20Relationship%20Service/cancelJobByJobId
 */
export class JobAPI implements IJobAPI {
  async fetchJobs(page: number): Promise<PageResult> {
    const requestParams = {
      page,
      size: 20,
      sort: ["completedOn,desc"],
    };
    const jobs = await getJobsApi().getJobsByJobStates(requestParams);
    if (jobs.error) {
      throw jobs.error;
    }
    return jobs.data;
  }
  async cancelJob(jobId: string): Promise<void> {
    await getJobsApi().cancelJobByJobId(jobId);
  }
  async createJob(data: RegisterJob): Promise<unknown> {
    const job = await getJobsApi().registerJobForGlobalAssetId(data);
    return job.data;
  }
  async fetchJobById(jobId: string): Promise<Jobs> {
    const job = await getJobsApi().getJobForJobId(jobId, { returnUncompletedJob: true });
    if (job.error) {
      throw job.error;
    }
    return job.data;
  }
}
