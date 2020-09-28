import React, { useState, useEffect } from "react";
import "./header.css";
import userStore from "../stores/userStore";
import { loadDetails } from "../actions/detailAction";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/AuthActions";
import authStore from "../stores/authStore";

function Header(props) {
  const detailUserId = "5f4e6fc673d494545cfbadfc";
  const [name, setName] = useState();
  const [mainImage, setMainImage] = useState();
  const [detailUsers, setDetailUsers] = useState(userStore.getDetailUsers());
  const [userEmail, setUserEmail] = useState(authStore.getUserEmail());
  const [variable, setVariable] = useState(false);
  useEffect(() => {
    userStore.addChangeListener(onChange);

    loadDetails();
    if (detailUserId) {
      const detailUser = userStore.getDetailUserByEmail(userEmail);
      if (detailUser) {
        setName(detailUser.name);
        setMainImage(detailUser.mainImage);
      }
    }
    return () => userStore.removeChangeListener(onChange);
  }, [variable]);

  function onChange() {
    setDetailUsers(userStore.getDetailUsers());
  }
  setTimeout(function () {
    if (!variable) {
      setVariable(true);
    } else {
      setVariable(false);
    }
  }, 20000);

  return (
    <section className="main__header">
      <button className="burguer-button">
        <ul className="burguer-menu">
          <li className="menu__header">
            <NavLink to="/main" className="nav__header">
              main
            </NavLink>
          </li>
          <li className="menu__header">
            <NavLink to="/profile" className="nav__header">
              profile
            </NavLink>
          </li>
          <li className="menu__header">
            <NavLink to="/searchFilters" className="nav__header">
              find users
            </NavLink>
          </li>
          <li className="menu__header">
            <NavLink to="/messages" className="nav__header">
              messages
            </NavLink>
          </li>
        </ul>
      </button>
      <div className="container__header">
        <div className="title__header">Put a baby in your life</div>
        <img
          src="https://www.flaticon.es/svg/static/icons/svg/2444/2444603.svg"
          className="logo"
          alt=""
        ></img>
      </div>
      <div className="container__header">
        <div className="user__name">{name}</div>
        <img src={mainImage} alt="" className="user__image"></img>
      </div>
      <button className="log-out" onClick={logout}></button>
    </section>
  );
}
export default Header;
