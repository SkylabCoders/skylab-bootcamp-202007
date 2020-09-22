import React, { useEffect, useState } from "react";
import { loadProducts } from "../actions/productActions";
import productStore from '../stores/productStore';
import ProductListItem from './ProductListItem';
import Cart from './Cart';
import './productList.scss'
import './cart.scss'

function ProductList() {
    const [products, setProducts] = useState(productStore.getProducts());
    const [cart, setCart] = useState(productStore.getCart());
    const [price, setPrice] = useState();
    let add = 0;

    useEffect(() => {
        productStore.addChangeListener(onChange);

        if(products.length === 0) loadProducts();

        return () => productStore.removeChangeListener(onChange);
    }, [products.length]);


    function onChange() {
        setProducts(productStore.getProducts())
    }

    function onSubmit(id) {
        setCart(productStore.getProductById(id));
        setCart(productStore.getCart());
        setPrice(productStore.getPriceProducts());
    }

    

    return (
        <>
        <section className="main_container">
            <div className="list-container">
                {products &&
                    products.map((product) => (
                        <ProductListItem  
                            key={product.id}  
                            id={product.id}  
                            productName={product.productName}
                            price={product.price}
                            onSubmit={onSubmit}
                        />
                    ))
                }
            </div>

            <div className="cart-container">
                <p className="cart-title">Mi cesta: </p>
                {cart &&
                    cart.map((product) => (
                        <Cart  
                            key={product.id}  
                            id={product.id} 
                            image={product.image} 
                            productName={product.productName}
                            price={product.price}
                        />
                    ))
                }
                <div className="cart__total">
                    <p className="cart__total-title">Total <span>({cart.length} productos)</span></p>
                    <p className="cart__total-price"> 
                        {price && 
                            price.forEach((element) => {
                                add += element;
                            })
                    }{add.toFixed(2)}€</p>
                </div>
            </div>
        </section>            
        </>
    )
}

export default ProductList;