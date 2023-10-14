import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../routes";

const Root = () => {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>

						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form>
					<form method="post">
						<button type="submit">New</button>
					</form>
				</div>
				<nav>
					<ul>
						<li>
							<Link to={ROUTES.index()}>Domů</Link>
						</li>
						<li>
							<Link to={ROUTES.about()}>O mně</Link>
						</li>
						<li>
							<Link to={ROUTES.maps()}>Mapy</Link>
						</li>

						<li>
							<Link to={ROUTES.contacts("Můj kontakt")}>Kontakty</Link>
						</li>
						<li>
							<Link to={ROUTES.login()}>login</Link>
						</li>
						<li>
							<Link to={ROUTES.signin()}>Sign in</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
};

export default Root;
