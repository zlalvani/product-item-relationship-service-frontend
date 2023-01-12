import { useState } from "react";
import { PaddedSection } from "../../../../components/layout/PaddedSection";
import { AutoRefreshSwitch } from "./components/AutoRefreshSwitch";
import { IRSJobTable } from "./components/IRSJobTable";

export const IRSJobOverview: React.FC = () => {
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);

  return (
    <PaddedSection>
      <AutoRefreshSwitch onChange={setIsAutoRefreshEnabled} />
      <IRSJobTable isAutoRefreshEnabled={isAutoRefreshEnabled} />
    </PaddedSection>
  );
};
