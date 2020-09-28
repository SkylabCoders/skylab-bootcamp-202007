import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.scss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="login-anchor pointer"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
