import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const output = resolve(projectRoot, 'dist/index.html')
const server = await createServer({
  root: projectRoot,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  optimizeDeps: { noDiscovery: true, include: [] },
})

try {
  const { App } = await server.ssrLoadModule('/src/main.jsx')
  const html = await readFile(output, 'utf8')
  const marker = '<div id="root"></div>'
  if (!html.includes(marker)) throw new Error('Marcador #root não encontrado no HTML compilado')
  const rendered = renderToString(React.createElement(App))
  if (!rendered.includes('Sites e soluções web') || !rendered.includes('Python Labs')) {
    throw new Error('A página renderizada não contém o conteúdo esperado')
  }
  await writeFile(output, html.replace(marker, `<div id="root">${rendered}</div>`))
  console.log('HTML estático da página gerado em dist/index.html')
} finally {
  await server.close()
}
