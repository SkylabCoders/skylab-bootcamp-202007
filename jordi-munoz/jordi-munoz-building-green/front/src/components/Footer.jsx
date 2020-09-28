import React from 'react';
import './Footer.scss';


function Footer() {
  return (
    <div className="container">
      <p>made by Jordi Muñoz for:  </p>
      <a href="https://.espaienergy.com/">
        <img title="Espai Energy SL" alt="Espai Energy Logo" src={require('../img/logo_ee_H.png')} />
      </a>
    </div>
  )
}

export default Footer;