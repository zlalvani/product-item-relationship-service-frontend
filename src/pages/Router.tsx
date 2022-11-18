import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { ItemRelationshipService } from "./ItemRelationshipService/ItemRelationshipService";
import { JobDetail } from "./JobDetail/JobDetail";
import { Root } from "./Root";

export const routeConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ItemRelationshipService />,
      },
      {
        path: "/jobs/:env/:jobId",
        element: <JobDetail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routeConfig);
