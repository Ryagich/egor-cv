import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base = process.env.VITE_BASE_PATH ?? '/'

function pagesFallback(basePath: string): Plugin {
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`

  return {
    name: 'github-pages-spa-fallback',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: `<!doctype html><html><head><meta charset="utf-8"><title>Redirecting…</title><script>const base=${JSON.stringify(normalizedBase)};const path=location.pathname.startsWith(base)?location.pathname.slice(base.length-1):location.pathname;location.replace(base+'?p='+encodeURIComponent(path+location.search+location.hash));</script></head><body></body></html>`,
      })
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), pagesFallback(base)],
})
