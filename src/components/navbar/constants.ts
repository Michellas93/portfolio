import { ROUTES } from "../../routes";

export const MENU_MOBILE_BREAKPOINT = 960;

export const getNavbarItems = (isAdmin: boolean) => {
  const navbarItems = [
    { link: ROUTES.index(), text: "Domů" },
    { link: ROUTES.maps(), text: "Mapy" },
    { link: ROUTES.list(), text: "Seznam" },
  ];

  if (isAdmin) {
    navbarItems.push({ link: ROUTES.pointNew(), text: "Přidat" });
  }

  return navbarItems;
};
