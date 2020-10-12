import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapPointer from './MapPointer';
function Map({ shopList }) {
  return (
    <div className="map-component">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA4g_bvfSpG_M_36CZphOAOTzMZedZDQ7w' }}
        defaultCenter={{
          lat: 41.40332,
          lng: 2.17457
        }}
        defaultZoom={13}
      >
        {shopList.map((shop) => {
          if (!shop.location) {
            return false;
          }
          return (
            <MapPointer
              lat={shop.location.lat}
              lng={shop.location.lng}
              shop={shop}
              key={shop._id}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
export default Map;
