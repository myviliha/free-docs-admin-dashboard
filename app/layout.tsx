import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { Provider } from "@/components/provider";
import { appName, siteUrl } from "@/lib/shared";
import "./global.css";

/**
 * Outfit, which is the typeface the dashboard templates themselves ship.
 *
 * `next/font` self-hosts it at build time, so the docs make no third-party request for it and render
 * in the right face offline. Using the product's own face is most of why the docs read as part of the
 * product rather than as a generic theme with a logo dropped in.
 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

/**
 * The metadata every page inherits.
 *
 * `metadataBase` is what makes the relative OG and canonical URLs below resolve to absolute ones, and
 * without it Next warns and emits relative `og:image` values that no crawler can follow.
 *
 * `title.template` means a page sets `Installation` and the tab reads
 * `Installation · VuiAdmin Docs`, so a row of open tabs stays distinguishable.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} Docs · Free Admin Dashboard Template`,
    template: `%s · ${appName} Docs`,
  },
  description:
    "Documentation for VuiAdmin, the free and open-source admin dashboard template for React, " +
    "Next.js, Vue, Angular, HTML and Laravel. Nineteen screens, one design system, MIT licensed.",
  keywords: [
    "admin dashboard template",
    "free admin template",
    "React admin dashboard",
    "Next.js admin template",
    "Vue admin dashboard",
    "Angular admin template",
    "Tailwind CSS admin dashboard",
    "Laravel admin panel",
    "HTML admin template",
    "SaaS dashboard template",
    "open source admin panel",
  ],
  authors: [{ name: "VILIHA", url: "https://viliha.com" }],
  creator: "VILIHA",
  publisher: "VILIHA PTE. LTD.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${appName} Docs`,
    url: siteUrl,
    title: `${appName} Docs · Free Admin Dashboard Template`,
    description:
      "Nineteen screens, six framework editions, one design system. MIT licensed, no account and no " +
      "trial. Read the docs and ship this week instead of next month.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} Docs · Free Admin Dashboard Template`,
    description:
      "The free, enterprise-grade admin dashboard template for React, Next.js, Vue, Angular, HTML " +
      "and Laravel.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
