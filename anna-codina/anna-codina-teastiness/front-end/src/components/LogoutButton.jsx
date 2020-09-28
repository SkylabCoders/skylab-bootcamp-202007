import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { logoutUser } from '../actions/userActions';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="auth-button"
      onClick={() => {
        logoutUser();
        logout({ returnTo: window.location.origin });
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
