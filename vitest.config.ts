import { defineConfig } from "vitest/config";
import { sharedConfig } from "@repo/vitest-config";
import path from "path";

export default defineConfig({
  ...sharedConfig,
  test: {
    projects: [
      {
        root: "./packages",
        test: {
          ...sharedConfig.test,
          // Project-specific configuration for packages
          // ...
        },
      },
      {
        root: "./apps/react-client",
        test: {
          ...sharedConfig.test,
          // Project-specific configuration for apps
          environment: "jsdom",
        },
        resolve: {
          alias: {
            "@": path.resolve("./apps/react-client", "./src"),
          },
        },
      },
      {
        root: "./apps/hono-api",
        test: {
          ...sharedConfig.test,
        },
      },
    ],
  },
});
