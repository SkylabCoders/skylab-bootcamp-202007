import React, { useState } from 'react';
import { addToCart } from '../actions/productActions';
import './productList.scss'

const ProductListItem = ({ product }) => {
    const [check, setCheck] = useState(false);    

    return (
        <section className="list">
            <p data-testid="productName" className="list__title">{product.productName}</p>
            <p data-testid="price" className="list__price">{product.price}<span>€</span></p>
            <button 
                data-testid="button"
                className={check ? "list__button-grey" : "list__button"}  
                onClick={(event) => {
                    event.preventDefault();
                    addToCart(product);
                    setCheck(true);
                    }
                }>
            </button>
        </section>
    )
}

export default ProductListItem;