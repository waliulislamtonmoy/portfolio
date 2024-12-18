import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Bind to the environment variable PORT
    host: true, // Allows listening on 0.0.0.0
  },
});
