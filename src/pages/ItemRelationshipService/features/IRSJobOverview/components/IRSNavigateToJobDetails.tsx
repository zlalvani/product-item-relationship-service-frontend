import { IconButton } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "../../../../../lib";
import { useAppSelector } from "../../../../../store/store";

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
