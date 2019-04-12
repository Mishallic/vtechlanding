import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button'


class NavMenuTemplate extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props.styles;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
      
        <MenuItem onClick={this.handleMobileMenuClose}>
          <Button variant='flat'>Products</Button>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
          <Button variant='flat'>Solutions</Button>
        </MenuItem>

        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Button variant='flat'>Clients</Button>
        </MenuItem>

      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">

          <Toolbar  variant='dense'>

            <div  className={classes.sectionDesktop}>
              <div style={{ display:'flex', width:'100%'}}>
              
                <div className={classes.menuItem}>
                  <Button variant='text' color='secondary'>Products</Button>
                </div>

                <div className={classes.menuItem}>
                  <Button variant='text' color='secondary'>Solutions</Button>
                </div>

                <div className={classes.menuItem}>
                <Button variant='text' color='secondary'>Clients</Button>
                </div>

                <div className={classes.menuItem}>
                <Button variant='text' color='secondary'>Partners</Button>
                </div>

                <div className={classes.menuItem}>
                <Button variant='text' color='secondary'>Downloads</Button>
                </div>

                <div className={classes.menuItem}>
                <Button variant='text' color='secondary'>Media Center</Button>
                </div>

                <div className={classes.menuItem}>
                <Button variant='text' color='secondary'>Sucess Story</Button>
                </div>
                
                <div className={classes.menuItem}>

                          <div aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                          aria-haspopup="true"
                          onClick={this.handleProfileMenuOpen}
                          color="inherit">
                              <AccountCircle />
                          </div>
                </div>
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

export default NavMenuTemplate;
