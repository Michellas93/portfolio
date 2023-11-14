import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Root = () => {
	return (
		<>
			<Navbar />

			<div id="detail">
				<Outlet />
			</div>
			<footer className="text-center bg-darkGreen">
				Copyright &copy; Michaela Šimková 2023
			</footer>
		</>
	);
};
