import React, { useEffect, useState } from 'react';
import { loadStores } from '../actions/storeActions';
import productStore from '../stores/productStore';
import HeaderLogin from './HeaderLogin';
import FooterMobile from './FooterMobile';
import Map from './Map';

function InfoStore(props) {
    const storeId = props.match.params.storeId;
    const [ store, setStore] = useState(productStore.getProductStoreById());

    useEffect(() => {
        productStore.addChangeListener(onChange);

        if (!store) {
            loadStores();

        } else {
            setStore(productStore.getProductStoreById(storeId));
        }

        return () => productStore.removeChangeListener(onChange);
    });

    function onChange() {
        setStore(productStore.getProductStoreById(storeId));
    }

    return (
        <>
            <HeaderLogin/>
            <Map
            storeName={store?.storeName}
            web={store?.web}
            description={store?.descriptionStore}
            address={store?.address}
            postalCode={store?.postalCode}
            city={store?.city}
            phone={store?.phone}
            email={store?.emailCompany}
            workingHours={store?.workingHours}
            />
            <FooterMobile/>
        </>
    );
}

export default InfoStore;
