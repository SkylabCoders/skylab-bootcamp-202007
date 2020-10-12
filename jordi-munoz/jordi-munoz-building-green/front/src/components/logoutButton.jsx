import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { removeUser } from "../actions/authActions";
import './logoutButton.scss';


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logoutButton" onClick={() => {
      sessionStorage.removeItem('USER_TOKEN');
      logout({ returnTo: window.location.origin });
      removeUser();

    }}>
      Log Out
    </button>
  );
};

export default LogoutButton;