import { IconButton } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "../../../../../lib";
import { JobStatusResult } from "../../../../../types/jobs";

export const IRSTableActionButton: React.FC<{ row: JobStatusResult }> = ({ row }) => {
  if (row.status === "RUNNING") {
    // TODO: create a cancel job button
    return null;
  }
  if (row.status === "COMPLETED") {
    return (
      <Link to={`/jobs/${row.jobId}`}>
        <IconButton color="secondary" size="small" style={{ alignSelf: "center" }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
    );
  }

  return null;
};
