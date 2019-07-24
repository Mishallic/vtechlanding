import React, { Component } from 'react'
import SliderContainer from '../Widgets/Slider/slider'
import { withStyles } from '@material-ui/core/styles'
import NavMenu from '../Menus/NavMenu/navMenu'
import ProductsContainer from '../Table/Products/productsContainer'
import SolutionsContainer from '../Table/Solutions/SolutionsContainer';
import Divider from '@material-ui/core/Divider'
import ClientsContainer from '../Table/Clients/ClientsContainer'


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
                <ProductsContainer></ProductsContainer>
                <Divider variant="middle" />
                <SolutionsContainer></SolutionsContainer>
                <Divider variant="middle" />
                <ClientsContainer></ClientsContainer>
        </div>
    )
}}



export default withStyles(styles)(Home)