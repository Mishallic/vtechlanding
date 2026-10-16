import { createTheme } from '@mui/material/styles';

// The site's green, carried over from the original Material-UI theme.
export const theme = createTheme({
  palette: {
    primary: { light: '#7fd96a', main: '#60D045', dark: '#439130', contrastText: '#fff' },
    secondary: { main: '#fff', contrastText: '#fff' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
