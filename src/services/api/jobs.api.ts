import { JobResponse, JobStatusResult } from "../../types/jobs";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";
import { JobStatusResultSuccess } from "./__test__/jobStatusResult.example";

export const fetchJobById = async (jobId: string): Promise<JobResponse> => {
  console.warn("implement actual fetch ", jobId);
  return JobsDemoDataSuccess;
};

export const fetchJobs = async (): Promise<JobStatusResult[]> => {
  console.warn("Using demo data for fetchJobs");
  return JobStatusResultSuccess;
};

export const cancelJob = async (jobId: string) => {
  console.error("implement cancel Job endpoint", { jobId });
};
