import React from "react";
import { IRSJobOverview } from "./features/IRSJobOverview/IRSJobOverview";
import { IRSSelectServerEnv } from "./features/SelectEnvironment/IRSSelectServerEnv";
import { IRSJobAddForm } from "./form/IRSJobAddForm";

import "./irs.scss";

export const ItemRelationshipService: React.FC = () => {
  return (
    <main className="main">
      <IRSSelectServerEnv />
      <IRSJobAddForm />
      <IRSJobOverview />
    </main>
  );
};
