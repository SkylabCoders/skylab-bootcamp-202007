import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginIcon from '@material-ui/icons/ExitToApp';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <LoginIcon onClick={() => loginWithRedirect()} className='login' />;
};

export default LoginButton;
