import { GridColDef } from "@mui/x-data-grid";

import { IconButton } from "../../../../../components/cx-portal-shared-components/components/basic/IconButton";
import { ArrowForwardIcon, useTranslation } from "../../../../../lib";
import { Job } from "../../../../../types/jobs";

// Columns definitions of Digital Twin page Data Grid
export const renderJobsTableColumns = (visualize: (id: string) => void): Array<GridColDef> => {
  const { t } = useTranslation();

  return [
    {
      field: "jobId",
      headerName: t("content.irs.jobsTable.jobID"),
      flex: 3,
      filterable: false,
    },
    {
      field: "status",
      headerName: t("content.irs.jobsTable.status"),
      // headerName: 'status',
      flex: 2,
      filterable: false,
      valueGetter: ({ row }: { row: Job }) => row.jobState,
    },
    {
      field: "visualize",
      headerName: t("content.irs.jobsTable.visualize"),
      flex: 1,
      sortable: false,
      filterable: false,
      width: 150,
      renderCell: ({ row }: { row: Job }) => (
        <IconButton onClick={() => visualize(row.jobId)} color="secondary" size="small" style={{ alignSelf: "center" }}>
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ];
};
