import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return <div className="test__header section__padding" id="home ">
    <div className="test__header-content">
      <h1 className="gradient__text">Let's Build Something amazing with GPT3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className="test__header-content__input">
        <input type="email" placeholder="Enter your email here" />
        <button type="button">Get Started</button>
      </div>
      <div className='test__header-content__people'>
        <img src={people} alt= "people" />
        <p>1600 people requested access</p>
      </div>
    </div>

    <div className='test__header-img'>
      <img src={ai} alt= "ai" />
    </div>
  </div>;
};

export default Header;