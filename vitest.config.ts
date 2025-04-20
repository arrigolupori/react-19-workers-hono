// @ts-expect-error something to do with module resolution
import {defineWorkersConfig} from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
  test: {
    poolOptions: {
      workers: {
        wrangler: {configPath: "./wrangler.jsonc"}
      }
    },
    include: ['worker/**/*.spec.ts'],
    exclude: ['src/**/*'],
  }
});