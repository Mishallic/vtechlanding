import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Products = (props) => {
    const {classes} = props.styles

    const structurize = () => {
        return props.data.products.map( (item) => (
            renderItems(item)
        ))
    }

    const renderItems = (item) => (
        <Grid className="wow fadeInDown" data-wow-offset="50" data-wow-delay="0.2s" item lg={6} xs={12}>
            <Paper className={classes.tableItem}>
                <ButtonBase
                    focusRipple
        
                    className={classes.imageTEST}
                    focusVisibleClassName={classes.focusVisibleTEST}
                    style={{
                        width: '100%',
                    }}
                    >
                    <span
                        className={classes.imageSrcTEST}
                        style={{
                        backgroundImage: `url(${item.url})`,
                        }}
                    />
                    <span className={classes.imageBackdropTEST} />
                    <span className={classes.imageButtonTEST}>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitleTEST}
                        >
                        <p>{item.label}</p>
                        <span className={classes.imageMarkedTEST} />
                        </Typography>
                    </span>
                </ButtonBase>
        
            </Paper>
        </Grid> 
    )
    return(
        <div className={classes.root}>  
            <div className={classes.container}>
                <Typography className={classes.tableTitle} variant='h4' align='center'>Best Choice Products</Typography>
                <Grid container spacing={24}>
                {structurize()}
                </Grid>
            </div>
        </div>
    )
}


export default Products