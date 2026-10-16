import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { clients, products, slides } from './content';

const publicDir = join(__dirname, '..', 'public');

/** True when the file exists with exactly this letter case (Vercel builds on case-sensitive Linux). */
function existsExactly(path) {
  const full = join(publicDir, path);
  try {
    return readdirSync(dirname(full)).includes(full.split(/[\\/]/).pop());
  } catch {
    return false;
  }
}

describe('content', () => {
  it('points every image at a file that exists, with the exact letter case', () => {
    const images = [
      ...slides.map((s) => s.image), ...products.map((p) => p.image), ...clients.map((c) => c.logo),
      '/images/logo.png', '/images/vtech_logo.png',
    ];
    expect(images.filter((image) => !existsExactly(image))).toEqual([]);
  });
});
