import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'Avatar',
            fileName: (format) => `avatar.${format}.js`
        },
        rollupOptions: {
            external: ['vue', 'tinycolor2'],
            output: {
                globals: {
                    vue: 'Vue',
                    tinycolor2: 'tinycolor'
                }
            }
        }
    }
})