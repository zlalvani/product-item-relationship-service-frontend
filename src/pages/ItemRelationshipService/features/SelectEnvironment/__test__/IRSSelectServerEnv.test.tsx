import { fireEvent, screen } from "@testing-library/react";
import { getCurrentEnvironment } from "../../../../../constants/serverConfig";
import { render } from "../../../../../testing/test-utils";
import { IRSSelectServerEnv } from "../IRSSelectServerEnv";

it("renders the environment selector", () => {
  render(<IRSSelectServerEnv />);
  const input = screen.getByRole("textbox", {
    hidden: true,
  });

  expect(getCurrentEnvironment()).toEqual("DEV");

  fireEvent.change(input, {
    target: { value: "INT" },
  });
  expect(getCurrentEnvironment()).toEqual("INT");
});
