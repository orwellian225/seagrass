import { defineConfig } from "vite"

export default defineConfig({
    base: '/seagrass',
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist"
    }
})