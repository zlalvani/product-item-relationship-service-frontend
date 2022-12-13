import { ErrorPage } from "cx-portal-shared-components";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorRoute: React.FC = () => {
  const error = useRouteError() as Error & { statusText: string };
  const navigate = useNavigate();

  return (
    <ErrorPage
      additionalDescription="Please contact your admin."
      description={error.statusText || error.message}
      header="Error"
      homeButtonTitle="Homepage"
      onHomeClick={() => navigate("/")}
      onReloadClick={() => navigate(-1)}
      reloadButtonTitle="Reload Page"
      title="Oops, Something went wrong."
    />
  );
};
