import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Card from './Card';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
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

const CardList = ({ stocks }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <List>
      {stocks.map((item) => (
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

CardList.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  })).isRequired,
};
export default CardList;
