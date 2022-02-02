import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import DetailsCard from './DetailsCard';
import Spinner from './Spinner';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100vw;

  > li  {
    display: grid;
    grid-template-columns: 48% 0.5% 12% 0.5% 1fr;
    gap: 0 10px;
    border: solid 1px #A1B57D;
    border-left: solid 5px #A1B57D;
    padding: 15px 8px;
    font-size: 12px;
    background: #e8e8a6;
    color: #133b5c;

    > span {
        border-right: solid 1px #A1B57D;
        opacity: 0.4;
    }

    > div:nth-of-type(1) {
      > span{
        margin-bottom: 8px;
        font-weight: 500;
        &:nth-of-type(1) {
          font-weight: bold;
          font-size: 1.3rem;
        }
      }
    }
    > div:nth-of-type(2) {
      align-items: center;
      > span{
        margin-bottom: 5px;
        font-weight: 500;
        &:nth-of-type(1) {
          background: rgba(247, 250, 211, 0.637);
          border-radius: 8px;
          padding: 3px 5px;
          font-size: 10px;
        }
      }
    }
    > div:nth-of-type(3) {
      > span{
        margin-bottom: 5px;
        font-weight: 500;
      }
    }
  }
`;

const NoRecord = styled.h3`
  text-align: center;
  color: #133b5c;
  margin-top: 50px;
`;

const containerVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: { ease: 'easeOut', duration: 1.2 },
  },
  exit: {
    x: '100vw',
    transition: { ease: 'easeOut' },
  },
};

const DetailsList = ({ details }) => {
  const loading = useSelector(({ loadingReducer }) => loadingReducer.loading);

  if (loading) return <Spinner />;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {details.length > 0
        ? (
          <List>
            {details.map((detail) => (
              <li key={detail.calendarYear}>
                <DetailsCard
                  first={detail.calendarYear}
                  second={`Filling Date: ${detail.fillingDate}`}
                  third={`Accepted Date: ${detail.acceptedDate}`}
                />
                <span />
                <DetailsCard
                  first={detail.symbol}
                  second={detail.eps.toFixed(2)}
                  third={detail.ebitdaratio.toFixed(2)}
                >
                  <BsArrowUp color="green" />
                  <BsArrowDown color="red" />
                </DetailsCard>
                <span />
                <DetailsCard
                  first={`Revenue: $${detail.revenue / (10 ** 9)}billion`}
                  second={`Profit: $${detail.grossProfit / (10 ** 9)}billion`}
                  third={`Expenses: $${detail.costAndExpenses / (10 ** 9)}billion`}
                />
              </li>
            ))}
          </List>
        )
        : <NoRecord>No records found</NoRecord>}
    </motion.div>
  );
};

DetailsList.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    calendarYear: PropTypes.string.isRequired,
    eps: PropTypes.number.isRequired,
    ebitdaratio: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    grossProfit: PropTypes.number.isRequired,
    costAndExpenses: PropTypes.number.isRequired,
    fillingDate: PropTypes.string.isRequired,
    acceptedDate: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  })).isRequired,
};

export default DetailsList;
