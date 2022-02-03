import styled from 'styled-components';
import { BsArrowUp, BsArrowDown, BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from '../images/stock_card.png';

const Container = styled.div`
  border: solid 1px #f5eedc;
  background-color: #e8e8a6;
  padding: 5px 5px 10px 12px;
  border-radius: 5px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 55% 23%;
  height: 250px;
  color: #133b5c;
  cursor: pointer;

    > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;

      > h2 {
        margin: 0;
        font-size: 1rem;
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
`;
const Card = ({
  id, ticker, changes, price, changesPercentage, companyName,
}) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/details/${id}`)}
    >
      <div data-testid="company">
        <h2>{companyName}</h2>
        <BsArrowRightCircle size="16px" />
      </div>
      <span>{ticker}</span>
      <div data-testid="card-details">
        <span>
          $
          {price}
        </span>
        <span>
          <BsArrowUp color="green" />
          {changes}
        </span>
        <span>
          <BsArrowDown color="red" />
          {changesPercentage}
        </span>
      </div>
    </Container>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  changes: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  changesPercentage: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};
export default Card;
