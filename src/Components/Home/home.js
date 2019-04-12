import React, { Component } from 'react'
import SliderContainer from '../Widgets/Slider/slider'
import { withStyles } from '@material-ui/core/styles'
import NavMenu from '../Menus/NavMenu/navMenu'
import ThirdsTableContainer from '../Table/ThirdsTable/ThirdsTableContainer'
import PaperThirdsContainer from '../Table/PaperThirds/paperThirdsContainer';
import Divider from '@material-ui/core/Divider'
import FivesTablesContainer from '../Table/FivesTables/fivesTablesContainer'


const styles = ( ) => ({
    root:{
       height:'auto'
    },
    slider:{
        height:'50%'
    }
})

class Home extends Component{
    render(){
        const {classes} = this.props
    return(
        <div className={classes.root}> 
                <NavMenu></NavMenu>
                <SliderContainer></SliderContainer>
                <ThirdsTableContainer></ThirdsTableContainer>
                <Divider variant="middle" />
                <PaperThirdsContainer></PaperThirdsContainer>
                <Divider variant="middle" />
                <FivesTablesContainer></FivesTablesContainer>
        </div>
    )
}}



export default withStyles(styles)(Home)