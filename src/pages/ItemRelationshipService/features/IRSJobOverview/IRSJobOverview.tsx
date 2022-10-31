import { useState } from "react";
import { useFetchJobs } from "../../../../services/queries/jobs";
import { AutoRefreshSwitch } from "./components/AutoRefreshSwitch";
import { IRSJobTable } from "./components/IRSJobTable";
import { PaddedSection } from "../../../../components/layout/PaddedSection";

export const IRSJobOverview: React.FC = () => {
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const { isLoading, isError, data: jobs = [] } = useFetchJobs(isAutoRefreshEnabled ? 5000 : false);

  if (isError) {
    // TODO: Implement error handling
    return null;
  }

  return (
    <PaddedSection>
      <AutoRefreshSwitch onChange={setIsAutoRefreshEnabled} />
      <IRSJobTable isLoading={isLoading} jobs={jobs} />
    </PaddedSection>
  );
};
