import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

function footer() {
  return (
    <footer className='footer'>
      <Link to='/cookies' className='footer__cookies'>
        Cookies
      </Link>
      |
      <Link to='/legal' className='footer__legal'>
        Legal
      </Link>
      |
      <Link to='/privacy' className='footer__privacy'>
        Privacy
      </Link>
    </footer>
  );
}

export default footer;
