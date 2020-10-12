import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../LoginButton/LoginButton.scss";
import "./LogOut.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="login-anchor login-out-anchor"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
