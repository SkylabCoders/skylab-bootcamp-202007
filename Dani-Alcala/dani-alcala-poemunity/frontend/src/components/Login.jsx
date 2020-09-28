import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.scss";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="header__login" onClick={() => loginWithRedirect()}></button>;
};

export default Login;