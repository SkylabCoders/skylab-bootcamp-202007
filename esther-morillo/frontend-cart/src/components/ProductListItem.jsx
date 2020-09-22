import React from 'react';
import './productList.scss'

const ProductListItem = ({ id, productName, price, onSubmit }) => {

    return(
        <section className="list">
            <p className="list__title">{productName}</p>
            <p className="list__price">{price}<span>€</span></p>
            <button 
                className="list__button"  
                onClick={(event) => {
                    event.preventDefault();
                    onSubmit(id)} 
                }>
            </button>
        </section>
    )
}

export default ProductListItem;