import React from 'react';
import { useGlobalContext } from '../context/context';
import { FiSearch } from 'react-icons/fi';
import { GrNext, GrPrevious } from 'react-icons/gr';

const SearchFormContainer = () => {
  const { query, handleSearch, handlePage } = useGlobalContext();

  return (
    <div className='search-form-container'>
      <div className='prev-next-container'>
        <div className='prev-container' onClick={() => handlePage('dec')}>
          <GrPrevious className='prev-btn' />
        </div>
        <div className='next-container' onClick={() => handlePage('inc')}>
          <GrNext className='next-btn' />
        </div>
      </div>
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
