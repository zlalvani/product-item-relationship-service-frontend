import { IconButton } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "../../../../../lib";
import { useAppSelector } from "../../../../../store/store";
import { JobStatusResult } from "../../../../../types/jobs";
import { IRSCancelJobButton } from "./IRSCancelJobButton";

export const IRSNavigateToJobDetails: React.FC<{ jobId: string }> = ({ jobId }) => {
  const { serverEnv } = useAppSelector((store) => store.serverEnvReducer);

  return (
    <Link to={`/jobs/${serverEnv}/${jobId}`}>
      <IconButton color="secondary" size="small" style={{ alignSelf: "center" }}>
        <ArrowForwardIcon />
      </IconButton>
    </Link>
  );
};

export const IRSTableActionButton: React.FC<{ row: JobStatusResult }> = ({ row }) => {
  if (row.status === "RUNNING") {
    return <IRSCancelJobButton jobId={row.jobId} />;
  }
  if (row.status === "COMPLETED") {
    return <IRSNavigateToJobDetails jobId={row.jobId} />;
  }

  return null;
};
