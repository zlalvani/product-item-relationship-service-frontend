import { JobListResponse, JobStatusResult } from "../../../types/jobs";

export const JobStatusResultSuccess: JobStatusResult[] = [
  {
    jobId: "demo-initial",
    jobState: "INITIAL",
    jobCompleted: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
  {
    jobId: "demo-running",
    jobState: "RUNNING",
    jobCompleted: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
  {
    jobId: "demo-completed",
    jobState: "COMPLETED",
    jobCompleted: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
  {
    jobId: "demo-canceled",
    jobState: "CANCELED",
    jobCompleted: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
] as JobStatusResult[];

export const JobListResponseSuccess: JobListResponse = {
  content: JobStatusResultSuccess,
  pageCount: 1,
  pageNumber: 0,
  pageSize: 20,
  totalElements: JobStatusResultSuccess.length,
};
