import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";

export const Root = () => {
	return (
		<>
			<div id="sidebar">
				{/* <form id="search-form" role="search">
                    <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                    />

                    <div id="search-spinner" aria-hidden hidden={true} />
                    <div className="sr-only" aria-live="polite"></div>
                </form> */}
				{/* <form method="post">
                    <button type="submit">New</button>
                </form> */}

				<div>
					<nav className="bg-yellow-300 py-4">
						<div className="flex justify-between pl-8 ">
							<Logo />

							<ul className="flex">
								<li className="mx-4 hover:font-extrabold">
									<Link to={ROUTES.index()}>Domů</Link>
								</li>

								<li className="mx-4 hover:font-extrabold">
									<Link to={ROUTES.maps()}>Mapy</Link>
								</li>
								<li className="mx-4 hover:font-extrabold">
									<Link to={ROUTES.blog()}>Blog</Link>
								</li>
							</ul>

							<ul className="flex">
								<li className=" px-6 pt-1 pb-1 text-pink-400 bg-white rounded-xl border-2 border-pink-400 hover:text-white hover:bg-pink-400 hover:border-white">
									<Link to={ROUTES.login()}>login</Link>
								</li>
								<li className="mx-4 mr-8 px-4 pt-1 pb-1 text-white bg-pink-400 rounded-xl border-2 border-white hover:bg-white hover:text-pink-400 hover:border-pink-400 ">
									<Link to={ROUTES.signin()}>Sign in</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<Header header="Pet Heart" />
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
};
