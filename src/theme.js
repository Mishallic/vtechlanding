import { createTheme } from '@mui/material/styles';

// The site's green, carried over from the original Material-UI theme. Text on it is dark
// green: white on this green is 1.98:1, far below the 4.5:1 WCAG asks for; this is 7.1:1.
export const theme = createTheme({
  palette: {
    primary: { light: '#7fd96a', main: '#60D045', dark: '#439130', contrastText: '#14320d' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Section links glide to their section, unless the visitor asked for less motion.
        html: { '@media (prefers-reduced-motion: no-preference)': { scrollBehavior: 'smooth' } },
        // Leave room for the sticky navigation bar above a section's heading.
        section: { scrollMarginTop: 56 },
      },
    },
  },
});
