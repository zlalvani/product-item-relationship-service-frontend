import styled from "@emotion/styled";
import { MainNavigation } from "cx-portal-shared-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { serverConfig } from "../../../utils/serverConfig";
import { getCurrentEnvironment } from "../../../utils/sessionStorageHandling";
import { HelpButton } from "./Buttons/HelpButton";
import { UserMenuButton } from "./Buttons/UserMenuButton";
import { LogoCatenaX } from "./Logo/LogoCatenaX";

/**
 * Private Header
 * Is the header used when the user is logged in
 *
 * @returns React component
 */
export const PrivateHeader: React.FC = () => {
  const serverEnv = getCurrentEnvironment();
  const { t } = useTranslation();

  return (
    <MainNavigation
      items={[
        {
          href: `/${serverEnv}/dashboard`,
          title: `${serverConfig(serverEnv).label} - ${t("content.irs.header.home")}`,
        },
      ]}
    >
      <LogoCatenaX />

      <StyledDiv>
        <HelpButton />
        <UserMenuButton />
      </StyledDiv>
    </MainNavigation>
  );
};

const StyledDiv = styled.div`
  display: flex;
`;
