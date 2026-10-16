import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NativeSelect from '@mui/material/NativeSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import HomeIcon from '@mui/icons-material/Home';
import SearchBox from './SearchBox';
import { countries } from '../content';

export default function Header() {
  const [country, setCountry] = useState(countries[0]);

  return (
    <Box component="header" sx={{ width: '80%', mx: 'auto', mb: 1.25, pt: 1 }}>
      <Grid container spacing={1} sx={{ textAlign: 'center', alignItems: 'center', mb: 1 }}>
        <Grid item xs><HomeIcon /></Grid>
        <Grid item xs><Button size="small">About Us</Button></Grid>
        <Grid item xs><Button size="small">Contact Us</Button></Grid>
      </Grid>
      <SearchBox />
      <Box sx={{ textAlign: 'center', my: 2 }}>
        <Box component="img" src="/images/logo.png" alt="V-tech" sx={{ width: { xs: '100%', md: '33%' } }} />
      </Box>
      <Grid container sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Grid item xs={6}>
          <EditLocationIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          <NativeSelect value={country} onChange={(e) => setCountry(e.target.value)} inputProps={{ 'aria-label': 'Country' }}>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </NativeSelect>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
          <AccountCircleIcon />
          <Button variant="contained" size="small">Sign in</Button>
          <Button variant="contained" size="small">Sign out</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
