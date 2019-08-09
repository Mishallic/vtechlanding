import React from 'react';

//mui
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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


    //when clicking on account icon (main navbar) this menu is rendered.
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

    //configures the mobile view compressed menu
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
    const menuItemsTxt = ['Products', 'Solutions', 'Clients', 'Partners', 'Downloads', 'Media Center', 'Success Story']

    //displays only the text for the main navbar
    const renderMenuItems = () => (
      menuItemsTxt.map((item, i) => (
        <div className={classes.menuItem} key={i}>
          <Button variant='text' color='secondary'>{item}</Button>
        </div>
      ))
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant='dense'>

            <div className={classes.sectionDesktop}>
              <div style={{ display: 'flex', width: '100%' }}>

                {renderMenuItems()}

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
  };
};

export default NavMenuTemplate;
