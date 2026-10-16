import { describe, expect, it } from 'vitest';
import { matches } from './search';

describe('matches', () => {
  it('ignores case and needs every word', () => {
    expect(matches('pos', 'Resto Prime POS')).toBe(true);
    expect(matches('prime pos', 'Shop Prime POS')).toBe(true);
    expect(matches('prime scale', 'Shop Prime POS')).toBe(false);
  });

  it('searches across all the texts given', () => {
    expect(matches('cloud backup', 'Backup Cloud', 'Cloud Solutions')).toBe(true);
    expect(matches('network', 'PKI', 'Network Security')).toBe(true);
  });

  it('matches everything for an empty query and ignores accents', () => {
    expect(matches('   ', 'anything')).toBe(true);
    expect(matches('cafe', 'Café')).toBe(true);
  });
});
