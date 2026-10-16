import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { hero, sections } from '../content';

const heading = { color: '#fff', fontWeight: 700, fontSize: 15, mb: 1.5 };
const item = { color: 'rgba(255, 255, 255, 0.72)', fontSize: 15, lineHeight: 2 };

export default function Footer({ columns }) {
  return (
    <Box component="footer" sx={{ bgcolor: '#101a13', color: '#fff' }}>
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 }, display: 'grid', gap: 4,
          gridTemplateColumns: { xs: '1fr 1fr', md: '1.6fr repeat(4, 1fr)' },
        }}
      >
        <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}>
          <Box component="img" src="/images/vtech_logo.png" alt="V-tech" sx={{ height: 56 }} />
          <Typography sx={{ ...item, mt: 1.5, maxWidth: 260 }}>{hero.eyebrow}</Typography>
        </Box>
        <Box>
          <Typography component="h3" sx={heading}>Explore</Typography>
          {sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} underline="hover" display="block" sx={{ ...item, '&:hover': { color: '#fff' } }}>
              {section.label}
            </Link>
          ))}
        </Box>
        {columns.map((column) => (
          <Box key={column.title}>
            <Typography component="h3" sx={heading}>{column.title}</Typography>
            {column.items.map((name) => <Typography key={name} sx={item}>{name}</Typography>)}
          </Box>
        ))}
      </Container>
      <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Container maxWidth="lg" sx={{ py: 2.5 }}>
          <Typography sx={{ ...item, fontSize: 14 }}>© {new Date().getFullYear()} V-tech</Typography>
        </Container>
      </Box>
    </Box>
  );
}
