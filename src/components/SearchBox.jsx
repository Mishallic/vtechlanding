import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <Paper elevation={1} sx={{ px: 0.5, py: 0.25, display: 'flex', alignItems: 'center' }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search V-tech" inputProps={{ 'aria-label': 'Search V-tech' }} />
      <IconButton sx={{ p: 1.25 }} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
