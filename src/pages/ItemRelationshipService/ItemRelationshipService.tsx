import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/cx-portal-shared-components/components/basic/Table";
import { useFetchJobById } from "../../services/queries/jobs";
import { AutoRefreshSwitch } from "./components/AutoRefreshSwitch";
import { renderJobsTableColumns } from "./components/RenderJobsTableColumns";
import { IRSJobAddForm } from "./form/IRSJobAddForm";

import "./irs.scss";

export const ItemRelationshipService: React.FC = () => {
  const [jobId, setJobId] = useState("");
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const { isLoading, isError, data: job } = useFetchJobById(jobId, isAutoRefreshEnabled ? 5000 : false);
  const { t } = useTranslation();

  if (isError) {
    // TODO: Implement error handling
    return null;
  }

  const visualize = (id: string) => {
    const encodedId = encodeURIComponent(id);
    setJobId(encodedId);
  };

  const columns = renderJobsTableColumns(visualize);
  const jobs = [job?.job];

  return (
    <main className="main">
      <IRSJobAddForm />
      <section style={{ paddingBottom: 20 }}>
        <AutoRefreshSwitch onChange={setIsAutoRefreshEnabled} />
        <Table
          // title="IRS Jobs"
          title={t("content.irs.jobsTable.title")}
          className="irs-table"
          columns={columns}
          rows={jobs}
          getRowId={(row) => {
            console.log(row);
            return 12;
          }}
          loading={isLoading}
          disableColumnSelector={true}
          disableDensitySelector={true}
          hideFooter={true}
          disableColumnMenu={true}
          onSelectionModelChange={(item) => {
            visualize(item.toString());
          }}
        />
      </section>
      {JSON.stringify(job)}
    </main>
  );
};
