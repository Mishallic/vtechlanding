import React from 'react'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import WOW from 'wowjs'

const Solutions = (props) => {
    
    
    
    const {classes} = props.styles

    const structurize = () => {
        const wow = new WOW.WOW()
        wow.init()
        return props.data.solutions.map( (item) => (
            renderItems(item)
        ))
        
    }
    
    
    const renderItems = (item) => (
       
        <Grid className="wow flipInY" data-wow-offset="50" data-wow-delay="0.2s" item lg={4} xs={12}>
        <div  className={classes.tableItem}>
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
                <Typography className={classes.tableTitle} variant='h4' align='center'>Our Solutions</Typography>
                <Grid container spacing={32}>
                {structurize()}
                </Grid>
            </div>
        </div>
    )
    
}   
    


export default Solutions