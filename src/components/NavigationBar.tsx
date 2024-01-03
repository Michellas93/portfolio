import { NavLink } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { ROUTES } from "../routes";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../firebase/AuthContext";
import { Button } from "./Button";
import { logOut } from "../firebase/utils";
import { MenuIcon } from "./MenuIcon";
import { CrossIcon } from "./CrossIcon";
import { isAdmin } from "../pages/AdminRoute";

import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";

const NAVBAR_ITEMS = [
  { link: ROUTES.index(), text: "Domů" },
  { link: ROUTES.maps(), text: "Mapy" },
  { link: ROUTES.list(), text: "Seznam" },
  { link: ROUTES.pointNew(), text: "Přidat", protected: true },
];

const NavigationBar = () => {
  const { user } = useAuth();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NAVBAR_ITEMS.filter((item) =>
        !item.protected ? true : isAdmin(user)
      ).map((item) => (
        <li
          className="px-4 pt-2 hover:font-extrabold text-white flex justify-end"
          key={item.text}
        >
          <NavLink
            to={item.link}
            onClick={() => setOpenNav(false)}
            className={({ isActive, isPending }) =>
              isActive ? "underline" : isPending ? "pending" : ""
            }
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const buttons = (
    <>
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
    </>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full border-none rounded-none px-0 py-2 lg:py-4 bg-darkGreen">
      <div className="flex items-center justify-between px-4">
        <NavLink
          to={ROUTES.index()}
          onClick={() => setOpenNav(false)}
          style={{
            cursor: "pointer",
          }}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
        >
          <Logo />
        </NavLink>
        <div className="flex">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="hidden lg:flex">{buttons}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <CrossIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="flex justify-end">{navList}</div>
        <div className="flex justify-end">{buttons}</div>
      </MobileNav>
    </Navbar>
  );
};

export default NavigationBar;
