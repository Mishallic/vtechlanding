import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles' 
import SliderTemplate from './sliderTemplate'

    
const styles = () => ({
    image:{
        backgroundSize:'cover',
        backgroundPosition:'center'
    },
    contentCont:{
      position:'absolute',
      bottom:0,
      background:'rgba(0, 0, 0, 0.5)',
      color:'#f1f1f1',
      width:'90%',
      padding:'20px'
    },
    container:{
      bottom:0,
      background:'rgba(0, 0, 0, 0.5)',
      color:'#f1f1f1'
    }
})

class SliderContainer extends Component {

    state = {
        
    }



    render(){
        return(
            
                <SliderTemplate styles={this.props}></SliderTemplate>

        )
    }
}



export default withStyles(styles)(SliderContainer)

