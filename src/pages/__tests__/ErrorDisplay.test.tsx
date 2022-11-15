import { renderWithRouter } from "../../testing/test-utils";
import { ErrorDisplay } from "../ErrorDisplay";

it("loads ErrorDisplay page", () => {
  renderWithRouter(<ErrorDisplay error={new Error()} />);
  const newError = () => {
    throw new TypeError("UNKNOWN ERROR");
  };
  expect(newError).toThrow(TypeError);
  expect(newError).toThrow("UNKNOWN ERROR");
});
