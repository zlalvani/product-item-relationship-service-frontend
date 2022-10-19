import { useQuery } from "../../lib/react-query";
import { fetchJobById, fetchJobs } from "../api/jobs.api";

export const useFetchJobById = (id: string, refetchInterval: false | number = false) => {
  return useQuery(["jobs", id], () => fetchJobById(id), {
    refetchInterval,
  });
};

export const useFetchJobs = (refetchInterval: false | number = false) => {
  return useQuery(["jobs"], () => fetchJobs(), { refetchInterval });
};
