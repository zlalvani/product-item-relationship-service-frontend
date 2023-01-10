import { useKeycloak } from "@react-keycloak/web";
import { Button } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getCurrentEnvironment } from "../../../utils/sessionStorageHandling";

export const LoginButton = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const clickHandler = async () => {
    const serverEnv = getCurrentEnvironment();
    if (keycloak.authenticated) {
      navigate(`${serverEnv}/dashboard`);
    } else {
      await keycloak.login({ redirectUri: `${window.location.origin}/${serverEnv}/dashboard` });
    }
  };

  return (
    <Button onClick={clickHandler} style={{ marginTop: "75px" }}>
      {t("Login")}
    </Button>
  );
};
