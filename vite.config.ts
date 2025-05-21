
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect if we're running on custom domain or GitHub Pages
  const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
  
  // Use proper base path depending on deployment target
  const basePath = mode === 'production' && !isCustomDomain 
    ? '/kumru-automotive-web/' 
    : '/';
  
  return {
    // Dynamic base path
    base: basePath,
    
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      // Ensure proper MIME types for module scripts
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
          }
        }
      }
    }
  }
});
