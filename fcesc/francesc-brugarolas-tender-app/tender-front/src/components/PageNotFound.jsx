import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../routes/ROUTES';

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <p>Ooops. The requested page does not exist. Navigate <Link to={ROUTES.home.path}>back</Link> to main page.</p>
    </div>
  );
}

export default PageNotFound;