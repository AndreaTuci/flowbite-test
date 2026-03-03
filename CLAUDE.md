# CLAUDE.md — Flowbite Block Builder (Vue 3)

## Project Overview

This is a **Vue 3 + Vite** project. The goal is to translate individual **Flowbite block images** into Vue Single-File Components (SFCs), one component per block, assembled into a single `src/pages/index.html` (via `App.vue`).

Each block must visually match its reference image **exactly** — colors, spacing, typography, proportions. Tailwind utility classes handle structure; `<style scoped>` inside each component provides any fine-tuning needed to reach pixel-level fidelity.

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| Node.js | ≥ 18 | Runtime / tooling |
| Vite | latest | Dev server & bundler |
| Vue 3 | latest | Component framework |
| Tailwind CSS | v4 | Utility-first styling |
| `@tailwindcss/vite` | latest | Tailwind v4 Vite plugin |
| Flowbite | latest (NPM) | UI component library & blocks |

---

## Project Structure

```
/
├── src/
│   ├── assets/
│   │   └── main.css           # Tailwind v4 + Flowbite entry CSS
│   ├── components/
│   │   ├── blocks/            # One .vue file per Flowbite block
│   │   │   ├── HeroBlock.vue
│   │   │   ├── NavbarBlock.vue
│   │   │   └── ...
│   │   └── ui/
│   │       └── PlaceholderImage.vue  # Reusable image placeholder
│   ├── App.vue                # Imports and stacks all block components
│   └── main.js                # Vue app entry point
├── index.html                 # Vite HTML entry
├── vite.config.js
├── package.json
└── CLAUDE.md
```

---

## Setup & Installation

### 1. Install dependencies

```bash
npm install vue @vitejs/plugin-vue vite tailwindcss @tailwindcss/vite flowbite
```

### 2. `vite.config.js`

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

### 3. `src/assets/main.css`

```css
@import "tailwindcss";

/* Inter font — default Flowbite theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import "flowbite/src/themes/default";

@plugin "flowbite/plugin";
@source "../../node_modules/flowbite";
```

### 4. `package.json` scripts

```json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 5. `index.html` (Vite entry)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flowbite Page</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### 6. `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'flowbite'

createApp(App).mount('#app')
```

### 7. `src/App.vue` skeleton

```vue
<script setup>
// Import block components here as they are built
// import HeroBlock from './components/blocks/HeroBlock.vue'
</script>

<template>
  <div>
    <!-- Stack block components here in page order -->
    <!-- <HeroBlock /> -->
  </div>
</template>
```

---

## PlaceholderImage Component

All images inside blocks must use a `PlaceholderImage` component instead of a real `<img>`. It accepts an `aspect-ratio` prop (as a CSS value, e.g. `"16/9"`, `"4/3"`, `"1/1"`) and optional `label` text. It renders a gray placeholder box that fills its parent's width while preserving the correct aspect ratio.

### `src/components/ui/PlaceholderImage.vue`

```vue
<script setup>
defineProps({
  ratio: {
    type: String,
    default: '16/9',
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="placeholder-image">
    <span v-if="label" class="placeholder-image__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.placeholder-image {
  width: 100%;
  aspect-ratio: v-bind(ratio);
  background-color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}
.placeholder-image__label {
  font-size: 0.75rem;
  color: #64748b;
  font-family: Inter, sans-serif;
}
</style>
```

Use it inside block components like this:

```vue
<PlaceholderImage ratio="4/3" label="Product image" />
```

---

## Block Component Rules

### Structure of every block component

```vue
<script setup>
import PlaceholderImage from '../ui/PlaceholderImage.vue'
// Other imports if needed
</script>

<template>
  <!-- Block HTML goes here — copied verbatim from Flowbite, adapted to Vue -->
</template>

<style scoped>
/* Fine-tuning overrides to match the reference block image exactly */
</style>
```

### Permitted edits to the Flowbite block HTML (same as before)

1. Convert HTML to valid Vue template syntax (`class` stays `class`; HTML comments are fine).
2. Replace every `<img>` tag with `<PlaceholderImage :ratio="'W/H'" label="..." />`, sizing the ratio to match the image proportions visible in the reference image.
3. Replace text content, `href` values, and `alt` attributes to match the reference.
4. Swap Tailwind color utilities (e.g. `blue` → `indigo`) only when the reference image clearly shows a different color.
5. **Do not** reorder, add, or remove structural elements (grid wrappers, flex containers, etc.).

### Scoped style rules

- After converting the block to a Vue template, visually compare it against the reference image.
- Add **only** what is needed inside `<style scoped>` to close any visual gap: exact background colors, custom padding/margin values, font sizes, line-heights, etc.
- Prefer Tailwind utilities in the template first; use scoped CSS only for values that no Tailwind utility can express (e.g. a non-standard hex color, a precise pixel value, a custom gradient).
- Use CSS custom properties or `v-bind()` in scoped style when a value is driven by a prop.
- Never use `!important` — restructure specificity instead.

---

## Agent Workflow

When given a **block reference image**, follow these steps in order:

1. **Analyse the image** — identify the block type (hero, navbar, feature grid, CTA, FAQ, footer, etc.), its layout (columns, stacked, centered), and any distinctive visual traits (background color, image proportions, icon style, font weight).
2. **Map to the closest free Flowbite block** at https://flowbite.com/blocks/ and state your choice with a one-line rationale.
3. **Create the Vue component** in `src/components/blocks/`:
   - Copy the Flowbite block HTML verbatim into the `<template>`.
   - Replace `<img>` tags with `<PlaceholderImage>`, estimating the `ratio` from the reference image.
   - Apply only the permitted text/color edits.
4. **Add `<style scoped>`** with every CSS override needed to match the reference image exactly (background color, spacing, typography, etc.).
5. **Register the component** in `App.vue` and place it in the correct page order.
6. **Run `npm run dev`** (or `npm run build`) and fix any errors.
7. **Report** the block used, permitted edits made, and any scoped-style overrides added.

---

## Styling Practices

### Priority order

1. Tailwind utility classes in the template (structure, spacing, color when a standard palette value matches).
2. `<style scoped>` in the component (exact overrides, non-standard values, gradients).
3. `src/assets/main.css` global layer — only for project-wide resets or shared `@layer components` rules.

### Composition API style

All components use `<script setup>` (Composition API). No Options API.

```vue
<script setup>
import { ref, computed } from 'vue'
// define props, emits, reactive state here
</script>
```

### Spacing & sizing

Follow Tailwind's default spacing scale in the template. Use scoped CSS for exact pixel values when the reference image demands it.

### Color

- Use Flowbite's default palette in Tailwind classes.
- Use exact hex values in scoped CSS only when the reference color has no Tailwind equivalent.
- Always handle dark mode: `dark:` variants in template + `@media (prefers-color-scheme: dark)` in scoped CSS if needed.

---

## Do Not

- Do not use a full-page `mockup.webp` as reference — individual block images are the reference.
- Do not install additional CSS frameworks or UI libraries beyond those listed above.
- Do not use React, Angular, or any framework other than Vue 3.
- Do not use Options API — always use `<script setup>` (Composition API).
- Do not add global CSS for block-specific styles — keep overrides inside `<style scoped>`.
- Do not use inline `style=""` attributes — use scoped CSS or Tailwind classes.
- Do not commit build output (`dist/`) or `node_modules/`.
- Do not edit files inside `node_modules/`.
