import React, { useState } from "react";
import { IrsJobDetails } from "./features/IrsJobDetails";
import { IRSJobOverview } from "./features/IRSJobOverview/IRSJobOverview";
import { IRSJobAddForm } from "./form/IRSJobAddForm";

import "./irs.scss";

export const ItemRelationshipService: React.FC = () => {
  const [jobId, setJobId] = useState<string>();

  return (
    <main className="main">
      <IRSJobAddForm />
      <IRSJobOverview setJobId={setJobId} />
      {jobId && <IrsJobDetails jobId={jobId} />}
    </main>
  );
};
