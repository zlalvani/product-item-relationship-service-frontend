import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Button, MainNavigation } from "cx-portal-shared-components";
import React from "react";
import { serverConfig } from "../../constants/serverConfig";
import { useAppSelector } from "../../store/store";
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
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);

  return (
    <MainNavigation
      items={[
        {
          href: "/dashboard",
          title: `${serverConfig[serverEnv].label} - Home`,
        },
      ]}
    >
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
        <Button
          color="secondary"
          size="small"
          sx={{
            backgroundColor: "white",
            marginRight: "16px",
          }}
          variant="contained"
        >
          Help
        </Button>
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
          <Button
            color="secondary"
            size="small"
            sx={{
              backgroundColor: "white",
              marginRight: "16px",
            }}
            variant="contained"
          >
            Help
          </Button>
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
