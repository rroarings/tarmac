declare module "astro:actions" {
	type Actions = typeof import("/Users/nickcalvo/websites/tarmac/garage/trackside/src/actions")["server"];

	export const actions: Actions;
}