import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, join, resolve, sep } from 'node:path';

const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
};

createServer(async (req, res) => {
  try {
    const request = new URL(req.url || '/', 'http://localhost');
    const pathname = decodeURIComponent(request.pathname);
    const file = resolve(join(root, pathname === '/' ? 'index.html' : `.${pathname}`));
    if (!file.startsWith(`${root}${sep}`)) {
      res.writeHead(403).end('Forbidden'); return;
    }
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(bytes);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => {
  console.log('SAMA portfolio preview: http://127.0.0.1:4173');
});
