import { useKeycloak } from "@react-keycloak/web";
import { Button } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getCurrentEnvironment } from "../../../constants/serverConfig";

export const LoginButton = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const clickHandler = async () => {
    const serverEnv = getCurrentEnvironment();
    navigate(`${serverEnv}/dashboard`);
    await keycloak.login();
  };
  return (
    <Button onClick={clickHandler} style={{ marginTop: "75px" }}>
      {t("Login")}
    </Button>
  );
};
