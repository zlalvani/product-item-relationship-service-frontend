import { JobsDemoDataSuccess } from "../../../../../../services/api/__test__/jobs.exampleData";
import { JobStatusResultSuccess } from "../../../../../../services/api/__test__/jobStatusResult.example";
import { fireEvent, render, renderWithRouter, screen } from "../../../../../../testing/test-utils";
import { NodeDetailDialog } from "../NodeDetailDialog";

const shellId = "urn:uuid:a45a2246-f6e1-42da-b47d-5c3b58ed62e9";

it("does not render th node dialog", () => {
  const onClose = jest.fn();
  const { container } = render(<NodeDetailDialog showId={""} job={JobsDemoDataSuccess} onClose={onClose} />);
  expect(container).toMatchSnapshot();
});

it("opens the node detail dialog", () => {
  const closeFn = jest.fn();
  renderWithRouter(<NodeDetailDialog showId={shellId} job={JobsDemoDataSuccess} onClose={closeFn} />);
  const button = screen.getByRole("button", {
    name: /close/i,
  });
  fireEvent.click(button);
  expect(closeFn).toBeCalledTimes(1);
});
