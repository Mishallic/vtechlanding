import Box from '@mui/material/Box';
import Section from './Section';

/** Client logos on equal tiles. They stay in colour: in grey the pale ones all but vanish. */
export default function Clients({ items }) {
  return (
    <Section id="clients" eyebrow="Clients" title="Our Clients" tinted>
      <Box
        sx={{
          display: 'grid', gap: 2,
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: `repeat(${Math.min(items.length, 5)}, 1fr)` },
        }}
      >
        {items.map((client) => (
          <Box
            key={client.name}
            sx={{
              bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: '16px', height: 112, p: 2.5,
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.25s',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <Box component="img" src={client.logo} alt={client.name} sx={{ maxWidth: '100%', maxHeight: 64, objectFit: 'contain' }} />
          </Box>
        ))}
      </Box>
    </Section>
  );
}
