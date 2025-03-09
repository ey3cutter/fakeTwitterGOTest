import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'public/index.html')
        },
        emptyOutDir: true // Очищать папку dist перед сборкой
    }
})