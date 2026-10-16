import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Clients({ items }) {
  return (
    <Box component="section" id="clients" sx={{ width: '80%', mx: 'auto', my: 2.5 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 2 }}>Our Clients</Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {items.map((client) => (
          <Grid item xs={4} sm={2} key={client.name} sx={{ textAlign: 'center' }}>
            <Box component="img" src={client.logo} alt={client.name} sx={{ width: '60%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
