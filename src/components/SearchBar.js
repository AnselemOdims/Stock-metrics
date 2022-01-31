import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Search = styled.div`
  display: flex;

  > input {
    width: 100%;
    padding: 8px;
    border: solid 2px #E8E8A6;

    &:focus {
      outline: none;
    }
  }

  > button {
    justify-self: center;
    width: 10%;
    border: none;
    background: #E8E8A6;
  }
`;
const SearchBar = () => (
  <Search>
    <input type="search" />
    <button type="button"><FaSearch color="#fff" /></button>
  </Search>
);

export default SearchBar;
