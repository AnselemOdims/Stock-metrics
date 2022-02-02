import { render, screen , within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Card from '../components/Card';

describe('Card', () => {
  test('should render component', () => {
    const { asFragment } = render(
      <Card
        id="AAPL"
        ticker="AAPL"
        changes={1.2}
        price="250"
        changesPercentage="0.23"
        companyName="Apple Inc."
      />,
      { wrapper: MemoryRouter },
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render children correctly', async () => {
    const { container } = render(
      <Card
        id="AAPL"
        ticker="AAPL"
        changes={1.2}
        price="250"
        changesPercentage="0.23"
        companyName="Apple Inc."
      />,
      { wrapper: MemoryRouter },
    );

    const companyContainer = container.querySelector('[data-testid="company"]');
    const cardDetails = container.querySelector('[data-testid="card-details"]');

    expect(companyContainer).toBeInTheDocument();
    expect(companyContainer.children.length).toBe(2);
    expect(await within(companyContainer).findByText('Apple Inc.')).toBeTruthy();
    expect(await within(container).findByText('AAPL')).toBeTruthy();
    expect(cardDetails).toBeInTheDocument();
    expect(cardDetails.children.length).toBe(3);
    expect(await within(cardDetails).findByText('$250')).toBeTruthy();
    expect(await within(cardDetails).findByText(1.2)).toBeTruthy();
    expect(await within(cardDetails).findByText('0.23')).toBeTruthy();
  });
});

describe('', () => {
  
})