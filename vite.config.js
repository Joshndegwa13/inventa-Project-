import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Inventa Product Inventory', 
        short_name: 'Inventa',               
        description: 'Manage your product inventory with ease.', 
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/192.png', 
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/512.png', 
            sizes: '512x512',
            type: 'image/png',
          },
          
        ],
      },
      devOptions: {
        enabled: true, 
      },
    }),
  ],
});
