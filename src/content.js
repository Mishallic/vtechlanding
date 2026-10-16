// Everything the page shows, in one place. Images live in public/images.

// Each slide names the products below that serve that market.
export const slides = [
  { title: 'Restaurants', text: 'Resto Prime POS terminals and LK-B31 label printers for restaurants.', image: '/images/web3.jpg' },
  { title: 'Retail', text: 'Shop Prime POS, Wind 015T scales and DataLogic barcode scanners for shops.', image: '/images/web2.jpg' },
];

export const products = [
  { name: 'Resto Prime POS', image: '/images/vtek/table1-ds.png' },
  { name: 'Label Printer LK-B31', image: '/images/vtek/table2-ds.png' },
  { name: 'Wind 015T Scale', image: '/images/vtek/table3-ds.jpg' },
  { name: 'delpos Stylish POS', image: '/images/vtek/table4-ds.png' },
  { name: 'Shop Prime POS', image: '/images/vtek/table5.jpg' },
  { name: 'DataLogic QD2131 Imager Scanner', image: '/images/vtek/table6-ds.jpg' },
];

// The solutions as the footer groups them. The Solutions section shows the same list.
export const solutionGroups = [
  { title: 'Our Solutions', items: ['Business Intelligence', 'Security'] },
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

export const footerColumns = [{ title: 'Company', items: ['About Us', 'Service'] }, ...solutionGroups];

export const menuItems = ['Products', 'Solutions', 'Clients', 'Partners', 'Downloads', 'Media Center', 'Success Story'];

export const countries = ['Jordan', 'KSA', 'Canada'];
