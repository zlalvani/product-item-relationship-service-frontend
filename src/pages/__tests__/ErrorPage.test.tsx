import { render } from "@testing-library/react";
import ErrorPage from "../ErrorPage";

it("renders ErrorDisplay component", () => {
  const { container } = render(<ErrorPage />);
  expect(container).toBeInTheDocument();
});
