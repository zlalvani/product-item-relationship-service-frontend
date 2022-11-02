import { JobStatusResult } from "../../../types/jobs";

export const JobStatusResultSuccess: JobStatusResult[] = [
  {
    jobId: "demo-initial",
    status: "INITIAL",
  },
  {
    jobId: "demo-running",
    status: "RUNNING",
  },
  {
    jobId: "demo-completed",
    status: "COMPLETED",
  },
  {
    jobId: "demo-canceled",
    status: "CANCELED",
  },
] as JobStatusResult[];
