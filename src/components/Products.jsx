import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageTile from './ImageTile';
import Reveal from './Reveal';

export default function Products({ items }) {
  return (
    <Box component="section" id="products" sx={{ width: '80%', mx: 'auto', mb: 3 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ my: 2.5 }}>Best Choice Products</Typography>
      <Grid container spacing={3}>
        {items.map((product) => (
          <Grid item xs={12} md={6} key={product.name}>
            <Reveal delay={0.1}>
              <Paper><ImageTile image={product.image} label={product.name} /></Paper>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
