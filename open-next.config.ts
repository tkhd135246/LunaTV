// open-next.config.ts

// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default async () => {
  const { defineCloudflareConfig } = await import("@opennextjs/cloudflare");

  return defineCloudflareConfig({
    // For best results consider enabling R2 caching
    // See https://opennext.js.org/cloudflare/caching for more details
    // incrementalCache: r2IncrementalCache(),
  });
};