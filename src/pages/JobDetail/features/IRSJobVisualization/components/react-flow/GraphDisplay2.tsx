import { useMemo } from "react";
import ReactFlow, { ReactFlowProvider, Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { JobResponse, Shell } from "../../../../../../types/jobs";
import { DisplayNode } from "./DisplayNode";
import { getLayoutedElements } from "./LayoutElements";
import { SearchNode } from "./SearchNode";

const NODE_WIDTH = 300;

const getNodeBoxHeight = (shell: Shell): number => {
  const INFO_BOX_HEIGHT = 80;
  const ASPECTS_TITLE_HEIGHT = 50;
  const ASPECTS_BUTTON_HEIGHT = 50 + 5;
  const TOTAL_BUTTON_HEIGHT = shell.submodelDescriptors.length * ASPECTS_BUTTON_HEIGHT;
  return INFO_BOX_HEIGHT + ASPECTS_TITLE_HEIGHT + TOTAL_BUTTON_HEIGHT;
};

const getNodes = (job: JobResponse) => {
  // TODO: calculate Height
  return job.shells.map((shell) => {
    return {
      id: shell.globalAssetId.value[0],
      data: shell,
      position: { x: 0, y: 0 },
      type: "displayNode",
      height: getNodeBoxHeight(shell),
      width: NODE_WIDTH,
    };
  });
};

const getEdges = (job: JobResponse) => {
  const validNodeIds = job.shells.map((x: Shell) => {
    return x.globalAssetId.value[0];
  });

  return job.relationships
    .map((rel) => {
      const from = rel.catenaXId;
      const to = rel.linkedItem.childCatenaXId;

      if (validNodeIds.includes(from) && validNodeIds.includes(to)) {
        return {
          id: `${rel.catenaXId}-${rel.linkedItem.childCatenaXId}`,
          source: rel.catenaXId,
          target: rel.linkedItem.childCatenaXId,
          type: "smooth",
        };
      }
    })
    .filter((val) => val !== undefined);
};

export const GraphDisplay2: React.FC<{
  job: JobResponse;
  showNodeDialog: (x: { nodeId: string; aspectId?: string }) => void;
  fullscreen: boolean;
}> = ({ job, showNodeDialog, fullscreen }) => {
  const jobNodes = getNodes(job);
  const jobEdges = getEdges(job);
  const nodeTypes = useMemo(
    () => ({ displayNode: (data: Shell) => <DisplayNode data={data} onClick={showNodeDialog} job={job} /> }),
    [],
  );

  const { nodes, edges } = getLayoutedElements(jobNodes, jobEdges);
  return (
    <ReactFlowProvider>
      <SearchNode />
      <div style={{ height: fullscreen ? "90vh" : "40vh" }}>
        <ReactFlow
          nodeTypes={nodeTypes}
          fitView={true}
          nodes={nodes}
          edges={edges}
          proOptions={{ hideAttribution: true }}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};
