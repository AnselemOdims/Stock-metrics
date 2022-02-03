import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchStocks } from './redux/stocks/thunks/stock';
import Details from './components/pages/Details';
import Home from './components/pages/Home';

const AppContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 250px;
  }
`;
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <AppContainer>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AnimatePresence>
    </AppContainer>
  );
};

export default App;
