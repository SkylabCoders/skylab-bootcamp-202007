import React, { useEffect, useState } from "react";
import { loadProducts } from "../actions/productActions";
import productStore from '../stores/productStore';
import ProductListItem from './ProductListItem';
import './productList.scss'
import './cart.scss'

function ProductList() {
    const [products, setProducts] = useState(productStore.getProducts());

    useEffect(() => {
        productStore.addChangeListener(onChange);

        if(products.length === 0) loadProducts();

        return () => productStore.removeChangeListener(onChange);
    }, [products.length]);


    function onChange() {
        setProducts(productStore.getProducts())
    }

    return (
        <>
        <section className="main_container">
            <div className="list-container">
                {products &&
                    products.map((product) => (
                        <ProductListItem  
                            key={product.id}  
                            product={product} 
                        />
                    ))
                }
            </div>
        </section>            
        </>
    )
}

export default ProductList;
