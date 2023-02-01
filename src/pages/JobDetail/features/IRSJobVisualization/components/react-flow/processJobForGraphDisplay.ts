import { Edge, Node } from "reactflow";
import { AssetAdministrationShellDescriptor, Jobs, Relationship } from "../../../../../../generated/jobsApi";
import { getLayoutedElements } from "./LayoutElements";

const NODE_WIDTH = 300;
const getNodeBoxHeight = (shell: AssetAdministrationShellDescriptor): number => {
  const INFO_BOX_HEIGHT = 80;
  const ASPECTS_TITLE_HEIGHT = 50;
  const ASPECTS_BUTTON_HEIGHT = 50 + 5;
  const TOTAL_BUTTON_HEIGHT = (shell.submodelDescriptors ?? []).length * ASPECTS_BUTTON_HEIGHT;
  return INFO_BOX_HEIGHT + ASPECTS_TITLE_HEIGHT + TOTAL_BUTTON_HEIGHT;
};
export type ExtendedShellDescriptor = AssetAdministrationShellDescriptor & { REACTFLOW_level?: number };
export type GraphNodeData = Node<ExtendedShellDescriptor>;
export type GraphEdgeData = Edge<Relationship>;
const getNodes = (job: Jobs): GraphNodeData[] => {
  return (job.shells ?? []).map((shell) => {
    return {
      id: (shell.globalAssetId?.value ?? [])[0],
      data: shell,
      position: { x: 0, y: 0 },
      type: "displayNode",
      height: getNodeBoxHeight(shell),
      width: NODE_WIDTH,
    };
  });
};
const getEdges = (job: Jobs): GraphEdgeData[] => {
  const validNodeIds = (job.shells ?? []).map((x: AssetAdministrationShellDescriptor) => {
    return (x.globalAssetId?.value ?? [])[0];
  });
  const edgeData: GraphEdgeData[] = [];
  (job.relationships ?? []).forEach((rel) => {
    // TODO: This type assertion is due to the wrong api documentation, and needs to be removed once the swagger api has been corrected.
    const from = rel.catenaXId as string;
    const to = rel.linkedItem?.childCatenaXId as string;

    if (validNodeIds.includes(from) && validNodeIds.includes(to)) {
      edgeData.push({
        id: `${from}-${to}`,
        source: from,
        target: to,

        data: rel,
      });
    }
  });
  return edgeData;
};

export const processJobForGraphDisplay = (job: Jobs) => {
  const jobNodes = getNodes(job);
  const jobEdges = getEdges(job);
  return getLayoutedElements(jobNodes, jobEdges);
};
