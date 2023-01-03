import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from 'mdsvex';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {
        prependData: '@use "src/scss/variables.scss" as *;',
      },
    },
    mdsvex({
      extensions: ['.md']
    }),),
  ],
};
