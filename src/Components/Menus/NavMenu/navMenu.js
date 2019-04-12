import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import NavMenuTemplate from './navMenuTemplate'

const styles = theme => ({
    root: {
      width: '100%',
    },
    sectionDesktop: {
      width:'100%',
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    menuItem:{
      flex:1,
      textAlign:'center'
    }
  });

class NavMenu extends Component{
    render(){
        return(
            <div>
                <NavMenuTemplate styles={this.props}></NavMenuTemplate>
            </div>
        )
    }
}




export default withStyles(styles)(NavMenu)