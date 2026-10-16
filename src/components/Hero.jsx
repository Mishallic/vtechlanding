import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/** The opening: what V-tech offers, two ways in, and the flagship terminal. */
export default function Hero({ content }) {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{ background: 'linear-gradient(180deg, #eef7ea 0%, #ffffff 100%)', overflow: 'hidden' }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 5, md: 10 }, pb: { xs: 3, md: 5 }, display: 'grid', alignItems: 'center', gap: { xs: 5, md: 8 },
          gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr' },
        }}
      >
        <Box>
          <Typography variant="overline" component="p" sx={{ color: 'primary.dark' }}>{content.eyebrow}</Typography>
          <Typography id="hero-title" variant="h1" sx={{ fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.4rem' }, mt: 1 }}>
            {content.title}
          </Typography>
          <Typography sx={{ mt: 2.5, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 540 }}>
            {content.text}
          </Typography>
          <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mt: 4 }}>
            <Button variant="contained" size="large" href="#products" endIcon={<ArrowForwardIcon />}>See products</Button>
            <Button
              variant="outlined"
              size="large"
              href="#solutions"
              color="inherit"
              sx={{ borderColor: 'divider', '&:hover': { borderColor: 'text.primary', bgcolor: 'transparent' } }}
            >
              Our solutions
            </Button>
          </Stack>
        </Box>
        <Box sx={{ position: 'relative', px: { xs: 2, md: 0 } }}>
          {/* A soft green disc behind the product card. */}
          <Box aria-hidden sx={{ position: 'absolute', inset: '-6% -4%', borderRadius: '50%', bgcolor: '#dcf1d4', filter: 'blur(2px)' }} />
          <Box
            sx={{
              position: 'relative', bgcolor: 'background.paper', borderRadius: '28px', p: { xs: 3, md: 4 },
              boxShadow: '0 30px 60px -30px rgba(20, 50, 13, 0.35)', border: 1, borderColor: 'divider',
            }}
          >
            <Box component="img" src={content.image.src} alt={content.image.alt} sx={{ width: '100%', display: 'block' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
