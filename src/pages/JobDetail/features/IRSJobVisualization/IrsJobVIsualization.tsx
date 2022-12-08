import { Box } from "@mui/material";

import { IconButton } from "cx-portal-shared-components";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "../../../../components/FullScreenHandler";
import { FullscreenExitIcon, FullscreenIcon, useTranslation } from "../../../../lib";

import { JobResponse, Relationship } from "../../../../types/jobs";
import { EdgeDetailDialog } from "./components/EdgeDetailDialog";
import { NodeDetailDialog } from "./components/NodeDetailDialog";

export const IrsJobVisualization: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();
  const handle = useFullScreenHandle();

  const [showNodeDialog, setShowNodeDialog] = useState<{ nodeId: string; aspectId?: string } | undefined>();
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

          <GraphDisplay2 job={job} showNodeDialog={setShowNodeDialog} fullscreen={handle.active} />
          {/* <div className="canvas" ref={containerRef}>
            <TransformWrapper minScale={0.1} maxScale={4} limitToBounds={false} ref={zoomCanvasRef}>
              <TransformComponent>
                <Canvas
                  ref={canvasRef}
                  zoomable={false}
                  nodes={nodes}
                  edges={edges}
                  fit={true}
                  maxWidth={calculateTotalWidth(edges)}
                  defaultPosition={CanvasPosition.TOP}
                  node={
                    <Node>
                      {(nodeChild) => {
                        const initId = nodes[0].id;

                        if (nodeChild.node.id === initId) {
                          centerOnNode(initId);
                        }

                        return (
                          <foreignObject height={getNodeBoxHeight(nodeChild.node)} width={290} x={0} y={0}>
                            <Box>
                              <div id={nodeChild.node.id}>
                                <NodeTemplate shell={nodeChild.node} job={job} onClick={setShowNodeDialog} />
                              </div>
                            </Box>
                          </foreignObject>
                        );
                      }}
                    </Node>
                  }
                  edge={
                    <Edge
                      onClick={(event, edge) => {
                        const relationship = job.relationships.find(
                          (val) => val.catenaXId === edge.from && val.linkedItem.childCatenaXId === edge.to,
                        );
                        if (relationship !== undefined) {
                          setShowEdgeDialog(relationship);
                        }
                      }}
                    />
                  }
                />
              </TransformComponent>
            </TransformWrapper>
          </div> */}
        </FullScreen>
      </Box>
      <NodeDetailDialog showInfo={showNodeDialog} onClose={() => setShowNodeDialog(undefined)} job={job} />
      <EdgeDetailDialog edge={showEdgeDialog} onClose={() => setShowEdgeDialog(undefined)} />
    </section>
  );
};

import { GraphDisplay2 } from "./components/react-flow/GraphDisplay2";
