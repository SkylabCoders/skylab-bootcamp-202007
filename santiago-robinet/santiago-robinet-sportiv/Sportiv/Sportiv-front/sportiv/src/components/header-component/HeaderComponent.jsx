import React from "react";
import "./HeaderComponent.scss";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SimpleMenu from "../desplegable-menu-component/DesplegableMenu";

function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <nav className="nav__main">
      <div className="nav__left">
        <div className="page__links">
          <div>
            <NavLink className="nav-page" to="/events">
              EVENTS
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-page" to="/groups">
              GROUPS
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-page" to="/lessons">
              LESSONS
            </NavLink>
          </div>
        </div>
        <div className="nav-burger nav-icon">
          <img
            src="https://trello-attachments.s3.amazonaws.com/5f4919754c61df879cbc5ac7/512x512/85b2cd262adb884177e16063285efe99/menu.png"
            alt="hamburguer-button"
          />
        </div>
      </div>
      <div className="nav-logo__center">
        <div className="nav-logo">
          <NavLink to="/" className="logo__link">
            <span className="s-logo">S</span>
            <span className="portiv-logo">portiv</span>
          </NavLink>
        </div>
      </div>
      <div className="nav__right">
        {isAuthenticated && <SimpleMenu />}
        {!isAuthenticated && (
          <div className="nav-user nav-icon">
            <NavLink to="" onClick={() => loginWithRedirect()}>
              <img
                src="https://trello-attachments.s3.amazonaws.com/5f49077bed9e41726a6d5d2f/5f4919754c61df879cbc5ac7/cfa6eb0611aaae8bfe45d3b4dc467cce/usuario.svg"
                alt="login-button"
              />
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
