import { createBrowserRouter } from "react-router-dom";
import { ErrorRoute } from "./General/ErrorPage";
import { PrivateRoot, PublicRoot } from "./General/Root";
import { ItemRelationshipService } from "./ItemRelationshipService/ItemRelationshipService";
import { JobDetail } from "./JobDetail/JobDetail";
import { WelcomePage } from "./WelcomePage/WelcomePage";

export const routeConfig = [
  {
    path: "/",
    element: <PublicRoot />,
    errorElement: <ErrorRoute />,

    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoot />,
    children: [
      {
        path: "/dashboard",
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
