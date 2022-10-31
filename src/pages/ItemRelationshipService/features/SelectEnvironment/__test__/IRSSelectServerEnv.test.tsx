import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../../../testing/test-utils";
import { IRSSelectServerEnv } from "../IRSSelectServerEnv";

it("renders the environment selector", () => {
  const { store } = render(<IRSSelectServerEnv />);
  const input = screen.getByRole("textbox", {
    hidden: true,
  });
  expect(store.getState().serverEnvReducer.serverEnv).toEqual("DEV");

  fireEvent.change(input, {
    target: { value: "INT" },
  });

  expect(store.getState().serverEnvReducer.serverEnv).toEqual("INT");
});
