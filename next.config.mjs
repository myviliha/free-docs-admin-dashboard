import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,

  /**
   * **Required, not a preference.** Fumadocs renders an MDX `![alt](/path.png)` through
   * `next/image`, and `next/image`'s optimiser is a route handler: it lives at `/_next/image` and is
   * served by a Node process. A static export has no routes to serve, so the markup ships pointing at
   * `/_next/image?url=...&w=3840&q=75` and every screenshot 404s on the deployed site.
   *
   * The build does not fail, which is what makes this worth a comment. It compiles, it exports, the
   * `<img>` tags are present with correct alt text, and the pictures are simply missing in the
   * browser. Setting this makes the src the plain file path.
   *
   * What is lost is resizing and format conversion. The screenshots are already sized for the page
   * and `loading="lazy"` still applies, so the cost is bytes rather than behaviour.
   */
  images: { unoptimized: true },
};

export default withMDX(config);
