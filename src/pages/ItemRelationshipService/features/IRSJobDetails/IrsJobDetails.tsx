import { useFetchJobById } from "../../../../services/queries/jobs";
import { IRSJobTombstones } from "../IRSJobTombstones";
import { IrsJobDetailsDisplay } from "./IrsJobDetailsDisplay";

export const IrsJobDetails: React.FC<{ jobId: string }> = ({ jobId }) => {
  const { data: job, isError, isLoading } = useFetchJobById(jobId);
  if (isLoading) {
    //TODO: Handle Loading State
    console.warn("implement job loading");
    return null;
  }
  if (isError) {
    //TODO: handle Error state
    console.error("implement job error");
    return null;
  }

  return (
    <>
      <IrsJobDetailsDisplay job={job.job} />
      <IRSJobTombstones job={job} />
    </>
  );
};
