import React, { useState, useEffect } from "react";

import {
  login,
  googleLogin,
  anonymousLogin,
  createUser,
} from "../actions/AuthActions";
import "./auth.css";
import authStore from "../stores/authStore";
import Main from "./MainPage";
export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(authStore.isLogged());

  const [user, setUser] = useState(authStore.getUserProfile());
  useEffect(() => {
    authStore.addChangeListener(onAuthChange);
    return () => authStore.removeChangeListener(onAuthChange);
  }, [isLogged, user]);

  function onAuthChange() {
    setIsLogged(authStore.isLogged());
    setUser(authStore.getUserProfile());
  }
  return (
    <div className="main__login">
      {!user && (
        <div className="login-container">
          <img
            className="logo__login"
            src="https://www.flaticon.es/svg/static/icons/svg/2444/2444603.svg"
          ></img>

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="email__box"
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="A valid password must have more than 7 characters, an uppercase letter, a lowercase letter and a number"
            className="email__box"
            onChange={(ev) => setPassword(ev.target.value)}
            required
          ></input>

          <div className="section__bottom">
            <div className="section">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  login(email, password);
                }}
                className="button__login login"
              ></button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  createUser(email, password);
                }}
                className="button__login register"
              ></button>
            </div>
            <div className="section">
              <button
                onClick={googleLogin}
                className="button__login google"
              ></button>
              <button
                onClick={anonymousLogin}
                className="button__login anon"
              ></button>
            </div>
          </div>
        </div>
      )}
      {user && <Main />}
    </div>
  );
};
