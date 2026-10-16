import { getContrastRatio } from '@mui/material/styles';
import { describe, expect, it } from 'vitest';
import { theme } from './theme';

describe('theme', () => {
  it('keeps text on the brand green readable (WCAG AA, 4.5:1)', () => {
    const { main, contrastText } = theme.palette.primary;
    expect(getContrastRatio(contrastText, main)).toBeGreaterThanOrEqual(4.5);
  });

  it('keeps green and grey text readable on white and on tinted sections', () => {
    const { background, primary, text } = theme.palette;
    for (const color of [primary.dark, text.secondary]) {
      expect(getContrastRatio(color, background.paper)).toBeGreaterThanOrEqual(4.5);
      expect(getContrastRatio(color, background.tinted)).toBeGreaterThanOrEqual(4.5);
    }
  });
});
