import { JobResponse } from "../../types/jobs";
import { JobsDemoDataSuccess } from "./__test__/jobs.exampleData";

export const fetchJobById = async (jobId: string): Promise<JobResponse> => {
  console.log("implement actual fetch ", jobId);
  return JobsDemoDataSuccess;
};
