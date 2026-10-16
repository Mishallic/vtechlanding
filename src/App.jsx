import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Solutions from './components/Solutions';
import { clients, footerColumns, products, slides, solutions } from './content';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <NavBar />
      <main>
        <HeroSlider slides={slides} />
        <Products items={products} />
        <Divider variant="middle" />
        <Solutions items={solutions} />
        <Divider variant="middle" />
        <Clients items={clients} />
      </main>
      <Footer columns={footerColumns} />
    </ThemeProvider>
  );
}
