import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// The design system lives outside this folder and is used in place, so there is one copy of it.
const designSystem = fileURLToPath(new URL("../DesignFiles/wedding-website/design-system", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@design": designSystem } },
  server: { fs: { allow: [".", designSystem] } },
});
