import { JobResponse, JobStatusResult } from "../../types/jobs";
import { HttpClient } from "../auth/HttpClient";

export const fetchJobById = async (jobId: string): Promise<JobResponse> => {
  return await HttpClient.get(`jobs/${jobId}?returnUncompletedJob=true`);
};

export const fetchJobs = async (): Promise<JobStatusResult[]> => {
  return await HttpClient.get("jobs");
};

export const cancelJob = async (jobId: string) => {
  console.error("implement cancel Job endpoint", { jobId });
};
