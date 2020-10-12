import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getShopList } from '../actions/shopActions';
import { getUser, updateFavouriteShop } from '../actions/userActions';
import shopStore from '../stores/shopStore';
import userStore from '../stores/userStore';
import Loading from './Loading';
import './detail.scss';
import { Link } from 'react-router-dom';

function ShopDetail(props) {
  const [shopList, setShopList] = useState(shopStore.getShopList());
  const [actualShop, setActualShop] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  const [actualUser, setActualUser] = useState();
  const [favShop, setFavShop] = useState();

  useEffect(() => {
    userStore.addChangeListener(onChange);
    shopStore.addChangeListener(onChange);
    const shopId = props.match.params.shopId;
    if (shopList.length === 0 || !shopList) {
      getShopList();
    } else if (shopList.length !== 0 && !actualShop) {
      setActualShop(shopStore.getShopById(shopId));
    }
    if (isAuthenticated && !actualUser) {
      getUser(user.email, user.sub);
    }
    if (actualUser && actualShop) {
      setFavShop(
        actualUser.favouritesShops.some((shop) => shop._id === actualShop._id)
      );
    }
    return () => {
      shopStore.removeChangeListener(onChange);
      userStore.removeChangeListener(onChange);
    };
  }, [shopList, actualShop, user, actualUser, favShop, isAuthenticated]);
  function onChange() {
    setShopList(shopStore.getShopList());
    setActualUser(userStore.getUser());
  }
  return (
    <>
      {!actualShop && <Loading />}
      {actualShop && (
        <section className="detail flex-column flex-row--inlarge">
          <div className="detail__img">
            <h1>{actualShop.name}</h1>
            {actualShop.img && <img alt="shop" src={actualShop.img}></img>}
            {actualUser && favShop && (
              <button
                className="fav-icon"
                onClick={() => {
                  updateFavouriteShop(actualUser._id, actualShop._id);
                }}
              ></button>
            )}
            {actualUser && !favShop && (
              <button
                className="fav-icon grey"
                onClick={() => {
                  updateFavouriteShop(actualUser._id, actualShop._id);
                }}
              ></button>
            )}
            {actualUser && actualUser.type === 'admin' && (
              <div className="flex-column admin-buttons">
                <Link
                  className="admin-buttons__item"
                  to={`/shopform/${actualShop._id}`}
                >
                  <p className="admin-buttons__hidden-content">editar</p>
                  <span className="edit-icon"></span>
                </Link>
                <Link
                  className="admin-buttons__item"
                  to={`/deleteshop/${actualShop._id}`}
                >
                  <p className="admin-buttons__hidden-content">borrar</p>
                  <span className="delete-icon"></span>
                </Link>
              </div>
            )}
          </div>
          <ul
            className="detail__text flex-column"
            key={actualShop._id + actualShop.name + 'scheduleUl'}
          >
            <li key={actualShop._id + actualShop.name + 'schedule'}>
              <strong>Horario:</strong> {actualShop.schedule}
            </li>
            {actualShop.address && (
              <li key={actualShop._id + actualShop.address}>
                <strong>Dirección:</strong> {actualShop.address.street},{' '}
                {actualShop.address.city}
              </li>
            )}
            <li key={actualShop._id + 'description'}>
              <strong>descripción:</strong> {actualShop.description}
            </li>
            <li key={actualShop._id + actualShop.products}>
              <strong>Carta:</strong>
              <ul>
                {actualShop.products.map((product) => {
                  return (
                    <li className="sublist" key={product.id}>
                      <Link to={`/tea/${product._id}`}>{product.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}
export default ShopDetail;
