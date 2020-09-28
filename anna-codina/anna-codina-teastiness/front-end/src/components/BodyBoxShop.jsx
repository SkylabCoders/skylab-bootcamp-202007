import React, { useState } from 'react';
import shopStore from '../stores/shopStore';
import './BodyBox.scss';
import './BodyBoxShop.scss';

function BodyBoxShop({ shop }) {
  const [actualShop] = useState(shopStore.getShopById(shop._id));
  return (
    <>
      {actualShop && (
        <div
          className="body-box body-box--shop"
          key={actualShop._id + 'body-box'}
        >
          <>
            <h1>{actualShop.name}</h1>
            {actualShop.img && (
              <img alt={actualShop.type} src={actualShop.img}></img>
            )}
            <div className="body-box__hidden-content">
              <p>
                <strong>dirección:</strong> {actualShop.address.street},{' '}
                {actualShop.address.city}
              </p>
              <p>
                <strong>descripción:</strong>
                {actualShop.description}
              </p>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default BodyBoxShop;
