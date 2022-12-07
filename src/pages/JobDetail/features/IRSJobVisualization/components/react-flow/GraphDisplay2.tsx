import { useMemo } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { JobResponse, Shell } from "../../../../../../types/jobs";
import { DisplayNode } from "./DisplayNode";
import { getLayoutedElements } from "./LayoutElements";

const getNodes = (job: JobResponse) => {
  // TODO: calculate Height
  return job.shells.map((shell) => {
    return {
      id: shell.globalAssetId.value[0],
      data: shell,
      position: { x: 0, y: 0 },
      type: "displayNode",
    };
  });
};

const getEdges = (job: JobResponse) => {
  const validNodeIds = job.shells.map((x: Shell) => {
    return x.globalAssetId.value[0];
  });
  const ret = [];
  job.relationships.forEach((rel) => {
    const from = rel.catenaXId;
    const to = rel.linkedItem.childCatenaXId;

    if (validNodeIds.includes(from) && validNodeIds.includes(to)) {
      ret.push({
        id: `${rel.catenaXId}-${rel.linkedItem.childCatenaXId}`,
        source: rel.catenaXId,
        target: rel.linkedItem.childCatenaXId,
        type: "smooth",
      });
    }
  });

  return ret;
};

export const GraphDisplay2: React.FC<{
  job: JobResponse;
  showNodeDialog: (x: { nodeId: string; aspectId?: string }) => void;
}> = ({ job, showNodeDialog }) => {
  const jobNodes = getNodes(job);
  const jobEdges = getEdges(job);
  const nodeTypes = useMemo(
    () => ({ displayNode: (data: Shell) => <DisplayNode data={data} onClick={showNodeDialog} job={job} /> }),
    [],
  );

  const { nodes, edges } = getLayoutedElements(jobNodes, jobEdges);
  return (
    <div style={{ height: "500px" }}>
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
  );
};
