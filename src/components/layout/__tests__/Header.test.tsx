import { renderWithProviders } from "../../../testing/test-utils";
import { PublicHeader } from "../Header/PublicHeader";

it("renders a public header", () => {
  const { container } = renderWithProviders(<PublicHeader />);
  expect(container).toMatchSnapshot();
});
