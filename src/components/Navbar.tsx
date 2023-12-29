import { NavLink } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { ROUTES } from "../routes";
import { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { Button } from "./Button";
import { logOut } from "../firebase/utils";
import { MenuIcon } from "./MenuIcon";

const NAVBAR_ITEMS = [
  { link: ROUTES.index(), text: "Domů" },
  { link: ROUTES.maps(), text: "Mapy" },
  { link: ROUTES.list(), text: "Seznam" },
  { link: ROUTES.pointNew(), text: "Přidat", protected: true },
];

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar py-2   bg-darkGreen flex justify-between pl-4 pr-4 ">
      <div className="flex items-center ">
        <Logo />
      </div>
      <div className="flex items-center">
        <Button
          className="md:hidden"
          variant="tertiary"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <MenuIcon />
        </Button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col w-full md:w-auto md:flex md:flex-row md:items-center  self-center  `}
      >
        <ul className="flex bg-darkGreen flex-col self-center md:flex-row md:items-center ">
          {NAVBAR_ITEMS.filter((item) => (!item.protected ? true : !!user)).map(
            (item) => (
              <li
                className="px-4 pt-2 hover:font-extrabold text-white"
                key={item.text}
              >
                <NavLink
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive, isPending }) =>
                    isActive ? "underline" : isPending ? "pending" : ""
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row md:items-center sm:flex-row sm:justify-end  ">
        {user ? (
          <Button onClick={() => logOut()} variant="secondary">
            Logout
          </Button>
        ) : (
          <>
            <ButtonLink link={ROUTES.login()} variant="primary">
              Log in
            </ButtonLink>
            <ButtonLink link={ROUTES.signup()} variant="secondary">
              Sign up
            </ButtonLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
