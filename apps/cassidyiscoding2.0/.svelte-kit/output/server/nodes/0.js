

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ByIljGvB.js","_app/immutable/chunks/scheduler.BID-OxIb.js","_app/immutable/chunks/index.D0_w3zSo.js"];
export const stylesheets = ["_app/immutable/assets/app.vH2f3S5d.css"];
export const fonts = [];
