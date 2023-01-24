import { useMutation } from "@tanstack/react-query";
import { queryClient, useQuery } from "../../lib/react-query";
import { IRSRequestBody, JobListResponse } from "../../types/jobs";
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

export const useCancelJobs = (page: number) => {
  //Test case globalAssetId urn:uuid:513d7be8-e7e4-49f4-a22b-8cd31317e454

  const serverEnv = getCurrentEnvironment();
  const jobAPI = selectAPI(serverEnv);
  return useMutation({
    mutationFn: jobAPI.cancelJob,
    onMutate: async (jobsId: string) => {
      queryClient.setQueryData<JobListResponse>(["jobs", serverEnv, page], (old) => {
        if (old === undefined) return undefined;
        return {
          ...old,
          content: old.content.filter((job) => job.id !== jobsId),
        };
      });
    },
  });
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
