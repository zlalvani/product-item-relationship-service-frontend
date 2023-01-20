import { Box } from "@mui/material";
import { MainHeader, Typography } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { PublicHeader } from "../../components/layout/Header/PublicHeader";
import { PaddedSection } from "../../components/layout/PaddedSection";
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
        <PaddedSection>
          <Box
            component="img"
            src="/img/IRS_FE_Logo_long.png"
            sx={{
              display: "inline-block",
            }}
          />
        </PaddedSection>

        <PaddedSection>
          <Typography variant="body1">{t("content.irs.welcomePage.headerSubtitle")}</Typography>
        </PaddedSection>

        <IRSSelectServerEnv />
        <LoginButton />
      </MainHeader>
    </div>
  );
};
