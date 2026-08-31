import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/shared";

/**
 * Everything is indexable, and the sitemap is named.
 *
 * The demos carry `noindex` because a demo is not what a search engine should offer instead of the
 * documentation. The documentation is the opposite case: it is the page we want found.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
