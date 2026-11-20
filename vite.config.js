import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Plugin para manter a data do sitemap.xml automaticamente sincronizada
 * com a data do build mais recente.
 */
function sitemapPlugin() {
  return {
    name: 'sitemap-auto-update',
    buildStart() {
      const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml')
      if (fs.existsSync(sitemapPath)) {
        let content = fs.readFileSync(sitemapPath, 'utf-8')
        const today = new Date().toISOString().split('T')[0]
        content = content.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`)
        fs.writeFileSync(sitemapPath, content, 'utf-8')
      }
    }
  }
}

export default defineConfig({
  base: '/',
  plugins: [sitemapPlugin()],
  build: {
    assetsInlineLimit: 4096
  }
})
