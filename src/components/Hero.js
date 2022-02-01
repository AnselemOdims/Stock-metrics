import styled from 'styled-components';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import stockImg from '../images/stock.svg';

const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 30vh;
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
  }
`;

const Hero = ({ text }) => (
  <Section>
    <motion.div>
      <h2>{text}</h2>
      <div>
        <span>$20,000</span>
        <span>
          <BsArrowUp color="green" />
          +2.03%
        </span>
        <span>
          <BsArrowDown color="red" />
          -0.50%
        </span>
      </div>
    </motion.div>
  </Section>
);

Hero.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hero;
