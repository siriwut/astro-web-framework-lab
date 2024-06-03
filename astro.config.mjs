import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@pages': '/src/pages',
        '@layouts': '/src/layouts',
        '@types': '/src/types',
      },
    },
  },
})
