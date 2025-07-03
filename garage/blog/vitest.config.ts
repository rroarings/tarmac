/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {
      /* Vitest configuration options */
      globals: true,
    },
  },
  {
    site: "https://example.com/",
    trailingSlash: "always",
  },
);
