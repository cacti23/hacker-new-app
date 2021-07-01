import React from 'react';
import { useGlobalContext } from '../context/context';

const NewsContainer = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <div className='news-container'>
      <h1>News Container</h1>
    </div>
  );
};

export default NewsContainer;
