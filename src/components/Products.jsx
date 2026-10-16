import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';
import Section from './Section';

/** Product cards: the photo in full on white, what it is, and its name. */
export default function Products({ items }) {
  return (
    <Section id="products" eyebrow="Products" title="Best Choice Products" tinted>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {items.map((product) => (
          <Grid item xs={6} md={4} key={product.name}>
            <Reveal>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: '20px', height: '100%', transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 24px 48px -28px rgba(20, 50, 13, 0.4)' },
                }}
              >
                <Box sx={{ aspectRatio: '4 / 3', p: { xs: 1.5, sm: 3 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box component="img" src={product.image} alt={product.name} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Box>
                <Box sx={{ px: { xs: 1.75, sm: 3 }, py: { xs: 1.5, sm: 2.5 }, borderTop: 1, borderColor: 'divider' }}>
                  <Typography variant="overline" component="p" sx={{ color: 'primary.dark', lineHeight: 1.4, fontSize: { xs: 10, sm: 12 } }}>
                    {product.type}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ fontSize: { xs: '0.95rem', sm: '1.15rem' } }}>{product.name}</Typography>
                </Box>
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
