import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL(".", import.meta.url))

// One HTML file per page, so every URL (/rankrush, /plans, ...) is a real page with its own title.
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                home: resolve(root, "index.html"),
                rankrush: resolve(root, "rankrush/index.html"),
                features: resolve(root, "features/index.html"),
                plans: resolve(root, "plans/index.html"),
                colleges: resolve(root, "colleges/index.html"),
                faq: resolve(root, "faq/index.html"),
            },
        },
    },
})
