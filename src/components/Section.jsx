import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/** A page section with the shared heading: a small green label above a centred title. */
export default function Section({ id, eyebrow, title, intro, tinted = false, children }) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-title`}
      sx={{ bgcolor: tinted ? 'background.tinted' : 'background.paper', py: { xs: 7, md: 10 } }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 4, md: 6 } }}>
          {eyebrow && <Typography variant="overline" component="p" sx={{ color: 'primary.dark' }}>{eyebrow}</Typography>}
          <Typography id={`${id}-title`} variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>{title}</Typography>
          {intro && <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: { md: '1.05rem' } }}>{intro}</Typography>}
        </Box>
        {children}
      </Container>
    </Box>
  );
}
