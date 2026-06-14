import { copyFile } from 'node:fs/promises';

const indexFile = new URL('../dist/index.html', import.meta.url);
const notFoundFile = new URL('../dist/404.html', import.meta.url);

await copyFile(indexFile, notFoundFile);
console.log('Created dist/404.html for GitHub Pages SPA fallback.');
