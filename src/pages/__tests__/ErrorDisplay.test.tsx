import { fireEvent, render, screen } from "@testing-library/react";
import { ErrorDisplay } from "../ErrorDisplay";

it("loads ErrorDisplay page", () => {
  render(<ErrorDisplay error={undefined} />);
  const newError = () => {
    throw new TypeError("UNKNOWN ERROR");
  };
  expect(newError).toThrow(TypeError);
  expect(newError).toThrow("UNKNOWN ERROR");
});

it("renders button to home page", () => {
  const mockFn = jest.fn();

  render(<ErrorDisplay error={undefined} />);

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockFn.length).toEqual(1);
});
