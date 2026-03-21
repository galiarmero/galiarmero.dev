import { defineConfig } from "astro/config"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://galiarmero.dev",
  integrations: [react()],
  markdown: {
    syntaxHighlight: "prism",
  },
})
