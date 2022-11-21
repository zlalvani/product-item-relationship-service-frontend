import { Box } from "@mui/material";
import { uniqueId } from "lodash";

import { IconButton } from "cx-portal-shared-components";
import { useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { EdgeData, NodeData } from "reaflow";
import { FullScreen, useFullScreenHandle } from "../../../../components/FullScreenHandler";
import { FullscreenExitIcon, FullscreenIcon, useTranslation } from "../../../../lib";
import { Canvas, CanvasPosition, Edge, Node } from "../../../../lib/reaflow";

import { JobResponse, Shell } from "../../../../types/jobs";
import { EdgeDetailDialog } from "./components/EdgeDetailDialog";
import { NodeDetailDialog } from "./components/NodeDetailDialog";
import { NodeTemplate } from "./components/nodeTemplate";

const getNodeBoxHeight = (shell: Shell): number => {
  const INFO_BOX_HEIGHT = 80;
  const ASPECTS_TITLE_HEIGHT = 50;
  const ASPECTS_BUTTON_HEIGHT = 50;
  const TOTAL_BUTTON_HEIGHT = shell.submodelDescriptors.length * ASPECTS_BUTTON_HEIGHT;
  return INFO_BOX_HEIGHT + ASPECTS_TITLE_HEIGHT + TOTAL_BUTTON_HEIGHT;
};

const getNodes = (job: JobResponse): NodeData<Shell>[] => {
  return job.shells.map((el: Shell): NodeData<Shell> => {
    return {
      id: el.globalAssetId.value[0],
      // text: el.globalAssetId.value[0],
      height: getNodeBoxHeight(el),
      width: 300,
      ...el, //TODO: Evaluate if this should move to the data attribute
    };
  });
};

const getEdges = (job: JobResponse): EdgeData<undefined>[] => {
  const validNodeIds = job.shells.map((x: Shell) => {
    return x.globalAssetId.value[0];
  });
  const ret: EdgeData<undefined>[] = [];
  job.relationships.forEach((rel) => {
    const from = rel.catenaXId;
    const to = rel.linkedItem.childCatenaXId;

    if (validNodeIds.includes(from) && validNodeIds.includes(to)) {
      ret.push({
        id: uniqueId(rel.catenaXId),
        from: rel.catenaXId,
        to: rel.linkedItem.childCatenaXId,
      });
    }
  });

  return ret;
};

export const IrsJobVisualization: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();
  const handle = useFullScreenHandle();
  const nodes = getNodes(job);
  const edges = getEdges(job);

  const [showNodeDialog, setShowNodeDialog] = useState("");
  const [showEdgeDialog, setShowEdgeDialog] = useState(undefined);

  const canvasHeight = () => {
    if (handle.active) {
      return window.innerHeight;
    } else {
      return 800;
    }
  };

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
          <TransformWrapper maxScale={4} limitToBounds={false}>
            <TransformComponent>
              <Canvas
                zoomable={false}
                height={canvasHeight()}
                maxHeight={canvasHeight()}
                nodes={nodes}
                edges={edges}
                fit={true}
                node={
                  <Node>
                    {(nodeChild) => (
                      <foreignObject height={getNodeBoxHeight(nodeChild.node)} width={290} x={0} y={0}>
                        <Box>
                          <NodeTemplate shell={nodeChild.node} job={job} onClick={setShowNodeDialog} />
                        </Box>
                      </foreignObject>
                    )}
                  </Node>
                }
                edge={
                  <Edge
                    onClick={(event, edge) => {
                      console.log("Selecting Edge", event, edge);
                      setShowEdgeDialog(edge);
                    }}
                  />
                }
              />
            </TransformComponent>
          </TransformWrapper>
        </FullScreen>
      </Box>
      <NodeDetailDialog showId={showNodeDialog} onClose={() => setShowNodeDialog("")} job={job} />
      <EdgeDetailDialog edge={showEdgeDialog} onClose={() => setShowEdgeDialog(undefined)} />
    </section>
  );
};
