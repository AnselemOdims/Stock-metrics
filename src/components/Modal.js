import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {
  AreaChart, CartesianGrid, Tooltip, Area, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';

const Backdrop = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(51, 50, 50, 0.596);

> div {
  width: 90%;
  margin: 100px auto;
  text-align: center;
  background: #fff;
  padding: 10px;
  border-radius: 7px;

   > div {
    display: flex;
    justify-content: flex-end;

    button{
      border: none;
      background: #fff;
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;
      font-family: var(--font-1);
      color: #1597E5;
    }

    button:hover {
      color: #e8e8a6;
    }

   }
   @media (min-width: 768px) {
    width: 60%;
   }
}

`;

const Modal = ({ details, handleModal }) => {
  const data = details.map((detail) => ({
    ...detail,
    revenue: detail.revenue / (10 ** 9),
    grossProfit: detail.grossProfit / (10 ** 9),
    costAndExpenses: detail.costAndExpenses / (10 ** 9),
  }));
  return (ReactDOM.createPortal((
    <Backdrop>
      <div className="modal">
        <div>
          <button type="button" onClick={handleModal}>x</button>
        </div>
        <ResponsiveContainer width="100%" height={360}>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="calendarYear" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#e8e8a6" fillOpacity={1} fill="#e8e8a6" />
            <Area type="monotone" dataKey="costAndExpenses" stroke="red" fillOpacity={0.3} fill="red" />
            <Area type="monotone" dataKey="grossProfit" stroke="#1597E5" fillOpacity={0.8} fill="#1597E5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Backdrop>
  ), document.body));
};

export default Modal;
