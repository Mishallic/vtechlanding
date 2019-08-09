import React from 'react';

//mui
import {ButtonBase, Typography, Grid, Paper} from '@material-ui/core';

const Products = (props) => {
    const {classes} = props.styles;

    //connects data from props to renderer
    const structurize = () => {
        return props.data.products.map( (item) => (
            renderItems(item)
        ));
    };


    //displays image and effects within a grid, data recieved from a map function
    const renderItems = (item) => (
        <Grid className="wow fadeInDown" data-wow-offset="30" data-wow-delay="0.1s" item lg={6} xs={12}>
            <Paper className={classes.tableItem}>
                <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: '100%',
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{backgroundImage: `url(${item.url})`}}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        <p>{item.label}</p>
                        <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            </Paper>
        </Grid> 
    )
    return(
        <div className={classes.root}>  
            <div className={classes.container}>
                <Typography className={classes.tableTitle} variant='h4' align='center'>
                    Best Choice Products
                </Typography>
                <Grid container spacing={24}>
                    {structurize()}
                </Grid>
            </div>
        </div>
    );
};

export default Products;