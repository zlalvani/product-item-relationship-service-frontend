import styled from "@emotion/styled";
import { Handle, Position } from "reactflow";

export const NodeContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="nodrag">
      <Handle type="target" position={Position.Top} draggable={false} />
      <NodeStyles>{children}</NodeStyles>
      <Handle type="source" position={Position.Bottom} id="a" draggable={false} />
    </div>
  );
};
const NodeStyles = styled.div`
  fill: white;
  border: 1px solid black;
  background-color: white;
  padding: 0.5rem;
  width: 300px;
`;
