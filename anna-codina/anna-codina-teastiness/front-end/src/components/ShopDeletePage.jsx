import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { deleteShop, getShopList } from '../actions/shopActions';
import { getUser } from '../actions/userActions';
import userStore from '../stores/userStore';
import Loading from './Loading';
import { useHistory } from 'react-router-dom';
import './ShopDeletePage.scss';
import shopStore from '../stores/shopStore';
function ShopDeletePage(props) {
  const { user, isAuthenticated } = useAuth0();
  const [shopList, setShopList] = useState(shopStore.getShopList());
  const [actualOwnShop, setActualOwnShop] = useState();
  const [mongoUser, setMongoUser] = useState(userStore.getUser());
  const history = useHistory();

  useEffect(() => {
    userStore.addChangeListener(onChange);
    shopStore.addChangeListener(onChange);
    const shopId = props.match.params.shopId;
    if (isAuthenticated && !mongoUser) {
      getUser(user.email, user.sub);
    }
    if (mongoUser && mongoUser.type === 'user') {
      setActualOwnShop(userStore.getOwnShopById(shopId));
    }
    if (mongoUser && mongoUser.type === 'admin') {
      if (shopList.length === 0) {
        getShopList();
      } else {
        setActualOwnShop(shopStore.getShopById(shopId));
      }
    }
    return () => {
      userStore.removeChangeListener(onChange);
      shopStore.removeChangeListener(onChange);
    };
  }, [
    props.match.params.shopId,
    isAuthenticated,
    mongoUser,
    user?.email,
    user?.sub,
    shopList.length
  ]);

  function onChange() {
    setMongoUser(userStore.getUser());
    setShopList(shopStore.getShopList);
  }

  async function sendDeletePage(event) {
    event.preventDefault();
    await deleteShop(actualOwnShop._id);
    history.push('/profile');
  }
  return (
    <>
      {!actualOwnShop && <Loading />}
      {actualOwnShop && (
        <div className="flex-column shop-info">
          <h1>{actualOwnShop.name}</h1>
          <p>{actualOwnShop.description}</p>
          <p>
            <strong>horario:</strong> {actualOwnShop.schedule}
          </p>
          <p>
            <strong>dirección:</strong> {actualOwnShop.address.street},{' '}
            {actualOwnShop.address.city}, ({actualOwnShop.address.postalCode})
          </p>
          <p>
            <strong>Cif:</strong> {actualOwnShop.cif}
          </p>
          <button
            className="delete-button"
            to="/profile"
            onClick={(event) => {
              sendDeletePage(event);
            }}
          >
            {' '}
            Borrar{' '}
          </button>
        </div>
      )}
    </>
  );
}
export default ShopDeletePage;
