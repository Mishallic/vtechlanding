import React, { Component } from 'react';

//components
import NavMenu from '../Menus/NavMenu/navMenu';
//gridy components
import ProductsContainer from '../Table/Products/productsContainer';
import SolutionsContainer from '../Table/Solutions/SolutionsContainer';
import ClientsContainer from '../Table/Clients/ClientsContainer';
//widgets
import SliderContainer from '../Widgets/Slider/slider';
//mui
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = () => ({
    root:{
       height:'auto'
    },
    slider:{
        height:'50%'
    }
});

class Home extends Component{
    render(){
        const {classes} = this.props
    return(
        <div className={classes.root}> 
                <NavMenu/>
                <SliderContainer/>
                <ProductsContainer/>
                <Divider variant="middle" />
                <SolutionsContainer/>
                <Divider variant="middle" />
                <ClientsContainer/>
        </div>
    );
}};

export default withStyles(styles)(Home);