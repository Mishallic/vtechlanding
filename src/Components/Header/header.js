import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Home from '@material-ui/icons/Home'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width:'80%',
    border:'1px red solid',
    margin:'auto',
    fontSize:'15px'
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  logo:{
      height:'100px'
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={4}>
            <div style={{border:'red 1px solid'}}>
                <Grid direction='colomn' container>
                    <Grid item xs>
                        <Grid container spacing={8}>
                            <Grid  className={classes.paper} item xs={2}>
                                <Home></Home>
                            </Grid>
                            <Grid  className={classes.paper} item xs={4}>
                                About Us
                            </Grid>
                            <Grid  className={classes.paper} item xs={4}>
                                Contact Us
                            </Grid>
                            <Grid  className={classes.paper} item xs={2}>
                                Faw
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>    
            </div>
        </Grid>
        <Grid item xs={4}>
        <img className={classes.logo} src='images/logo.png' alt='logo'></img>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.paper}>xs=4</div>
        </Grid>
        
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);