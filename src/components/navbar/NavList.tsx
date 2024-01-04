import { useMemo } from "react";
import cs from "classnames";
import { User } from "firebase/auth";
import { isAdmin } from "../../utils";
import { NavItem } from "./NavItem";
import { getNavbarItems } from "./constants";

type Props = {
  user: User | null;
  onClick: () => void;
  className?: string;
};

export const NavigationList = ({ user, onClick, className }: Props) => {
  const isUserAdmin = isAdmin(user);
  const navbarItems = useMemo(() => getNavbarItems(isUserAdmin), [isUserAdmin]);

  return (
    <ul
      className={cs(
        "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
        className
      )}
    >
      {navbarItems.map((item) => (
        <NavItem link={item.link} onClick={onClick} key={item.text}>
          {item.text}
        </NavItem>
      ))}
    </ul>
  );
};
