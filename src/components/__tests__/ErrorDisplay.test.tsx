import { renderWithRouter } from "../../testing/test-utils";
import { ErrorDisplay } from "../ErrorDisplay";

it("loads ErrorDisplay page", () => {
  const errorMsg = "testError";
  const { getByText } = renderWithRouter(<ErrorDisplay error={new Error(errorMsg)} />);
  const element = getByText(errorMsg);
  expect(element).toBeDefined();
});
