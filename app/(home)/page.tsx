import type { Metadata } from "next";
import Link from "next/link";

import { EDITIONS, demoUrl, repoUrl } from "@/lib/editions";
import { sponsorUrl } from "@/lib/shared";

export const metadata: Metadata = {
  title: "Free Admin Dashboard Template for React, Next.js, Vue, Angular, HTML and Laravel",
  description:
    "VuiAdmin is a free, MIT licensed admin dashboard template. Nineteen finished screens on one " +
    "design system, in six framework editions. No account, no key, no trial.",
  alternates: { canonical: "/" },
};

const NUMBERS = [
  { figure: "19", label: "finished screens" },
  { figure: "6", label: "framework editions" },
  { figure: "64", label: "component families" },
  { figure: "MIT", label: "licence, permanently" },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero. One claim, one qualifier, two buttons. A landing page that opens with a feature grid
          makes the reader work out what the product is. */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 text-center">
        <p className="text-fd-primary text-sm font-semibold tracking-widest uppercase">
          Free and open source
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          The enterprise admin dashboard template you do not have to pay for
        </h1>
        <p className="text-fd-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          VuiAdmin is a professional, production-ready admin and SaaS theme, MIT licensed. Nineteen
          finished screens on one design system, shipped for six stacks. Clone it and you have skipped
          the two or three weeks that a dashboard shell, a table, a chart set and an auth flow usually
          cost.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="bg-fd-primary text-fd-primary-foreground rounded-lg px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            Read the docs
          </Link>
          <Link
            href="/docs/installation"
            className="border-fd-border hover:bg-fd-accent rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Install in five minutes
          </Link>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.label}>
              <dt className="text-3xl font-bold tracking-tight">{n.figure}</dt>
              <dd className="text-fd-muted-foreground mt-1 text-sm">{n.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The six editions. This is what a visitor is actually here to resolve: does it exist for my
          stack, and can I see it running before I clone it. */}
      <section className="border-fd-border border-t">
        <div className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Pick your stack</h2>
          <p className="text-fd-muted-foreground mt-2 max-w-2xl">
            The same nineteen screens, the same design system, the same fixtures. Every edition has a
            live demo you can click through before you install anything.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EDITIONS.map((e) => (
              <div
                key={e.slug}
                className="border-fd-border bg-fd-card hover:border-fd-primary/40 rounded-xl border p-5 transition-colors"
              >
                <h3 className="font-semibold">{e.name}</h3>
                <p className="text-fd-muted-foreground mt-1 text-sm">{e.stack}</p>
                <p className="text-fd-muted-foreground mt-3 text-sm">Ships as {e.blurb}.</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                  <Link href={`/docs/installation/${e.slug}`} className="text-fd-primary">
                    Install
                  </Link>
                  <a href={demoUrl(e)} className="hover:underline">
                    Live demo
                  </a>
                  <a href={repoUrl(e)} className="hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship on the landing page rather than buried in a docs page, because the ask only
          works where the value has just been stated. */}
      <section className="border-fd-border border-t">
        <div className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">Sponsoring is what keeps this free</h2>
          <p className="text-fd-muted-foreground mt-4">
            VuiAdmin is the kind of theme that usually gets sold. Keeping six editions of nineteen
            screens in step, in good shape, and current with each framework's releases is ongoing
            work. If it saved you a fortnight, a sponsorship is the best thank-you.
          </p>
          <p className="mt-4 font-medium">Even $1 a month helps.</p>
          <a
            href={sponsorUrl}
            className="bg-fd-primary text-fd-primary-foreground mt-8 inline-block rounded-lg px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            Sponsor on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
