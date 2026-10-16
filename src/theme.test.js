import { getContrastRatio } from '@mui/material/styles';
import { describe, expect, it } from 'vitest';
import { theme } from './theme';

describe('theme', () => {
  it('keeps text on the green bar readable (WCAG AA, 4.5:1)', () => {
    const { main, contrastText } = theme.palette.primary;
    expect(getContrastRatio(contrastText, main)).toBeGreaterThanOrEqual(4.5);
  });
});
