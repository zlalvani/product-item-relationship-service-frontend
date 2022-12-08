import { useState } from "react";
import { useReactFlow, useStoreApi } from "reactflow";

export const SearchNode: React.FC = () => {
  const [nodeId, setNodeId] = useState("");

  const store = useStoreApi();
  const { setCenter } = useReactFlow();

  const { nodeInternals } = store.getState();
  const nodes = Array.from(nodeInternals).map(([, node]) => node);
  const nodeIds = nodes.map((node) => node.id);

  const focusNode = (nodeId: string) => {
    const node = nodes.find((node) => node.id === nodeId);
    if (node) {
      const x = node.position.x + node.width / 2;
      const y = node.position.y + node.height / 2;
      const zoom = 1;

      setCenter(x, y, { zoom, duration: 1000 });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        focusNode(nodeId);
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
