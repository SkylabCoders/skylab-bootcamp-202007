import React from 'react';
import './Header.scss';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo-blanco.png';


export default function Header() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="header-container">
      <div className="header" >
        <NavLink to="/" className="logo">
          <img className="header-container__logo" src={logo} alt="Logo" />
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><a href="/">HOME</a></li>
          <li><a href="/project-register">Proyectos</a></li>
          <li><a href="/results">Resultados</a></li>
          <li> {isAuthenticated ? (
            <LogoutButton className="header__logButton" />
          ) : (
              <LoginButton className="header__logButton" />
            )
          }</li>
        </ul>
      </div>
    </div>
  );
}