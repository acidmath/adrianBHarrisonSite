export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BGdaovie.js","app":"_app/immutable/entry/app.SF_urcG5.js","imports":["_app/immutable/entry/start.BGdaovie.js","_app/immutable/chunks/entry.D1IdaYmH.js","_app/immutable/chunks/runtime.G6EyfWjc.js","_app/immutable/entry/app.SF_urcG5.js","_app/immutable/chunks/runtime.G6EyfWjc.js","_app/immutable/chunks/store.snWgdinY.js","_app/immutable/chunks/disclose-version.-Rdx7w0q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
