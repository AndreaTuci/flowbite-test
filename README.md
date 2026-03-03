# Flowbite × Vue — Block Prototype

A component-based UI prototype built with **Vue 3**, **Vite**, and **Flowbite** free blocks.
The goal is to reproduce a full marketing page — navbar, hero, banner, product cards, footer — by mapping each Flowbite block to a dedicated Vue SFC, then overriding styles in scoped CSS to match a pixel-accurate design reference.

---

## Stack

| Tool | Role |
|---|---|
| Vue 3 (`<script setup>`) | Component framework, Composition API |
| Vite | Dev server + build tool |
| Tailwind CSS v4 | Utility base via `@tailwindcss/vite` plugin |
| Flowbite | Block structure reference + component patterns |
| Inter (Google Fonts) | Typography |

---

## Approach

Each visible page section maps to one file in `src/components/blocks/`.
A reference image drives the visual target; the nearest free Flowbite block provides the HTML scaffold; `<style scoped>` overrides handle the exact colours, spacing, and effects.

```
src/
  components/
    blocks/         ← one .vue per page section
    ui/             ← shared primitives
      PlaceholderImage.vue   image slot with configurable aspect ratio
      BlockBadge.vue         debug badge linking to the source Flowbite block
  assets/main.css   global CSS entry (Tailwind + Flowbite imports)
  App.vue           root — stacks all blocks in order
  main.js
```

### PlaceholderImage
Accepts a `ratio` prop (CSS `aspect-ratio` string, e.g. `"3/4"`, `"1/1"`) and a `label`.
Replaces every product/hero image with a styled placeholder that holds the correct proportions until real assets are ready.

### BlockBadge
A small absolute-positioned pill in the top-right corner of each block linking to the Flowbite block it was derived from. Useful during development to trace structure back to its source.
**Requires `position: relative` on the block's root element.**

---

## GitHub Pages deploy

The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` via the official GitHub Pages Actions.

`vite.config.js` reads `GITHUB_REPOSITORY` (auto-set by Actions) to derive the correct `base` path (`/repo-name/`). Locally the base falls back to `/`, so `npm run dev` works without changes.

**Enable in GitHub**: Settings → Pages → Source → **GitHub Actions**.

---

## Pain points & notes

### 1. Tailwind v4 import order
`@import "tailwindcss"` must come **after** any `@import url(...)` (e.g. Google Fonts), otherwise the CSS spec treats the Tailwind import as invalid and styles break silently.
Correct order in `main.css`:
```css
@import url('https://fonts.googleapis.com/...');
@import "tailwindcss";
@import "flowbite/src/themes/default";
@plugin "flowbite/plugin";
```
