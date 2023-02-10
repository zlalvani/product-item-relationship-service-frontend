import { Button } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { useCustomKeycloak } from "../../../lib/keycloak";
import { getCurrentEnvironment } from "../../../utils/sessionStorageHandling";

/**
 * The Login button is used to navigate to the keycloak logging page.
 * If the user is already logged in, the user will be logged out.
 * This is to ensure that the user is authenticated for the currently selected server environment.
 * @returns React.Component
 */
export const LoginButton: React.FC = () => {
  const { login, logout, authenticated } = useCustomKeycloak();
  const { t } = useTranslation();

  const clickHandler = async () => {
    if (authenticated) {
      await logout();
    }
    const serverEnv = getCurrentEnvironment();
    await login({ redirectUri: `${window.location.origin}/${serverEnv}/dashboard` });
  };

  return (
    <Button onClick={clickHandler} style={{ marginTop: "75px" }}>
      {t("content.irs.welcomePage.loginButtonLabel")}
    </Button>
  );
};
