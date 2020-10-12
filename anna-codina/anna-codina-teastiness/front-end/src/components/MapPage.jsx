import React, { useState, useEffect } from 'react';
import shopStore from '../stores/shopStore';
import { getShopList } from '../actions/shopActions';
import Loading from './Loading';
import './MapPage.scss';
import Map from './Map';

function MapPage() {
  const [shopList, setShopList] = useState(shopStore.getShopList());

  useEffect(() => {
    shopStore.addChangeListener(onChange);
    if (shopList.length === 0) {
      getShopList();
    }
    return () => shopStore.removeChangeListener(onChange);
  }, [shopList]);
  function onChange() {
    setShopList(shopStore.getShopList());
  }
  return (
    <>
      {shopList.length === 0 && <Loading />}
      {shopList.length > 0 && (
        <section className=" flex-column flex-row--inlarge">
          <div className="map">
            <Map shopList={shopList} />
          </div>
        </section>
      )}
    </>
  );
}
export default MapPage;
