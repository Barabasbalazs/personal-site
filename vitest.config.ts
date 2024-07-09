import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        domEnvironment: "jsdom",
      },
    },
    reporters: ["default", "html"],
    include: ["**/*.test.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
      clean: true,
      cleanOnRerun: true,
      reporter: ["text", "json", "html", "lcov"],
      //if coverage does not meet thresholds, test will fail and build process will be aborted
      // thresholds: {
      //   statements: 90,
      //   branches: 90,
      //   functions: 90,
      //   lines: 90,
      // },
      exclude: [
        ...(configDefaults.coverage.exclude as string[]),
        "nuxt/**",
        "html/**/*",
        "**/*.config.{ts,js}",
      ],
      //if true report will be generated even if tests fail
      reportOnFailure: true,
    },
  },
});
