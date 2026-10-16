import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

/** Filters the page as you type; Enter jumps to the results. */
export default function SearchBox({ value, onChange, onSubmit }) {
  return (
    <Box
      component="form"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      sx={{
        display: 'flex', alignItems: 'center', pl: 1.5, pr: 0.5, height: 44, borderRadius: 999,
        bgcolor: 'background.tinted', border: 1, borderColor: 'divider', transition: 'border-color 0.2s, box-shadow 0.2s',
        '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 0 3px rgba(96, 208, 69, 0.25)' },
      }}
    >
      <SearchIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
      <InputBase
        sx={{ flex: 1, fontSize: 15 }}
        placeholder="Search products, solutions, clients"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputProps={{ 'aria-label': 'Search V-tech', type: 'search' }}
      />
      {value && (
        <IconButton size="small" aria-label="Clear search" onClick={() => onChange('')}>
          <ClearIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}
