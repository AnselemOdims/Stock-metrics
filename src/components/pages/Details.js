import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';
import DetailHero from '../DetailHero';
import { fetchDetails } from '../../redux/stocks/thunks/stock';
import DetailsList from '../DetailsList';
import { sumRevenue, sumProfit, sumExpenses } from '../../utils/helper';
import Modal from '../Modal';

const Topic = styled.div`
  padding: 12px;
  border: solid 1px #A1B57D;
  background: #A1B57D;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    color: #fff;
  }

  > button {
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    background: #1597E5;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    border-radius: 3px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Details = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const details = useSelector(({ detailsReducer }) => detailsReducer.details);
  const [showModal, setShowModal] = useState(false);
  const param = useParams();

  const detail = stocks.find((stock) => stock.ticker === param.id);

  useEffect(() => {
    dispatch(fetchDetails(param.id));
  }, [param]);

  const revenue = sumRevenue(details);
  const profit = sumProfit(details);
  const expenses = sumExpenses(details);

  const handleModal = () => (showModal ? setShowModal(false) : setShowModal(true));

  return (
    <>
      <Header home={false} />
      <DetailHero
        text={detail.companyName}
        revenue={revenue}
        profit={profit}
        expenses={expenses}
      />
      <Topic>
        <p>YEARLY BREAKDOWN</p>
        <button type="button" onClick={handleModal}>Visualize</button>
      </Topic>
      <DetailsList details={details} />
      {showModal && <Modal details={details} handleModal={handleModal} />}
    </>
  );
};

export default Details;
