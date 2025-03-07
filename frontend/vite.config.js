import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    root: '.', // Указывает корень проекта (по умолчанию это текущая директория)
    build: {
        outDir: 'dist', // Папка для сборки
        rollupOptions: {
            input: './public/index.html', // Указываем путь к index.html
        },
    },
});
