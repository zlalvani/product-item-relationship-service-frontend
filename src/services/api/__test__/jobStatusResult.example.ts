import { JobStatusResult, PageResult } from "../../../generated/jobsApi";

export const JobStatusResultSuccess: JobStatusResult[] = [
  {
    id: "demo-initial",
    state: "INITIAL",
    completedOn: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
  {
    id: "demo-running",
    state: "RUNNING",
    completedOn: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
  {
    id: "demo-completed",
    state: "COMPLETED",
    completedOn: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
  {
    id: "demo-canceled",
    state: "CANCELED",
    completedOn: "2022-11-14T09:50:16.644034829Z",
    startedOn: "2022-11-14T09:46:51.998075687Z",
  },
] as JobStatusResult[];

export const JobListResponseSuccess: PageResult = {
  content: JobStatusResultSuccess,
  pageCount: 1,
  pageNumber: 0,
  pageSize: 20,
  totalElements: JobStatusResultSuccess.length,
};
