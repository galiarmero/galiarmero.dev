import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import yaml from "@rollup/plugin-yaml"
import { transformerMetaHighlight } from "@shikijs/transformers"
import netlifyRedirects from "./src/integrations/netlify-redirects.mjs"

export default defineConfig({
  site: "https://galiarmero.dev",
  integrations: [react(), netlifyRedirects()],
  markdown: {
    shikiConfig: {
      theme: "night-owl",
      transformers: [transformerMetaHighlight()],
    },
  },
  vite: {
    plugins: [yaml()],
    ssr: {
      noExternal: ["react-share", "linkify-react", "linkify-plugin-mention", "linkify-plugin-hashtag", "@researchgate/react-intersection-observer"],
    },
  },
})
