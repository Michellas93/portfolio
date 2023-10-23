import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import "./navbar.css";

export const Root = () => {
	return (
		<>
			<div id="sidebar">
				<nav className="navbar py-2 rounded-xl mt-5 mx-2">
					<div className="flex justify-between pl-8 ">
						<Logo />

						<ul className="flex">
							<li className="px-4 pt-2 hover:font-extrabold text-white ">
								<Link to={ROUTES.index()}>Domů</Link>
							</li>

							<li className="px-4 pt-2 hover:font-extrabold text-white">
								<Link to={ROUTES.maps()}>Mapy</Link>
							</li>
							<li className="px-4 pt-2 hover:font-extrabold text-white">
								<Link to={ROUTES.blog()}>Blog</Link>
							</li>
						</ul>

						<ul className="flex">
							<li className=" px-6 pt-1 pb-1 navbar__buttonL bg-white rounded-xl hover:text-white hover:border-2 hover:border-white">
								<Link to={ROUTES.login()}>Log in</Link>
							</li>
							<li className=" navbar__buttonR mx-4 mr-8 px-4 pt-1 pb-1 text-white rounded-xl border-2 border-white hover:bg-white ">
								<Link to={ROUTES.signin()}>Sign in</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Header
					header="Pet Heart"
					headerParagraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  "
				/>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
};
