# VuiAdmin Docs: the documentation site for the free admin dashboard template

[![live site](https://img.shields.io/badge/docs-docs.viliha.com-266df0)](https://docs.viliha.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://docs.viliha.com)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-16-fb7185)](https://fumadocs.dev)
[![license](https://img.shields.io/github/license/myviliha/free-docs-admin-dashboard?color=266df0)](./LICENSE)
[![deploy](https://github.com/myviliha/free-docs-admin-dashboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/myviliha/free-docs-admin-dashboard/actions/workflows/deploy.yml)
[![Sponsor @myviliha](https://img.shields.io/badge/Sponsor-%40myviliha-db61a2?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/myviliha)

## ❤️ Sponsoring is what keeps this free

VuiAdmin is the kind of admin theme that usually gets sold. We keep it MIT, and sponsors are what make
that possible.

Six framework editions of the same nineteen screens is more work than it sounds. A card has to be the
same card in React as it is in Blade. Dark mode has to invert properly rather than wash out. Every
control needs keyboard and screen-reader behaviour, and every edition needs the parity checks that
stop them quietly drifting apart. This documentation is part of that upkeep too.

**Even $1 a month helps.** It goes toward bug fixes, new screens, and keeping the demos and docs
current. Honestly, it is what keeps us building in the open.

> Sponsors are listed on the [GitHub Sponsors page](https://github.com/sponsors/myviliha) and get our
> genuine thanks.

### 👉 [Sponsor on GitHub →](https://github.com/sponsors/myviliha) &nbsp;·&nbsp; thank you 🙏

---

This repository is the source of [docs.viliha.com](https://docs.viliha.com), the documentation for
**VuiAdmin**: a free, MIT licensed **admin dashboard template** with nineteen finished screens, shipped
for React, Next.js, Vue, Angular, plain HTML and Laravel.

If you are looking for the templates themselves rather than their documentation, start with
[the introduction](https://docs.viliha.com/docs) or go straight to a repository from the table below.

**Next.js 16 · Fumadocs · MDX · Tailwind CSS v4 · static export**

## The six editions this documents

| Edition | Repository | Live demo |
| --- | --- | --- |
| React | [free-reactjs-admin-dashboard](https://github.com/myviliha/free-reactjs-admin-dashboard) | [react.viliha.com](https://react.viliha.com) |
| Next.js | [free-nextjs-admin-dashboard](https://github.com/myviliha/free-nextjs-admin-dashboard) | [nextjs.viliha.com](https://nextjs.viliha.com) |
| Vue | [free-vuejs-admin-dashboard](https://github.com/myviliha/free-vuejs-admin-dashboard) | [vuejs.viliha.com](https://vuejs.viliha.com) |
| Angular | [free-angularjs-admin-dashboard](https://github.com/myviliha/free-angularjs-admin-dashboard) | [angularjs.viliha.com](https://angularjs.viliha.com) |
| HTML | [free-html-admin-dashboard](https://github.com/myviliha/free-html-admin-dashboard) | [html.viliha.com](https://html.viliha.com) |
| Laravel | [free-laravel-admin-dashboard](https://github.com/myviliha/free-laravel-admin-dashboard) | [laravel.viliha.com](https://laravel.viliha.com) |

## Running the docs locally

Requires **Node.js 20 or later**.

```bash
git clone git@github.com:myviliha/free-docs-admin-dashboard.git
cd free-docs-admin-dashboard
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Next dev server, with MDX hot reload |
| `npm run build` | Static export into `out/` |
| `npm start` | Serve the exported `out/` |
| `npm run types:check` | `next typegen` then `tsc --noEmit` |
| `npm run lint` | Biome |

## Writing a page

Content is MDX in `content/docs`. A file is a page, a directory is a section, and `meta.json` sets the
order and the section title.

```mdx
---
title: "Colours and tokens"
description: "Change the brand colour with one CSS custom property."
---

Body copy, with Fumadocs components available: <Callout>, <Cards>, <Card>, <Tabs>.
```

Two things are not optional:

- **A `description`.** It becomes the meta description and the OG description, so a page without one
  is a page that shows up in search results with a shrug.
- **Quoted frontmatter values.** A value containing a colon is a nested mapping to a YAML parser, not
  a string, and the build fails with `Nested mappings are not allowed in compact mappings`.

### The edition table lives in one file

`lib/editions.ts` holds the six editions with their repositories, demos and stacks. The landing page,
the installation index and the structure index all read it, so adding a seventh edition or renaming a
demo is one edit rather than thirty.

## Project structure

```
app/
  layout.tsx            root layout: metadata, keywords, Outfit
  (home)/page.tsx       the landing page
  docs/                 the docs shell and the MDX page renderer
  og/docs/[...slug]/    a generated Open Graph image per page
  sitemap.ts            generated from the page tree
  robots.ts
  api/search/           the static search index
  global.css            the Fumadocs preset, plus our brand tokens
content/docs/           the pages, as MDX
lib/
  editions.ts           the six editions, in one place
  shared.ts             names, URLs, the GitHub repository
  layout.shared.tsx     the top bar and its links
public/
  CNAME                 the custom domain, read by Pages on every deploy
  .nojekyll             stops Pages dropping _next/ for its leading underscore
```

## How it deploys

`npm run build` writes a static `out/`, so there is no Node process to run.
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) type-checks and builds on every push
to `main`, then deploys to GitHub Pages at [docs.viliha.com](https://docs.viliha.com). A pull request
runs the same checks and stops before publishing.

Two files in `public/` are load bearing and ship inside the build rather than being set once in the
repository settings. `CNAME` carries the custom domain, which Pages re-reads on every deploy. And
`.nojekyll` stops Pages ignoring `_next/` for beginning with an underscore, which would otherwise
serve the HTML with none of its CSS.

## Search

Orama, built into a static index at build time and served from `/api/search`. It needs no service and
no key, which is the reason it was chosen over a hosted search: documentation that stops working when
an API key expires is documentation nobody trusts.

## Contributing

Corrections are especially welcome. If a page told you something that turned out to be wrong, that is
the most useful issue you can open, and a pull request that fixes the sentence is better still.

## License

[MIT](./LICENSE) © VILIHA PTE. LTD.

The documentation text and the templates it documents are both MIT. Every version already published
stays MIT permanently, so nothing that is free today moves behind a paywall later.

---

Made with ♥ from Vietnam by the [Viliha Team](https://viliha.com). If VuiAdmin saved you time,
[a sponsorship](https://github.com/sponsors/myviliha) is the best thank-you.
