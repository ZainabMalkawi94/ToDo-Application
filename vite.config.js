import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Other Vite configuration options...
  plugins: [
    react(),
  ],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: 'import React from "react";',
  },
});
