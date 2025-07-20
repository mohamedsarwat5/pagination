import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Support from "./Support";
import NotSuppott from "./NotSuppott";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "support", element: <Support /> },
        { path: "notsupport", element: <NotSuppott /> },
      ],
    },
  ]);

  return <RouterProvider router={router}>

  </RouterProvider>;
}
