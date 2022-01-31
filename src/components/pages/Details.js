import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header';
import DetailHero from '../DetailHero';
import { fetchDetails } from '../../redux/stocks/thunks/stock';
import CardList from '../CardList';

const Details = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const details = useSelector(({ detailsReducer }) => detailsReducer.details);
  const param = useParams();

  const detail = stocks.find((stock) => stock.ticker == param.id);

  useEffect(() => {
    dispatch(fetchDetails(param.id));
  }, []);

  return (
    <>
      <Header home={false} />
      <DetailHero text={detail.companyName} />
      <CardList stocks={details} />
    </>
  );
};

export default Details;
