export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.DGM5V2r_.js',
	'_app/immutable/chunks/disclose-version.-Rdx7w0q.js',
	'_app/immutable/chunks/runtime.G6EyfWjc.js',
	'_app/immutable/chunks/legacy.DviaO2oA.js',
	'_app/immutable/chunks/store.snWgdinY.js',
	'_app/immutable/chunks/entry.D1IdaYmH.js'
];
export const stylesheets = [];
export const fonts = [];
