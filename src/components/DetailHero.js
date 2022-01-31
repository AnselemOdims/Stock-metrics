import styled from 'styled-components';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { sumRevenue, sumProfit, sumExpenses } from '../utils/helper';

const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 30vh;
    color: #133B5C;
    padding: 10px 20px;

    > h2 {
      font-size: 1.2rem;
      margin: -7px 0 20px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
          margin-bottom: 10px;
          font-weight: bold;
        }
    }
  }
`;

const DetailHero = ({ text, details }) => {
 
  return (
  <Section>
    <motion.div>
      <h2>{text}</h2>
      <div>
        <span>{`Total Revenue: $${sumRevenue(details)}billion`}</span>
        <span>{`Total Profit: $${sumProfit(details)}billion`}</span>
        <span>{`Total Expenses: $${sumExpenses(details)}billion`}</span>
        {/* <span>
          <BsArrowUp color="green" />
          +2.03%
        </span>
        <span>
          <BsArrowDown color="red" />
          -0.50%
        </span> */}
      </div>
    </motion.div>
  </Section>
)};

DetailHero.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DetailHero;
