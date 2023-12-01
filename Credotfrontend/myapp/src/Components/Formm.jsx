import React from 'react';
import './Style/Formm.css'

const Formm = () => {
  return (
    <div className="form-wrapper" id='contactid'>
      <div className="form-header">
        <h2>LET'S STAY IN TOUCH</h2>
        <p>Get updates on sales specials and more</p>
      </div>
      <form className="form">
        <input type="email" placeholder="Enter your email" className="email-input"/>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Formm;
