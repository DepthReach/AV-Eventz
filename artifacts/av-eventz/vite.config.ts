import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const port = Number(process.env.PORT ?? 5173);
const basePath = process.env.BASE_PATH ?? "/";

// Copy assets plugin
import { promises as fs } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function copyAssetsPlugin() {
  return {
    name: "copy-assets",
    async generateBundle() {
      try {
        const assetsSource = path.resolve(__dirname, "../../attached_assets/AV_Images");
        const assetsDest = path.resolve(__dirname, "dist/assets/AV_Images");

        // Create destination directory
        await fs.mkdir(assetsDest, { recursive: true });

        // Recursively copy all image files
        async function copyDir(src: string, dest: string) {
          const entries = await fs.readdir(src, { withFileTypes: true });
          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (entry.isDirectory()) {
              await fs.mkdir(destPath, { recursive: true });
              await copyDir(srcPath, destPath);
            } else if (entry.isFile()) {
              await fs.copyFile(srcPath, destPath);
            }
          }
        }

        await copyDir(assetsSource, assetsDest);
        console.log("✓ Assets copied to dist");
      } catch (error: any) {
        console.warn("Warning: Could not copy assets automatically:", error.message);
      }
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    await copyAssetsPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: false,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});