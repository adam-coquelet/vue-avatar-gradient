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
            external: ['vue'],
            output: [
                {
                    format: 'es',
                    entryFileNames: 'avatar.es.js',
                    globals: { vue: 'Vue' }
                },
                {
                    format: 'umd',
                    name: 'Avatar',
                    entryFileNames: 'avatar.umd.js',
                    exports: 'named',
                    globals: { vue: 'Vue' }
                }
            ]
        }
    }
})