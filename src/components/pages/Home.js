import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import SearchBar from '../SearchBar';
import CardList from '../CardList';
import { fetchStocks } from '../../redux/stocks/thunks/stock';

const Home = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, []);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Header home />
      <Hero text="Today's Total" image stocks={stocks} />
      <SearchBar handleSearch={handleSearch} data={value} />
      <CardList stocks={stocks} data={value} />
    </>
  );
};

export default Home;
