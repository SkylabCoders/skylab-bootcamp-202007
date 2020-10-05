import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import { DOMAIN } from '../../../config/auth0';
import {
  saveUser,
  getUser,
  userEdit
} from '../../../redux/actions/authActions';

import UserHeader from './userHeader/userHeader';
import UserBio from './userBio/userBio';
import Following from './following/following';

import PuffLoader from 'react-spinners/PuffLoader';

import './userProfile.scss';

const UserProfile = ({ mongoUser, dispatch }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${DOMAIN}/api/v2/`,
          scope: 'read:current_user'
        });
        if (accessToken) {
          sessionStorage.setItem('token', JSON.stringify(accessToken));
          dispatch(userEdit({}));
          dispatch(saveUser(user.sub));
          dispatch(getUser(user));
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [dispatch, getAccessTokenSilently, user]);

  return isAuthenticated && mongoUser && user ? (
    <div className='user-profile'>
      <UserHeader />
      <div className='user-profile__bottom'>
        <UserBio
          bio={mongoUser.bio}
          name={mongoUser.user}
          dispatch={dispatch}
        />
        <Following following={mongoUser.following} />
      </div>
    </div>
  ) : (
    <PuffLoader color='#f55110' />
  );
};

function mapStateToProps(state) {
  return {
    mongoUser: state.authReducer.user
  };
}

export default connect(mapStateToProps)(
  withAuthenticationRequired(UserProfile, {
    onRedirecting: () => <PuffLoader color='#f55110' />
  })
);
export { UserProfile };
