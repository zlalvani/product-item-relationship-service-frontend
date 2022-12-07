import { Box } from "@mui/material";
import { uniqueId } from "lodash";

import { IconButton } from "cx-portal-shared-components";
import { useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { CanvasPosition, EdgeData, NodeData } from "reaflow";
import { FullScreen, useFullScreenHandle } from "../../../../components/FullScreenHandler";
import { FullscreenExitIcon, FullscreenIcon, useTranslation } from "../../../../lib";
import { Canvas, Edge, Node } from "../../../../lib/reaflow";

import { JobResponse, Relationship, Shell } from "../../../../types/jobs";
import { EdgeDetailDialog } from "./components/EdgeDetailDialog";
import { NodeDetailDialog } from "./components/NodeDetailDialog";
import { NodeTemplate } from "./components/reaflow/nodeTemplate";

const NODE_WIDTH = 300;

const getNodeBoxHeight = (shell: Shell): number => {
  const INFO_BOX_HEIGHT = 80;
  const ASPECTS_TITLE_HEIGHT = 50;
  const ASPECTS_BUTTON_HEIGHT = 50 + 5;
  const TOTAL_BUTTON_HEIGHT = shell.submodelDescriptors.length * ASPECTS_BUTTON_HEIGHT;
  return INFO_BOX_HEIGHT + ASPECTS_TITLE_HEIGHT + TOTAL_BUTTON_HEIGHT;
};

const getNodes = (job: JobResponse): NodeData<Shell>[] => {
  return job.shells.map((el: Shell): NodeData<Shell> => {
    console.log("val", el.globalAssetId.value[0]);
    return {
      id: el.globalAssetId.value[0],
      // text: el.globalAssetId.value[0],
      height: getNodeBoxHeight(el),
      width: NODE_WIDTH,
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

const calculateTotalWidth = (edges: EdgeData<undefined>[]) => {
  const mapValues: Record<string, number> = {};
  edges.forEach((edge) => {
    if (edge.from) {
      if (mapValues[edge.from]) {
        mapValues[edge.from] += 1;
      } else {
        mapValues[edge.from] = 1;
      }
    }
  });
  const countElements = Math.max(...Object.values(mapValues));

  const NODE_PADDING = 10;
  return countElements * (NODE_WIDTH + NODE_PADDING);
};

const SearchNode: React.FC<{ nodes: NodeData<Shell>[]; action: (nodeId: string) => void }> = ({ nodes, action }) => {
  const [nodeId, setNodeId] = useState("");
  const nodeIds = nodes.map((node) => node.id);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        action(nodeId);
        setNodeId("");
      }}
    >
      <input list="nodes" name="selectedNode" value={nodeId} onChange={(e) => setNodeId(e.currentTarget.value)} />
      <datalist id="nodes">
        {nodes.map((node) => (
          <option value={node.id} key={node.id} />
        ))}
      </datalist>
      <input type="submit" disabled={!nodeIds.includes(nodeId)} />
    </form>
  );
};

const readTransformXYFromCSS = (element: HTMLElement) => {
  let transformInfo = window.getComputedStyle(element).transform;
  transformInfo = transformInfo.replace("matrix(", "");
  transformInfo = transformInfo.replace(")", "");
  const transformValues = transformInfo.split(", ");
  const transformX = parseInt(transformValues[4], 10);
  const transformY = parseInt(transformValues[5], 10);
  return { transformX, transformY };
};

export const IrsJobVisualization: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();
  const handle = useFullScreenHandle();

  const nodes = getNodes(job);
  const edges = getEdges(job);

  const zoomCanvasRef = useRef<typeof TransformWrapper | null>(null);
  const canvasRef = useRef<typeof Canvas | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showNodeDialog, setShowNodeDialog] = useState<{ nodeId: string; aspectId?: string } | undefined>();
  const [showEdgeDialog, setShowEdgeDialog] = useState<Relationship | undefined>(undefined);

  const centerOnNode = (nodeId: string) => {
    // Base Position in container
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const containerX = containerWidth / 2;
    const containerY = containerHeight / 2;

    const element = document.getElementById(nodeId);
    const parentElement = element?.parentElement?.parentElement?.parentElement;

    if (parentElement) {
      const { transformX, transformY } = readTransformXYFromCSS(parentElement);

      const x = containerX - transformX + NODE_WIDTH / 6;
      const y = containerY - transformY - element?.clientHeight;

      zoomCanvasRef.current.setTransform(x, y, 1);
    }
  };

  if (nodes.length === 0) {
    //TODO: Better Error Handling
    return <p>No nodes to render</p>;
  }

  return (
    <section>
      <GraphDisplay2 job={job} showNodeDialog={setShowNodeDialog} />
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
          <SearchNode nodes={nodes} action={centerOnNode} />

          <div className="canvas" ref={containerRef}>
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
          </div>
        </FullScreen>
      </Box>
      <NodeDetailDialog showInfo={showNodeDialog} onClose={() => setShowNodeDialog(undefined)} job={job} />
      <EdgeDetailDialog edge={showEdgeDialog} onClose={() => setShowEdgeDialog(undefined)} />
    </section>
  );
};

import { GraphDisplay2 } from "./components/react-flow/GraphDisplay2";
