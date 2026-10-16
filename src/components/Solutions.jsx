import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
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
import Section from './Section';

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

/** One card per group of solutions, each solution with its icon. Takes the (possibly filtered) solutions. */
export default function Solutions({ items }) {
  const groups = [...new Set(items.map((s) => s.group))].map((group) => ({
    title: group,
    names: items.filter((s) => s.group === group).map((s) => s.name),
  }));

  return (
    <Section id="solutions" eyebrow="Solutions" title="Our Solutions">
      <Grid container spacing={3} justifyContent="center">
        {groups.map((group) => (
          <Grid item xs={12} md={4} key={group.title}>
            <Reveal>
              <Card variant="outlined" sx={{ borderRadius: '20px', p: 3, height: '100%' }}>
                <Typography variant="h6" component="h3">{group.title}</Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 2.5, display: 'grid', gap: 1.75 }}>
                  {group.names.map((name) => {
                    const Icon = icons[name] ?? CloudIcon;
                    return (
                      <Box component="li" key={name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          aria-hidden
                          sx={{
                            width: 40, height: 40, flexShrink: 0, borderRadius: '50%', bgcolor: '#e4f4de',
                            color: 'primary.dark', display: 'grid', placeItems: 'center',
                          }}
                        >
                          <Icon fontSize="small" />
                        </Box>
                        <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
