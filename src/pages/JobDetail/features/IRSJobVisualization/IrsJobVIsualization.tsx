import { Box } from "@mui/material";

import { useState } from "react";
import { useFullScreen } from "../../../../components/FullScreenHandler";
import { useTranslation } from "../../../../lib";
import { JobResponse, Relationship, Shell } from "../../../../types/jobs";
import { EdgeDetailDialog } from "./components/EdgeDetailDialog";
import { GraphDisplay2 } from "./components/GraphDisplay2";
import { NodeDetailDialog } from "./components/NodeDetailDialog";

export const IrsJobVisualization: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();

  const { FullScreen, FullScreenButton, fullScreenActive } = useFullScreen();

  const [showNodeDialog, setShowNodeDialog] = useState<{ shell: Shell; aspectId?: string } | undefined>();
  const [showEdgeDialog, setShowEdgeDialog] = useState<Relationship | undefined>(undefined);

  if (job.shells.length === 0) {
    //TODO: Better Error Handling
    return <p>No nodes to render</p>;
  }

  return (
    <section>
      <Box className="irs-visualization" sx={{ textAlign: "center" }}>
        <FullScreen>
          <Box className="irs-visualization-header">
            <h5>{t("content.irs.visualization.title")}</h5>
            <FullScreenButton />
          </Box>

          <GraphDisplay2
            job={job}
            showNodeDialog={setShowNodeDialog}
            showEdgeDialog={setShowEdgeDialog}
            fullscreen={fullScreenActive}
          />
        </FullScreen>
      </Box>
      <NodeDetailDialog showInfo={showNodeDialog} onClose={() => setShowNodeDialog(undefined)} job={job} />
      <EdgeDetailDialog edge={showEdgeDialog} onClose={() => setShowEdgeDialog(undefined)} />
    </section>
  );
};
