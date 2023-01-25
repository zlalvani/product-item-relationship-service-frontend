import { useFullScreen } from "../../../../components/FullScreenHandler";
import { StyledBox, StyledBoxHeader, StyledBoxTitle } from "../../../../components/StyledBox";
import { Jobs } from "../../../../generated/jobsApi";
import { useTranslation } from "../../../../lib";

import { GraphDisplay } from "./components/GraphDisplay";

export const IrsJobVisualization: React.FC<{ job: Jobs }> = ({ job }) => {
  const { t } = useTranslation();

  const { FullScreen, FullScreenButton, fullScreenActive } = useFullScreen();

  if (job.shells === undefined || job.shells.length === 0) {
    //TODO: Better Error Handling
    return <p>No nodes to render</p>;
  }

  return (
    <section>
      <StyledBox sx={{ textAlign: "center" }}>
        <FullScreen>
          <StyledBoxHeader>
            <StyledBoxTitle>{t("content.irs.visualization.title")}</StyledBoxTitle>
            <FullScreenButton />
          </StyledBoxHeader>

          <GraphDisplay job={job} fullscreen={fullScreenActive} />
        </FullScreen>
      </StyledBox>
    </section>
  );
};
