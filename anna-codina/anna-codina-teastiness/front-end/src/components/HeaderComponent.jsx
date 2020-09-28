import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getUser } from '../actions/userActions';
import autStore from '../stores/userStore';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './HeaderComponent.scss';

function HeaderComponent() {
  const { isAuthenticated, user } = useAuth0();
  const [actualUser, setActualUser] = useState();
  useEffect(() => {
    autStore.addChangeListener(onChange);
    if (isAuthenticated && !actualUser) {
      getUser(user.email, user.sub);
    }
    return () => autStore.removeChangeListener(onChange);
  }, [isAuthenticated, actualUser, user, user?.email, user?.sub]);

  function onChange() {
    setActualUser(autStore.getUser());
  }
  return (
    <header className="flex-row">
      <div className="burger-button display-small">
        <div className="burger-menu"></div>
        <ul className="hidden-content flex-column">
          <li>
            <Link to="/search">Busqueda</Link>
          </li>
          <li>
            <Link to="/map">Mapa</Link>
          </li>
        </ul>
      </div>
      <div className="display-large nav-options">
        <ul className="flex-row">
          <li>
            <Link to="/search">Busqueda</Link>
          </li>
          <li>
            <Link to="/map">Mapa</Link>
          </li>
        </ul>
      </div>
      <Link to="/">
        <img
          alt="logo"
          src="https://trello-attachments.s3.amazonaws.com/5f49070899527052cd1acbff/308x178/a4e26f5d42c70cd5f26caef4182cfe91/logo.png"
        ></img>
      </Link>
      <div className="display-small burger-button">
        <div className="login "></div>
        <ul className="hidden-content login-menu flex-column">
          {!isAuthenticated && (
            <li>
              <LoginButton />
            </li>
          )}
          {isAuthenticated && (
            <>
              <li>
                <LogoutButton className="auth-button" />
              </li>
              <li>
                <Link to="/profile">profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>{' '}
      <div className="display-large nav-options">
        <ul className="flex-row">
          {!isAuthenticated && (
            <li>
              <LoginButton className="auth-button" />
            </li>
          )}
          {isAuthenticated && (
            <>
              <li>
                <LogoutButton className="auth-button" />
              </li>
              <li>
                <Link to="/profile">profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
