import { Link } from "react-router-dom";

const Navbar = () => {
	const ROUTES = {
		index: "/index",
		maps: "/maps",
		blog: "/blog",
	};
	const navbarItem = [
		{
			className: "px-4 pt-2 hover:font-extrabold text-white",
			link: ROUTES.index,
			text: "Domů",
		},
		{
			className: "px-4 pt-2 hover:font-extrabold text-white",
			link: ROUTES.maps,
			text: "Mapy",
		},
		{
			className: "px-4 pt-2 hover:font-extrabold text-white",
			link: ROUTES.blog,
			text: "Blog",
		},
	];

	return (
		<div>
			<ul className="flex bg-darkGreen">
				{navbarItem.map((item) => (
					<li className={item.className}>
						<Link to={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
