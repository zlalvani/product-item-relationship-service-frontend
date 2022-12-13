import a from "react-router-dom";
import { expect, it, vi } from "vitest";
import { renderWithRouter } from "../../testing/test-utils";
import { ErrorRoute } from "../General/ErrorPage";
const testString = "test Error";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual<typeof a>("react-router-dom")),
  useRouteError: () => ({ statusText: testString }),
}));

it("renders the Error Page", () => {
  const { getByText } = renderWithRouter(<ErrorRoute />);

  const element = getByText(testString);

  expect(element).toBeDefined();
});
