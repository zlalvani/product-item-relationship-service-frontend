import { useRouteError } from "react-router-dom";
import { ErrorDisplay } from "./ErrorDisplay";
import { Button } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { useTranslation } from "../../src/lib/index";
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
