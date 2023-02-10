import { Jobs, PageResult, RegisterJob } from "../../generated/jobsApi";
import { selectJobsAPI } from "./jobs.api";

export class JobAPI {
  public static async fetchJobs(page: number): Promise<PageResult> {
    const requestParams = {
      page,
      size: 20,
      sort: ["completedOn,desc"],
    };
    const jobs = await selectJobsAPI().getJobsByJobStates(requestParams);
    if (jobs.error) {
      throw jobs.error;
    }
    return jobs.data;
  }
  static async cancelJob(jobId: string): Promise<void> {
    await selectJobsAPI().cancelJobByJobId(jobId);
  }
  static async createJob(data: RegisterJob): Promise<unknown> {
    const job = await selectJobsAPI().registerJobForGlobalAssetId(data);
    return job.data;
  }
  static async fetchJobById(jobId: string): Promise<Jobs> {
    const job = await selectJobsAPI().getJobForJobId(jobId, { returnUncompletedJob: true });
    if (job.error) {
      throw job.error;
    }
    return job.data;
  }
}
