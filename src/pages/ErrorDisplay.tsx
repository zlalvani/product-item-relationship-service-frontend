import { Box } from "@mui/system";
import { Button } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ErrorDisplay: React.FC<{ error: unknown }> = ({ error }) => {
  const { t } = useTranslation();
  return (
    <section>
      <Box className="irs-error-page">
        <Box className="irs-error-page-header">
          <h1>{t("global.errors.title")}</h1>
        </Box>
        <Box className="error-page-body">
          <p>{t("global.errors.description")}</p>
          <p>
            <i>{(error as Error).message}</i>
          </p>
          <Link to="/">
            <Button style={{ margin: 20 }} variant="contained" color="secondary">
              {t("global.actions.homepage")}
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};
