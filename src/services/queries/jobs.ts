import { useQuery } from "../../lib/react-query";
import { fetchJobById } from "../api/jobs.api";

export const useFetchJobById = (id: string, refetchInterval: false | number = false) => {
  return useQuery(["jobs"], () => fetchJobById(id), {
    refetchInterval,
  });
};
