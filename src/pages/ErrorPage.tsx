import { useRouteError } from "react-router-dom";
import { ErrorDisplay } from "./ErrorDisplay";
//TODO: Create Better Layout

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText: string };
  console.error(error);

  return <ErrorDisplay error={new Error(error.statusText || error.message)} />;
}
