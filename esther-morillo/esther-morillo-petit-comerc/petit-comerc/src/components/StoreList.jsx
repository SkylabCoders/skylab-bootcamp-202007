import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { loadStores } from '../actions/storeActions';
import productStore from '../stores/productStore';
import StoreListItem from './StoreListItem';
import HeaderMain from './HeaderMain';
import FooterMobile from './FooterMobile';
import loading from '../assets/images/loading.gif'

function StoreList() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [stores, setStores] = useState(productStore.getStores());
    const [click, setClick] = useState('Todos');
    const [filterStore, setFilterStore] = useState([]);

    useEffect(() => {
        productStore.addChangeListener(onChange);

        if (stores.length === 0) loadStores();

        return () => productStore.removeChangeListener(onChange);
    }, [stores.length]);

    function onChange() {
        setStores(productStore.getStores());
    }

    useEffect(() => {
        productStore.addChangeListener(onChangeFilter);
       
        setFilterStore(productStore.getFilter(click));       

        return () => productStore.removeChangeListener(onChangeFilter);
    }, [click]);

    function onChangeFilter() {
        setFilterStore(productStore.getFilter(click));
    }

    if (isLoading) {
        return <img className="loading" src={loading} alt="loading..." />
    }

    return (
        <>
            <HeaderMain click={(filter) => setClick(filter)}/>
            {filterStore &&
            filterStore.length > 0 ? (
                filterStore.map((store) => (
                    <StoreListItem
                        key={store._id}
                        id={store._id}
                        storeIdInfo={store._id}
                        storeImage={store.storeImage}
                        storeName={store.storeName}
                        categories={store.type}
                    />
                ))
            ) : (
                <div className="store-empty">
                    <div className="store-empty__circle"></div> 
                    <button onClick={() => setClick('Todos')} className="store-empty__home">Ho sentim! No hi ha botigues d'aquest tipus</button>  
                </div>          
            )}
            <FooterMobile />
        </>
    );
}

export default StoreList;
