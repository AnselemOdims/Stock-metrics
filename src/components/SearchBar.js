import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

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
const SearchBar = ({ handleSearch, data }) => (
  <Search>
    <input type="search" onChange={handleSearch} value={data} />
    <button type="button"><FaSearch color="#fff" /></button>
  </Search>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

export default SearchBar;
