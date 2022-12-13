import { useMemo } from "react";
import ReactFlow, { Background, Controls, Edge, MiniMap, NodeProps, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { JobResponse, Relationship, Shell } from "../../../../../types/jobs";
import { DisplayNode } from "./DisplayNode";
import { processJobForGraphDisplay } from "./react-flow/processJobForGraphDisplay";
import { SearchNode } from "./SearchNode";

export const GraphDisplay2: React.FC<{
  job: JobResponse;
  showNodeDialog: (x: { shell: Shell; aspectId?: string }) => void;
  showEdgeDialog: (rel: Relationship) => void;
  fullscreen: boolean;
}> = ({ job, showNodeDialog, showEdgeDialog, fullscreen }) => {
  const nodeTypes = useMemo(
    () => ({ displayNode: (data: NodeProps<Shell>) => <DisplayNode data={data} onClick={showNodeDialog} job={job} /> }),
    [],
  );

  const { nodes, edges } = processJobForGraphDisplay(job);

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
