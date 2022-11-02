import { IconButton } from "cx-portal-shared-components";
import { CancelIcon } from "../../../../../lib";
import { useCancelJobs } from "../../../../../services/queries/jobs";

export const IRSCancelJobButton: React.FC<{ jobId: string }> = ({ jobId }) => {
  const { mutate: cancelJob } = useCancelJobs();

  return (
    <IconButton onClick={() => cancelJob(jobId)} color="secondary" size="small" style={{ alignSelf: "center" }}>
      <CancelIcon />
    </IconButton>
  );
};
