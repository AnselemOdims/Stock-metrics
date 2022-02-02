import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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

      span {
          margin-bottom: 10px;
          font-weight: bold;
        }
    }
  }
`;

const DetailHero = ({
  text, revenue, profit, expenses,
}) => (
  <Section>
    <motion.div>
      <h2>{text.toUpperCase()}</h2>
      <p>INCOME STATEMENT</p>
      <div>
        <span>
          Total Revenue:
          {revenue}
          billion
        </span>
        <span>
          Total Profit:
          {profit}
          billion
        </span>
        <span>
          Total Expenses:
          {expenses}
          billion
        </span>
      </div>
    </motion.div>
  </Section>
);

DetailHero.propTypes = {
  text: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default DetailHero;
