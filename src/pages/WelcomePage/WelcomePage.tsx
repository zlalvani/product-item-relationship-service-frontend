import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { MainHeader, Typography } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { PublicHeader } from "../../components/layout/Header/PublicHeader";
import { IRSSelectServerEnv } from "./components/IRSSelectServerEnv";
import { LoginButton } from "./components/LoginButton";

/**
 * The welcome page
 * allows the user to select the server environment
 * allow the user to log in
 * @returns React.Node
 */
export const WelcomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PublicHeader />
      <MainHeader
        background="LinearGradient1"
        headerHeight={window.innerHeight}
        imagePath="./img/home-stage-desktop.png"
      >
        <PaddingBottom>
          <Box
            component="img"
            src="/img/IRS_FE_Logo_long.png"
            sx={{
              display: "inline-block",
            }}
          />
        </PaddingBottom>

        <PaddingBottom>
          <Typography variant="body1">{t("content.irs.welcomePage.headerSubtitle")}</Typography>
        </PaddingBottom>

        <IRSSelectServerEnv />
        <LoginButton />
      </MainHeader>
    </div>
  );
};

const PaddingBottom = styled.div`
  margin-bottom: 1.5rem;
`;
