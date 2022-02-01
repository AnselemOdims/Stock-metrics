import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Details from './components/pages/Details';
import Home from './components/pages/Home';

const AppContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 200px;
  }
`;
const App = () => {
  const location = useLocation();
  return (
    <AppContainer>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AnimatePresence>
    </AppContainer>
  );
};

export default App;
