import { IconButton } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { getCurrentEnvironment } from "../../../../../constants/serverConfig";
import { ArrowForwardIcon } from "../../../../../lib";

export const IRSNavigateToJobDetails: React.FC<{ jobId: string }> = ({ jobId }) => {
  const serverEnv = getCurrentEnvironment();

  return (
    <Link to={`/${serverEnv}/jobs/${jobId}`}>
      <IconButton color="secondary" size="small" style={{ alignSelf: "center" }}>
        <ArrowForwardIcon />
      </IconButton>
    </Link>
  );
};
