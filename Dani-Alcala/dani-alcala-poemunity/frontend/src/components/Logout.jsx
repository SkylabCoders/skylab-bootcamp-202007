import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.scss";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button className="header__logout" onClick={() => logout({ returnTo: window.location.origin })}>
    </button>
  );
};

export default Logout;