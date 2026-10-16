import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Markets from './components/Markets';
import Products from './components/Products';
import Solutions from './components/Solutions';
import { clients, footerColumns, hero, markets, products, solutions } from './content';
import { matches } from './search';
import { theme } from './theme';

export default function App() {
  const [query, setQuery] = useState('');
  const searching = query.trim() !== '';
  const shown = {
    products: products.filter((p) => matches(query, p.name, p.type)),
    solutions: solutions.filter((s) => matches(query, s.name, s.group)),
    clients: clients.filter((c) => matches(query, c.name)),
  };
  const total = shown.products.length + shown.solutions.length + shown.clients.length;
  const jumpToResults = () => document.getElementById('search-results')?.scrollIntoView();

  // While searching, sections without matches are left out and the opening steps aside.
  const sections = [
    shown.products.length > 0 && <Products key="products" items={shown.products} />,
    shown.solutions.length > 0 && <Solutions key="solutions" items={shown.solutions} />,
    shown.clients.length > 0 && <Clients key="clients" items={shown.clients} />,
  ].filter(Boolean);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header search={{ value: query, onChange: setQuery, onSubmit: jumpToResults }} />
      <main id="top">
        {!searching && <Hero content={hero} />}
        {!searching && <Markets items={markets} />}
        <Box id="search-results" aria-live="polite">
          {searching && (
            <Container maxWidth="lg" sx={{ pt: 4 }}>
              <Typography color="text.secondary">
                {total === 0 ? `Nothing matches “${query.trim()}”.` : `${total} result${total === 1 ? '' : 's'} for “${query.trim()}”`}
                {total === 0 && <Button size="small" onClick={() => setQuery('')} sx={{ ml: 1 }}>Show everything</Button>}
              </Typography>
            </Container>
          )}
        </Box>
        {sections}
      </main>
      <Footer columns={footerColumns} />
    </ThemeProvider>
  );
}
