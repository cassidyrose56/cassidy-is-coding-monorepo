

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bq9zBfmJ.js","_app/immutable/chunks/scheduler.D-NikIHS.js","_app/immutable/chunks/index.Bl32-MSW.js"];
export const stylesheets = ["_app/immutable/assets/app.C_--xzuN.css"];
export const fonts = [];
