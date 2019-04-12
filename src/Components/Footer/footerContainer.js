import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import FooterTemplate from './footerTemplate'


const styles = () => ({
    root:{
        height:'auto',
        width:'100%',
        color:'#fff',
        margin:'20px 0'
    },
    container:{
        height:'100%',
        backgroundColor:'#424242'
    },
    logo:{
        width:'62%',
      },
      logoContainer:{
        maxWidth:'100%',
          height:'auto',
          display:'block', 
          margin:'auto',
          textAlign:'center'
      },
})


class FooterContainer extends Component{ 

    state = {
        
    }


    render(){
       
        return(
            <div>
                <FooterTemplate styles={this.props}></FooterTemplate>
            </div>
        )
    }
}



export default withStyles(styles)(FooterContainer)