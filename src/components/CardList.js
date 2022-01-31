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
  width: 100vw;
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
        <li key={item}>
          <Card id={item} />
        </li>
      ))}
    </List>
  </motion.div>
);

CardList.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default CardList;
