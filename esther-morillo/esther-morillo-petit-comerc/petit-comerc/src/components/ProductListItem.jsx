import React from 'react';
import { Link } from 'react-router-dom';
import './productList.scss';

const ProductListItem = ({
    param,
    id,
    image,
    productName,
    off,
    price,
    currentPrice
}) => {
    return (
        <>
            <section className="list-container">
                <div className="list-main">
                    <Link to="#" className="list-image" to={`/${param}/${id}`}>
                        <img
                            className="list-image__cover"
                            src={image}
                            alt={productName}
                        />
                    </Link>
                </div>
                <div className="list-components">
                    <h2 className="list-title">{productName}</h2>
                    <div className="list-offer">
                        <div className="list-offer__off">
                            <p className="list-offer__off-box">-{off}%</p>
                        </div>
                        <p className="list-offer__price">{price}€</p>
                    </div>
                    <div className="list-price">
                        {currentPrice}€<p className="list-vat">IVA inclòs</p>
                    </div>
                    <Link className="list-button__yellow" to={`/${param}/${id}`}>
                        veure producte
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ProductListItem;
