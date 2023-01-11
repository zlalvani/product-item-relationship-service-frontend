import React from "react";
import { IRSJobOverview } from "./features/IRSJobOverview/IRSJobOverview";
import { IRSJobAddForm } from "./form/IRSJobAddForm";

export const ItemRelationshipService: React.FC = () => {
  return (
    <main>
      <IRSJobAddForm />
      <IRSJobOverview />
    </main>
  );
};
