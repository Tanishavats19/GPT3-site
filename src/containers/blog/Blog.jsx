import React from 'react';
import './blog.css';
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return <div className='test__blog section__padding' id='blog'>
      <div className='test__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='test__blog-container'>
        <div className='test__blog-container_groupA'>
          <Article imgUrl={blog01} date="Feb 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='test__blog-container_groupB'>
        <Article imgUrl={blog02} date="Feb 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Feb 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Feb 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Feb 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
  </div>;
};

export default Blog;