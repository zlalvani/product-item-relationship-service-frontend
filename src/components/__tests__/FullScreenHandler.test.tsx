import { fireEvent, render, screen } from "@testing-library/react";
import { useFullScreen } from "../FullScreenHandler";

it("Renders a fullscreen", () => {
  let isActive = false;
  const FullScreenTestComponent: React.FC = () => {
    const { FullScreen, FullScreenButton, fullScreenActive } = useFullScreen();
    isActive = fullScreenActive;
    return (
      <FullScreen>
        <FullScreenButton />
        <>{fullScreenActive}</>
      </FullScreen>
    );
  };
  expect(isActive).toBeFalsy();
  render(<FullScreenTestComponent />);

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(isActive).toBeTruthy();
});
