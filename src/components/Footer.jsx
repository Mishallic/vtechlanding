import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { sections } from '../content';

export default function Footer({ columns }) {
  return (
    <Box component="footer" sx={{ mt: 2.5, bgcolor: '#424242', color: '#fff', py: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Box component="img" src="/images/vtech_logo.png" alt="V-tech" sx={{ width: { xs: '60%', sm: '25%' } }} />
      </Box>
      <Grid container spacing={2} sx={{ width: '80%', mx: 'auto' }}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="h3">Explore</Typography>
          {sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} color="inherit" underline="hover" display="block">
              {section.label}
            </Link>
          ))}
        </Grid>
        {columns.map((column) => (
          <Grid item xs={12} md={3} key={column.title}>
            <Typography variant="h6" component="h3">{column.title}</Typography>
            {column.items.map((item) => <Typography key={item}>{item}</Typography>)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
