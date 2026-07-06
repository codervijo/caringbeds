# Dropped server / framework code

The source (`genai/`) was a **TanStack Start** app. Its server-side and
framework-runtime pieces do NOT translate to Astro's static-output model
(`output: 'static'`). They were intentionally dropped during the port and are
recorded here so nothing is silently lost.

## Dropped files

- **`genai/src/server.ts`** — TanStack Start SSR entry / error wrapper.
  TODO: If server rendering or an error-handling shell is needed, re-implement
  with an Astro adapter (e.g. `@astrojs/cloudflare`) + middleware. Not required
  for the current static landing page.

- **`genai/src/start.ts`** — TanStack Start client/runtime bootstrap.
  TODO: No Astro equivalent needed; Astro handles hydration via island
  directives (`client:load` on `<LandingPage />`).

- **`genai/src/router.tsx`**, **`genai/src/routeTree.gen.ts`** — TanStack Router
  setup + generated route tree. Replaced by Astro file-based routing under
  `src/pages/`.

- **`genai/src/routes/__root.tsx`** — root route with `<QueryClientProvider>`,
  `HeadContent`, `Scripts`, and the 404 / error boundary components.
  - The `<head>` metadata (title, description, OG, Twitter, canonical, fonts,
    JSON-LD) was ported into `src/pages/index.astro`.
  - TODO: The 404 (`NotFoundComponent`) and error (`ErrorComponent`) screens
    were NOT ported. Add `src/pages/404.astro` if a custom not-found page is
    wanted. Astro's static build has no runtime error boundary.
  - `@tanstack/react-query` (`QueryClientProvider`) was dropped — the landing
    page makes no data queries. Re-add React Query only if a future island
    needs server state.

- **`genai/src/lib/lovable-error-reporting.ts`**,
  **`genai/src/lib/error-capture.ts`**, **`genai/src/lib/error-page.ts`** —
  Lovable-specific runtime error reporting. Dropped (dev-tooling, not
  operator-visible). TODO: wire real error reporting later if desired.

## Not ported (unused by the landing page)

- **`genai/src/components/ui/*`** (shadcn/ui) and **`genai/src/hooks/use-mobile.tsx`**
  — the landing page (`routes/index.tsx`) imports none of them, so they were
  not carried over. Port on demand if new interactive pages need them (they'd
  also pull in `@radix-ui/*`, `clsx`, `tailwind-merge`,
  `class-variance-authority`, etc.).

## Placeholder to revisit

- **Quote form submit** (`QuoteForm` in `src/components/LandingPage.tsx`) is a
  client-only placeholder that just flips to a "thank you" state — it does not
  send data anywhere. TODO: wire to a real backend / form endpoint (e.g. a
  Cloudflare Pages function or a third-party form service).
