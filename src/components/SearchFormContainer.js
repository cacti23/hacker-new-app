import React from 'react';
import { useGlobalContext } from '../context/context';
import { FiSearch } from 'react-icons/fi';

const SearchFormContainer = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <div className='search-form-container'>
      <div className='search-form'>
        <FiSearch className='form-icon' />
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            placeholder='Search Stories.....'
            className='form-input'
            value={query}
            onChange={e => handleSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchFormContainer;
