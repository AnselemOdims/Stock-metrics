import Header from '../Header';
import Hero from '../Hero';
import SearchBar from '../SearchBar';
import CardList from '../CardList';

const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Header home />
      <Hero text="Today's Total" />
      <SearchBar />
      <CardList stocks={arr} />
    </>
  );
};

export default Home;
