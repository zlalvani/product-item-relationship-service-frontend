import { useMutation } from "@tanstack/react-query";
import { useQuery } from "../../lib/react-query";
import { AvailableServerEnvironments } from "../../store/serverEnvironment";
import { useAppSelector } from "../../store/store";
import { IRSRequestBody } from "../../types/jobs";
import { cancelJob, createJob, fetchJobById, fetchJobs } from "../api/jobs.api";

export const useFetchJobById = (
  { id, serverEnv }: { id: string; serverEnv: AvailableServerEnvironments },
  refetchInterval: false | number = false,
) => {
  return useQuery(["jobs", serverEnv, id], () => fetchJobById(id, serverEnv), {
    refetchInterval,
  });
};

export const useFetchJobs = (refetchInterval: false | number = false) => {
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);
  return useQuery(["jobs", serverEnv], () => fetchJobs(serverEnv), { refetchInterval });
};

export const useCancelJobs = () => {
  return useMutation(cancelJob);
};

export const useCreateJob = () => {
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);
  return useMutation({
    mutationFn: (data: IRSRequestBody) => {
      return createJob(data, serverEnv);
    },
  });
};
