import { Box } from "@mui/material";

import { IconButton } from "cx-portal-shared-components";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "../../../../components/FullScreenHandler";
import { FullscreenExitIcon, FullscreenIcon, useTranslation } from "../../../../lib";
import { JobResponse, Relationship, Shell } from "../../../../types/jobs";
import { EdgeDetailDialog } from "./components/EdgeDetailDialog";
import { GraphDisplay2 } from "./components/GraphDisplay2";
import { NodeDetailDialog } from "./components/NodeDetailDialog";

export const IrsJobVisualization: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();
  const handle = useFullScreenHandle();

  const [showNodeDialog, setShowNodeDialog] = useState<{ shell: Shell; aspectId?: string } | undefined>();
  const [showEdgeDialog, setShowEdgeDialog] = useState<Relationship | undefined>(undefined);

  if (job.shells.length === 0) {
    //TODO: Better Error Handling
    return <p>No nodes to render</p>;
  }

  return (
    <section>
      <Box className="irs-visualization" sx={{ textAlign: "center" }}>
        <FullScreen handle={handle}>
          <Box className="irs-visualization-header">
            <h5>{t("content.irs.visualization.title")}</h5>

            {handle.active && (
              <IconButton color="secondary" size="medium" style={{ alignSelf: "right" }} onClick={handle.exit}>
                <FullscreenExitIcon />
              </IconButton>
            )}

            {!handle.active && (
              <IconButton color="secondary" size="medium" style={{ alignSelf: "right" }} onClick={handle.enter}>
                <FullscreenIcon />
              </IconButton>
            )}
          </Box>

          <GraphDisplay2
            job={job}
            showNodeDialog={setShowNodeDialog}
            showEdgeDialog={setShowEdgeDialog}
            fullscreen={handle.active}
          />
        </FullScreen>
      </Box>
      <NodeDetailDialog showInfo={showNodeDialog} onClose={() => setShowNodeDialog(undefined)} job={job} />
      <EdgeDetailDialog edge={showEdgeDialog} onClose={() => setShowEdgeDialog(undefined)} />
    </section>
  );
};
