# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev` (runs on http://localhost:3000)
- **Build:** `pnpm build`
- **Lint:** `pnpm lint` (ESLint with Next.js core-web-vitals + TypeScript rules)
- **Add shadcn component:** `pnpm dlx shadcn@latest add <component-name>`

## Architecture

This is a Next.js 16 landing page for "FoodTruck QR" using the App Router with React 19, TypeScript, and Tailwind CSS v4.

- **`app/layout.tsx`** — Root layout: html/body, fonts, `suppressHydrationWarning`.
- **`app/[locale]/layout.tsx`** — Locale layout: `NextIntlClientProvider`, `ThemeProvider`, Header, Footer.
- **`app/[locale]/page.tsx`** — Home page (composes section components).
- **`app/[locale]/pricing/page.tsx`** — Pricing + contact page.
- **`app/[locale]/gallery/page.tsx`** — Gallery page.
- **`components/sections/`** — Home page sections (hero, features, how-it-works, benefits, video-placeholder, cta).
- **`components/pricing/`** — Pricing page components (pricing-cards, contact-block).
- **`components/gallery/`** — Gallery page components (gallery-grid).
- **`components/layout/`** — Shared layout components (header, footer).
- **`components/ui/`** — shadcn/ui components.
- **`i18n/`** — next-intl routing and request config.
- **`messages/`** — Translation JSON files (en.json, pl.json).
- **`middleware.ts`** — next-intl middleware for locale detection and routing.
- **`lib/utils.ts`** — Shared `cn()` utility (clsx + tailwind-merge) for class merging.

## i18n

- **next-intl** handles internationalization with `[locale]` segment routing.
- Supported locales: `en` (default), `pl`.
- Translations structured by section in `messages/{locale}.json`.
- URLs: `/en/`, `/en/pricing`, `/pl/gallery`, etc.

## UI & Styling

- **shadcn/ui** configured with `new-york` style, `zinc` base color, CSS variables, and lucide icons. Config in `components.json`.
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin. Theme variables defined in `app/globals.css` using `@theme inline` and CSS custom properties (oklch color space).
- **Dark mode** uses class strategy via `next-themes` (`attribute="class"`). Toggle in header.
- **Fonts:** Geist Sans and Geist Mono loaded via `next/font/google`, exposed as `--font-geist-sans` and `--font-geist-mono` CSS variables.

## Path Aliases

`@/*` maps to the project root (e.g., `@/lib/utils`, `@/components/ui/button`).
