import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageTile from './ImageTile';
import Reveal from './Reveal';

export default function Solutions({ items }) {
  return (
    <Box component="section" id="solutions" sx={{ width: '80%', mx: 'auto', mb: 5 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ my: 2.5 }}>Our Solutions</Typography>
      <Grid container spacing={4}>
        {items.map((solution, i) => (
          // Keyed by position: the placeholder entries all share one name.
          <Grid item xs={12} md={4} key={i}>
            <Reveal delay={0.2}><ImageTile image={solution.image} label={solution.name} /></Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
