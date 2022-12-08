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

import { Dialog, DialogContent, DialogHeader } from "cx-portal-shared-components";
import uniqueId from "lodash/uniqueId";

import { useTranslation } from "react-i18next";
import { JobResponse, Shell } from "../../../../../types/jobs";
import { NodeDetailsTwo } from "./NodeDetailsTwo";

interface NodeDialogProps {
  showInfo: { shell: Shell; aspectId?: string } | undefined;
  job: JobResponse;
  onClose: () => void;
}

export const NodeDetailDialog = ({ showInfo, onClose, job }: NodeDialogProps) => {
  const { t } = useTranslation();
  const title = `${t("content.irs.dialog.title")}`;

  if (showInfo?.shell === undefined) {
    return null;
  }

  return (
    <Dialog open={showInfo !== undefined}>
      <DialogHeader title={title} closeWithIcon onCloseWithIcon={onClose} />
      <DialogContent key={uniqueId()}>
        <NodeDetailsTwo twin={showInfo.shell} job={job} aspectId={showInfo.aspectId} />
      </DialogContent>
    </Dialog>
  );
};
