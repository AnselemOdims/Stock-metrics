import { fireEvent, render, within } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import store from '../redux/store';
import mockData from '../__mocks__/mockData';