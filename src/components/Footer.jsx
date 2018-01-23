import React from 'react';

import './Footer.css';

import urls from '../constants/urls';

const Footer = (props) => (
  <div className="footer">
    <div className="divider" />
    <div className="footer-grid">
        <div>
          <p className="header">CONTACT</p>
          <p>(415)216-8639</p>
          <p><a className="link" href={urls.mail}>kelsiuan124@gmail.com</a></p>  
        </div>
        <div>
          <p>Follow:</p>
          <p><a className="link" href={urls.twitter}>Twitter</a></p>
          <p><a className="link" href={urls.insta}>Instagram</a></p>
        </div>
      </div>
    <div className="copyright">
      <p>COPYRIGHT © 2017 KELSI YUAN | WEBSITE BY <a className="link" href="http://tylerwalker.me">TYLER WALKER</a></p>
    </div>
  </div>
);

export default Footer;