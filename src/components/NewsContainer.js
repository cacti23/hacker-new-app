import React from 'react';
import { useGlobalContext } from '../context/context';
import { IoMdClose } from 'react-icons/io';
import dateFormat from 'dateformat';

const NewsContainer = () => {
  const { stories, isLoading } = useGlobalContext();

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
      {stories.map(story => {
        const { title, objectID: id, author, created_at } = story;
        let date = new Date(created_at);
        return (
          <div className='news-card' key={id}>
            <IoMdClose className='card-remove-icon' />
            <h1 className='card-title'>{title}</h1>
            <h2 className='card-author'>{author}</h2>
            <h3 className='card-date'>
              {dateFormat(date, 'ddd, mmm dS, yyyy')}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default NewsContainer;
