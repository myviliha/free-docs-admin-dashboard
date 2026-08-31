import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { appName, gitConfig, productUrl, sponsorUrl } from "./shared";

/**
 * The chrome both layouts share: what the top bar says and what it links to.
 *
 * The demo link is first on purpose. Someone arriving at documentation for a template usually wants
 * to see the thing before they read about installing it, and making them hunt for that is how a docs
 * site loses the visit.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold tracking-tight">
          {appName} <span className="text-fd-muted-foreground font-normal">docs</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: "Live demo", url: "https://react.viliha.com", external: true },
      { text: "Sponsor", url: sponsorUrl, external: true },
      { text: "VILIHA", url: productUrl, external: true },
    ],
  };
}
