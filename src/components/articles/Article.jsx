import React from 'react';
import './article.css';

const article = ({ imgUrl, date, title }) => {
  return <div className='test__blog-container_article'>
      <div className='test__blog-container_article-image'>
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className='test__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
  </div>;
};

export default article;
