import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import loading from '../assets/images/loading.gif'
import { loadUserBySub, deleteProductCart } from '../actions/userActions';
import userStore from '../stores/userStore';
import HeaderLogin from './HeaderLogin';
import FooterMobile from './FooterMobile';
import CartList from './CartList';

function Cart() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    const [userMongo, setUserMongo] = useState(userStore.getUser());
    const [userCart, setUserCart] = useState();  

    if(!userCart) {
        loadUserBySub(user?.sub);
    }   

    useEffect(() => {
        userStore.addChangeListener(onChange);   
        
        if(userCart && userCart > 0) {
            loadUserBySub(user?.sub);
        }         
        
        return () => userStore.removeChangeListener(onChange);
    }, [user, userMongo, userCart?.length]);
    

    function onChange() {      
        setUserMongo(userStore.getUser());
        setUserCart(userMongo?.cart)
    }      
    
    function deleteCart(id, user) {
        deleteProductCart(id, user);
        setUserMongo(loadUserBySub(user?.sub));
        setUserCart(userMongo?.cart)    
    }

    if (isLoading) {
        return <img className="loading" src={loading} alt="loading..." />
    }

    return (
        <>
            <HeaderLogin userCartNumber={userCart?.length}/>              
            <section className="cart-section">
                <div className="cart-section__inside">   
                <p className="cart__title">Cistella</p>             

                {userMongo &&
                userCart?.length > 0 ? (
                    userCart.map((cart) => (
                        <CartList
                            key={cart._id}
                            id={cart._id}
                            user={userMongo?.sub}
                            image={cart.image}
                            name={cart.productName}
                            price={cart.price}
                            onDeleteToCart={deleteCart}
                        />
                    ))
                ) : (
                    <div className="cart-empty">
                        <div className="cart-empty__circle"></div>
                        <p className="cart-empty__text">No hi ha productes a la cistella</p>  
                        <Link to="/" className="cart-empty__home">Vols tornar?</Link>  
                    </div>
                )}
                    
                </div>
            </section>
            <FooterMobile />
        </>
    );
}

export default Cart;
