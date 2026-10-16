import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Tile = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 225,
  [theme.breakpoints.down('sm')]: { height: 140 },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .tile-backdrop': { opacity: 0.25 },
    '& .tile-marked': { opacity: 0 },
    '& .tile-title': { border: '4px solid currentColor' },
  },
}));

const cover = { position: 'absolute', inset: 0 };

/** A photo with a dark overlay and a centred label that gets a frame on hover. */
export default function ImageTile({ image, label }) {
  return (
    <Tile focusRipple>
      <Box
        component="span"
        sx={{ ...cover, backgroundImage: `url("${image}")`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      />
      <Box
        component="span"
        className="tile-backdrop"
        sx={{ ...cover, bgcolor: 'common.black', opacity: 0.4, transition: (t) => t.transitions.create('opacity') }}
      />
      <Box component="span" sx={{ ...cover, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'common.white' }}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className="tile-title"
          sx={{ position: 'relative', px: 4, pt: 2, pb: 1.5 }}
        >
          {label}
          <Box
            component="span"
            className="tile-marked"
            sx={{
              height: 3, width: 18, bgcolor: 'common.white', position: 'absolute', bottom: -2, left: 'calc(50% - 9px)',
              transition: (t) => t.transitions.create('opacity'),
            }}
          />
        </Typography>
      </Box>
    </Tile>
  );
}
