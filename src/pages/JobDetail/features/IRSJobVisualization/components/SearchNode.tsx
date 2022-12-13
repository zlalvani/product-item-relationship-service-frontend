import styled from "@emotion/styled";
import { Button, SelectList } from "cx-portal-shared-components";
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
      const x = node.position.x + (node.width ?? 0) / 2;
      const y = node.position.y + (node.height ?? 0) / 2;
      const zoom = 1;

      setCenter(x, y, { zoom, duration: 1000 });
    }
  };
  console.log(nodes);
  return (
    <StyledInput>
      <SelectList
        clearText="clear"
        helperText="Enter Node ID"
        keyTitle="title"
        items={(nodes ?? []).map((node) => ({
          id: node.id,
          title: `${node.data.idShort} (${node.id})`,
          value: node.id,
        }))}
        label={"Highlight Node"}
        placeholder={"Enter Node ID"}
        onChangeItem={(item: { value: string }): void => {
          setNodeId(item.value);
        }}
      />
      <Button
        color="secondary"
        size="small"
        disabled={!nodeIds.includes(nodeId)}
        onClick={() => {
          focusNode(nodeId);
          setNodeId("");
        }}
      >
        Submit
      </Button>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  text-align: left;
  padding: 0.5rem;
`;
