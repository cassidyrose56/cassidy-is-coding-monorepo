import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// add Vercel Edge Network support
			edge: true,
			// specify the output directory
			outDir: 'build'
		}),
		// Add this line to ensure proper path resolution
		paths: {
			base: ''
		}
	}
};

export default config;