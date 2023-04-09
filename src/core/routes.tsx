import { UserAnalytics, SessionTracker } from "@/views";

const ROUTES = [
  {
    path: "/",
    element: <UserAnalytics />,
  },
  {
    path: "/session-tracker/:id",
    element: <SessionTracker />,
  },
  {
    path: "/user-analytics",
    element: <UserAnalytics />,
  },
];

export { ROUTES };
