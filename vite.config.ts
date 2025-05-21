
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/kumru-automotive-web/",  // Ensure GitHub repo name is correct
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false, // Disable sourcemaps to reduce file size
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        // Simplify asset name pattern to avoid problems with dots
        entryFileNames: `assets/[name].[hash:8].js`,
        chunkFileNames: `assets/[name].[hash:8].js`,
        assetFileNames: `assets/[name].[hash:8].[ext]`,
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-tooltip', '@radix-ui/react-toast']
        }
      }
    }
  }
}));
