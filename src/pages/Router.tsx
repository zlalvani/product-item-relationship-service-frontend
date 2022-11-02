import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { ItemRelationshipService } from "./ItemRelationshipService/ItemRelationshipService";
import { JobDetail } from "./JobDetail/JobDetail";

export const routeConfig = [
  {
    path: "/",
    element: <ItemRelationshipService />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs/:env/:jobId",
    element: <JobDetail />,
  },
];

export const router = createBrowserRouter(routeConfig);
