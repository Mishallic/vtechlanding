import { createMuiTheme } from '@material-ui/core/styles';


const palette = {
    palette: {
      primary: {
        light: '#7fd96a',
        main: '#60D045',
        dark: '#439130',
        contrastText: '#fff',
      },
      secondary: {
        light: '#5393ff',
        main: '#2979ff',
        dark: '#1c54b2',
        contrastText: '#000',
      },
    },
};

const themeName = 'vtech'

export default createMuiTheme({ palette, themeName });