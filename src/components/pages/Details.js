import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';
import DetailHero from '../DetailHero';
import { fetchDetails } from '../../redux/stocks/thunks/stock';
import DetailsList from '../DetailsList';
import { sumRevenue, sumProfit, sumExpenses } from '../../utils/helper';

const Topic = styled.div`
  > p {
    padding: 12px;
    border: solid 1px #A1B57D;
    background: #A1B57D;
    color: #fff;
  }
`;

const Details = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const details = useSelector(({ detailsReducer }) => detailsReducer.details);
  const param = useParams();

  const detail = stocks.find((stock) => stock.ticker === param.id);

  useEffect(() => {
    dispatch(fetchDetails(param.id));
  }, [param]);

  const revenue = sumRevenue(details);
  const profit = sumProfit(details);
  const expenses = sumExpenses(details);

  return (
    <>
      <Header home={false} />
      <DetailHero
        text={detail.companyName}
        revenue={revenue}
        profit={profit}
        expenses={expenses}
      />
      <Topic><p>YEARLY BREAKDOWN</p></Topic>
      <DetailsList details={details} />
    </>
  );
};

export default Details;
