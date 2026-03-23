import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import yaml from "@rollup/plugin-yaml"
import remarkStripLineMeta from "./src/plugins/remark-strip-line-meta.mjs"

export default defineConfig({
  site: "https://galiarmero.dev",
  integrations: [react()],
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkStripLineMeta],
  },
  vite: {
    plugins: [yaml()],
    ssr: {
      noExternal: ["react-share", "linkify-react", "linkify-plugin-mention", "linkify-plugin-hashtag"],
    },
  },
})
