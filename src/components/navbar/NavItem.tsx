import { NavLink } from "react-router-dom";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  link: string;
  onClick: () => void;
  showActiveState?: boolean;
}>;

export const NavItem = ({ link, onClick, children }: Props) => (
  <li className="px-4 pt-2 hover:font-extrabold text-white flex justify-end">
    <NavLink
      to={link}
      onClick={onClick}
      className={({ isActive, isPending }) =>
        isActive ? "underline" : isPending ? "pending" : ""
      }
    >
      {children}
    </NavLink>
  </li>
);
