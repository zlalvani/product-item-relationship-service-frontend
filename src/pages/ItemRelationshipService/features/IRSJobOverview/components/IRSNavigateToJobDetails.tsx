import { IconButton } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "../../../../../lib";
import { getCurrentEnvironment } from "../../../../../utils/sessionStorageHandling";

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
