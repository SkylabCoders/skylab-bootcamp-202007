import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import teaStore from '../stores/teaStore';
import userStore from '../stores/userStore';
import { useAuth0 } from '@auth0/auth0-react';
import { getTeasVarieties } from '../actions/teaActions';
import { getUser, updateFavouriteTea } from '../actions/userActions';
import { updateShop } from '../actions/shopActions';
import Loading from './Loading';
import './detail.scss';
import './TeaDetail.scss';

function TeaDetail(props) {
  const [teaList, setTeaList] = useState(teaStore.getVarietiesTeas());
  const [actualTea, setActualTea] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  const [actualUser, setActualUser] = useState(userStore.getUser());
  const [favTea, setFavTea] = useState();

  useEffect(() => {
    userStore.addChangeListener(onChange);
    teaStore.addChangeListener(onChange);
    const teaId = props.match.params.teaId;
    if (teaList.length === 0) {
      getTeasVarieties();
    } else {
      setActualTea(teaStore.getTeaVarietieId(teaId));
    }
    if (isAuthenticated && !actualUser) {
      getUser(user.email, user.sub);
    }
    if (actualUser && actualTea) {
      setFavTea(
        actualUser.favouritesTeas.some(
          (tea) => tea._id + '' === actualTea._id + ''
        )
      );
    }
    return () => {
      teaStore.removeChangeListener(onChange);
      userStore.removeChangeListener(onChange);
    };
  }, [
    props.match.params.teaId,
    teaList.length,
    isAuthenticated,
    actualUser,
    actualTea,
    user?.email,
    user?.sub
  ]);

  function onChange() {
    setTeaList(teaStore.getVarietiesTeas());
    setActualUser(userStore.getUser());
  }
  async function sendProduct(event, actualShopId) {
    event.preventDefault(event);
    const tea = { newProductId: actualTea._id };
    await updateShop(actualShopId, tea);
    await getUser(user.email, user.sub);
    setActualUser(userStore.getUser());
    // history.push(`/shop/${actualShopId}`);
  }
  return (
    <>
      {!actualTea && <Loading />}
      {actualTea && (
        <section className="detail flex-column flex-row--inlarge">
          <div className="detail__img">
            <h1>{actualTea.name}</h1>
            {actualTea.img && <img alt="tea" src={actualTea.img}></img>}
            {actualUser && favTea && (
              <button
                className="fav-icon"
                onClick={() => {
                  updateFavouriteTea(actualUser._id, actualTea._id);
                }}
              ></button>
            )}
            {actualUser && !favTea && (
              <button
                className="fav-icon grey"
                onClick={() => {
                  updateFavouriteTea(actualUser._id, actualTea._id);
                }}
              ></button>
            )}
            {actualUser && actualUser.type === 'admin' && (
              <div className="flex-column admin-buttons">
                <Link
                  className="admin-buttons__item"
                  to={`/teaform/${actualTea._id}`}
                >
                  <p className="admin-buttons__hidden-content">editar</p>
                  <span className="edit-icon"></span>
                </Link>
                <Link
                  className="admin-buttons__item"
                  to={`/deletetea/${actualTea._id}`}
                >
                  <p className="admin-buttons__hidden-content">borrar</p>
                  <span className="delete-icon"></span>
                </Link>
              </div>
            )}
          </div>
          <ul className="detail__text flex-column">
            <li key={actualTea._id + actualTea.type}>
              <strong>tipo</strong> {actualTea.type}
            </li>
            <li key={actualTea._id + actualTea.time}>
              <strong>tiempo</strong> {actualTea.time}
            </li>
            <li key={actualTea._id + 'description'}>
              <strong>descripción</strong> {actualTea.description}
            </li>
            <li key={actualTea._id + actualTea.benefits}>
              <strong>beneficios</strong>
              <ul>
                {actualTea.benefits.map((benefit) => {
                  return (
                    <li className="sublist" key={actualTea._id + benefit}>
                      {benefit}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          {actualUser && actualUser.owner.length !== 0 && (
            <div className="add-product">
              <div className="add-product__icon" onClick={() => {}}>
                {' '}
                <p>añadir a mis productos</p>
              </div>
              <ul className="add-product__shops">
                {actualUser.owner.map((shop) => {
                  let tag = null;

                  const result = shop.products.some((product) => {
                    return product + '' === actualTea._id + '';
                  });
                  if (result) {
                    tag = (
                      <li className="shops__item flex-row" key={shop._id}>
                        {shop.name}
                        <button
                          className="item__remove-icon"
                          onClick={(event) => {
                            sendProduct(event, shop._id);
                          }}
                        ></button>
                      </li>
                    );
                  } else {
                    tag = (
                      <li className="shops__item flex-row" key={shop._id}>
                        {shop.name}
                        <button
                          className="item__add-icon"
                          onClick={(event) => {
                            sendProduct(event, shop._id);
                          }}
                        ></button>
                      </li>
                    );
                  }
                  return tag;
                })}
              </ul>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default TeaDetail;
