import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import yaml from "@rollup/plugin-yaml"

export default defineConfig({
  site: "https://galiarmero.dev",
  integrations: [react()],
  markdown: {
    syntaxHighlight: "prism",
  },
  vite: {
    plugins: [yaml()],
    ssr: {
      noExternal: ["react-share"],
    },
  },
})
