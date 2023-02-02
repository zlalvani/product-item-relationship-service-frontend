import { useMemo, useState } from "react";
import ReactFlow, { Background, Controls, Edge, MiniMap, NodeProps, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { IOSSwitch } from "../../../../../components/IOSSwitch";
import { AssetAdministrationShellDescriptor, Jobs, Relationship } from "../../../../../generated/jobsApi";
import { DisplayNode } from "./DisplayNode";
import { EdgeDetailDialog } from "./EdgeDetailDialog";
import { processJobForGraphDisplay } from "./react-flow/processJobForGraphDisplay";
import { SearchNode } from "./SearchNode";

export type GraphViewMode = "tombstone" | "ess";

export const GraphDisplay: React.FC<{
  job: Jobs;
  fullscreen: boolean;
}> = ({ job, fullscreen }) => {
  const [showEdgeDialog, setShowEdgeDialog] = useState<Relationship | undefined>(undefined);
  const [viewMode, setViewMode] = useState<GraphViewMode>("tombstone");

  const nodeTypes = useMemo(
    () => ({
      displayNode: (data: NodeProps<AssetAdministrationShellDescriptor>) => (
        <DisplayNode data={data} job={job} viewMode={viewMode} />
      ),
    }),
    [viewMode],
  );

  const { nodes, edges } = processJobForGraphDisplay(job);

  return (
    <ReactFlowProvider>
      <SearchNode />
      <div>
        <IOSSwitch
          sx={{ m: 1 }}
          onChange={(event) => {
            setViewMode(event.target.checked ? "ess" : "tombstone");
          }}
        />
        {"ESS Mode"}
      </div>
      <div style={{ height: fullscreen ? "75vh" : "40vh" }}>
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
            setShowEdgeDialog(edge.data);
          }}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <EdgeDetailDialog edge={showEdgeDialog} onClose={() => setShowEdgeDialog(undefined)} />
    </ReactFlowProvider>
  );
};
