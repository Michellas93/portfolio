import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./pages/Root.tsx";
import ErrorPage from "./pages/ErrorPage";
import { ROUTES } from "./routes.ts";
import { Contact } from "./pages/Contact.tsx";
import { About } from "./pages/About.tsx";
import { Maps } from "./pages/Maps.tsx";
import { Login } from "./pages/Login.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import "./styleTailwind.css";

const router = createBrowserRouter([
	{
		path: ROUTES.index(),
		element: <Root />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: ROUTES.contacts(),
				element: <Contact />,
			},
			{
				path: ROUTES.about(),
				element: <About />,
			},
			{
				path: ROUTES.maps(),
				element: <Maps />,
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
