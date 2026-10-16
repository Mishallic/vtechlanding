import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { products } from './content';

describe('landing page', () => {
  it('shows every section and product', () => {
    render(<App />);
    for (const heading of ['Best Choice Products', 'Our Solutions', 'Our Clients']) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument();
    }
    for (const product of products) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    }
  });

  it('moves between slides with the arrows', async () => {
    const user = userEvent.setup();
    render(<App />);
    // The slide not on screen is hidden from assistive tech, which also leaves it without an
    // accessible name, so find the slides by role and check their labels.
    const [restaurants, retail] = screen.getAllByRole('group', { hidden: true })
      .filter((el) => el.getAttribute('aria-roledescription') === 'slide');
    expect(restaurants).toHaveAttribute('aria-label', '1 of 2: Restaurants');
    expect(retail).toHaveAttribute('aria-label', '2 of 2: Retail');
    expect(restaurants).toHaveAttribute('aria-hidden', 'false');

    await user.click(screen.getByRole('button', { name: 'Next slide' }));
    expect(retail).toHaveAttribute('aria-hidden', 'false');
    expect(restaurants).toHaveAttribute('aria-hidden', 'true');

    await user.click(screen.getByRole('button', { name: 'Next slide' })); // wraps around
    expect(restaurants).toHaveAttribute('aria-hidden', 'false');
  });
});
