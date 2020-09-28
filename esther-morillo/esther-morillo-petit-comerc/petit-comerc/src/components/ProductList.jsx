import React, { useEffect, useState } from 'react';
import productStore from '../stores/productStore';
import { loadStores } from '../actions/storeActions';
import ProductListItem from './ProductListItem';
import HeaderStore from './HeaderStore';
import FooterMobile from './FooterMobile';

function ProductList(props) {
    const storeId = props.match.params.storeId;
    const [productStoreList, setProductStoreList] = useState([]);
 
    useEffect(() => {
        productStore.addChangeListener(onChange);

        if (productStoreList.length === 0) {
            loadStores();
            
        } else {
            setProductStoreList(productStore.getProductStoreById(storeId));
        }

        return () => productStore.removeChangeListener(onChange);
    }, !productStoreList);

    function onChange() {
        setProductStoreList(productStore.getProductStoreById(storeId));
    }

    return (
        <>
            <HeaderStore storeId={storeId}/>
            <div className="list-section">
                {productStoreList?.products &&
                    productStoreList.products.map((product) => (
                        <ProductListItem
                            param={props.match.params.storeId}
                            key={product._id}
                            id={product._id}
                            image={product.image}
                            categories={product.categories}
                            productName={product.productName}
                            off={product.off}
                            price={product.price}
                            currentPrice={product.currentPrice}
                            sizes={product.sizes}
                            description={product.description}
                        />
                    ))}
            </div>
            <FooterMobile />
        </>
    );
}

export default ProductList;
