import { uiConfig } from "@repo/vitest-config/ui";
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  ...uiConfig,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
