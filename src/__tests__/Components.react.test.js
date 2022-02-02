import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Card from '../components/Card';
import DetailsCard from '../components/DetailsCard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';

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

describe('Header', () => {
  test('should render component correctly', () => {
    const { asFragment } = render(<Header home />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render children correctly', async () => {
    const { container } = render(<Header home />, { wrapper: MemoryRouter });

    const nav = container.querySelector('[data-testid="nav"]');
    const icons = container.querySelector('[data-testid="icons"]');

    expect(nav.children.length).toBe(2);
    expect(icons.children.length).toBe(2);
    expect(await within(nav).findByText('Stock Metrics')).toBeTruthy();
  });
});

describe('Hero', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Hero
        text=""
        stocks={[]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render children correctly', async () => {
    const { container } = render(<Hero text="Today's Total" stocks={[]} />);

    const hero = container.querySelector('[data-testid="hero-details"]');
    const spans = hero.querySelectorAll('span');

    expect(container.children.length).toBe(1);
    expect(await within(container).findByText('Today\'s Total')).toBeTruthy();
    expect(hero.children.length).toBe(3);
    expect(spans.length).toBe(3);
  });
});

describe('SearchBar', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <SearchBar
        handleSearch={() => {}}
        data=""
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render children correctly', async () => {
    const { container } = render(
      <SearchBar
        handleSearch={() => {}}
        data=""
      />,
    );
    expect(container.children.length).toBe(1);
    expect(await within(container).findByRole('button')).toBeTruthy();
  });
});
