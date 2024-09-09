export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","svg/.DS_Store","svg/FoundcomLogo.svg","svg/InternHouseLogo.svg","svg/LifeCloudLogo.svg","svg/LightQLLogo.svg","svg/Name.png","svg/darkMulti.svg","svg/darkPink.svg","svg/lightMulti.svg","svg/lightPink.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CruaN9KQ.js","app":"_app/immutable/entry/app.CG-hWfrW.js","imports":["_app/immutable/entry/start.CruaN9KQ.js","_app/immutable/chunks/entry.BxmCqF8s.js","_app/immutable/chunks/scheduler.BID-OxIb.js","_app/immutable/entry/app.CG-hWfrW.js","_app/immutable/chunks/scheduler.BID-OxIb.js","_app/immutable/chunks/index.D0_w3zSo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
