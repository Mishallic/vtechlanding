import React from 'react';
//mui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const FooterTemplate = (props) => {
    const { classes } = props.styles
    return (
        <div className={classes.root}>
            <div className={classes.container}>

                <Grid container spacing={16}>

                    <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
                        <div className={classes.logoContainer} >
                            <img className={classes.logo} src='images/vtech_logo.png' alt='logo'></img>
                        </div>
                    </Grid>

                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                        <Typography color='secondary' variant='h6'>Company</Typography>
                        <Grid>
                            <Grid>
                                <Typography color='secondary'>-About Us</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-Service</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                        <Typography color='secondary' variant='h6'>Our Solutions</Typography>
                        <Grid>
                            <Grid>
                                <Typography color='secondary'>-Business Intelligence</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-Security</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                        <Typography color='secondary' variant='h6'>Cloud Solutions</Typography>
                        <Grid>
                            <Grid>
                                <Typography color='secondary'>-Hotel Cloud</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-POS Cloud</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-Backup Cloud</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-Dashboard Cloud</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                        <Typography color='secondary' variant='h6'>Network Security</Typography>
                        <Grid>
                            <Grid>
                                <Typography color='secondary'>-PKI</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-Security Audit</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='secondary'>-Network Security</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default FooterTemplate;
