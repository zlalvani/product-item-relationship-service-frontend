import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { MainNavigation } from "cx-portal-shared-components";
import React from "react";
import { HelpButton } from "./Buttons/HelpButton";
import { LogoIRS } from "./Logo/LogoIRS";

/**
 * Public Header
 * Used only on the Welcome page
 *
 * @returns React component
 */
export const PublicHeader: React.FC = () => {
  return (
    <StyledHeader>
      <MainNavigation items={[]}>
        <LogoIRS />
        <Box>
          <HelpButton />
        </Box>
      </MainNavigation>
    </StyledHeader>
  );
};

/**
 * Additional Styles needed to ensure that the header is visible
 */
const StyledHeader = styled.header`
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  .d-flex {
    display: flex;
  }
`;
