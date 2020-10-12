import React from "react";
import "./FooterComponent.scss";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function Footer() {

  const { isAuthenticated, loginWithRedirect, logoutWithRedirect, user } = useAuth0();

  return (
    <footer className="footer__main">
      <div className="footer__left">
        <div className="footer-other-pages footer-icon">SANTIAGOROBINET</div>
        {/* <div className="footer-search footer-icon"><NavLink to="/search"><img src="https://image.flaticon.com/icons/svg/751/751463.svg" alt="hamburguer-button"/></NavLink></div> */}
      </div>
      <div className="footer-logo__center">
        <div className="footer-logo"><NavLink to="/">LOGO</NavLink></div>
      </div>
      <div className="footer__right">
        <div className="footer-explore footer-icon"><NavLink to="" ><img src="https://image.flaticon.com/icons/svg/684/684908.svg" alt="explore-button"/></NavLink></div>
        {isAuthenticated && 
          <div className="footer-user footer-icon"><NavLink to="/profile"><img className="footer-profile" src={user.picture} alt="profile-button"/></NavLink></div>
        }
        {!isAuthenticated && 
          <div className="footer-user footer-icon"><NavLink to="" onClick={() => loginWithRedirect()}><img src="https://image.flaticon.com/icons/svg/2170/2170153.svg" alt="login-button"/></NavLink></div>
        }

      </div>
    </footer>
  );
}

export default Footer;
