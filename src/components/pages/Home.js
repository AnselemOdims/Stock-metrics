import Header from '../Header';
import Hero from '../Hero';
import SearchBar from '../SearchBar';

const Home = () => (
  <>
    <Header home />
    <Hero text="Today's Total" />
    <SearchBar />
  </>
);

export default Home;
