import React from 'react';
//dep
import WOW from 'wowjs';
//mui
import {ButtonBase, Typography, Grid} from '@material-ui/core';

const Solutions = (props) => {
    
    const {classes} = props.styles

    //initiates animation and distributes data to the function that renders the solutions to screen
    const structurize = () => {
        const wow = new WOW.WOW()
        wow.init()
        return props.data.solutions.map( (item) => (
            renderItems(item)
        ))
    }
    
    //a template recieves data and renders it when the function is called
    const renderItems = (item) => (

        <Grid className="wow flipInY" data-wow-offset="50" data-wow-delay="0.2s" item lg={4} xs={12}>
            <div  className={classes.tableItem}>
                <ButtonBase
                    focusRipple
                    className={classes.imageTEST}
                    focusVisibleClassName={classes.focusVisibleTEST}
                    style={{width: '100%'}}
                >
                    <span
                        className={classes.imageSrcTEST}
                        style={{backgroundImage: `url(${item.url})`,}}
                    />
                    <span className={classes.imageBackdropTEST} />
                    <span className={classes.imageButtonTEST}>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitleTEST}
                        >
                        <p>{item.title}</p>
                        <span className={classes.imageMarkedTEST} />
                        </Typography>
                    </span>
                </ButtonBase>
            </div>
        </Grid>
    )

    return(
        <div className={classes.root}   >  
            <div className={classes.container}>
                <Typography className={classes.tableTitle} variant='h4' align='center'>
                    Our Solutions
                </Typography>
                <Grid container spacing={32}>
                    {structurize()}
                </Grid>
            </div>
        </div>
    );
};

export default Solutions;