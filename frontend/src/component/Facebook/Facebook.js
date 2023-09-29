import React from 'react';
import './Facebook.css';

const Facebook = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=100031704746916" target="_blank" rel="noopener noreferrer">
        <img className="icon facebook-icon" src="/images/facebook.png" alt="Facebook" />
      </a>
      <div className="email">
        <img className="icon" src="/images/gmail.png" alt="Email" />
        <span>espacebio.commercial@gmail.com</span>
      </div>
    </div>
  );
};

export default Facebook;

