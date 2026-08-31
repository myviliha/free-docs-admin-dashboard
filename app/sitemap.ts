import type { MetadataRoute } from "next";

import { source } from "@/lib/source";
import { siteUrl } from "@/lib/shared";

/**
 * A sitemap, generated from the page tree rather than typed out.
 *
 * `output: "export"` turns this into a static `sitemap.xml` at build time, so it costs nothing to
 * serve and cannot drift: a page added to `content/docs` is in the sitemap on the next build.
 *
 * `dynamic = "force-static"` is required for the export. Without it Next treats the route as dynamic
 * and the build fails asking for a runtime.
 */
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date("2026-09-01"),
    // The introduction and the installation pages are the entry points people actually land on.
    changeFrequency: "monthly" as const,
    priority: page.url === "/docs" ? 0.9 : 0.7,
  }));

  return [
    { url: siteUrl, lastModified: new Date("2026-09-01"), changeFrequency: "monthly", priority: 1 },
    ...pages,
  ];
}
