import { useState } from "react";
import { ErrorDisplay } from "../../../../components/ErrorDisplay";
import { PaddedSection } from "../../../../components/layout/PaddedSection";
import { useFetchJobs } from "../../../../services/queries/jobs";
import { AutoRefreshSwitch } from "./components/AutoRefreshSwitch";
import { IRSJobTable } from "./components/IRSJobTable";

export const IRSJobOverview: React.FC = () => {
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const { isLoading, isError, data: jobs = [], error } = useFetchJobs(isAutoRefreshEnabled ? 5000 : false);

  if (isError) {
    return <ErrorDisplay error={error as Error} />;
  }

  return (
    <PaddedSection>
      <AutoRefreshSwitch onChange={setIsAutoRefreshEnabled} />
      <IRSJobTable isLoading={isLoading} jobs={jobs} />
    </PaddedSection>
  );
};
