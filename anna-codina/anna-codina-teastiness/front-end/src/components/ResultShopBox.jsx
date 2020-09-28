import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BodyBox.scss';
import shopStore from '../stores/shopStore';

function ResultShopBox({ _id }) {
  const [actualResult] = useState(shopStore.getResultById(_id));
  return (
    <>
      {actualResult && (
        <div className="body-box" key={actualResult._id + 'body-box'}>
          <>
            <h1>{actualResult.name}</h1>
            {actualResult.img && (
              <img alt={actualResult.name} src={actualResult.img}></img>
            )}
            <div className="body-box__hidden-content">
              <p>
                {actualResult.address.street}, {actualResult.address.city} (
                {actualResult.address.postalCode})
              </p>
              <p>{actualResult.description}</p>
              <Link key={_id} to={`/shop/${_id}`}>
                saber más
              </Link>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default ResultShopBox;
