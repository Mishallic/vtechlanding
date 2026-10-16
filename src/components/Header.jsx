import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBox from './SearchBox';
import { sections } from '../content';

/** One slim bar that stays at the top: logo, section links and search. On phones the links fold into a menu. */
export default function Header({ search }) {
  const [menuAnchor, setMenuAnchor] = useState(null);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ bgcolor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(10px)', borderBottom: 1, borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 3, rowGap: 1, py: 1.25 }}>
          <Box component="a" href="#top" aria-label="V-tech, back to top" sx={{ display: 'flex' }}>
            <Box component="img" src="/images/logo.png" alt="V-tech" sx={{ height: { xs: 36, md: 44 } }} />
          </Box>
          <Box component="nav" aria-label="Sections" sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                href={`#${section.id}`}
                color="inherit"
                sx={{ color: 'text.secondary', fontSize: 15, '&:hover': { color: 'text.primary', bgcolor: 'background.tinted' } }}
              >
                {section.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flex: 1 }} />
          <IconButton
            aria-label="Sections menu"
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            sx={{ display: { md: 'none' }, order: { xs: 2, sm: 3 } }}
          >
            <MenuIcon />
          </IconButton>
          {/* One search box: its own row on phones, beside the links from tablet width up. */}
          <Box sx={{ width: { xs: '100%', sm: 300, md: 340 }, order: { xs: 3, sm: 2 } }}>
            <SearchBox {...search} />
          </Box>
        </Box>
      </Container>
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
