import { expect, it, vi } from "vitest";
import { JobsDemoDataSuccess } from "../../../../../../services/api/__test__/jobs.exampleData";
import { fireEvent, render, renderWithRouter, screen } from "../../../../../../testing/test-utils";
import { NodeDetailDialog } from "../NodeDetailDialog";

it("does not render th node dialog", () => {
  const onClose = vi.fn();
  const { container } = render(<NodeDetailDialog showInfo={undefined} job={JobsDemoDataSuccess} onClose={onClose} />);
  expect(container).toMatchSnapshot();
});

it("opens the node detail dialog", () => {
  const closeFn = vi.fn();
  renderWithRouter(
    <NodeDetailDialog
      showInfo={{ shell: JobsDemoDataSuccess.shells[0], aspectId: undefined }}
      job={JobsDemoDataSuccess}
      onClose={closeFn}
    />,
  );
  const button = screen.getByRole("button", {
    name: /close/i,
  });
  fireEvent.click(button);
  expect(closeFn).toBeCalledTimes(1);
});
