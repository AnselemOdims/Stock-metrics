import styled from 'styled-components';
import { BsArrowUp, BsArrowDown, BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Img from '../images/stock_card.svg';

const Container = styled.div`
  border: solid 1px #f5eedc;
  background-color: #e8e8a6;
  padding: 5px 5px 10px 12px;
  border-radius: 5px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: 100% 245%;
  background-size: contain;

  > a {
    text-decoration: none;
    color: #133b5c;

    > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;

      > h2 {
        margin: 0;
      }
    }

    > span {
      background: rgba(247, 250, 211, 0.637);
      border-radius: 8px;
      padding: 3px 10px;
      font-size: 10px;
    }

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      font-size: 14px;

      span:first-of-type {
        margin-bottom: 10px;
        font-weight: bold;
      }
    }
  }
`;
const Card = ({ id }) => (
  <motion.div
    whileHover={{ scale: 1.01, borderRadius: 10 }}
    transition={{ duration: 1 }}
  >
    <Container>
      <NavLink to={`/details/${id}`}>
        <div>
          <h2>Apple Inc.</h2>
          <BsArrowRightCircle />
        </div>
        <span>AAPL</span>
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
      </NavLink>
    </Container>
  </motion.div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Card;
