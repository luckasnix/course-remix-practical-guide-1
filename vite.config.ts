import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const viteConfig = defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
  ],
});

export default viteConfig;
