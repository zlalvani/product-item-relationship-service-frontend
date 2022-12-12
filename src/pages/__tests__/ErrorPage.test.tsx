import { renderWithRouter } from "../../testing/test-utils";
import ErrorPage from "../General/ErrorPage";
import { expect, it, vi } from "vitest";
const testString = "test Error";
import a from "react-router-dom";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual<typeof a>("react-router-dom")),
  useRouteError: () => ({ statusText: testString }),
}));

it("renders the Error Page", () => {
  const { getByText } = renderWithRouter(<ErrorPage />);

  const element = getByText(testString);

  expect(element).toBeDefined();
});
