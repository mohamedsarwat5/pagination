import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Support from "./Support";
import NotSuppott from "./NotSuppott";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

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

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}
