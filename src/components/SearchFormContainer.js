import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchFormContainer = () => {
  return (
    <div className='search-form-container'>
      <div className='search-form'>
        <FiSearch className='form-icon' />
        <form>
          <input
            type='text'
            placeholder='Search Stories.....'
            className='form-input'
          />
        </form>
      </div>
    </div>
  );
};

export default SearchFormContainer;
