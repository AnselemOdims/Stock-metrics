import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Details from './components/pages/Details';
import Home from './components/pages/Home';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
