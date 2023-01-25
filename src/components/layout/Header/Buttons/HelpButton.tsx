import { Button } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";

/**
 * Header Help Button
 * currently navigates to the help page in the github repository
 * @returns React component
 */
export const HelpButton = () => {
  const { t } = useTranslation();

  return (
    <Button
      color="secondary"
      size="small"
      sx={{
        backgroundColor: "white",
        marginRight: "16px",
      }}
      variant="contained"
      onClick={() => {
        window.open(import.meta.env.VITE_USER_MANUAL_URL, "_blank");
      }}
    >
      {t("content.irs.header.help")}
    </Button>
  );
};
