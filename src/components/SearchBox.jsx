import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

/** Filters the page as you type; Enter jumps to the results. */
export default function SearchBox({ value, onChange, onSubmit }) {
  return (
    <Paper
      component="form"
      role="search"
      elevation={1}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      sx={{ px: 0.5, py: 0.25, display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search products, solutions and clients"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputProps={{ 'aria-label': 'Search V-tech', type: 'search' }}
      />
      {value && (
        <IconButton sx={{ p: 1.25 }} aria-label="Clear search" onClick={() => onChange('')}>
          <ClearIcon />
        </IconButton>
      )}
      <IconButton type="submit" sx={{ p: 1.25 }} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
