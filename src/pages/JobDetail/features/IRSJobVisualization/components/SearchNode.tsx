import styled from "@emotion/styled";
import { Button, SelectList } from "cx-portal-shared-components";
import { useState } from "react";
import { Node, useReactFlow, useStoreApi } from "reactflow";

type GraphNode = Node<unknown, string | undefined> | undefined;

export const SearchNode: React.FC = () => {
  const [nodeId, setNodeId] = useState<GraphNode>(undefined);

  const { setCenter } = useReactFlow();

  const store = useStoreApi();

  const { nodeInternals } = store.getState();
  const nodes = Array.from(nodeInternals).map(([, node]) => node);
  const listItems = nodes.map((node) => ({
    id: node.id,
    title: `${node.data.idShort} (${node.id})`,
    value: node,
  }));

  const focusNode = (node: GraphNode) => {
    if (node) {
      const x = node.position.x + (node.width ?? 0) / 2;
      const y = node.position.y + (node.height ?? 0) / 2;
      const zoom = 1;

      setCenter(x, y, { zoom, duration: 1000 });
    }
  };

  return (
    <StyledInput>
      <SelectList
        clearText="clear"
        helperText="Enter Node ID"
        keyTitle="title"
        items={listItems}
        label={"Highlight Node"}
        placeholder={"Enter Node ID"}
        onChangeItem={(item: { value: GraphNode }): void => {
          setNodeId(item.value);
        }}
      />
      <StyledDiv>
        <Button
          color="secondary"
          size="small"
          disabled={nodeId === undefined}
          onClick={() => {
            focusNode(nodeId);
            setNodeId(undefined);
          }}
        >
          Submit
        </Button>
      </StyledDiv>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0.5rem;
`;
const StyledDiv = styled.div`
  margin: 0 1rem;
`;
