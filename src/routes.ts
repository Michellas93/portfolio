export const ROUTES = {
  index: () => "/",
  maps: () => "/maps",
  list: () => "/list",
  blog: () => "/blog",
  login: () => "/login",
  signup: () => "/signup",
  logout: () => "/logout",
  pointNew: () => "/point/new",
  point: (id?: string) => `/point/${id ?? ":id"}`,
};
