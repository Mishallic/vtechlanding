import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';
import Section from './Section';

/** The two markets the products serve, as photo cards. */
export default function Markets({ items }) {
  return (
    <Section id="markets" eyebrow="Who it's for" title="Built for restaurants and retail">
      <Grid container spacing={3}>
        {items.map((market) => (
          <Grid item xs={12} md={6} key={market.title}>
            <Reveal>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: '20px', height: '100%', transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 24px 48px -28px rgba(20, 50, 13, 0.4)' },
                }}
              >
                <Box component="img" src={market.image} alt="" sx={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block' }} />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>{market.title}</Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary' }}>{market.text}</Typography>
                </Box>
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
