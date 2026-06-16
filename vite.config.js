import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = '/portfolio-academique/';
const baseWithoutTrailingSlash = base.replace(/\/$/, '');

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'redirect-base-without-trailing-slash',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const requestUrl = req.url || '';
          const [pathname, query = ''] = requestUrl.split('?');

          if (pathname === baseWithoutTrailingSlash) {
            res.statusCode = 308;
            res.setHeader('Location', `${base}${query ? `?${query}` : ''}`);
            res.end();
            return;
          }

          next();
        });
      },
    },
  ],
});
