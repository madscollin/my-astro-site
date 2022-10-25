import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            // Example: Disable injecting a basic `base.css` import on every page.
            // Useful if you need to define and/or import your own custom `base.css`.
            config: { applyBaseStyles: true },
        }),
        alpinejs(),
    ],
    site: "https://madscollin.github.io",
    base: "/sl-static",
});
