import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../routes/ROUTES';

function PageNotAuthorised() {
  return (
    <div className="PageNotAuthorised">
      <p>Ooops. You do not have permission to see the contents of this page. Please, login or navigate <Link to={ROUTES.home.path}>back</Link> to main page.</p>
    </div>
  );
}

export default PageNotAuthorised;