import React, { Component } from 'react'
import Header from '../Header/header'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
    palette:{
        primary:{
            light: '#7fd96a',
            main: '#60D045',
            dark: '#439130',
            contrastText: '#fff',
        },
        secondary:{
           main:'#fff'
        }
    }
});

class Layout extends Component {

    render(){
        return(
            <MuiThemeProvider theme={theme}>
               <Header/>
               {this.props.children}
               Footer
            </MuiThemeProvider>
        )
    }
}



export default Layout