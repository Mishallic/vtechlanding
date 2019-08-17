import React, { Component } from 'react';
import PropTypes from 'prop-types';
//mui
import { withStyles } from '@material-ui/core/styles';
import { Home, Phone, EditLocation, AccountCircle } from '@material-ui/icons'
import { Button, Select, Grid } from '@material-ui/core'
//widgets
import SearchBox from '../Widgets/Search/searchBox'


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: 'auto',
    fontSize: '15px',
    marginBottom: '10px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  logo: {
    width: '100%',
    margin: 'auto'
  },
  logoContainer: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: 'auto',
    textAlign: 'center'
  },
  text: {
    height: '100%'
  },
  phoneNumber: {
    padding: '2px 4px'
  }
});

class Header extends Component {
  state = {
    age: ''
  }

  handleChange = (name) => event => {
    this.setState({
      [name]: event.target.value
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>

          <Grid item xs={12} md={12} lg={4}>

            <Grid container spacing={8}>

              <Grid className={classes.paper} item xs>
                <Home fontSize='default' className={classes.icon}></Home>
              </Grid>

              <Grid className={classes.paper} item xs>
                <Button variant='text' size='small'>About Us</Button>
              </Grid>

              <Grid className={classes.paper} item xs>
                <Button variant='text' size='small'>Contact Us</Button>
              </Grid>

            </Grid>

            <div>
              <SearchBox className={classes.SearchBox}></SearchBox>
            </div>
          </Grid>

          <Grid item style={{margin:'auto'}}xs={6} sm={6} md={4} lg={4} xl={6}>
            <div className={classes.logoContainer} >
              <img className={classes.logo} src='images/logo.png' alt='logo'></img>
            </div>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>

            <Grid container spacing={8}>

              <Grid className={classes.paper} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <EditLocation fontSize='small' />
                <Select
                  native
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                >
                  <option value={10}>Jordan</option>
                  <option value={20}>KSA</option>
                  <option value={30}>Canada</option>
                </Select>
              </Grid>

              <Grid
                className={classes.paper}
                container
                justify='center'
                direcion='row'
                alignItems='center'
                item
                xs={6} sm={6} md={6} lg={6} xl={6}
              >
                <AccountCircle fontSize='default' />
                <Button variant='contained' size='small' >SignIn</Button>
                <Button variant='contained' color='primary' size='small'>SignOut</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);