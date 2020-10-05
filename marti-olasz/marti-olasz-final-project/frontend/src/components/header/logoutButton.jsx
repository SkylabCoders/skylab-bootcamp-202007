import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <p
      className='list__item'
      onClick={() => {
        logout({ returnTo: window.location.origin });
        sessionStorage.removeItem('token');
      }}
    >
      Log Out
    </p>
  );
};

export default LogoutButton;
