import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { stockSearch } from '../redux/stocks/actions/stockAction';

const Search = styled.div`
  display: flex;

  > input {
    width: 100%;
    padding: 8px;
    border: solid 2px #A1B57D;

    &:focus {
      outline: none;
    }
  }

  > button {
    justify-self: center;
    width: 10%;
    border: none;
    background: #A1B57D;
  }
`;
const SearchBar = ({handleSearch, data}) => { 
  const dispatch = useDispatch();
  
  return (
  <Search>
    <input type="search" onChange={handleSearch} value={data}/>
    <button type="button"><FaSearch color="#fff" /></button>
  </Search>
)};

export default SearchBar;
