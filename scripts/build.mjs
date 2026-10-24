import { access, cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await copyFile(join(root, 'index.html'), join(output, 'index.html'));
await cp(join(root, 'public'), output, { recursive: true });

const required = [
  'index.html',
  'favicon.svg',
  'assets/saudi-hero-approved.webp',
  ...[0, 1, 2, 3, 4, 6, 7, 8].map(n => `certificates/certificate-${n}.pdf`),
];
for (const file of required) await access(join(output, file));
console.log(`SAMA portfolio ready: ${required.length} verified files in dist/`);
