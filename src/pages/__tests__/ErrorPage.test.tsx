import { renderWithRouter } from "../../testing/test-utils";
import ErrorPage from "../General/ErrorPage";

const testString = "test Error";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useRouteError: () => ({ statusText: testString }),
}));

it("renders the Error Page", () => {
  const { getByText } = renderWithRouter(<ErrorPage />);

  const element = getByText(testString);

  expect(element).toBeDefined();
});
