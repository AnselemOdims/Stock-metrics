import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import SearchBar from '../SearchBar';
import CardList from '../CardList';
import { fetchStocks } from '../../redux/stocks/thunks/stock';
import {searchFunc} from '../../utils/helper';

const Home = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const [stocked, setStocked] = useState(stocks);
  const [value, setValue] = useState('')

  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, []);

  useEffect(() => {
    setStocked(stocks)
  }, [stocks]);

  const handleSearch = (e) => {
    setStocked(prevState=> (
      searchFunc(prevState, e.target.value)
    ))
    setValue(e.target.value);
  }

  return (
    <>
      <Header home />
      <Hero text="Today's Total" image />
      <SearchBar handleSearch={handleSearch} data={value} />
      <CardList stocks={stocked} />
    </>
  );
};

export default Home;
