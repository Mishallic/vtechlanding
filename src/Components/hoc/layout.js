import React, { Component } from 'react';

//mui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//components
import FooterContainer from '../Footer/footerContainer';
import Header from '../Header/header';


//a higher order components
//maintains a certain style throughout the application

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#7fd96a',
            main: '#60D045',
            dark: '#439130',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            contrastText: '#fff'
        },
    },
    typography: {
        useNextVariants: true,
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
    },
    overrides: {
        MuiButton: {
            textPrimary: {
                color: 'black'
            },
            textSecondary: {
                color: 'white'
            }
        }
    }
});

class Layout extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Header />
                {this.props.children}
                <FooterContainer />
            </MuiThemeProvider>
        );
    };
};

export default Layout;