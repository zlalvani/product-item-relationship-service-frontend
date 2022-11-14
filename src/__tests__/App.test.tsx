import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from "../App";
import { serverConfig } from "../constants/serverConfig";
import { JobStatusResultSuccess } from "../services/api/__test__/jobStatusResult.example";
import { render } from "../testing/test-utils";

beforeEach(() => {
  const mock = new MockAdapter(axios);
  mock.onGet(serverConfig.DEV.value + "jobs").reply(200, JobStatusResultSuccess);
});

it("renders the App ", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
