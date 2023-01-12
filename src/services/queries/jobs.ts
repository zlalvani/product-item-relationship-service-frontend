import { useMutation } from "@tanstack/react-query";
import { useQuery } from "../../lib/react-query";
import { IRSRequestBody } from "../../types/jobs";
import { getCurrentEnvironment } from "../../utils/sessionStorageHandling";
import { selectAPI } from "../api/jobs.api";

export const useFetchJobById = ({ id }: { id: string }, refetchInterval: false | number = false) => {
  const serverEnv = getCurrentEnvironment();
  const jobAPI = selectAPI(serverEnv);
  return useQuery(["jobs", serverEnv, id], () => jobAPI.fetchJobById(id), {
    refetchInterval,
  });
};

export const useFetchJobs = (page: number, refetchInterval: false | number = false) => {
  const serverEnv = getCurrentEnvironment();
  const jobAPI = selectAPI(serverEnv);
  return useQuery(["jobs", serverEnv, page], () => jobAPI.fetchJobs(page), { refetchInterval });
};

export const useCancelJobs = () => {
  const serverEnv = getCurrentEnvironment();
  const jobAPI = selectAPI(serverEnv);
  return useMutation(jobAPI.cancelJob);
};

export const useCreateJob = () => {
  const serverEnv = getCurrentEnvironment();
  const jobAPI = selectAPI(serverEnv);
  return useMutation({
    mutationFn: (data: IRSRequestBody) => {
      return jobAPI.createJob(data);
    },
  });
};
