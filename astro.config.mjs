import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), alpinejs()],
    site: "https://madscollin.github.io",
    base: "/sl-signature",
});
