import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { sections } from '../content';

/** Links to the page's sections; it stays at the top while scrolling. */
export default function NavBar() {
  const [menuAnchor, setMenuAnchor] = useState(null);

  return (
    <AppBar position="sticky" component="nav" aria-label="Sections">
      <Toolbar variant="dense">
        <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', justifyContent: 'space-around' }}>
          {sections.map((section) => (
            <Button key={section.id} color="inherit" href={`#${section.id}`}>{section.label}</Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" aria-label="Sections menu" onClick={(e) => setMenuAnchor(e.currentTarget)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        {sections.map((section) => (
          <MenuItem key={section.id} component="a" href={`#${section.id}`} onClick={() => setMenuAnchor(null)}>
            {section.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}
