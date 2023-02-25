import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";

import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "pages/root";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "components/Contact";
import EditContact, { action as editAction } from "pages/edit";
import { action as destroyAction } from "pages/destroy";
import Index from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/contacts/:id",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "/contacts/:id/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "/contacts/:id/destroy",
            action: destroyAction,
            errorElement: <div>Ooops! There was an error</div>,
          },
        ],
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootNode = document.getElementById("root")!;
ReactDOM.createRoot(rootNode).render(<RouterProvider router={router} />);
