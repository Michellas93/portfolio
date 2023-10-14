export const ROUTES = {
	index: () => "/",
	contacts: (contactId?: string) => `contacts/${contactId ?? ":contactId"}`,
	about: () => "/about",
	maps: () => "/maps",
	login: () => "/login",
	signin: () => "/signin",
};
