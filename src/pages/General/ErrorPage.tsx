import { ErrorPage } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorRoute: React.FC = () => {
  const error = useRouteError() as Error & { statusText: string };
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ErrorPage
      header={t("content.irs.errorPage.header").toString()}
      additionalDescription={t("content.irs.errorPage.description").toString()}
      description={error.statusText || error.message}
      homeButtonTitle={t("content.irs.errorPage.homeButtonTitle").toString()}
      onHomeClick={() => navigate("/")}
      onReloadClick={() => navigate(-1)}
      reloadButtonTitle={t("content.irs.errorPage.reloadButtonTitle").toString()}
      title={t("content.irs.errorPage.title").toString()}
    />
  );
};
