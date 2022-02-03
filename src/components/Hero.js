import styled from 'styled-components';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import stockImg from '../images/stock.svg';
import { sumPrices, sumPercent, sumChanges } from '../utils/helper';

const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 35vh;
    background-image: url(${(props) => (props.image ? 'hello.png' : stockImg)});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 300px 250px;
    color: #133B5C;
    padding: 10px 20px;

    > h2 {
      font-size: 2rem;
      margin: -20px 0 1px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      span:first-of-type {
          margin-bottom: 10px;
          font-weight: bold;
        }
    }
    @media (min-width: 768px) {
      background-size: 700px 300px
    }
  }
`;

const Hero = ({ text, stocks }) => (
  <Section>
    <motion.div>
      <h2>{text}</h2>
      <div data-testid="hero-details">
        <span>{`$${sumPrices(stocks)}`}</span>
        <span>
          <BsArrowUp color="green" />
          {`+${sumPercent(stocks)}`}
        </span>
        <span>
          <BsArrowDown color="red" />
          {`-${sumChanges(stocks)}`}
        </span>
      </div>
    </motion.div>
  </Section>
);

Hero.propTypes = {
  text: PropTypes.string.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  })).isRequired,
};

export default Hero;
