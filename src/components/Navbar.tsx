import { NavLink } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { ROUTES } from "../routes";

const Navbar = () => {
	const navbarItem = [
		{
			className: "px-4 pt-2 hover:font-extrabold text-white",
			link: ROUTES.index(),
			text: "Domů",
		},
		{
			className: "px-4 pt-2 hover:font-extrabold text-white",
			link: ROUTES.maps(),
			text: "Mapy",
		},
		{
			className: "px-4 pt-2 hover:font-extrabold text-white",
			link: ROUTES.blog(),
			text: "Blog",
		},
	];

	return (
		<nav className="navbar py-2 rounded-xl mt-5 mx-2 bg-darkGreen flex justify-between pl-4 pr-4 ">
			<Logo />
			<ul className="flex bg-darkGreen">
				{navbarItem.map((item) => (
					<li className={item.className}>
						<NavLink
							to={item.link}
							className={({ isActive, isPending }) =>
								isActive ? "underline" : isPending ? "pending" : ""
							}
						>
							{item.text}
						</NavLink>
					</li>
				))}
			</ul>
			<div className="flex">
				<ButtonLink className="mr-2 ms:px-2" link="#" variant="primary">
					Log in
				</ButtonLink>
				<ButtonLink link="#" variant="secondary">
					Sign in
				</ButtonLink>
			</div>
		</nav>
	);
};

export default Navbar;
