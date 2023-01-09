import { renderWithProviders } from "../../../testing/test-utils";
import { WelcomePage } from "../WelcomePage";

it("renders the welcome page", () => {
  const container = renderWithProviders(<WelcomePage />);
  expect(container).toMatchSnapshot();
});
