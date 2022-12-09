import { Table } from "cx-portal-shared-components";
import React from "react";
import { useTranslation } from "../../../../../lib";
import { defaultDateFormat } from "../../../../../lib/dayjs";
import { JobStatusResult } from "../../../../../types/jobs";
import { IRSCancelJobButton } from "./IRSCancelJobButton";
import { IRSNavigateToJobDetails } from "./IRSNavigateToJobDetails";

export const IRSJobTable: React.FC<{
  isLoading: boolean;
  jobs: JobStatusResult[];
}> = ({ isLoading, jobs }) => {
  console.log(jobs);
  const { t } = useTranslation();
  const columns = [
    {
      field: "id",
      headerName: t("content.irs.jobsTable.jobID"),
      flex: 1,
      filterable: false,
    },

    {
      field: "startedOn",
      headerName: t("content.irs.jobsTable.startDate"),
      width: 230,
      filterable: false,
      valueGetter: ({ row }: { row: JobStatusResult }) => defaultDateFormat(row.startedOn),
    },
    {
      field: "jobCompleted",
      headerName: t("content.irs.jobsTable.endDate"),
      width: 230,
      filterable: false,
      valueGetter: ({ row }: { row: JobStatusResult }) => defaultDateFormat(row.jobCompleted),
    },
    {
      field: "status",
      headerName: t("content.irs.jobsTable.status"),
      width: 170,
      filterable: false,
      valueGetter: ({ row }: { row: JobStatusResult }) => row.jobState,
    },
    {
      field: "visualize",
      headerName: t("content.irs.jobsTable.visualize"),

      sortable: false,
      filterable: false,
      width: 150,
      renderCell: ({ row }: { row: JobStatusResult }) => {
        if (row.state === "RUNNING") {
          return <IRSCancelJobButton jobId={row.id} />;
        }
        if (row.state === "COMPLETED") {
          return <IRSNavigateToJobDetails jobId={row.id} />;
        }

        return null;
      },
    },
  ];
  return (
    <Table
      title={t("content.irs.jobsTable.title")}
      className="irs-table"
      columns={columns}
      rows={jobs}
      loading={isLoading}
      disableColumnSelector={true}
      disableDensitySelector={true}
      hideFooter={false}
      disableColumnMenu={true}
      pagination={true}
      pageSize={50}
      hideFooterPagination={false}
      paginationMode={"client"}
    />
  );
};
