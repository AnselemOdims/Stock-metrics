import { render, screen , within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Card from '../components/Card';
import DetailsCard from '../components/DetailsCard';
import Header from '../components/Header';

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

    expect(await within(container).findByText('AAPL')).toBeTruthy();
    expect(companyContainer).toBeInTheDocument();
    expect(companyContainer.children.length).toBe(2);
    expect(await within(companyContainer).findByText('Apple Inc.')).toBeTruthy();
    expect(cardDetails).toBeInTheDocument();
    expect(cardDetails.children.length).toBe(3);
    expect(await within(cardDetails).findByText('$250')).toBeTruthy();
    expect(await within(cardDetails).findByText(1.2)).toBeTruthy();
    expect(await within(cardDetails).findByText('0.23')).toBeTruthy();
  });
});

describe('Details Card', () => {
  test('should render component correctly', () => {
    const { asFragment } = render(
      <DetailsCard
        first="2020-02-02"
        second="Filling Date: 2020-02-05"
        third="Accepted Date: 2020-02-05"
      >
        <span />
      </DetailsCard>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render children correctly', async () => {
    const { container } = render(
      <DetailsCard
        first="2020-02-02"
        second="Filling Date: 2020-02-05"
        third="Accepted Date: 2020-02-05"
      >
        <span />
      </DetailsCard>,
    );

    const first = container.querySelector('[data-testid="first"]');
    const second = container.querySelector('[data-testid="second"]');
    const third = container.querySelector('[data-testid="third"]');

    expect(await within(container).findByText('2020-02-02')).toBeTruthy();
    expect(await within(container).findByText('Filling Date: 2020-02-05')).toBeTruthy();
    expect(await within(container).findByText('Accepted Date: 2020-02-05')).toBeTruthy();
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(third).toBeInTheDocument();
  });
});

