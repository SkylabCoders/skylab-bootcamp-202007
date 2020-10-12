import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getUser } from '../actions/userActions';
import userStore from '../stores/userStore';
import Loading from './Loading';
import './ProfilePage.scss';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [actualUser, setActualUser] = useState();
  useEffect(() => {
    userStore.addChangeListener(onChange);
    if (isAuthenticated && !actualUser) {
      getUser(user.email, user.sub);
    }
    return () => {
      userStore.removeChangeListener(onChange);
    };
  });

  function onChange() {
    setActualUser(userStore.getUser());
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isAuthenticated && !isLoading && (
        <div>
          <h1>¡UPS!¡no deberias estar aquí!</h1>
          <p>Porfavor logueate y vuelve para ver tu información</p>
        </div>
      )}
      {isAuthenticated && actualUser && (
        <div className="profile-info flex-row--inlarge ">
          <div className="proflie-info--left">
            <img
              className="profile-item flex-row"
              src={user.picture}
              alt={user.name}
            />
            <h2 className="profile-item flex-row">{user.name}</h2>
            <p className="profile-item flex row">{user.email}</p>
            <div className="profile-item  flex-column">
              <Link to="/shopform/newShop" className="profile-item__button ">
                Tengo una tienda
              </Link>
              {actualUser.owner.length > 0 && (
                <>
                  <strong className="profile-item">Mis tiendas:</strong>
                  <ul className="profile-item">
                    {actualUser.owner.map((shop) => {
                      return (
                        <li key={shop._id} className="own-shops-item flex-row">
                          <Link
                            className="own-shops-item__name flex-row"
                            to={`/shop/${shop._id}`}
                          >
                            {shop.name}
                          </Link>
                          <Link
                            className="own-shops-item__update"
                            to={`/shopform/${shop._id}`}
                          >
                            {' '}
                            editar
                          </Link>
                          <Link
                            className="own-shops-item__delete"
                            to={`/deleteshop/${shop._id}`}
                          ></Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="proflie-info--right">
            <div className="profile-info__fav-list profile-item">
              <strong>Tes favoritos:</strong>
              <ul>
                {actualUser.favouritesTeas.map((tea) => {
                  return (
                    <li key={tea._id}>
                      <Link to={`/tea/${tea._id}`}>{tea.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="profile-info__fav-list profile-item">
              <strong>tiendas favoritas:</strong>
              <ul>
                {actualUser.favouritesShops.map((shop) => {
                  return (
                    <li key={shop._id}>
                      <Link to={`/shop/${shop._id}`}>{shop.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
