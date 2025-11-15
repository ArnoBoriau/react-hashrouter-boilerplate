import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-hashrouter-boilerplate/", // Base public path for deployment. Use "/repo-name/" for GitHub Pages or "./" for relative/local/static hosting.
});
