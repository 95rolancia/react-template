import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <h1>test1</h1>,
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootNode = document.getElementById("root")!;
ReactDOM.createRoot(rootNode).render(<RouterProvider router={router} />);
