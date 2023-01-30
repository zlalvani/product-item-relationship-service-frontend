import { Divider, Grid } from "@mui/material";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { DetailGrid } from "../../../components/DetailGrid";
import { StyledBox, StyledBoxContent, StyledBoxHeader, StyledBoxTitle } from "../../../components/StyledBox";
import { Job } from "../../../generated/jobsApi";
import { BeautifulJson } from "../../../lib/react-syntax-highlighter";

export const IrsJobDetails: React.FC<{ job: Job }> = ({ job }) => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        padding: "34px 0",
      }}
    >
      <StyledBox>
        <StyledBoxHeader>
          <StyledBoxTitle>{t("content.irs.jobDetails.title")}</StyledBoxTitle>
        </StyledBoxHeader>
        <StyledBoxContent>
          <Grid>
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={"Job ID:"} content={job?.id} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={t("content.irs.jobDetails.globalAssetId")} content={job.globalAssetId as string} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={"Job State:"} content={job.state} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.exception")}
              content={<BeautifulJson json={job.exception} />}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.createdOn")}
              content={dayjs(job.createdOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.startedOn")}
              content={dayjs(job.startedOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.lastModifiedOn")}
              content={dayjs(job.lastModifiedOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.jobCompleted")}
              content={dayjs(job?.completedOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={t("content.irs.jobDetails.owner")} content={job.owner} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={t("content.irs.jobDetails.summary")} content={<BeautifulJson json={job.summary} />} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.jobParameter")}
              content={<BeautifulJson json={job.parameter} />}
            />
          </Grid>
        </StyledBoxContent>
      </StyledBox>
    </section>
  );
};
