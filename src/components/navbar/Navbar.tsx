import { NavLink } from "react-router-dom";
import {
  Navbar as TailwindNavbar,
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import cs from "classnames";
import { Logo } from "../Logo";
import { ROUTES } from "../../routes";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../firebase/AuthContext";
import { MenuIcon } from "../MenuIcon";
import { CrossIcon } from "../CrossIcon";
import { NavigationList } from "./NavList";
import { AuthButtons } from "./AuthButtons";
import { MENU_MOBILE_BREAKPOINT } from "./constants";

export const Navbar = () => {
  const { user } = useAuth();
  const [openNav, setOpenNav] = useState(false);

  const handleClose = useCallback(() => {
    setOpenNav(false);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= MENU_MOBILE_BREAKPOINT) {
      setOpenNav(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <TailwindNavbar
      className={cs(
        "sticky top-0 z-10 h-max max-w-full border-none rounded-none px-0 py-2 lg:py-4 bg-darkGreen m-auto",
        { "pb-2": openNav }
      )}
    >
      <div>
        <div className="flex items-center justify-between px-4">
          <NavLink
            to={ROUTES.index()}
            onClick={handleClose}
            className="cursor-pointer"
          >
            <Logo />
          </NavLink>
          <div className="flex">
            <div className="hidden lg:flex items-between">
              <NavigationList
                className="mr-4"
                onClick={handleClose}
                user={user}
              />
              <AuthButtons isUser={!!user} onClick={handleClose} />
            </div>
            <IconButton
              variant="text"
              className="ml-auto -mt-6 mr-3 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav((prevOpen) => !prevOpen)}
            >
              {openNav ? <CrossIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <NavigationList onClick={handleClose} user={user} />
          <AuthButtons isUser={!!user} onClick={handleClose} />
        </MobileNav>
      </div>
    </TailwindNavbar>
  );
};
