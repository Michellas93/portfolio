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
				path: ROUTES.blog(),
				element: <Blog />,
			},

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
