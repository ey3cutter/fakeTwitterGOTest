import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// export default defineConfig({
//     plugins: [
//         vue({
//             template: {
//                 transformAssetUrls: true
//             }
//         })
//     ],
//     build: {
//         rollupOptions: {
//             input: resolve(__dirname, 'index.html') // Уберите public/
//         }
//     }
// })

export default defineConfig({
    base: '/assets/',
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Для обработки комментариев в шаблоне
                    comments: true
                }
            }
        })
    ],
    build: {
        manifest: true,
        assetsDir: 'assets',
        manifestPath: 'manifest.json',
        rollupOptions: {
            input: resolve(__dirname, 'public/index.html')
        },
        emptyOutDir: true
    }
})

// export default defineConfig({
//     plugins: [
//         vue({
//             template: {
//                  transformAssetUrls: true
//             }
//         })
//     ],
//     resolve: {
//         alias: {
//             '@': resolve(__dirname, './src')
//         }
//     },
//     base: '/',
//     build: {
//         outDir: 'dist',
//         assetsDir: 'assets',
//         rollupOptions: {
//             input: resolve(__dirname, 'public/index.html')
//         },
//         manifest: true
//     }
// })