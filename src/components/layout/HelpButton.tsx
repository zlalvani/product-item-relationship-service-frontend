import { Button } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { USER_MANUAL_URL } from "../../constants/constants";

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
        window.open(USER_MANUAL_URL, "_blank");
      }}
    >
      {t("Help")}
    </Button>
  );
};
