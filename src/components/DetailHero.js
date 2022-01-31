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
      font-size: 1.3rem;
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

const DetailHero = ({ text, details }) => (
  <Section>
    <motion.div>
      <h2>{text.toUpperCase()}</h2>
      <p>INCOME STATEMENT</p>
      <div>
        <span>{`Total Revenue: $${sumRevenue(details)}billion`}</span>
        <span>{`Total Profit: $${sumProfit(details)}billion`}</span>
        <span>{`Total Expenses: $${sumExpenses(details)}billion`}</span>
      </div>
    </motion.div>
  </Section>
);

DetailHero.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DetailHero;
