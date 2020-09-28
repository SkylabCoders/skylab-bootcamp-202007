import React from 'react';
import { Link } from 'react-router-dom';
import BodyBoxShop from './BodyBoxShop';

const MapPointer = ({ shop }) => {
  return (
    <Link className="map-pointer" to={`/shop/${shop._id}`}>
      <img
        className="map-pointer__token"
        alt="pointer"
        src="https://image.flaticon.com/icons/svg/3043/3043769.svg"
      ></img>
      <BodyBoxShop shop={shop} />
    </Link>
  );
};
export default MapPointer;
