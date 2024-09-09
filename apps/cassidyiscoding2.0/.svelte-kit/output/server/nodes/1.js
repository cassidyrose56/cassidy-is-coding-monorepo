

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CTyDurQW.js","_app/immutable/chunks/scheduler.BID-OxIb.js","_app/immutable/chunks/index.D0_w3zSo.js","_app/immutable/chunks/entry.BxmCqF8s.js"];
export const stylesheets = [];
export const fonts = [];
