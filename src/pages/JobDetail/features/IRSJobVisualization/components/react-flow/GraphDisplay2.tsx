import { useMemo } from "react";
import ReactFlow, { Background, Controls, Edge, MiniMap, Node, NodeProps, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { JobResponse, Relationship, Shell } from "../../../../../../types/jobs";
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

export type GraphNodeData = Node<Shell>;
export type GraphEdgeData = Edge<Relationship>;

const getNodes = (job: JobResponse): GraphNodeData[] => {
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

const getEdges = (job: JobResponse): GraphEdgeData[] => {
  const validNodeIds = job.shells.map((x: Shell) => {
    return x.globalAssetId.value[0];
  });
  const edgeData: GraphEdgeData[] = [];
  job.relationships.forEach((rel) => {
    const from = rel.catenaXId;
    const to = rel.linkedItem.childCatenaXId;

    if (validNodeIds.includes(from) && validNodeIds.includes(to)) {
      edgeData.push({
        id: `${rel.catenaXId}-${rel.linkedItem.childCatenaXId}`,
        source: rel.catenaXId,
        target: rel.linkedItem.childCatenaXId,

        data: rel,
      });
    }
  });
  return edgeData;
};

export const GraphDisplay2: React.FC<{
  job: JobResponse;
  showNodeDialog: (x: { shell: Shell; aspectId?: string }) => void;
  showEdgeDialog: (rel: Relationship) => void;
  fullscreen: boolean;
}> = ({ job, showNodeDialog, showEdgeDialog, fullscreen }) => {
  const jobNodes = getNodes(job);
  const jobEdges = getEdges(job);
  const nodeTypes = useMemo(
    () => ({ displayNode: (data: NodeProps<Shell>) => <DisplayNode data={data} onClick={showNodeDialog} job={job} /> }),
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
          fitViewOptions={{
            maxZoom: 1,
          }}
          nodes={nodes}
          edges={edges}
          proOptions={{ hideAttribution: true }}
          minZoom={0.01}
          onEdgeClick={(event: React.MouseEvent, edge: Edge) => {
            showEdgeDialog(edge.data);
          }}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};
