import { useMutation } from "@tanstack/react-query";
import { getCurrentEnvironment, ServerEnvironment } from "../../constants/serverConfig";
import { useQuery } from "../../lib/react-query";
import { IRSRequestBody } from "../../types/jobs";
import { cancelJob, createJob, fetchJobById, fetchJobs } from "../api/jobs.api";

export const useFetchJobById = (
  { id, serverEnv }: { id: string; serverEnv: ServerEnvironment },
  refetchInterval: false | number = false,
) => {
  return useQuery(["jobs", serverEnv, id], () => fetchJobById(id, serverEnv), {
    refetchInterval,
  });
};

export const useFetchJobs = (page: number, refetchInterval: false | number = false) => {
  const serverEnv = getCurrentEnvironment();
  return useQuery(["jobs", serverEnv, page], () => fetchJobs(page, serverEnv), { refetchInterval });
};

export const useCancelJobs = () => {
  return useMutation(cancelJob);
};

export const useCreateJob = () => {
  const serverEnv = getCurrentEnvironment();
  return useMutation({
    mutationFn: (data: IRSRequestBody) => {
      return createJob(data, serverEnv);
    },
  });
};
