import styled from "@emotion/styled";
import { Box, useTheme } from "@mui/material";
import { uniqueId } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Handle, NodeProps, Position } from "reactflow";
import { AssetAdministrationShellDescriptor, Jobs, SubmodelDescriptor } from "../../../../../generated/jobsApi";

import { NodeDetailDialog } from "./NodeDetailDialog";
import { ExtendedShellDescriptor } from "./react-flow/processJobForGraphDisplay";
import { SubmodelDetailCard } from "./submodelDetailCard";

const getSortedSubModelDescriptions = (shell: AssetAdministrationShellDescriptor) => {
  function compare(a: SubmodelDescriptor, b: SubmodelDescriptor) {
    if ((a.idShort ?? "") < (b.idShort ?? "")) {
      return -1;
    }
    if ((a.idShort ?? "") > (b.idShort ?? "")) {
      return 1;
    }
    return 0;
  }
  return [...(shell.submodelDescriptors ?? [])].sort(compare);
};

export const DisplayNode: React.FC<{
  data: NodeProps<ExtendedShellDescriptor>;
  job: Jobs;
}> = ({ data, job }) => {
  const { spacing } = useTheme();
  const { t } = useTranslation();
  const shell = data.data;
  const [showNodeDialog, setShowNodeDialog] = useState<
    { shell: AssetAdministrationShellDescriptor; aspectId?: string } | undefined
  >();

  return (
    <div className="nodrag">
      <NodeDetailDialog showInfo={showNodeDialog} onClose={() => setShowNodeDialog(undefined)} job={job} />
      <Handle type="target" position={Position.Top} draggable={false} />
      <NodeStyles>
        <ClickableDiv onClick={() => setShowNodeDialog({ shell })}>
          <p>{shell.idShort}</p>
          <p>{data.id}</p>
        </ClickableDiv>
        <Box
          sx={{
            display: "grid",
            gap: spacing(1, 3),
            gridTemplateColumns: `repeat(1, 1fr)`,
            marginLeft: 0.5,
          }}
        >
          <div style={{ textAlign: "left", margin: 5 }}>{t("content.irs.visualization.nodeAspectsTitle")}</div>
          {getSortedSubModelDescriptions(shell).map((n: SubmodelDescriptor) => {
            //Todo: Check for errors and add them to the object
            return (
              <SubmodelDetailCard
                key={uniqueId(n.identification)}
                submodel={n}
                onClick={() => setShowNodeDialog({ shell, aspectId: n.idShort })}
                job={job}
                level={data.data.REACTFLOW_level ?? 0}
              />
            );
          })}
        </Box>
      </NodeStyles>
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

const ClickableDiv = styled.div`
  cursor: pointer;
  font-size: x-small;
  text-align: left;
  width: 100%;
  padding: 10px;
`;
