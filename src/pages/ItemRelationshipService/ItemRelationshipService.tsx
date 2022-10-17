import { GridColumns } from "@mui/x-data-grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/cx-portal-shared-components/components/basic/Table";
import { useFetchJobById } from "../../services/queries/jobs";
import { AutoRefreshSwitch } from "./components/AutoRefreshSwitch";

import "./irs.scss";

export const ItemRelationshipService: React.FC<{ jobId: string }> = ({ jobId }) => {
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = React.useState(false);
  const { isLoading, isError, data: job } = useFetchJobById(jobId, isAutoRefreshEnabled ? 5000 : false);
  const { t } = useTranslation();

  if (isError) {
    // TODO: Implement error handling
    return null;
  }

  const columns: GridColumns = [];
  const jobs = [job];

  return (
    <main className="main">
      <section style={{ paddingBottom: 20 }}>
        <AutoRefreshSwitch onChange={setIsAutoRefreshEnabled} />
        <Table
          // title="IRS Jobs"
          title={t("content.irs.jobsTable.title")}
          className="irs-table"
          columns={columns}
          rows={jobs}
          getRowId={(row) => `${row.jobId}`}
          loading={isLoading}
          disableColumnSelector={true}
          disableDensitySelector={true}
          hideFooter={true}
          disableColumnMenu={true}
          onSelectionModelChange={(item) => {
            // visualize(item.toString())
          }}
        />
      </section>
      {JSON.stringify(job)}
    </main>
  );
};
