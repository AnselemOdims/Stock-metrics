import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100vw;
`;

const DetailsList = ({details}) => {
  return ( 
    <List>
      {details.map(detail => (
        <li>
          <div>
            <span>{detail.calendarYear}</span>
            <span>Filling Date: {detail.fillingDate}</span>
            <span>Accepted Date: {detail.acceptedDate}</span>
          </div>
          <div>
            <span>{detail.symbol}</span>
            <span>{detail.eps}</span>
            <span>{detail.ebitdaratio}</span>
          </div>
          <div>
            <span>Revenue: {detail.revenue}</span>
            <span>Profit: {detail.grossProfit}</span>
            <span>Expenses: {detail.costAndExpenses}</span>
          </div>
        </li>
      ))}
    </List>
   );
}
 
export default DetailsList;