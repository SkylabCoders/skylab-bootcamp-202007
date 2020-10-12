import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import "../App.scss";
import Accordion from "./SimpleAccordion";
import CircularProgress from "./CircularIndeterminate";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";


function Header() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <section className="header">
        <div className="header__dropdown">
          <Accordion />
        </div>
        <div className="header__logo">
          <Link to="/" className="header__text-logo-first">
            P
          </Link>
          <Link to="/" className="header__logo-icon"></Link>
          <Link to="/" className="header__text-logo-second">
            emunity
          </Link>
        </div>
      <div className="separator"></div>
        {isAuthenticated ? <Link to="/perfil" className="header__profile"></Link> : <></>}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        
        
      </section>
    </>
  );
}

export default Header;
