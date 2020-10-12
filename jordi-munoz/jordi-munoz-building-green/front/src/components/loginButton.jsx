import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './loginButton.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="loginButton" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
