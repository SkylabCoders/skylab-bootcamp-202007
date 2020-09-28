import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createProduct, loadProducts } from '../../actions/productActions';
import { loadUserBySub } from '../../actions/userActions';
import StoreFormProducts from './StoreFormProducts';
import userStore from '../../stores/userStore';
import HeaderLogin from '../HeaderLogin';
import FooterMobile from '../FooterMobile';
import ProductsOwner from './ProductsOwner';
import loading from '../../assets/images/loading.gif'

const CreateProducts = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userMongo, setUserMongo] = useState();
    const [count, setCount] = useState(0);
    
    const [dataProduct, setDataProduct] = useState({
        storeId: '',
        productName: '',
        image: '',
        amount: '',
        sizes: [],
        description: '',
        price: '',
        off: '',
        currentPrice: '',
        status: true
    });
   
    useEffect(() => {           
        userStore.addChangeListener(onChange);
        
        if (isAuthenticated && !userMongo) {
            (async function asyncLoad() {
                await loadUserBySub(user.sub);
                setUserMongo(userStore.getUser());              
            })();
        }        
  
        return () => userStore.removeChangeListener(onChange);
    });
   
    function onChange() {
        setUserMongo(userStore.getUser()); 
        setDataProduct({
            storeId: '',
            productName: '',
            image: '',
            amount: '',
            sizes: [],
            description: '',
            price: '',
            off: '',
            currentPrice: '',
            status: true
        }) 
    }    

    const handleChange = ({ target }) => {
        setDataProduct({ ...dataProduct, storeId: userMongo.store[0], [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createProduct(dataProduct);
    };

    function toRender() {
        setCount(count + 1);
    }  
    
    if (isLoading) {
        return <img className="loading" src={loading} alt="loading..." />
    }
    
    return (
        <>
            <HeaderLogin />
            {isAuthenticated && (
                <section className="profile-contain">
                    <div className="profile-menu">
                        <div className="profile-menu__column">
                            <div className="profile-menu__user">
                                <img
                                    className="profile-menu__image"
                                    src={user.picture}
                                    alt={user.name || user.email}
                                />
                                <h3 className="profile-menu__text">
                                    {user.name}
                                </h3>
                            </div>

                            <Link
                                to="/auth/store"
                                className="profile-menu__btn"
                            >
                                La meva botiga
                            </Link>

                            <Link
                                to="/auth/products"
                                className="profile-menu__btn active"
                            >
                                Productes
                            </Link>
                        </div>
                    </div>

                    <div className="profile-settings">
                        <div className="profile__title">
                            <h3>Productes</h3>
                        </div>
                        <StoreFormProducts
                            dataProduct={dataProduct}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                    </div>
                    
                </section>
            )}
            <ProductsOwner />
            <FooterMobile />
        </>
    );
};

export default CreateProducts;
