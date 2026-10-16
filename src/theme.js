import { createTheme } from '@mui/material/styles';

// The brand green is the accent. Text on it is dark green: white on #60D045 is 1.98:1, far below
// the 4.5:1 WCAG asks for; #14320d is 7.1:1. Green text on white uses primary.dark (6.5:1).
export const theme = createTheme({
  palette: {
    primary: { light: '#7fd96a', main: '#60D045', dark: '#2c6b1f', contrastText: '#14320d' },
    text: { primary: '#16201a', secondary: '#56635b' },
    divider: '#e3e9e2',
    background: { default: '#ffffff', paper: '#ffffff', tinted: '#f5f8f4' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 },
    h2: { fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h3: { fontWeight: 700 },
    h6: { fontWeight: 700, lineHeight: 1.3 },
    button: { textTransform: 'none', fontWeight: 600 },
    overline: { fontWeight: 700, letterSpacing: '0.12em', lineHeight: 1.6 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Section links glide to their section, unless the visitor asked for less motion.
        html: { '@media (prefers-reduced-motion: no-preference)': { scrollBehavior: 'smooth' } },
        // Leave room for the sticky header above a section's heading.
        section: { scrollMarginTop: 88 },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 20 } },
    },
  },
});
