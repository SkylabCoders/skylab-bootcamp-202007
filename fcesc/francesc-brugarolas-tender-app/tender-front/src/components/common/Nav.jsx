import React, { useState } from 'react';
import ROUTES from '../../routes/ROUTES';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './../welcome/LogoutButton';
import './nav.sass';

function Nav() {
  const [menu] = useState(ROUTES.ROUTES.filter(route=>route.nav)); 
  const { isAuthenticated } = useAuth0();

  function getMenu(){
    if(isAuthenticated){
      return menu.filter(route=>route.auth).map(route => { 
        return (<li key={route.title}><Link to={route.path}>{route.title.toUpperCase()}</Link></li>)
      })
    } else {
      return menu.filter(route=>!route.auth).map(route => { 
        return (<li key={route.title}><Link to={route.path}>{route.title.toUpperCase()}</Link></li>)
      })
    }
  }

  return (
    <div className="nav">
      <ul>
        {getMenu()}
        {(isAuthenticated) ? <li><LogoutButton /></li> : null }
      </ul>
    </div>
  );
}

export default Nav;
