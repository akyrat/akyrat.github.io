import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// User site (akyrat.github.io) is served from the root, so no `base` is needed.
export default defineConfig({
  site: "https://akyrat.github.io",
  integrations: [react()],
});
