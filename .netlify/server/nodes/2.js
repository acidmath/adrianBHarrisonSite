export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/2.DmicTFuo.js',
	'_app/immutable/chunks/disclose-version.-Rdx7w0q.js',
	'_app/immutable/chunks/runtime.G6EyfWjc.js',
	'_app/immutable/chunks/legacy.DviaO2oA.js'
];
export const stylesheets = [];
export const fonts = [];
