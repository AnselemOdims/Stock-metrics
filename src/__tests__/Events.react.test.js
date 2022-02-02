import { render, cleanup } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import store from '../redux/store';
import mockData from '../__mocks__/mockData';
import Home from '../components/pages/Home';

global.scrollTo = jest.fn();

const URL = 'https://financialmodelingprep.com/api/v3/actives?limit=100&apikey=1ba707feba7b95aee5b8aeed8ef036a2';
let homeTree;
beforeEach(() => {
  fetchMock.reset();
  fetchMock.get(URL, mockData);
  homeTree = render(<Provider store={store}><Home /></Provider>);
});

afterEach(cleanup);

describe('Home page', () => {
  test('header should be in document', async () => {
    const h3 = await homeTree.findByText('Stock Metrics');
    expect(h3).toBeInTheDocument();
  });

  test('button should be in document', async () => {
    const btn = await homeTree.findByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('svgs should be in document', async () => {
    const icons = await homeTree.findByTestId('icons');
    expect(icons).toBeInTheDocument();
  });

  test('title should be in document', async () => {
    const title = await homeTree.findByText('Today\'s Total');
    expect(title).toBeInTheDocument();
  });
});
