import React from 'react';

//mui
import {Typography, Grid} from '@material-ui/core';

const Clients = (props) => { 

    const {classes}= props.styles
    const clientArray = []

    const structurize = () => {
        for(let client in props.data){
            clientArray.push({
                name:client,
                settings:props.data[client]
            })
        };
        return clientArray.map( (item, i) => (
            renderItems(item)
        ));
    };

    //creates a grid of costumers logos
    const renderItems = (item) => {
        return(
            <Grid className={classes.clientItem} item lg={2} xs={4}>
                <div className={classes.imgContainer}>
                    <img className={classes.img} alt='' src={item.settings.img}>
                    </img>
                </div>
            </Grid>
        )
    };

    return(
        <div className={classes.root}>
            <Typography variant='h4' align='center'>Our Clients</Typography>
            <Grid container>
                {structurize()}
            </Grid>
        </div> 
    );
};

export default Clients;