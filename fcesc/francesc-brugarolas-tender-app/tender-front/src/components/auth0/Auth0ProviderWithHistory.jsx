import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import CONNECTION_CONFIG from './../../auth0/CONNECTION_CONFIG';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = CONNECTION_CONFIG.domain;
  const clientId = CONNECTION_CONFIG.clientId;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/profile`}
      audience={CONNECTION_CONFIG.audience}
      scope={CONNECTION_CONFIG.scope}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;