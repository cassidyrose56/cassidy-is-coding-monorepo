

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D9iTRUTi.js","_app/immutable/chunks/scheduler.D-NikIHS.js","_app/immutable/chunks/index.Bl32-MSW.js"];
export const stylesheets = ["_app/immutable/assets/app.C_--xzuN.css"];
export const fonts = [];
