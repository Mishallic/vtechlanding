import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BackupIcon from '@mui/icons-material/Backup';
import CloudIcon from '@mui/icons-material/Cloud';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HotelIcon from '@mui/icons-material/Hotel';
import InsightsIcon from '@mui/icons-material/Insights';
import KeyIcon from '@mui/icons-material/Key';
import LanIcon from '@mui/icons-material/Lan';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SecurityIcon from '@mui/icons-material/Security';
import Reveal from './Reveal';

const icons = {
  'Business Intelligence': InsightsIcon,
  Security: SecurityIcon,
  'Hotel Cloud': HotelIcon,
  'POS Cloud': PointOfSaleIcon,
  'Backup Cloud': BackupIcon,
  'Dashboard Cloud': DashboardIcon,
  PKI: KeyIcon,
  'Security Audit': FactCheckIcon,
  'Network Security': LanIcon,
};

export default function Solutions({ items }) {
  return (
    <Box component="section" id="solutions" sx={{ width: '80%', mx: 'auto', mb: 5 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ my: 2.5 }}>Our Solutions</Typography>
      <Grid container spacing={3}>
        {items.map((solution) => {
          const Icon = icons[solution.name] ?? CloudIcon;
          return (
            <Grid item xs={12} sm={6} md={4} key={solution.name}>
              <Reveal delay={0.2}>
                <Paper variant="outlined" sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2, height: '100%' }}>
                  <Icon sx={{ fontSize: 40, color: 'primary.dark' }} />
                  <Typography variant="h6" component="h3">{solution.name}</Typography>
                </Paper>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
