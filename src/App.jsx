import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Solutions from './components/Solutions';
import { clients, footerColumns, products, slides, solutions } from './content';
import { matches } from './search';
import { theme } from './theme';

export default function App() {
  const [query, setQuery] = useState('');
  const searching = query.trim() !== '';
  const shown = {
    products: products.filter((p) => matches(query, p.name)),
    solutions: solutions.filter((s) => matches(query, s.name, s.group)),
    clients: clients.filter((c) => matches(query, c.name)),
  };
  const total = shown.products.length + shown.solutions.length + shown.clients.length;
  const jumpToResults = () => document.getElementById('search-results')?.scrollIntoView();

  // While searching, sections without matches are left out and the slider steps aside.
  const sections = [
    shown.products.length > 0 && <Products key="products" items={shown.products} />,
    shown.solutions.length > 0 && <Solutions key="solutions" items={shown.solutions} />,
    shown.clients.length > 0 && <Clients key="clients" items={shown.clients} />,
  ].filter(Boolean);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header search={{ value: query, onChange: setQuery, onSubmit: jumpToResults }} />
      <NavBar />
      <main>
        {!searching && <HeroSlider slides={slides} />}
        <Box id="search-results" aria-live="polite" sx={{ width: '80%', mx: 'auto', mt: searching ? 2 : 0 }}>
          {searching && (
            <Typography color="text.secondary">
              {total === 0 ? `Nothing matches “${query.trim()}”.` : `${total} result${total === 1 ? '' : 's'} for “${query.trim()}”`}
              {total === 0 && <Button size="small" onClick={() => setQuery('')} sx={{ ml: 1 }}>Show everything</Button>}
            </Typography>
          )}
        </Box>
        {sections.flatMap((section, i) => (i === 0 ? [section] : [<Divider key={`divider-${i}`} variant="middle" />, section]))}
      </main>
      <Footer columns={footerColumns} />
    </ThemeProvider>
  );
}
