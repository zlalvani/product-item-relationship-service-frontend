import { IconButton } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "../../../../../lib";
import { useAppSelector } from "../../../../../store/store";
import { JobStatusResult } from "../../../../../types/jobs";

export const IRSTableActionButton: React.FC<{ row: JobStatusResult }> = ({ row }) => {
  const { serverEnv } = useAppSelector((store) => store.serverEnvReducer);
  if (row.status === "RUNNING") {
    // TODO: create a cancel job button
    return null;
  }
  if (row.status === "COMPLETED") {
    return (
      <Link to={`/jobs/${serverEnv}/${row.jobId}`}>
        <IconButton color="secondary" size="small" style={{ alignSelf: "center" }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
    );
  }

  return null;
};
