import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { MainNavigation } from "cx-portal-shared-components";
import React from "react";
import { serverConfig } from "../../constants/serverConfig";
import { getCurrentEnvironment } from "../../utils/sessionStorageHandling";
import { HelpButton } from "./HelpButton";
import { LogOutButton } from "./LogOutButton";

type LinkItem = Partial<Record<"href" | "to", string>>;

export interface Tree {
  name: string;
  hint?: string;
  children?: Tree[];
}

export interface MenuItem extends LinkItem, Tree {
  title: string;
  children?: MenuItem[];
}

export const Header: React.FC = () => {
  const serverEnv = getCurrentEnvironment();

  return (
    <MainNavigation
      items={[
        {
          href: `/${serverEnv}/dashboard`,
          title: `${serverConfig[serverEnv].label} - Home`,
        },
      ]}
    >
      <Box
        component="img"
        src="/img/IRS_FE_Logo_long.png"
        sx={{
          display: "inline-block",
          height: "40px",
        }}
      />

      <Box>
        <HelpButton />
        <LogOutButton />
      </Box>
    </MainNavigation>
  );
};

export const PublicHeader: React.FC = () => {
  return (
    <StyledHeader>
      <MainNavigation items={[]}>
        <Box
          component="img"
          src="/img/cx-logo-text.svg"
          sx={{
            display: "inline-block",
            height: "40px",
            width: "170px",
          }}
        />
        <Box>
          <HelpButton />
        </Box>
      </MainNavigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  .d-flex {
    display: flex;
  }
`;
