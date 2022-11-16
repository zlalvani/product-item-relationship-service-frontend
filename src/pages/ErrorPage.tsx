import { Button } from "cx-portal-shared-components";
import { Link, useRouteError } from "react-router-dom";
import { useTranslation } from "../../src/lib/index";
import { ErrorDisplay } from "../components/ErrorDisplay";
//TODO: Create Better Layout

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText: string };
  console.error(error);
  const { t } = useTranslation();

  return (
    <>
      <ErrorDisplay error={new Error(error.statusText || error.message)} />
      <Link to="/">
        <Button style={{ margin: 20 }} variant="contained" color="secondary">
          {t("global.actions.homepage")}
        </Button>
      </Link>
    </>
  );
}
