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
        const { title, objectID: id, author, created_at, url } = story;
        let date = new Date(created_at);
        console.log(story);
        return (
          <a href={url} target='_blank' rel='noreferrer' key={id}>
            <div className='card'>
              <IoMdClose className='card-remove-icon' />
              <h1 className='card-title'>{`${title.slice(0, 50)}...`}</h1>
              <h2 className='card-author'>{author}</h2>
              <h3 className='card-date'>
                {dateFormat(date, 'ddd, mmm dS, yyyy')}
              </h3>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default NewsContainer;
