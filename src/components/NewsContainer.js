import React from 'react';
import { useGlobalContext } from '../context/context';
import { IoMdClose } from 'react-icons/io';
import dateFormat from 'dateformat';

const NewsContainer = () => {
  const { stories, isLoading, removeStories } = useGlobalContext();

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
        const { title, objectID: id, author, created_at, url } = story;
        let date = new Date(created_at);
        return (
          <div className='card' key={id}>
            <IoMdClose
              className='card-remove-icon'
              onClick={() => removeStories(id)}
            />
            <h3 className='card-date'>
              {dateFormat(date, 'ddd, mmm dS, yyyy')}
            </h3>
            <a href={url} target='_blank' rel='noreferrer'>
              <h1 className='card-title'>{`${title}`}</h1>
            </a>

            <h2 className='card-author'>by {author}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default NewsContainer;
