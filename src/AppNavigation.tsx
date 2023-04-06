import React from "react";
import { ROUTES } from "@/core/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(ROUTES);

const AppNavigation = () => {
  return <RouterProvider router={router} />;
};

export { AppNavigation };
