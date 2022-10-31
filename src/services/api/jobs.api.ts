import { JobResponse, JobStatusResult } from "../../types/jobs";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";

export const fetchJobById = async (jobId: string): Promise<JobResponse> => {
  console.warn("implement actual fetch ", jobId);
  return JobsDemoDataSuccess;
};

export const fetchJobs = async (): Promise<JobStatusResult[]> => {
  console.warn("Using demo data for fetchJobs");
  return [{ jobId: JobsDemoDataSuccess.job.jobId, status: JobsDemoDataSuccess.job.jobState }];
};
