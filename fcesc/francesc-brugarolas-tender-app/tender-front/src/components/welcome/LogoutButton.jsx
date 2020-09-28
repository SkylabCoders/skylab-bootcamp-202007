import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { removeCurrentUser } from './../../redux/actions/userActions';
import { store } from '../../index';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='btn btn-default btn-centered' onClick={() => {
        sessionStorage.removeItem('USER_TOKEN');
        store.dispatch(removeCurrentUser())
        logout({ returnTo: window.location.origin })
      }}>
      Log Out
    </button>
  );
};

export default LogoutButton;