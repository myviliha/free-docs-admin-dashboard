/**
 * The six editions, in one place.
 *
 * Every installation page, the edition table on the introduction, and the footer all read this, so a
 * new repository or a renamed demo is one edit rather than thirty.
 */
export type Edition = {
  slug: string;
  name: string;
  /** How it is described in a sentence, lower case, so it reads inside prose. */
  blurb: string;
  repo: string;
  demo: string;
  stack: string;
};

export const EDITIONS: Edition[] = [
  {
    slug: "react",
    name: "React",
    blurb: "a plain Vite single-page app",
    repo: "free-reactjs-admin-dashboard",
    demo: "react.viliha.com",
    stack: "React 19, Vite 8, TypeScript",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    blurb: "the App Router, with server components by default",
    repo: "free-nextjs-admin-dashboard",
    demo: "nextjs.viliha.com",
    stack: "Next.js 16, React 19, TypeScript",
  },
  {
    slug: "vue",
    name: "Vue",
    blurb: "Vue 3 with script setup",
    repo: "free-vuejs-admin-dashboard",
    demo: "vuejs.viliha.com",
    stack: "Vue 3.5, Vite 8, TypeScript",
  },
  {
    slug: "angular",
    name: "Angular",
    blurb: "standalone components on a Vite build",
    repo: "free-angularjs-admin-dashboard",
    demo: "angularjs.viliha.com",
    stack: "Angular 20, Vite 8, TypeScript",
  },
  {
    slug: "html",
    name: "HTML",
    blurb: "nineteen files you can open in a browser",
    repo: "free-html-admin-dashboard",
    demo: "html.viliha.com",
    stack: "HTML5, one stylesheet, no build step",
  },
  {
    slug: "laravel",
    name: "Laravel",
    blurb: "Blade views and a component library of partials",
    repo: "free-laravel-admin-dashboard",
    demo: "laravel.viliha.com",
    stack: "Laravel 12, PHP 8.2+, Blade",
  },
];

export const repoUrl = (e: Edition) => `https://github.com/myviliha/${e.repo}`;
export const demoUrl = (e: Edition) => `https://${e.demo}`;
