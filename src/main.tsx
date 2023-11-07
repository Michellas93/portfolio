import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import { ROUTES } from "./routes.ts";

import { Root } from "./pages/Root.tsx";
import { Maps } from "./pages/Maps.tsx";
import { Login } from "./pages/Login.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import { Blog } from "./pages/Blog.tsx";
import "./tailwind.css";
import { Index } from "./pages/Index.tsx";

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
				path: ROUTES.login(),
				element: <Blog />,
			},
			{
				path: ROUTES.login(),
				element: <Login />,
			},
			{
				path: ROUTES.signin(),
				element: <SignIn />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
