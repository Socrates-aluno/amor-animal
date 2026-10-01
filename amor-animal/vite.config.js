import { defineConfig } from "vite";

export default defineConfig({
  // Aplicação multipágina: as páginas HTML na raiz são incluídas automaticamente.
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
