import React from 'react';
import { Link } from 'react-router-dom';
import './productsOwnerList.scss';

const ProductsOwnerListItem = ({
    id,
    productName,
    image, 
    currentPrice,
}) => {

    return (
        <>
            <section className="owner-container">
                <div className="owner-row">
                    <div className="owner-main">
                        <div to="#" className="owner-main__cover" to={`/${id}`}>
                            <img
                                className="owner-main__image"
                                src={image}
                                alt={productName}
                            />
                        </div>

                        <div className="owner-components">
                            <p className="owner-components__title">{productName}</p>
                                
                            <div className="owner-components__price">
                                {currentPrice}€
                            </div>
                        </div>

                        <div className="owner-button">
                            <Link className="owner-button__black" to={`/${id}`}>
                                eliminar
                            </Link>
                        </div>
                    </div>
                   
                    
                </div>
            </section>
        </>
    );
};

export default ProductsOwnerListItem;
