import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { searchFunc } from '../utils/helper';
import Card from './Card';
import Spinner from './Spinner';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 100vw;
  min-height: 50vh;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr)
  }
`;
const containerVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { ease: 'easeOut', duration: 1.2 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeOut' },
  },
};

const CardList = ({ stocks, data }) => {
  const loading = useSelector(({ loadingReducer }) => loadingReducer.loading);

  if (loading) return <Spinner />;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <List>
        {stocks.filter((stock) => searchFunc(stock, data)).map((item) => (
          <li key={item.ticker}>
            <Card
              id={item.ticker}
              ticker={item.ticker}
              changes={item.changes}
              price={item.price}
              changesPercentage={item.changesPercentage}
              companyName={item.companyName}
            />
          </li>
        ))}
      </List>
    </motion.div>
  );
};

CardList.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  })).isRequired,
  data: PropTypes.string.isRequired,
};
export default CardList;
