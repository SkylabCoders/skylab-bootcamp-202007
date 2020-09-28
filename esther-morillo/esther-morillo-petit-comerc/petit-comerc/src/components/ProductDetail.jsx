import React, { useEffect, useState } from 'react';
import { loadUserBySub } from '../actions/userActions';
import productStore from '../stores/productStore';
import userStore from '../stores/userStore';
import ProductDetailItem from './ProductDetailItem';
import HeaderLogin from './HeaderLogin';
import { loadProduct } from '../actions/productActions';
import { useAuth0 } from '@auth0/auth0-react';

function ProductDetail(props) {
    const urlStoreId = props.match.params.storeId;
    const urlProductId = props.match.params.productId;
    const [product, setProduct] = useState(productStore.getProduct());
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userMongo, setUserMongo] = useState();
    
    
    useEffect(() => {
        productStore.addChangeListener(onChange);
        loadProduct(urlStoreId, urlProductId);
        
        return () => productStore.removeChangeListener(onChange);
    }, [urlStoreId, urlProductId]);

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
        setProduct(productStore.getProduct());
        setUserMongo(userStore.getUser());
    }

    return (
        <>
            <HeaderLogin />
            {product && (
                <ProductDetailItem
                    product={urlProductId}
                    image={product.image}
                    name={product.productName}
                    off={product.off}
                    price={product.price}
                    currentPrice={product.currentPrice}
                    sizes={product.sizes}
                    description={product.description}
                />
            )}
        </>
    );
}

export default ProductDetail;
