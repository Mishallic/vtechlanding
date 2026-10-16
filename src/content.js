// Everything the page shows, in one place. Images live in public/images.

// The opening. It says only what the products and solutions below show.
export const hero = {
  eyebrow: 'Point of sale · Cloud · Security',
  title: 'Point-of-sale systems, cloud and security for restaurants and retail',
  text: 'POS terminals, scales, label printers and barcode scanners, with cloud, business-intelligence and network-security solutions behind them.',
  image: { src: '/images/vtek/table1-ds.png', alt: 'Resto Prime POS terminal' },
};

// The two markets the products serve, each naming the products below that serve it.
export const markets = [
  { title: 'Restaurants', text: 'Resto Prime POS terminals and LK-B31 label printers for restaurants.', image: '/images/web3.webp' },
  { title: 'Retail', text: 'Shop Prime POS, Wind 015T scales and DataLogic barcode scanners for shops.', image: '/images/web2.webp' },
];

export const products = [
  { name: 'Resto Prime POS', type: 'POS terminal', image: '/images/vtek/table1-ds.png' },
  { name: 'Label Printer LK-B31', type: 'Label printer', image: '/images/vtek/table3-ds.jpg' },
  { name: 'Wind 015T Scale', type: 'Weighing scale', image: '/images/vtek/table2-ds.png' },
  { name: 'delpos Stylish POS', type: 'POS terminal', image: '/images/vtek/table6-ds.jpg' }, // "delpos" is printed on it
  { name: 'Shop Prime POS', type: 'POS terminal', image: '/images/vtek/table4-ds.png' },
  { name: 'DataLogic QD2131 Imager Scanner', type: 'Barcode scanner', image: '/images/vtek/table5.jpg' },
];

// The solutions as the footer groups them. The Solutions section shows the same list.
export const solutionGroups = [
  { title: 'Business & security', items: ['Business Intelligence', 'Security'] },
  { title: 'Cloud Solutions', items: ['Hotel Cloud', 'POS Cloud', 'Backup Cloud', 'Dashboard Cloud'] },
  { title: 'Network Security', items: ['PKI', 'Security Audit', 'Network Security'] },
];

export const solutions = solutionGroups.flatMap((group) => group.items.map((name) => ({ name, group: group.title })));

export const clients = [
  { name: 'Rawan Cake', logo: '/images/clients/RC.png' },
  { name: 'Saj Haretna', logo: '/images/clients/SA.jpeg' },
  { name: 'Jabri', logo: '/images/clients/JA.png' },
  { name: 'Dulux', logo: '/images/clients/DU.jpeg' },
  { name: 'Abu Tafesh', logo: '/images/clients/AT.jpg' },
];

export const footerColumns = solutionGroups;

// The page's sections, used by the navigation bar and the footer.
export const sections = [
  { id: 'products', label: 'Products' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'clients', label: 'Clients' },
];
