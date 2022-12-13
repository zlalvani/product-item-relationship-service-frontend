import { Edge, Node } from "reactflow";
import { JobResponse, Relationship, Shell } from "../../../../../../types/jobs";
import { getLayoutedElements } from "./LayoutElements";

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

export const processJobForGraphDisplay = (job: JobResponse) => {
  const jobNodes = getNodes(job);
  const jobEdges = getEdges(job);
  return getLayoutedElements(jobNodes, jobEdges);
};
