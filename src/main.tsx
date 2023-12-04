import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import { ROUTES } from "./routes.ts";
import { Root } from "./pages/Root.tsx";
import { Maps } from "./pages/Maps.tsx";
import { Login } from "./pages/Login.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import "./tailwind.css";
import { Index } from "./pages/Index.tsx";
import Blog from "./pages/Blog.tsx";
import { List } from "./pages/List.tsx";

import { AuthProvider } from "./firebase/AuthContext.tsx";
import { AnonymousRoute } from "./pages/AnonymousRoute.tsx";
import { Content } from "./components/Content.tsx";
import { ParkSeznam } from "./components/sectionParks/ParkSeznam.tsx";
import { Park } from "./components/sectionParks/Park.tsx";
import { Louka } from "./components/sectionLouka/Louka.tsx";
import { Les } from "./components/sectionLes/les.tsx";

const router = createBrowserRouter([
  {
    path: ROUTES.index(),
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: ROUTES.maps(),
        element: <Maps />,
      },
      {
        path: ROUTES.list(),
        element: <List />,
      },
      {
        path: ROUTES.content(),
        element: <Content />,
      },
      {
        path: ROUTES.park(),
        element: <Park />,
      },
      {
        path: ROUTES.louka(),
        element: <Louka />,
      },
      {
        path: ROUTES.les(),
        element: <Les />,
      },

      {
        path: ROUTES.parkseznam(),
        element: <ParkSeznam />,
      },
      {
        path: ROUTES.blog(),
        element: <Blog />,
      },
      {
        element: <AnonymousRoute />,
        children: [
          {
            path: ROUTES.login(),
            element: <Login />,
          },
          {
            path: ROUTES.signup(),
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
