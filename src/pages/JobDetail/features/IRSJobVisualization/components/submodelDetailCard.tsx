/********************************************************************************
 * Copyright (c) 2021,2022 BMW Group AG
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation.
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import SourceIcon from "@mui/icons-material/Source";
import VerifiedIcon from "@mui/icons-material/Verified";

import { Box } from "@mui/material";

import { Button } from "cx-portal-shared-components";

import uniqueId from "lodash/uniqueId";
import { Jobs, Submodel, SubmodelDescriptor, Tombstone } from "../../../../../generated/jobsApi";
import { GraphViewMode } from "./GraphDisplay";

import { getSubModelPayload, getTombstones } from "./SubmodelTombstones";

interface Props {
  submodel: SubmodelDescriptor;
  job: Jobs;
  onClick: () => void;
  viewMode: GraphViewMode;
}

const getButtonColor = (errorCount: number) => {
  if (errorCount > 0) return "error";
  return "success";
};

const getButtonColorESSMode = (submodelPayload: Submodel[] = []) => {
  const colorMap = {
    yes: "error",
    no: "success",
    unknown: "warning",
  };
  //TODO: Adjust when backend adds support for this
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const value: "yes" | "no" | "unknown" = submodelPayload[0].payload.supplychain_impacted ?? "yes";
  return colorMap[value];
};

const AspectIcon: React.FC<{ submodel: SubmodelDescriptor; tombstones: Tombstone[]; submodelPayload: Submodel[] }> = ({
  submodel,
  tombstones,
  submodelPayload,
}) => {
  let icon;

  if (submodel.idShort === "EssIncident") {
    const colorMap = {
      yes: <FindInPageIcon />,
      no: <VerifiedIcon />,
      unknown: <ErrorOutlineIcon />,
    };
    //TODO: Adjust when backend adds support for this
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value: "yes" | "no" | "unknown" = submodelPayload[0].payload.supplychain_impacted ?? <ErrorOutlineIcon />;
    icon = colorMap[value];
  } else {
    icon = (
      <>
        {tombstones.map((error) => {
          return <ErrorOutlineIcon key={uniqueId(error.endpointURL)}></ErrorOutlineIcon>;
        })}

        {submodelPayload.map((x) => {
          return <SourceIcon key={x.identification}></SourceIcon>;
        })}
      </>
    );
  }

  return <div style={{ float: "right", marginLeft: 10 }}>{icon}</div>;
};

export const SubmodelDetailCard: React.FC<Props> = ({ submodel, onClick, job, viewMode }) => {
  const tombstones = getTombstones(submodel, job);
  const submodelPayload = getSubModelPayload(submodel.identification ?? "", job);

  if (!tombstones || !submodelPayload || (viewMode === "ess" && submodel.idShort !== "EssIncident")) {
    return null;
  }

  let buttonColor;
  if (viewMode === "ess") {
    buttonColor = getButtonColorESSMode(submodelPayload);
  } else {
    buttonColor = getButtonColor(tombstones.length);
  }

  return (
    <Box>
      <Button
        key={uniqueId(submodel.idShort)}
        sx={{ width: "100%" }}
        size="small"
        color={buttonColor as "success"}
        variant="contained"
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
      >
        {submodel.idShort}
        <AspectIcon submodel={submodel} tombstones={tombstones} submodelPayload={submodelPayload} />
      </Button>
    </Box>
  );
};
