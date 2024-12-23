import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const vitestConfig = defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  test: {
    watch: false,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
});

export default vitestConfig;
