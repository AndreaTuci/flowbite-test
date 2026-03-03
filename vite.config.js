import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// On GitHub Actions GITHUB_REPOSITORY is "owner/repo" → extract "repo" as base path.
// Locally (no env var) base defaults to "/" so `npm run dev` works unchanged.
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  base,
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
