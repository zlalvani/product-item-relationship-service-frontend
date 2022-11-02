import { Table } from "cx-portal-shared-components";
import { useTranslation } from "../../../../../lib";
// import { defaultDateFormat } from "../../../../../lib/dayjs";
import { JobStatusResult } from "../../../../../types/jobs";
import { IRSCancelJobButton } from "./IRSCancelJobButton";
import { IRSNavigateToJobDetails } from "./IRSNavigateToJobDetails";

export const IRSJobTable: React.FC<{
  isLoading: boolean;
  jobs: JobStatusResult[];
}> = ({ isLoading, jobs }) => {
  const { t } = useTranslation();
  const columns = [
    {
      field: "jobId",
      headerName: t("content.irs.jobsTable.jobID"),
      flex: 1,
      filterable: false,
    },
    // TODO: When backend adds data structure to data
    // {
    //   field: "start",
    //   headerName: t("content.irs.jobsTable.startDate"),
    //   width: 150,
    //   filterable: false,
    //   valueGetter: ({ row }: { row: JobStatusResult }) => defaultDateFormat(row.startedOn),
    // },
    // {
    //   field: "end",
    //   headerName: t("content.irs.jobsTable.endDate"),
    //   width: 150,
    //   filterable: false,
    //   valueGetter: ({ row }: { row: JobStatusResult }) => defaultDateFormat(row.jobCompleted),
    // },
    {
      field: "status",
      headerName: t("content.irs.jobsTable.status"),

      filterable: false,
      valueGetter: ({ row }: { row: JobStatusResult }) => row.status,
    },
    {
      field: "visualize",
      headerName: t("content.irs.jobsTable.visualize"),

      sortable: false,
      filterable: false,
      width: 150,
      renderCell: ({ row }: { row: JobStatusResult }) => {
        if (row.status === "RUNNING") {
          return <IRSCancelJobButton jobId={row.jobId} />;
        }
        if (row.status === "COMPLETED") {
          return <IRSNavigateToJobDetails jobId={row.jobId} />;
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
      getRowId={(row: JobStatusResult) => {
        return row.jobId;
      }}
      loading={isLoading}
      disableColumnSelector={true}
      disableDensitySelector={true}
      hideFooter={true}
      disableColumnMenu={true}
    />
  );
};
