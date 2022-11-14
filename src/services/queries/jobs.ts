import { useMutation } from "@tanstack/react-query";
import { useQuery } from "../../lib/react-query";
import { useAppSelector } from "../../store/store";
import { cancelJob, fetchJobById, fetchJobs } from "../api/jobs.api";

export const useFetchJobById = (id: string, refetchInterval: false | number = false) => {
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);
  return useQuery(["jobs", serverEnv, id], () => fetchJobById(id), {
    refetchInterval,
  });
};

export const useFetchJobs = (refetchInterval: false | number = false) => {
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);
  return useQuery(["jobs", serverEnv], () => fetchJobs(), { refetchInterval });
};

export const useCancelJobs = () => {
  return useMutation(cancelJob);
};
