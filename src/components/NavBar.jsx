import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from '../content';

export default function NavBar() {
  const [accountAnchor, setAccountAnchor] = useState(null);
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const closeAll = () => {
    setAccountAnchor(null);
    setMobileAnchor(null);
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <Box key={item} sx={{ flex: 1, textAlign: 'center' }}>
              <Button color="secondary">{item}</Button>
            </Box>
          ))}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <IconButton color="inherit" aria-label="Account" onClick={(e) => setAccountAnchor(e.currentTarget)}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" aria-label="Menu" onClick={(e) => setMobileAnchor(e.currentTarget)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu anchorEl={accountAnchor} open={Boolean(accountAnchor)} onClose={closeAll}>
        <MenuItem onClick={closeAll}>Profile</MenuItem>
        <MenuItem onClick={closeAll}>My account</MenuItem>
      </Menu>
      <Menu anchorEl={mobileAnchor} open={Boolean(mobileAnchor)} onClose={closeAll}>
        {menuItems.slice(0, 3).map((item) => <MenuItem key={item} onClick={closeAll}>{item}</MenuItem>)}
      </Menu>
    </AppBar>
  );
}
