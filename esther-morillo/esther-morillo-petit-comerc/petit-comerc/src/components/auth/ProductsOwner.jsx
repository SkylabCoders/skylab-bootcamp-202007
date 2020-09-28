import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { loadUserBySub } from '../../actions/userActions';
import userStore from '../../stores/userStore';
import HeaderLogin from '../HeaderLogin';
import FooterMobile from '../FooterMobile';
import ProductsOwnerListItem from './ProductsOwnerListItem';

function ProductOwner() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userMongo, setUserMongo] = useState(userStore.getUser());
    const storeUser = userMongo?.store[0].products; 
      
    useEffect(() => {
        userStore.addChangeListener(onChange);

         if(isAuthenticated && !userMongo) {
            (async function asyncLoad() {
                await loadUserBySub(user.sub);
                setUserMongo(userStore.getUser());            
            })();
        }  
      
        return () => userStore.removeChangeListener(onChange);
    });

    function onChange() {
        setUserMongo(userStore.getUser());
    } 
    
    return (
        <>
            <HeaderLogin />   
            <div class="owner-text">
                <h3 class="owner-text__title">Els teus productes</h3>
                <p class="owner-text__paragraph">Com a màxim pots pujar 8 productes</p>
            </div> 
            
            <section className="owner-section">
                <div className="owner-section__inside">
                    
                {storeUser &&
                    storeUser.map((store) => (
                        <ProductsOwnerListItem
                            key={store._id}
                            id={store._id}
                            productName={store.productName}
                            image={store.image}
                            currentPrice={store.currentPrice}
                        />
                    ))} 

                </div>
            </section>
            <FooterMobile />
        </>
    );
}

export default ProductOwner;
