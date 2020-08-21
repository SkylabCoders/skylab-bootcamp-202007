import React, { useState } from "react";
import HistorialDePedidos from "./HistorialDePedidos";
import Favourite from "./Favourite";
import ProductosEnVenta from "./ProductosEnVenta";
import authStore from "../stores/authStore";
import userStore from '../stores/userStore'
import {} from "../user.mock";
import "./Profile.css";

function Profile() {
  const [showList, setShowList] = useState(<HistorialDePedidos />);
  const [user] = useState(checkUser(authStore.getUserProfile()));
 function checkUser(user){
  return!!userStore.getUserById(user.uid)? userStore.getUserById(user.uid): userStore.addUser(user);

 }

  return (
    <div className="profile-container">
      <div className="profile-container__image">
        <div className="profile-container__image__file">
          <img
            src={
              user.photo
            }
            alt={user.displayName}
          />
        </div>
        <div className="profile-container__image__text">
          <p> Welcome {user.name}!</p>
        </div>
      </div>
      <div className="profile-container__list">
        <div className="profile-container__list__nav">
          <a
            href="/profile"
            onClick={(event) => {
              event.preventDefault();
              setShowList(<HistorialDePedidos />);
            }}
          >
            <p>Historial de Pedidos</p>
          </a>
          <a
            href="/profile"
            onClick={(event) => {
              event.preventDefault();
              setShowList(<Favourite favouriteList={user.favourites}/>);
            }}
          >
            <p>Lista de favoritos</p>
          </a>
          <a
            href="/profile"
            onClick={(event) => {
              event.preventDefault();
              setShowList(<ProductosEnVenta />);
            }}
          >
            <p>Productos en venta</p>
          </a>
        </div>
        <div className="profile-container__list__render">{showList}</div>
      </div>
    </div>
  );
}

export default Profile;
