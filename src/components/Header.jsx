import Box from '@mui/material/Box';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        width: '80%', mx: 'auto', py: 2, display: 'flex', gap: 2, alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between',
      }}
    >
      <Box component="img" src="/images/logo.png" alt="V-tech" sx={{ width: { xs: '80%', md: '30%' } }} />
      <Box sx={{ width: { xs: '100%', md: '40%' } }}>
        <SearchBox />
      </Box>
    </Box>
  );
}
