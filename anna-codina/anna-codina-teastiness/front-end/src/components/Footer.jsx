import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer__info flex-row">
        <div className="info__icon"></div>
        <div className="info__hidden-content">
          <h3>by: Anna Codina</h3>
          <p>in SkypabCoders Academy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
