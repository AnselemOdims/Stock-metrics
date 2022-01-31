import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import SearchBar from '../SearchBar';
import CardList from '../CardList';
import { fetchStocks } from '../../redux/stocks/thunks/stock';

const Home = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);

  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, []);

  return (
    <>
      <Header home />
      <Hero text="Today's Total" image />
      <SearchBar />
      <CardList stocks={stocks} />
    </>
  );
};

export default Home;
