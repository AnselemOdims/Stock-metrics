import { useSelector } from 'react-redux';
import { useState } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import SearchBar from '../SearchBar';
import CardList from '../CardList';

const Home = () => {
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const [value, setValue] = useState('');

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
