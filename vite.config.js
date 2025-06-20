import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const PORT_APP = Number(env.VITE_PORT_APP)

  return {
    plugins: [react()],
    server: {
      port: PORT_APP,
      open: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/abstracts" as *;`,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
