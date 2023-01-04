import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  layout: {
    project: './src/lib/components/Project.svelte'
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
