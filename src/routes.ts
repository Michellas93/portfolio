export const ROUTES = {
  index: () => "/",
  maps: () => "/maps",
  list: () => "/list",
  login: () => "/login",
  signup: () => "/signup",
  logout: () => "/logout",
  pointNew: () => "/point/new",
  point: (id?: string) => `/point/${id ?? ":id"}`,
};
