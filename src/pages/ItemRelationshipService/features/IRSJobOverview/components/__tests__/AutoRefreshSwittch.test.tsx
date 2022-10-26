import { fireEvent, render, screen } from "../../../../../../testing/test-utils";
import { AutoRefreshSwitch } from "../AutoRefreshSwitch";

it("renders the switch", () => {
  const mockChangeHandler = jest.fn();
  render(<AutoRefreshSwitch onChange={mockChangeHandler} />);

  const element2 = screen.getByTestId("IOSSwitch");

  const input = element2.firstChild as ChildNode;

  fireEvent.click(input);
  expect(mockChangeHandler).toBeCalledWith(true);

  fireEvent.click(input);
  expect(mockChangeHandler).toBeCalledWith(false);
});
