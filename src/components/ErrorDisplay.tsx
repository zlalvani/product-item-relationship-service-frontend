import { Box } from "@mui/system";
import { useTranslation } from "../lib/index";

export const ErrorDisplay: React.FC<{ error: Error }> = ({ error }) => {
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
            <i>{error.message}</i>
          </p>
        </Box>
      </Box>
    </section>
  );
};
