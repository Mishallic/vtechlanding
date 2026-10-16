# V-tech landing page

The one-page site of V-tech: its point-of-sale products, its cloud, business-intelligence and
security solutions, and the businesses it serves.

**Live:** https://vtechlanding.vercel.app

![The page on a desktop](docs/screenshot-desktop.png)

## What it does

- A slider introduces the two markets the products serve, restaurants and retail. It advances
  every 5 seconds, pauses while hovered or focused, and stays still for visitors who ask their
  system for reduced motion.
- **Best Choice Products** shows the six products, **Our Solutions** the nine solutions, and
  **Our Clients** five client logos.
- The navigation bar links to those three sections and stays at the top while scrolling.
- The search box filters the page as you type. Every word has to appear in a product's name, a
  solution's name or group, or a client's name; case and accents are ignored. While searching,
  the slider steps aside, sections without matches are left out, and the result count is
  announced to screen readers.

<img src="docs/screenshot-mobile.png" alt="The page at phone width" width="300">

## How it's built

Vite, React 18 and MUI v5, with no router: the site is a single page.

```
src/
  content.js        everything the page shows: slides, products, solutions, clients
  search.js         the search rule (every word must match)
  theme.js          the brand green and global styles
  App.jsx           page layout and search state
  components/       Header, NavBar, HeroSlider, Products, Solutions, Clients, Footer,
                    ImageTile (photo tiles), Reveal (fade-in on scroll), SearchBox
public/images/      logos, product photos, slider photos (WebP)
```

The footer and the Solutions section read the same list from `content.js`, so they can't drift
apart. Text on the green bar is dark green rather than white: white on #60D045 is 1.98:1, far
below the 4.5:1 WCAG asks for, while dark green is 7.1:1.

## Tests

```
npm test
```

Vitest with Testing Library, 11 tests: every section and product renders; no placeholder text is
left; the Solutions section lists exactly the footer's solutions; the navigation links reach real
sections and no dead controls remain; search filters and clears; the slider's arrows move and
wrap; text on the green bar meets 4.5:1; and every image the page uses exists with the exact
letter case, since the production build runs on case-sensitive Linux.

## What was deliberately left out

The 2019 version had controls with nothing behind them. They were removed rather than left to
mislead visitors, and can come back once there's something for them to do:

- **Sign in, sign out and the profile menu:** the site has no accounts.
- **About Us, Contact Us, Partners, Downloads, Media Center, Success Story:** there was no content
  for these pages.
- **The country picker (Jordan, KSA, Canada):** it didn't change anything on the page.

## Limits

- The products, solutions and clients are the ones from the 2019 site. The solutions have names
  but no descriptions yet.
- The logo shown for the client "Abu Tafesh" reads "Al Rifai"; one of the two is out of date.

## Run locally

Needs Node.js 18 or newer.

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Deploy

The site is a static build on Vercel. Vercel detects Vite on its own, so no configuration file is
needed:

```
npx vercel deploy --prod
```
