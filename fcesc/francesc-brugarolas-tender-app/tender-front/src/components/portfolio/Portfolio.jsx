import React from 'react';
import PortfolioInfo from './PortfolioInfo';
import PortfolioFlow from './PortfolioFlow';
import PortfolioProjectList from './PortfolioProjectList';
import './portfolio.sass';
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Portfolio() {
  return (
      <div className='portfolio__container'>
        <div className='portfolio__side'>
          <PortfolioFlow />
        </div>
        <div className='portfolio__main'>
          <PortfolioInfo />
          <PortfolioProjectList />
        </div>
      </div>
  );
}

export default withAuthenticationRequired(Portfolio, {
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});