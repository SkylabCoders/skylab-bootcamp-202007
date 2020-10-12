import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { domain as DOMAIN } from '../auth0/auth0';
import './Profile.scss';
import LogoutButton from './logoutButton';
import { saveUser } from '../actions/authActions';
import authStore from '../stores/authStore';


const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {

    const getUserMetadata = async () => {
      const domain = DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });


        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        if (accessToken) {
          sessionStorage.setItem('USER_TOKEN', JSON.stringify(accessToken));
          saveUser(user);
          console.log(authStore.getUser());
          setUserMetadata(user_metadata);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  });



  return (
    isAuthenticated && (
      <div className="profile-container">
        <div >
          <img src={user.picture} alt={user.name} width="200px" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div><br />
        <div style={{ width: "130px" }} >
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;