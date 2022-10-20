export { Canvas, CanvasPosition } from "reaflow";
import * as ReaFlow from "reaflow";
import { EdgeProps, NodeProps } from "reaflow";

export const Node: React.FC<Partial<NodeProps>> = (props) => {
  const nodeStyle = {
    fill: "white",
    // fontColor: 'rgba(0, 0, 0, 0.1)',
    // stroke: '1px solid #dcdcdc',
    // borderStyle: 'solid',
    // borderColor: '#dcdcdc',
    // borderRadius: '24px',
    // strokeRadius: 24
  };

  const baseProps = {
    removable: false,
    style: nodeStyle,
    ...props,
  };

  return <ReaFlow.Node {...baseProps} />;
};

export const Edge: React.FC<Partial<EdgeProps>> = (props) => {
  const edgeStyle = {
    stroke: "rgba(218, 48, 40, 0.425)",
    strokeDasharray: 5,
  };

  const baseProps = {
    removable: false,
    style: edgeStyle,
    className: "edge",
    ...props,
  };

  return <ReaFlow.Edge {...baseProps} />;
};
