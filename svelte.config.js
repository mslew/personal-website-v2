import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    vitePreprocess(),
    preprocess(
      {
        scss: {
          prependData: '@use "src/scss/variables.scss" as *;',
        },
      },
      mdsvex({
        extensions: [".md"],
      })
    ),
    mdsvex(mdsvexConfig),
  ],
};
