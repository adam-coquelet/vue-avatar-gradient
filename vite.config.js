import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'AvatarGradient',
            fileName: (format) => `avatar-gradient.${format}.js`
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