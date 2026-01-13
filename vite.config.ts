import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    plugins: [
      react(),
      tailwindcss(),
      dts({
        insertTypesEntry: true,
        tsconfigPath: "./tsconfig.app.json",
        rollupTypes: true,
        include: ["src"],
      }),
    ],
    // In development (playground), we want the root to be where index.html is,
    // OR we just map the entry correctly.
    // Simpler approach: keep root at project root, point to playground entry in index.html,
    // but the user wanted src/playground structure.
    // Let's set root to src/playground in dev mode to keep it clean?
    // actually, simpler to have index.html in root for dev, pointing to src/playground/main.tsx.
    // BUT, the user requested "src/playground/App.tsx -> Entry point".
    // I will put index.html in `src/playground/` and set root to `src/playground` when in dev.
    root: isDev ? "src" : process.cwd(),
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "ReactTanStackLibrary",
        fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "@tanstack/react-query",
          "@tanstack/react-form",
        ],
        output: {
          // entryFileNames: "[name].[format].js",
          // chunkFileNames: "[name].[format].js",
          // assetFileNames: "[name].[ext]",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@tanstack/react-query": "ReactQuery",
            "@tanstack/react-form": "ReactForm",
            tailwindcss: "tailwindcss",
          },
        },
      },
      // Ensure CSS is emitted
      cssCodeSplit: false,
    },
    sourcemap: true,
    resolve: {
      alias: {
        // Allow playground to import from lib easily
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
